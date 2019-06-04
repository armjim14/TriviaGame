var count = 10;
var score = 0;
var timer = $("#timer");
var intra = "";
var data = "";

intra = setInterval(function() {
    $("#choice").css("display", "Block");
    timer.text(" " + count);
    count--;

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
    if(count === 0){
        clearInterval(intra);
        run = false;
        count = 3;
        presecond();
    }
}, 1000);

function presecond() {
    $(".all").off("click");
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
    $(".all2").off("click");
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
    $(".all3").off("click");
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
    $(".all4").off("click");
    intra = setInterval( function() {
        timer.text(" " + count);
        count--;

        $("#question").text("The answer was 186,000 Miles Per Second");
        $("#one4").css("background", "lightgreen");

        if (data == "d4"){ $("#four4").css("background", "lightcoral"); }
        else if (data == "d2") { $("#two4").css("background", "lightcoral"); }
        else if ( data == "d3" ) { $("#three4").css("background", "lightcoral"); }

        if( count == 0 ){
            clearInterval(intra);
            count = 10;
            fifth();
        }
    }, 1000 )
}

function fifth() {
    $("#choice4").css("display", "none");
    $("#choice5").css("display", "Block");

    intra = setInterval(function() {
        timer.text(" " + count);
        count--;
    
        $(".all5").on("click", function(){
            clearInterval(intra);
            data = $(this).data("number");
            if(data == "e1"){
                score++;
                count = 3;
                presixth();
            } else {
                count = 3;
                presixth();
            }
        })
        if(count === 0){
            clearInterval(intra);
            count = 3;
            presixth();
        }
    }, 1000);
}

function presixth() {
    $(".all5").off("click");
    intra = setInterval( function() {
        timer.text(" " + count);
        count--;

        $("#question").text("The answer was Venus");
        $("#one5").css("background", "lightgreen");

        if (data == "e4"){ $("#four5").css("background", "lightcoral"); }
        else if (data == "e2") { $("#two5").css("background", "lightcoral"); }
        else if ( data == "e3" ) { $("#three5").css("background", "lightcoral"); }

        if( count == 0 ){
            clearInterval(intra);
            count = 10;
            sixth();
        }
    }, 1000 )
}

function sixth() {
    $("#choice5").css("display", "none");
    $("#choice6").css("display", "Block");

    intra = setInterval(function() {
        timer.text(" " + count);
        count--;
    
        $(".all6").on("click", function(){
            clearInterval(intra);
            data = $(this).data("number");
            if(data == "f3"){
                score++;
                count = 3;
                preseven();
            } else {
                count = 3;
                preseven();
            }
        })
        if(count === 0){
            clearInterval(intra);
            count = 3;
            preseven();
        }
    }, 1000);
}

function preseven() {
    $(".all6").off("click");
    intra = setInterval( function() {
        timer.text(" " + count);
        count--;

        $("#question").text("The answer was 24,900");
        $("#three6").css("background", "lightgreen");

        if (data == "f4"){ $("#four6").css("background", "lightcoral"); }
        else if (data == "f2") { $("#two6").css("background", "lightcoral"); }
        else if ( data == "f1" ) { $("#one6").css("background", "lightcoral"); }

        if( count == 0 ){
            clearInterval(intra);
            count = 10;
            seven();
        }
    }, 1000 )
}

function seven() {
    $("#choice6").css("display", "none");
    $("#choice7").css("display", "Block");

    intra = setInterval(function() {
        timer.text(" " + count);
        count--;
    
        $(".all7").on("click", function(){
            clearInterval(intra);
            data = $(this).data("number");
            if(data == "g4"){
                score++;
                count = 3;
                preeight();
            } else {
                count = 3;
                preeight();
            }
        })
        if(count === 0){
            clearInterval(intra);
            count = 3;
            preeight();
        }
    }, 1000);
}

function preeight() {
    $(".all7").off("click");
    intra = setInterval( function() {
        timer.text(" " + count);
        count--;

        $("#question").text("The answer 101,000 Years");
        $("#four7").css("background", "lightgreen");

        if (data == "g3"){ $("#three7").css("background", "lightcoral"); }
        else if (data == "g2") { $("#two7").css("background", "lightcoral"); }
        else if ( data == "g1" ) { $("#one7").css("background", "lightcoral"); }

        if( count == 0 ){
            clearInterval(intra);
            count = 10;
            // seven();
        }
    }, 1000 )
}