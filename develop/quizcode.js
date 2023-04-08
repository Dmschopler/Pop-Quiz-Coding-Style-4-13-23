var secondsLeft = 10;
var timeEl = document.querySelector(".time");
var start = document.querySelector(".start-button")
var questions = document.querySelector(".question-text")

class questions {
    constructor(question, option1, option2, option3, option4){
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
    }
}

var quiz = [];

var question1 = newQuestion("Which of the following is a JavaScript Data type?", "Number", "String", "Boolean", "All of the above");

var question2 = newQuestion("How do you remove the last element from an array?", "Push", "Reverse", "Pop", "Length");

var question3 = newQuestion("How do you access all the same html elements in JavaScript?", "getElementById", "querySelector", "getElementsByClass", "querySelectorAll");

var question4 = newQuestion("What would be the value of 3+6+'9'?", "18", "99", "27", "81");

var question5 = newQuestion("Which of the following is a Looping Structure in JavaScript?", "Do-ForaWhile loops", "Fruity loops", "While loops", "Frosted loops");

quiz = [question1, question2, question3, question4, question5];





function showQuestion(event) {
    
}

start.addEventListener("click", function() {
    if ()
})

function setTime() {
    var timerTotal  = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time Left: " + secondsLeft;
        
        if (secondsLeft === 0) {
            clearInterval(timerTotal);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "Time's Up!";
}

setTime();