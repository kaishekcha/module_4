const question = document.getElementById("question");
const choices = Array.from( document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter =0;
let availableQuestions = {};

let questions = {
    {

        question: "inside which HTML element do we put the javascript",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "who is the first president of the United States?",
        choice1: "Donald Trump",
        choice2: "Benjamin Franklin",
        choice3: "George Washington",
        choice4: "Abraham Lincoln",
        answer: 3
    },
    {
        question: "what is the state bird of Minnesota?",
        choice1: "cardinal",
        choice2: "loon",
        choice3: "blue jay",
        choice4: "robin",
        answer: 2
    },
    {
        question: "what is the capital of Minnesota?",
        choice1: "Green Bay",
        choice2: "Duluth",
        choice3: "St.Paul",
        choice4: "Minneapolis",
        answer: 4
    },

const correct_bonus = 1;
const max_questions = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ... questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = ()  {
    questionCounter++;
    const questionIndex = Math.floor(math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
    });
};

startGame();








}