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

var run = true;
var run2 = false;
var run3 = false;
var run4 = false;

intra = setInterval(function() {
    timer.innerText = " " + count;
    count--;
    one.textContent = "1";
    two.textContent = "5";
    three.textContent = "9";
    four.textContent = "2";
    question.textContent = "What is 1 + 1?";

    if (run == true){
        for (var i = 0; i < all.length; i++) {
            all[i].addEventListener("click", function() {
                    data = this.dataset.number;
                    if (data == "1" || data == "2" || data == "3"){
                        run = false;
                        clearInterval(intra);
                        count = 3;
                        presecond();
                    } else if ( data == "4") {
                        score++;
                        run = false;
                        clearInterval(intra);
                        count = 3;
                        presecond();
                    }
                })
            }
    }
    if ( count == -1 ){
        clearInterval(intra);
        run = false;
        count = 3;
        presecond();
    }
}, 1000)

function presecond() {
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
            run2 = true;
            second();
        }
    }, 1000);
}

function second() {
    intra = setInterval(function() {
        for ( var i = 0; i < all.length; i++ ){
            all[i].style.background = "lightgray";
        }
        timer.innerText = " " + count;
        count--;
        one.textContent = "10";
        two.textContent = "8";
        three.textContent = "12";
        four.textContent = "11";
        question.textContent = "5 + 5 ?";

        if (run2 == true){
        for (var i = 0; i < all.length; i++) {
            all[i].addEventListener("click", function() {
                console.log(data);
                    data = this.dataset.number;
                    if (data == "4" || data == "2" || data == "3"){
                        run2 = false;
                        run3 = true;
                        clearInterval(intra);
                        count = 3;
                        prethird();
                    } else if ( data == "1") {
                        score++;
                        run2 = false;
                        run3 = true;
                        clearInterval(intra);
                        count = 3;
                        prethird();
                    }
                })
            }
        }

        if (count == -1) {
            clearInterval(intra);
            run2 = false;
            run3 = true;
            count = 3;
            prethird();
        }
    }, 1000)
}

function prethird() {
    intra = setInterval(function() {
        one.style.background = "lightgreen";
        question.textContent = "The Answer was 10";
        timer.innerText = " " + count;
        count --;

        if (data == "4"){
            four.style.background = "lightcoral";
        } else if (data == "2"){
            two.style.background = "lightcoral";
        } else if (data == "3"){
            three.style.background = "lightcoral";
        }

        if (count == 0){
            clearInterval(intra);
            count = 10;
            third();
        }
    }, 1000);
}

function third() {
    intra = setInterval(function() {
        for ( var i = 0; i < all.length; i++ ){
            all[i].style.background = "lightgray";
        }
        timer.innerText = " " + count;
        count--;
        one.textContent = "8";
        two.textContent = "2";
        three.textContent = "4";
        four.textContent = "6";
        question.textContent = "8 - 4"

        for (var i = 0; i < all.length; i++) {
            all[i].addEventListener("click", function() {
                if (run3 == true){
                    data = this.dataset.number;
                    if (data == "4" || data == "2" || data == "1"){
                        run3 = false;
                        run4 = true;
                        clearInterval(intra);
                        count = 3;
                        prefourth();
                    } else if ( data == "3") {
                        score++;
                        run3 = false;
                        run4 = true;
                        clearInterval(intra);
                        count = 3;
                        prefourth();
                    }
                }
            })
        }

        if (count == -1) {
            clearInterval(intra);
            run3 = false;
            run4 = true;
            count = 3;
            prefourth();
        }
    }, 1000)
}

function prefourth() {
    intra = setInterval(function() {
        three.style.background = "lightgreen";
        question.textContent = "The Answer was 4";
        timer.innerText = " " + count;
        count --;

        if (data == "4"){
            four.style.background = "lightcoral";
        } else if (data == "2"){
            two.style.background = "lightcoral";
        } else if (data == "1"){
            one.style.background = "lightcoral";
        }

        if (count == 0){
            clearInterval(intra);
            count = 10;
            fourth();
        }
    }, 1000);
}

function fourth() {
    intra = setInterval(function() {
        for ( var i = 0; i < all.length; i++ ){
            all[i].style.background = "lightgray";
        }
        timer.innerText = " " + count;
        count--;
        one.textContent = "12";
        two.textContent = "10";
        three.textContent = "11";
        four.textContent = "13";
        question.textContent = "2 * 6"

        for (var i = 0; i < all.length; i++) {
            all[i].addEventListener("click", function() {
                if (run4 == true){
                    data = this.dataset.number;
                    if (data == "4" || data == "2" || data == "3"){
                        run4 = false;
                        clearInterval(intra);
                        count = 3;
                        prefifth();
                    } else if ( data == "1") {
                        score++;
                        run4 = false;
                        clearInterval(intra);
                        count = 3;
                        prefifth();
                    }
                }
            })
        }

        if (count == -1) {
            clearInterval(intra);
            run4 = false;
            count = 3;
            prefifth();
        }
    }, 1000)
}

function prefifth() {
    intra = setInterval(function() {
        one.style.background = "lightgreen";
        question.textContent = "The Answer was 12";
        timer.innerText = " " + count;
        count --;

        if (data == "4"){
            four.style.background = "lightcoral";
        } else if (data == "2"){
            two.style.background = "lightcoral";
        } else if (data == "3"){
            three.style.background = "lightcoral";
        }

        if (count == 0){
            clearInterval(intra);
            count = 10;
            fifth();
        }
    }, 1000);
}

function fifth(){
    alert("no");
}