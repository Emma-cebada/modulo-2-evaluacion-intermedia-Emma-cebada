"use strict";

const numberTest = document.querySelector(".js-numberTest");
const button = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");
const tries = document.querySelector(".js-tries");

//Para que se produzca el número aleatorio.
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const getRandom = getRandomNumber(100);
console.log(getRandom);

function toClick() {
  let inputValue = parseInt(numberTest.value);
  if (inputValue < getRandom) {
    clue.innerHTML = "Demasiado bajo.";
  } else if (inputValue > getRandom) {
    clue.innerHTML = "Demasiado alto.";
  } else if (inputValue === getRandom) {
    clue.innerHTML = "Has ganado campeona!!!";
  } else if (inputValue > 100) {
    clue.innerHTML = "El número debe estar entre 1 y 100.";
  } else if (inputValue < 1) {
    clue.innerHTML = "El número debe estar entre 1 y 100.";
  }
  manyTimes();
  tries.innerHTML += `Número de intentos: ${manyTimes}`;
}

//Para que recoja el número que introduce la usuaria.

let manyclicks = 0;
function manyTimes() {
  manyclicks++;
  return manyclicks;
}

button.addEventListener("click", toClick);