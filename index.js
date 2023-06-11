var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var a = document.getElementsByClassName("img1");
a[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var b = document.getElementsByClassName("img2");
b[0].setAttribute("src", "./images/dice" + randomNumber2 + ".png");
if (randomNumber1 > randomNumber2){
    document.querySelector("div h1").innerHTML = "Player 1 won ";
} else if (randomNumber1 === randomNumber2){
    document.querySelector("div h1").innerHTML = "Draw";
}else {
    document.querySelector("div h1").innerHTML = "Player 2 won ";
}