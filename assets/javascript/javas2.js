var count = 10;
var score = 0;
var timer = $("#timer");
var intra = "";
var data = "";

var run = true;

intra = setInterval(function() {
    $("#choice").css("display", "Block");
    timer.text(" " + count);
    count--;

    if (run){
        $(".all").on("click", function(){
            clearInterval(intra);
            data = $(this).data("number");
            if(data == "a4"){
                run = false;
                score++;
                count = 3;
                presecond();
            } else {
                run = false;
                count = 3;
                presecond();
            }
        })
    }
    if(count === 0){
        clearInterval(intra);
        run = false;
        count = 3;
        presecond();
    }
}, 1000);

function presecond() {
    intra = setInterval( function() {
        timer.text(" " + count);
        count--;

        $("#question").text("The answer was 1AU")
        $("#four").css("background", "lightgreen");

        if (data == "a1"){ $("#one").css("background", "lightcoral"); }
        else if (data == "a2") { $("#two").css("background", "lightcoral"); }
        else if ( data == "a3" ) { $("#three").css("background", "lightcoral"); }

        if( count == 0 ){
            clearInterval(intra);
            count = 10;
            second();
        }
    }, 1000 )
}

function second() {
    $("#choice").css("display", "none");
    $("#choice2").css("display", "Block");

    intra = setInterval(function() {
        timer.text(" " + count);
        count--;
    
        $(".all2").on("click", function(){
            clearInterval(intra);
            data = $(this).data("number");
            if(data == "b1"){
                score++;
                count = 3;
                prethird();
            } else {
                count = 3;
                prethird();
            }
        })
        if(count === 0){
            clearInterval(intra);
            count = 3;
            prethird();
        }
    }, 1000);
}

function prethird() {
    intra = setInterval( function() {
        timer.text(" " + count);
        count--;

        $("#question").text("The answer was 186,000 Miles Per Second");
        $("#one2").css("background", "lightgreen");

        if (data == "b4"){ $("#four2").css("background", "lightcoral"); }
        else if (data == "b2") { $("#two2").css("background", "lightcoral"); }
        else if ( data == "b3" ) { $("#three2").css("background", "lightcoral"); }

        if( count == 0 ){
            clearInterval(intra);
            count = 10;
            third();
        }
    }, 1000 )
}

function third() {
    $("#choice2").css("display", "none");
    $("#choice3").css("display", "Block");

    intra = setInterval(function() {
        timer.text(" " + count);
        count--;
    
        $(".all3").on("click", function(){
            clearInterval(intra);
            data = $(this).data("number");
            if(data == "c3"){
                score++;
                count = 3;
                prefourth();
            } else {
                count = 3;
                prefourth();
            }
        })
        if(count === 0){
            clearInterval(intra);
            count = 3;
            prefourth();
        }
    }, 1000);
}

function prefourth() {
    intra = setInterval( function() {
        timer.text(" " + count);
        count--;

        $("#question").text("The answer was 186,000 Miles Per Second");
        $("#three3").css("background", "lightgreen");

        if (data == "c4"){ $("#four3").css("background", "lightcoral"); }
        else if (data == "c2") { $("#two3").css("background", "lightcoral"); }
        else if ( data == "c1" ) { $("#one3").css("background", "lightcoral"); }

        if( count == 0 ){
            clearInterval(intra);
            count = 10;
            fourth();
        }
    }, 1000 )
}

function fourth() {
    $("#choice3").css("display", "none");
    $("#choice4").css("display", "Block");

    intra = setInterval(function() {
        timer.text(" " + count);
        count--;
    
        $(".all4").on("click", function(){
            clearInterval(intra);
            data = $(this).data("number");
            if(data == "d1"){
                score++;
                count = 3;
                prefifth();
            } else {
                count = 3;
                prefifth();
            }
        })
        if(count === 0){
            clearInterval(intra);
            count = 3;
            prefifth();
        }
    }, 1000);
}

function prefifth() {
    intra = setInterval( function() {
        timer.text(" " + count);
        count--;

        $("#question").text("The answer was 186,000 Miles Per Second");
        $("#one4").css("background", "lightgreen");

        if (data == "d4"){ $("#four3").css("background", "lightcoral"); }
        else if (data == "d2") { $("#two3").css("background", "lightcoral"); }
        else if ( data == "d3" ) { $("#three4").css("background", "lightcoral"); }

        if( count == 0 ){
            clearInterval(intra);
            count = 10;
            // fourth();
        }
    }, 1000 )
}