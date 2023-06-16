// Ask for the user's name
let userName = prompt("What is your name?");
// Display a personalized welcome message
alert(`Hello, ${userName}! Welcome to the About Me Guessing Game.`);

// Array of questions and answers
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

    // The new numeric question
    {
        question: "What is my age?",
        answer: "41",
    },
];

// Loop through each question
questions.forEach((item, index) => {
    // Check if the current question is not the last one
    if (index !== questions.length - 1) {
        // Ask the question and normalize the answer to lowercase
        let answer = prompt(item.question).toLowerCase();
        // Convert 'yes'/'no' to 'y'/'n'
        if (answer === 'yes') answer = 'y';
        if (answer === 'no') answer = 'n';
        // Check the answer and give feedback
        if (answer === item.answer) {
            alert("Correct! Well done.");
        } else {
            alert("Incorrect. The correct answer was " + (item.answer === 'y' ? 'yes' : 'no'));
        }
    } else {
        // For the last question, the user has four attempts
        let attempts = 4;
        let correct = false;
        while (attempts > 0) {
            // Ask the question, indicating how many attempts are left
            let answer = prompt(item.question + `\nYou have ${attempts} attempts left.`);
            // Check if the answer is correct
            if (Number(answer) === Number(item.answer)) {
                alert("Correct! Well done.");
                correct = true;
                break;
            } else if (Number(answer) < Number(item.answer)) {
                // If the guess is too low, inform the user
                alert("Too low. Try again.");
            } else if (Number(answer) > Number(item.answer)) {
                // If the guess is too high, inform the user
                alert("Too high. Try again.");
            }
            attempts--;
        }
        // If the user didn't guess the number, inform them of the correct answer
        if (!correct) {
            alert(`Sorry, you didn't guess the number. The correct answer was ${item.answer}.`);
        }
    }
});

// Display the user’s name back to them in the final message
alert(`Congratulations, ${userName}! You have answered all the questions!`);
