// check response 
// alert("hello");

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];


$("button").click(function() {
    var userChosenColor = $(this).attr("id");
        console.log(userChosenColor);
    userClickPattern.push(userChosenColor);
        console.log(userClickPattern);
    playSound(userChosenColor);
});

function nextSequence(){
    var randNum = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randNum];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    console.log(gamePattern);
}

function playSound(name){
    var colorSound = new Audio("sounds/" + name + ".mp3");
    colorSound.play();
}