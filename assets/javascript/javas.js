var timer = document.getElementById("timer");
var question = document.getElementById("question");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var all = document.querySelectorAll(".all");

var data = "";
var intra = "";
var count = 10;

intra = setInterval(function() {
    timer.innerText = " " + count;
    count--;
    one.textContent = "no"
    two.textContent = "yes"
    three.textContent = "maybe"
    four.textContent = "game"
    question.textContent = "What is my name?";

    for (var i = 0; i < all.length; i++) {
        all[i].addEventListener("click", function() {
            data = this.dataset.number;
            if (data == "1" || data == "2" || data == "3"){
                clearInterval(intra);
                alert("wrong")
            } else if ( data == "4") {
                clearInterval(intra);
                alert("right")
            }
        })
    }
    if ( count == -1 ){
        clearInterval(intra);
        count = 10;
        second();
    }
}, 1000)

function second() {
    intra = setInterval(function() {
        timer.innerText = " " + count;
        count--;
        question.textContent = "Did it work?"
        if (count == -1) {
            clearInterval(intra);
            third();
        }
    }, 1000)
}

function third() {
    alert("ohhhh");
}
