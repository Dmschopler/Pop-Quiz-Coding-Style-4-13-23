var secondsLeft = 10;
var timeEl = document.querySelector(".time");
var start = document.querySelector(".start-button")

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