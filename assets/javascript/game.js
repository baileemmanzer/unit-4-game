//Selects a random number b/w 19 and 120 at the start of each game 
var Random=Math.floor(Math.random()*101+19)
//Displays the random number to the randomnNumber in HTML
$('#randomNumber').text(Random);

var totalScore = 0;
var wins = 0;
var losses = 0;
