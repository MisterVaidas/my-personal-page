let questions = [
    {
        question: "Am I a cat person? (y/n)",
        answer: "y",
    },
    {
        question: "Do I like coffee? (y/n)",
        answer: "y",
    },
    {
        question: "Have I ever visited Japan? (y/n)",
        answer: "n",
    },
    {
        question: "Do I play the piano? (y/n)",
        answer: "n",
    },
    {
        question: "Am I a morning person? (y/n)",
        answer: "y",
    },
];

questions.forEach((item, index) => {
    let answer = prompt(item.question).toLowerCase();
    // convert yes/no to y/n
    if (answer === 'yes') answer = 'y';
    if (answer === 'no') answer = 'n';

    if (answer === item.answer) {
        //console.log("Correct! Well done.");
        alert("Correct! Well done.");
    } else {
        //console.log("Incorrect. The correct answer was " + item.answer);
        alert("Incorrect. The correct answer was " + (item.answer === 'y' ? 'yes' : 'no'));
    }
});

alert("Congratulations, you have answered all the questions!");
