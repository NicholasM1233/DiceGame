

var randomFactor = Math.random();
var randomNumber1 = Math.floor(randomFactor * 6 + 1);

var randomDiceImage = "dice" + randomNumber1 +".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomFactor2 = Math.random();
var randomNumber2 = Math.floor(randomFactor2 * 6 + 1);
var randomDiceImage2 = "dice" + randomNumber2 +".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2)

{
  document.querySelector("h1").textContent = "Player 1 Wins!!";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").textContent = "Player 2 Wins!!";
}
else if(randomNumber1 == randomNumber2)
{
  document.querySelector("h1").textContent = "Tie!";
}
