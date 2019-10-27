var countdown = 30;
var newQuestion = "";
var correctChoice = true;
var right = "That is Correct!"
var wrong = "That is Inccorrect!"
$(document).ready(function(){
    setInterval(function timer (){
        if (countdown > 0) {
            countdown --;
            $("#timer").text(countdown);
        } else {
            //alert("Time is up!");
            clearInterval(countdown)
        }
    }, 1000);
    $(".custom-control custom-radio custom-control-inline").on("click", function() {
        var choice = $(this).attr("answer1"); 
        console.log(choice);
        
    });
    $("btn btn-primary").on("click", function() {
        if (correctChoice) {
            $(".card").text(right);
        } else {
            $(".card").text(wrong);
        }
    });
});