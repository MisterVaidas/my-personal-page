// Ask for the user's name
let userName = prompt("What is your name?");
// Display a personalized welcome message
alert(`Hello, ${userName}! Welcome to the About Me Guessing Game.`);

// Array of questions and answers
let questions = [
    //...previous questions...
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

    {
        question: "What is my age?",
        answer: "41",
    },
    {
        question: "Can you guess who is my favorite business person?",
        answers: ["Warren Buffet", "Jeff Bezos", "Ellon Musk", "Jack Ma", "Richard Branson"],
    },
];

// Loop through each question
questions.forEach((item, index) => {
    if (index < questions.length - 2) {
        // Previous logic for yes/no questions
        let answer = prompt(item.question).toLowerCase();
        if (answer === 'yes') answer = 'y';
        if (answer === 'no') answer = 'n';
        if (answer === item.answer) {
            alert("Correct! Well done.");
        } else {
            alert("Incorrect. The correct answer was " + (item.answer === 'y' ? 'yes' : 'no'));
        }
    } else if (index === questions.length - 2) {
        // Logic for numeric question
        let attempts = 4;
        let correct = false;
        while (attempts > 0) {
            let answer = prompt(item.question + `\nYou have ${attempts} attempts left.`);
            if (Number(answer) === Number(item.answer)) {
                alert("Correct! Well done.");
                correct = true;
                break;
            } else if (Number(answer) < Number(item.answer)) {
                alert("Too low. Try again.");
            } else if (Number(answer) > Number(item.answer)) {
                alert("Too high. Try again.");
            }
            attempts--;
        }
        if (!correct) {
            alert(`Sorry, you didn't guess the number. The correct answer was ${item.answer}.`);
        }
    } else {
        // Logic for multiple answers question
        let attempts = 6;
        let correct = false;
        while (attempts > 0 && !correct) {
            let answer = prompt(item.question + `\nYou have ${attempts} attempts left.`).toLowerCase();
            for(let i = 0; i < item.answers.length; i++) {
                if (answer.toLowerCase() === item.answers[i].toLowerCase()) {
                    alert("Correct! Well done!");
                    correct = true;
                    break;
                }
            }
            if (!correct) {
                alert("Sorry, that's incorrect. Try again.");
            }
            attempts--;
        }
        if (!correct) {
            alert(`Sorry, you didn't guess my favorite person. The correct answers were ${item.answers.join(", ")}.`);
        }
    }
});

// Display the user’s name back to them in the final message
alert(`Congratulations, ${userName}! You have answered all the questions!`);
