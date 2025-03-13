const express = require('express');
const fs = require('fs');
const xlsx = require('xlsx');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint to receive participant data
app.post('/submit-ratings', (req, res) => {
    const participantData = req.body;

    // Load the existing results.xlsx file
    const filePath = './results.xlsx';
    let workbook;
    if (fs.existsSync(filePath)) {
        workbook = xlsx.readFile(filePath);
    } else {
        workbook = xlsx.utils.book_new();
    }

    // Convert participant data to a worksheet
    const newData = [participantData];
    const newSheet = xlsx.utils.json_to_sheet(newData);

    // Append the new data to the existing sheet
    const sheetName = 'Ratings';
    if (workbook.Sheets[sheetName]) {
        const existingSheet = workbook.Sheets[sheetName];
        const range = xlsx.utils.decode_range(existingSheet['!ref']);
        const newRow = range.e.r + 1;
        xlsx.utils.sheet_add_json(existingSheet, newData, { origin: -1 });
    } else {
        xlsx.utils.book_append_sheet(workbook, newSheet, sheetName);
    }

    // Save the updated workbook
    xlsx.writeFile(workbook, filePath);

    // Push changes to Git
    exec('git add results.xlsx && git commit -m "Update results.xlsx with new participant data" && git push', (err, stdout, stderr) => {
        if (err) {
            console.error('Error pushing to Git:', stderr);
            return res.status(500).send('Error updating Git repository');
        }
        console.log('Git push successful:', stdout);
        res.status(200).send('Ratings submitted and Git repository updated');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});