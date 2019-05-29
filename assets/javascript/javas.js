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
var score = 0;

intra = setInterval(function() {
    timer.innerText = " " + count;
    count--;
    one.textContent = "1"
    two.textContent = "5"
    three.textContent = "9"
    four.textContent = "2"
    question.textContent = "What is 1 + 1?";

    for (var i = 0; i < all.length; i++) {
        all[i].addEventListener("click", function() {
            data = this.dataset.number;
            if (data == "1" || data == "2" || data == "3"){
                clearInterval(intra);
                count = 7;
                wrongone();
            } else if ( data == "4") {
                score++;
                clearInterval(intra);
                count = 7;
                rightone();
            }
        })
    }
    if ( count == -1 ){
        clearInterval(intra);
        count = 7;
        wrongone();
    }
}, 1000)

function rightone() {
    alert("RIGjt!!");
    second();
}

function wrongone() {
    intra = setInterval(function() {
        four.style.background = "lightgreen";
        question.textContent = "The Answer was 2";
        timer.innerText = " " + count;
        count --;

        if (data == "1"){
            one.style.background = "lightcoral";
        } else if (data == "2"){
            two.style.background = "lightcoral";
        } else if (data == "3"){
            three.style.background = "lightcoral";
        }

        if (count == 0){
            clearInterval(intra);
            count = 10;
            second();
        }
    }, 1000);
}


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
