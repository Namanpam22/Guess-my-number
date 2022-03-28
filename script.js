'use strict';
/*
console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent='Correct number !.'

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value)

*/
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('No Number!');
    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number ! 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 🤷‍♂️');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
