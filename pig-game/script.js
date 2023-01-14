'use strict';

// Selecting elements (the scores);
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
diceEl.classList.add('hidden');

// Starting conditions

score0El.textContent = 0;
score1El.textContent = 0;
let playing = true;

function startingConditions() {
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  currentScore = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player-active');
}

// function for rolling dice
const randomDice = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${dice}.png`;
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Starting new game
btnNew.addEventListener('click', function () {
  startingConditions();
  activePlayer = 0;

  randomDice();
  diceEl.classList.add('hidden');
  for (let i = 0; i < 2; i++) {
    scores[i] = 0;
  }
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
});

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player;
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >== 100
    if (scores[activePlayer] >= 100) {
      // 3. If so, finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      // 4. If not, switch to next player
    } else {
      switchPlayer();
    }
  }
});
