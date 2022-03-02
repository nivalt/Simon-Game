// check response 
// alert("hello");

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var level = 0;
var newGame = true;

$(document).on('keypress', function(){
    if (newGame){
        newGame = false;
        nextSequence();
    }
});

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickPattern.push(userChosenColor);
  
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickPattern.length-1);
  });
  
  

function nextSequence(){
    userClickPattern = [];
    $("h1").text("Level "+ level);
    level++;
    var randNum = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randNum];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    //console.log(gamePattern);
}

function playSound(name){
    var colorSound = new Audio("sounds/" + name + ".mp3");
    colorSound.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
        console.log("success");
    if (userClickPattern.length === gamePattern.length){
        setTimeout(function () {
            nextSequence();
        }, 1000);
      }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 400);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level=0;
    gamePattern = [];
    newGame = true;
}