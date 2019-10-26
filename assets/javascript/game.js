//Selects a random number b/w 19 and 120 at the start of each game 
var Random=Math.floor(Math.random()*101+19)
//Displays the random number to the randomnNumber in HTML
$('#randomNumber').text(Random);

//Random numbers for the crystals b/w 1 and 12
var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)

//Variables for the score counts
var totalScore = 0;
var wins = 0;
var losses = 0;

$('#wins').text(wins);
$('#losses').text(losses);

function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log (Random)
    $ ('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    totalScore= 0;
    $('#totalScore').text(totalScore);
    } 

//Functions for win and lose
//Adds wins to the "total score"
//Alert user when they win!
function win() {
    alert ("YOU WIN!");
    wins++;
    $('#wins').text(wins);
    reset();
}

function lose() {
    alert ("YOU LOSE");
    losses++;
    $('#losses').text(losses);
    reset();
}

//If the users "total score" is equal to the randomNumber, they win
//If the users "total score" goes above the randomNumber, they lose
$('#crystal-1').on ('click', function(){
    totalScore = totalScore + num1;
    console.log("New totalScore= " + totalScore);
    $('#totalScore').text(totalScore); 

    if (totalScore === Random){
        win();
    }
    else if (totalScore > Random){
        lose();
    }   
})  

$('#crystal-2').on ('click', function(){
  totalScore = totalScore + num2;
  console.log("totalScore= " + totalScore);
  $('#totalScore').text(totalScore); 
    
    if (totalScore === Random){
        win();
    }
    else if (totalScore > Random){
        lose();
    } 
})  

$('#crystal-3').on ('click', function(){
  totalScore = totalScore + num3;
  console.log("totalScore= " + totalScore);
  $('#totalScore').text(totalScore);

    if (totalScore === Random){
        win();
    }
    else if (totalScore > Random){
        lose();
    } 
}) 

$('#crystal-4').on ('click', function(){
  totalScore = totalScore + num4;
  console.log("totalScore= " + totalScore);
  $('#totalScore').text(totalScore); 
    
    if (totalScore === Random){
        win();
    }
    else if (totalScore > Random){
        lose();
    }
});   