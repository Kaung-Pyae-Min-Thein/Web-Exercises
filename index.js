let images = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

let random1 = Math.floor(Math.random()*6);
let random2 = Math.floor(Math.random()*6);
document.querySelector(".img1").setAttribute("src",images[random1]);
document.querySelector('.img2').setAttribute("src",images[random2]);
if (random1 > random2){
  document.querySelector("h1").textContent = "Player 1 Wins!";
}else if( random1 < random2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}else {
  document.querySelector("h1").textContent = "Draw"
}
