
document.addEventListener("DOMContentLoaded", function() {
    
  });
  guessNumber();

  

function runQuiz() {

    const quiz = [
      {
        title: "About Me Quiz",
        description: "This quiz will test your knowledge about me.",
        question: "1. Can you guess my age?",
        choices: ["1. 20 to 30", "2. 30 to 40", "3. 40 to 50", "4. 100 to 500"],
        answer: 2
      },
      {
        title: "About Me Quiz",
        description: "This quiz will test your knowledge about me.",
        question: "2. Where I am from?",
        choices: ["1. Antarctic", "2. Russia", "3. South Africa", "4. Lithuania"],
        answer: 3
      },
      {
        title: "About Me Quiz",
        description: "This quiz will test your knowledge about me.",
        question: "3. For how long I am living in UK?",
        choices: ["1. 1 year", "2. 3 years", "3. 5 years", "4. over 10 years"],
        answer: 3
      },
      {
        title: "About Me Quiz",
        description: "This quiz will test your knowledge about me.",
        question: "4. Who is my favorite business man?",
        choices: ["1. Elon Musk", "2. Bill Gates", "3. Joe Biden", "4. Jeff Bezos"],
        answer: 0
      },
      {
        title: "About Me Quiz",
        description: "This quiz will test your knowledge about me.",
        question: "5. What is my lucky number?",
        choices: ["1. 10", "2. 7", "3. 0.2", "4. 33"],
        answer: 1
      },
    ];
     
 }
 function guessNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    //alert(randomNumber);
   // console.log(randomNumber);

   for (let x = 5; x >= 0; x--) {
    let guesses = x;
  
    let guess = prompt("Guess a number between 1 and 100! You have 10 guesses and you have " + guesses + " guesses left!");
  
    guess = parseInt(guess);
  
    if (guess === randomNumber) {
      // console.log("You win");
      alert("You win");
      break;
    } else if (guess < randomNumber) {
      // console.log("to low");
      alert("to low");
    } else if (guess > randomNumber) {
      // console.log("to high");
      alert("to high");
    }
  
    if (x === 1) {
      alert("The correct number was " + randomNumber);
      break;
    }
  }
     
    
    
  
      
    let score = 0;
    
   
        
        for (let i = 0; i < quiz.length; i++) {
          const question = quiz[i].question;
          alert(question);
    
          for (let j = 0; j < quiz[i].choices.length; j++) {
            alert(quiz[i].choices[j]);
          }
    
          let userAnswer = prompt("What is your answer?");

          let userAnswerNumber = parseInt(userAnswer) - 1;
          console.log(userAnswerNumber);
          if (userAnswerNumber === quiz[i].answer) {
            score++;
          } else {
            alert("Incorrect!");
          }
        }

        window.onload = function() {
          alert("Thank you for taking the quiz! Click OK to enter my site!");
        } 

       
        alert("Your total score is: " + score);
      };
    
    
