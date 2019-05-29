var timer = document.getElementById("timer");
var question = document.getElementById("question");
var intra = "";
var count = 10;

intra = setInterval(function() {
    timer.innerText = " " + count;
    count--;
    question.textContent = "What is my name?";
    if ( count == 0 ){
        clearInterval(intra);
    }

}, 1000)