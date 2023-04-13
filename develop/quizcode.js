var timerCount;
var timer;
var timeElement = document.querySelector(".timer-count");
var highScores = document.querySelector(".high-score");
var startButton = document.querySelector("#start-button");
var questionText = document.querySelector("#question-text");
var questionOptions = document.querySelector("#question-options");
var opening = document.querySelector(".opening");
questionOptions.style.display = "none";
ending.style.display = "none";
var answer1 = document.querySelector("#option1");
var answer2 = document.querySelector("#option2");
var answer3 = document.querySelector("#option3");
var answer4 = document.querySelector("#option4");
var answers = document.querySelectorAll(".question-option");
var score = 0;
document.getElementById("score").textContent =
  localStorage.getItem("highScore");

class Question {
  constructor(question, option1, option2, option3, option4, correctAnswer) {
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.correctAnswer = correctAnswer;
  }
};

var quiz = [];

var question1 = new Question(
  "Which of the following is a JavaScript Data type?",
  "Number",
  "String",
  "Boolean",
  "All of the above",
  "All of the above"
);

var question2 = new Question(
  "How do you remove the last element from an array?",
  "Push",
  "Reverse",
  "Pop",
  "Length",
  "Pop"
);

var question3 = new Question(
  "How do you access all the same html elements in JavaScript?",
  "getElementById",
  "querySelector",
  "getElementsByClass",
  "querySelectorAll",
  "querySelectorAll"
);

var question4 = new Question(
  "What would be the value of 3+6+'9'?",
  "18",
  "99",
  "27",
  "81",
  "99"
);

var question5 = new Question(
  "Which of the following is a Looping Structure in JavaScript?",
  "Do-ForaWhile loops",
  "Fruity loops",
  "While loops",
  "Frosted loops",
  "While loops"
);

quiz = [question1, question2, question3, question4, question5];
var currentQuestionId;

function startQuiz() {
  currentQuestionId = 0;
  console.log(quiz[currentQuestionId]);
  timerCount = 60;
  startTimer();
  updateQuestion();
  opening.style.display = "none";
  ending.style.display = "none";
  questionOptions.style.display = "block";
};

function startTimer() {
  timer = setInterval(updateTimer, 1000);
};

function updateTimer() {
  timerCount--;
  timeElement.textContent = "Time Left: " + timerCount;

  if (timerCount <= 0) {
    sendMessage();
    clearInterval(timer);
  }
};

function updateQuestion() {
  questionText.innerHTML = quiz[currentQuestionId].question;
  option1.innerHTML = quiz[currentQuestionId].option1;
  option2.innerHTML = quiz[currentQuestionId].option2;
  option3.innerHTML = quiz[currentQuestionId].option3;
  option4.innerHTML = quiz[currentQuestionId].option4;
};

function sendMessage() {
  timeElement.textContent = "Time's Up!";
  questionOptions.style.display = "none";
  ending.style.display = "flex";
};

function endGame() {
  if (timerCount > localStorage.getItem("highScore")) {
    localStorage.setItem("highScore", timerCount);
  }
  document.getElementById("score").textContent =
    localStorage.getItem("highScore");
  timerCount = 0;
  questionOptions.style.display = "none";
  ending.style.display = "flex";
};

function checkAnswers(selectedAnswer) {
  console.log(selectedAnswer);
  if (selectedAnswer === quiz[currentQuestionId].correctAnswer) {
    console.log("correct");
  } else {
    console.log("incorrect");
    timerCount -= 10;
  }
};

startButton.addEventListener("click", startQuiz);
replay.addEventListener("click", startQuiz);

for (var i = 0; i < answers.length; i++) {
  answers[i].addEventListener("click", function () {
    var buttonText = this.textContent;
    checkAnswers(buttonText);
    currentQuestionId++;
    if (currentQuestionId > quiz.length) {
    }
    if (currentQuestionId < 5) {
      updateQuestion();
    } else {
      endGame();
    }
  });
}
