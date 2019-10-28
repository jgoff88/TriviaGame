var countdown = 30;
var userChoice = "";
var correctChoice = true;
var amountCorrect = 0;
var amountIncorrect = 0;
var countdown;
$(document).ready(function(){
    setInterval(function timer (){
        if (countdown > 0) {
            countdown --;
            $("#timer").text(countdown);
        } else {
            alert("Time is up!");
            var card = $(".card");
            var displayCorrect = "Correct amount: " + amountCorrect;
            var displayIncorrect = "Incorrect amount: " + amountIncorrect;
            card.append("<div><h3>" + displayCorrect + "</h3></div>");
            card.append("<div><h3>" + displayIncorrect + "</h3></div>");
            stop();
        }
    }, 1000)
    function stop() {
        clearInterval(countdown);
    }
    
    $("#button").on("click", function() {
        for(var i = 1; i <= 45; i++) {
            var radios = document.getElementsByName("question" + i);
            for(var j = 0; j < radios.length; j++) {
                var radio = radios[j];
                if(radio.value === "correct" && radio.checked) {
                    amountCorrect++;
                
                } else if (radio.value === "wrong" && radio.checked) {
                    amountIncorrect++;
                }
            }
        }
        var card = $(".card");
        var displayCorrect = "Correct amount: " + amountCorrect;
        var displayIncorrect = "Incorrect amount: " + amountIncorrect;
        //console.log("YOU GOT " + amountCorrect + " CORRECT!")
        //console.log("YOU GOT " + amountIncorrect + " CORRECT!")
        card.append("<div><h3>" + displayCorrect + "</h3></div>");
        card.append("<div><h3>" + displayIncorrect + "</h3></div>");
    });

});