'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const rollbtn = document.querySelector('.btn--roll');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const holdbtn = document.querySelector('.btn--hold');
const newbtn = document.querySelector('.btn--new');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let gameState = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

rollbtn.addEventListener('click', function () {
  if (gameState) {
    const diceValue = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    dice.src = `dice-${diceValue}.png`;

    if (diceValue !== 1) {
      currentScore += diceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdbtn.addEventListener('click', function () {
  if (gameState) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      gameState = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

newbtn.addEventListener('click', function () {
  gameState = true;
  activePlayer = 0;
  player0.classList.add('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  currentScore = 0;
  scores = [0, 0];
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById('current--1').textContent = 0;
});
