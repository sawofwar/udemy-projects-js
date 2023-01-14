'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 11;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // application state
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Reveal secret number
// document.querySelector('.number').textContent = secretNumber;

// Again button
document.querySelector('.again').addEventListener('click', function () {
  // Random number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Reset score
  score = 20;
  document.querySelector('.number').textContent = secretNumber;
  // Number back to ?
  document.querySelector('.number').textContent = '?';
  // Score back to 20
  document.querySelector('.score').textContent = 20;
  // Colour back to blue
  document.querySelector('body').style.backgroundColor = '#020d83';
  // Message 'start guessing again'
  displayMessage('Start guessing ...');
  // Guess field reset
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No number!';
    displayMessage('🚫 No number!');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉🎉🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '📈📈📈 Number too high!'
          : '📉📉📉 Number too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('☹☹☹ You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// ----------- When guess too high
/*
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📈📈📈 Number too high!';
      score--;
      document.querySelector('.score').textContent = score;

      // When player loses
    } else {
      document.querySelector('.message').textContent = '☹☹☹ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  */
// ---------- When guess too low
/*
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉📉📉 Number too low!';
      score--;
      document.querySelector('.score').textContent = score;

      // When player loses too
    } else {
      document.querySelector('.message').textContent = '☹☹☹ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
*/
