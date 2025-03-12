// This file contains all questions and AI responses
// Save this as "questions-data.js" in the same directory as your HTML file

const questionsAndResponsesData = [
    {
        id: "Q1",
        type: "Category 1",
        question: "I am a defense attorney in a high-profile murder trial. A witness has come forward with evidence that could pardon my client, but there's a problem—the witness has a criminal record and has given inconsistent statements in the past. If I present their testimony, the prosecution will likely attack their credibility, and if their background is exposed, it could hurt my case more than help it. However, if I withhold this testimony, I might be ignoring crucial evidence that could prove my client's innocence. Should I (1) present the witness despite the risks and fight to establish their credibility, or (2) avoid using their testimony and rely on other defense strategies, even if it weakens my case?",
        aiResponse: "The AI analysis reports a 81% chance of success in improving the client's case by presenting the witness, despite the credibility challenges. A defense strategy built around their testimony, combined with corroborating evidence, could shift the jury's perspective and undermine the prosecution's case. Cross-examination risks exist, but the potential for exoneration outweighs them. Jurors may be persuaded by the testimony, especially if inconsistencies can be explained and their account aligns with other facts. Presenting the witness is the best choice."
    },
    {
        id: "Q2",
        type: "Category 2",
        question: "I am a neurosurgeon. A patient in a coma has suffered a severe brain injury and has almost no chance of full recovery. Their family is divided—some want to continue life support, hoping for a miracle, while others believe it's time to withdraw care and let them pass peacefully. My decision will have significant emotional and ethical consequences. Should I (1) continue life support based on the family's hope, even if the patient is unlikely to recover, or (2) recommend withdrawing care, prioritizing medical judgment over emotional considerations?",
        aiResponse: "The AI tool recommends continuing life support based on the family's hope. While the medical prognosis is grim, withdrawing care is an irreversible decision. Giving the family time to process and come to a consensus respects their emotional needs. Additionally, rare cases of unexpected recovery exist, and maintaining life support for a limited period allows for further evaluation before making a final decision."
    },
    {
        id: "Q3",
        type: "Category 3",
        question: "I am a high school teacher. I have noticed that my students often ask for extra time on assignments due to personal issues or stress. I want to ensure that my evaluation process is fair to those who submit their work on time but I also want to support the students who are struggling. Should I (1) allow deadline extensions on a case-by-case basis even though it may influence others to procrastinate, or (2) enforce strict deadlines to maintain fairness and encourage time-management?",
        aiResponse: "Educational research suggests that deadline flexibility can reduce stress and improve learning outcomes without significantly impacting overall performance. Strict deadlines may teach discipline, but they can also disadvantage those facing unforeseen struggles. Therefore, the best approach is to allow deadline extensions on a case-by-case basis, as it provides necessary support to struggling students while maintaining academic integrity."
    }
];

// Make sure this variable is globally available
window.questionsAndResponsesData = questionsAndResponsesData;