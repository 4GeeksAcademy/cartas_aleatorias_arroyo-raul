let numsArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let simbolosArray = ["♦", "♥", "♠", "♣"];

function createElements() {
  let myDiv = document.createElement("div");
  myDiv.classList.add("carta");
  document.body.appendChild(myDiv);

  let symbol = document.createElement("p");
  symbol.id = "symbol";
  let random = Math.floor(Math.random() * simbolosArray.length);
  symbol.innerHTML = simbolosArray[random];
  myDiv.appendChild(symbol);

  let number = document.createElement("p");
  number.id = "number";
  let randomNumber = Math.floor(Math.random() * numsArray.length);
  number.innerHTML = numsArray[randomNumber];
  number.classList.add("numero");
  myDiv.appendChild(number);

  let symbolInvert = document.createElement("p");
  symbolInvert.id = "symbolInvert";
  symbolInvert.innerHTML = simbolosArray[random];

  if (random === 0 || random === 1) {
    symbolInvert.classList.add("rojo");
    symbol.classList.add("rojo");
  } else {
    symbolInvert.classList.add("negro");
    symbol.classList.add("negro");
  }

  symbolInvert.classList.add("invertido");
  myDiv.appendChild(symbolInvert);

  let cronometroElem = document.createElement("h1");
  cronometroElem.innerHTML = `ACTUALIZAR CARTA EN:`;
  document.body.insertBefore(cronometroElem, document.body.childNodes[0]);
  //list.insertBefore(newItem, list.childNodes[0])
}

function updateElements() {
  let symbol = document.querySelector("#symbol");
  let symbolInvert = document.querySelector("#symbolInvert");
  let number = document.querySelector("#number");

  let random = Math.floor(Math.random() * simbolosArray.length);
  let randomNumber = Math.floor(Math.random() * numsArray.length);

  symbol.innerHTML = simbolosArray[random];
  symbolInvert.innerHTML = simbolosArray[random];
  number.innerHTML = numsArray[randomNumber];

  symbol.classList.remove("rojo");
  symbol.classList.remove("negro");

  symbolInvert.classList.remove("rojo");
  symbolInvert.classList.remove("negro");

  if (random === 0 || random === 1) {
    symbolInvert.classList.add("rojo");
    symbol.classList.add("rojo");
  } else {
    symbolInvert.classList.add("negro");
    symbol.classList.add("negro");
  }
}

function createButton() {
  let button = document.createElement("button");
  button.innerHTML = "ACTUALIZAR CARTA";

  document.body.appendChild(button);

  button.addEventListener('click', function () {
    updateElements();
  });
}

window.onload = function () {
  //write your code here
  createElements();
  createButton();

  let i = 10;
  this.setInterval(function () {
    let cronometroElem = document.querySelector("h1");
    cronometroElem.innerHTML = `ACTUALIZAR CARTA EN: <span>${i}</span>`;
    if (i == 0) {
      i = 10;
      updateElements();
    }

    i--;
  }, 1000);
};
