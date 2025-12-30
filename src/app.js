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

const cardHead = document.getElementById("cardHead");
const cardCenter = document.getElementById("cardCenter");
const cardFooter = document.getElementById("cardFooter");
const heightInput = document.getElementById("height");
const widthInput = document.getElementById("width");
const card = document.getElementById("CardGenerator");

const ORIGINAL_HEIGHT = "650px";
const ORIGINAL_WIDTH = "410px";

heightInput.addEventListener("input", () => {
    if (heightInput.value === "") {
        card.style.height = ORIGINAL_HEIGHT;
    } else {
        card.style.height = heightInput.value + "px";
    }
});

widthInput.addEventListener("input", () => {
    if (widthInput.value === "") {
        card.style.width = ORIGINAL_WIDTH;
    } else {
        card.style.width = widthInput.value + "px";
    }
});


function randomCard() {
  const randomNumber = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  console.log(`Tu carta es: ${randomNumber} de ${randomSuit}`);

  cardCenter.textContent = randomNumber;
  cardHead.textContent = randomSuit;
  cardFooter.textContent = randomSuit;

  if (randomSuit === "♦" || randomSuit === "♥") {
    cardHead.style.color = "red";
    cardFooter.style.color = "red";
    cardCenter.style.color = "red";
  } else {
    cardHead.style.color = "black";
    cardFooter.style.color = "black";
    cardCenter.style.color = "black";
  }
}

const buttonCharge = document.getElementById("charge");
buttonCharge.addEventListener("click", randomCard);

window.onload = randomCard;

setInterval(randomCard, 10000);