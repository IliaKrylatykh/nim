"use strict";

const counterElem = document.querySelector('.board__counter'),
      optionsElem = document.querySelectorAll('.options'),
      instructionTextElem = document.querySelector('.instruction__text'),
      playerUlElem = document.querySelector('.player__ul'),
      botUlElem = document.querySelector('.bot__ul'),
      botAnsElem = document.querySelector('.bot__answer');

let counter;
let playerFirst = confirm('Хотите ходить первым?');

if (playerFirst) {
  counter = 0;
} else {
  counter = Math.floor(Math.random()*10 + 1);
  botAnsElem.innerHTML = `Бот ходит первым и выбирает:`;
  counterElem.innerHTML = counter;
}

optionsElem.forEach((item) => {
  item.addEventListener('click', event => {
    let playerAns = +event.target.id;
    counter += playerAns;
    counterElem.innerHTML = counter;
    playerUlElem.innerHTML += `
      <li>${playerAns}</li>
    `;
    

    if (counter >= 100) {
      botAnsElem.innerHTML = 'Вы победили!';
    } else {
      botTurn(playerAns);
    }

  });
});

function botTurn(playerAns) {
  console.log(playerAns, counter); 
  let botAns;

  if (counter < 79) {
    botAns = Math.floor(Math.random()*10 + 1);
  } else if (counter < 90) {
    botAns = 89 - counter;
      if (!botAns) {
        botAns++;
      }
  } else {
    botAns = 100 - counter;
  }

  console.log(botAns, counter); 
  counter += botAns;
  counterElem.innerHTML = counter;
  botAnsElem.innerHTML = `Бот выбрал: ${botAns}`;
  botUlElem.innerHTML += `
      <li>${botAns}</li>
    `;

  if (counter >= 100) {
    botAnsElem.innerHTML = 'Вы проиграли!';
  }

}