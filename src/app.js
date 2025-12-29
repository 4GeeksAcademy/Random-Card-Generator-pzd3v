import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["♦", "♥", "♠", "♣"]; // Diamantes, Corazones, Picas, Tréboles 🎨
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

function randomCard() {
  const randomNumber = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  console.log(`Tu carta es: ${randomNumber} de ${randomSuit}`);
}

/* window.onload = function () {
  //write your code here
randomCard()
  
}; */

const buttonCharge = document.getElementById("charge")
buttonCharge.addEventListener("click",randomCard)


