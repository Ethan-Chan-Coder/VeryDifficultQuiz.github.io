const quizdata = [
    //the database
    {
        //Define a dictionary type data with key value pair
        question: "How many japanese hiragana are there?",
        options: ["1", "68", "46", "49", "IDK"],
        answer: "46"
    },

    {
        //Define a dictionary type data with key value pair
        question: "What is the definition of pneumonoultramicroscopicsilicovolcanosis?",
        options: ["a fungus", "a occasion in special conditions where the body ignites itself and burns itself to death", "a lung disease caused by inhaling very fine ash and sand dust.", "100 at the power of 1000010, the eleventh perfect number", "IDK"],
        answer: "a lung disease caused by inhaling very fine ash and sand dust."
    },

    {
        //Define a dictionary type data with key value pair
        question: "What is a perfect number?",
        options: ["a number with a decimal which can be converted into a improper fraction", "a number which can be divided by 2, 4, 6, and 8", "another name for a prime number squared", "a positive integer that is equal to the sum of its positive divisors, excluding the number itself", "IDK"],
        answer: "a positive integer that is equal to the sum of its positive divisors, excluding the number itself"
    },

    {
        //Define a dictionary type data with key value pair
        question: "How many centimeters make up a yard?",
        options: ["30.39", "68.87", "91.44", "82.26", "IDK"],
        answer: "91.44"
    },

    {
        //Define a dictionary type data with key value pair
        question: "How many Torrs make up a Pound per square inch? (pressure)",
        options: ["51.7149", "68.3589", "63.7451", "49.336", "IDK"],
        answer: "51.7149"
    },

];

const questionElement = document.getElementById("question");
const startButton = document.getElementById("start-btn");
const resultElement = document.getElementById("result");
const timerElement = document.getElementById("timer");
const timerText = document.getElementById("countdown");
const progressbar = document.getElementById("progress-bar");
const progressBarContainer = document.getElementById("progress-bar-container");
const optionsElement = document.getElementById("option-container");

progressbar.style.width = "0%";

let timer = 0;
let currentQuestion = 0;
let score = 0;


startButton.addEventListener('click', startQuiz);

function startQuiz()
{
    startButton.style.display = 'none';
    progressBarContainer.style.display = 'block';
    resultElement.textContent = `You scored ${score} points`;
    loadQuestion()
}


function loadQuestion()
{
    // reset the timer
    clearInterval(timer);

    if(currentQuestion < quizdata.length)
    {
        // update the progress bar
        progressbar.style.width = `${((currentQuestion + 1) / quizdata.length) * 100}%`;

        const currentQuizData = quizdata[currentQuestion];
        questionElement.textContent = currentQuizData.question;

        // Set initial countdown value
        timerText.textContent = 10;

        // clear previous options
        optionsElement.innerHTML = "";

        //Clone a button for each options in a question
        currentQuizData.options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-btn");
            optionsElement.appendChild(button);

            button.addEventListener("click", () => {
                checkAnswer(option);
            });
        });

        //start the countdown for the current question
        timer = setInterval(() => {
            timerText.textContent = parseInt(timerText.textContent) - 1;
            if(parseInt(timerText.textContent) === 0)
            {
                //reset the timer
                clearInterval(timer);

                currentQuestion = currentQuestion + 1;

                loadQuestion();
            }
        }, 1000);
    } else {
        showResult();
    }
}



function checkAnswer(option)
{
    const currentQuizData = quizdata[currentQuestion];

    if(option === currentQuizData.answer)
    {
        score++;
    }
    
    resultElement.textContent = `You scored ${score} points`;

    currentQuestion++;
    loadQuestion();

}

function showResult()
{
    clearInterval(timer);
    timerElement.style.display = "none"; // hide the timer
    progressBarContainer.style.display = "none";
}














//050309000000000100000000420000000000000000047011010205
