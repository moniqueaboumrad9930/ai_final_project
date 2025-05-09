const fairnessQuestions = [
    {
      question: "What is algorithmic bias?",
      options: [
        "A programming error in AI systems",
        "Systematic unfair discrimination in algorithmic decisions",
        "A deliberate feature designed into AI systems",
        "The tendency of AI to prefer certain programming languages"
      ],
      correctAnswer: "Systematic unfair discrimination in algorithmic decisions"
    },
   {
    question: "Which of the following is NOT a common source of bias in AI systems?",
    options: [
        "Biased training data",
        "Lack of diverse development teams",
        "Using too much computing power",
        "Historical inequities reflected in data",
    ],
    correctAnswer: "Using too much computing power"
   },
   {
    question: "What is 'fairness through unawarness'?",
    options: [
        "Removing protected attributes from the data",
        "Making AI systems completely autonomous",
        "Training AI on completley balanced datasets",
        "Ensuring AI developers are unaware of potential biases",
    ],
    correctAnswer: "Removing protected attributes from the data",
   },
   {
    question: "Why might 'fairness through unawareness' still lead to biased outcomes?",
    options: [
        "It makes the AI system too simple",
        "Proxy variables can still correlate with protected attributes",
        "It requires too much computational power",
       "It makes the AI system too complex",

    ], 
    correctAnswer: "Proxy variables can still correlate with protected attributes",



}, 
{
    question: " True or False: Demographic parity means that outcomes should be the same across all demographic groups regardless of qualifications.",
    options:[
        "True",
        "False",
    ],
    correctAnswer: "False",
    },
    {
        question: " Which fairness metric focuses on equal error rates across groups?",
        options: [
            "Demographic parity",
            "Individual fairness",
            "Equalized odds",
            "Counterfactual fairness",
        ], 
        correctAnswer: "Equalized odds",
    },
    {
        question: " A facial recognition system works better for some demographic groups than others. This is an example of:",
        options: [
            "Intentional discrimination",
            "Disparate performance",
            "Optimal decision-making",
            "Fairness through awareness",
        ],
        correctAnswer: "Disparate performance",
    },
    {question: "Which approach ensures similar individuals receive similar outcomes?",

    options:[
        "Individual fairness",
        "Group fairness",
        "Procedural fairness",
        "Distributive fairness",
    ],
    correctAnswer: "Individual fairness",
    }, 
    
  ];
  
  export default fairnessQuestions;
  
  