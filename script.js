let scores, roundScore, activePlayer, gameState, goalScore, lastDice;
let imgDice = document.querySelector('.dice');

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
  // checking if the game states is true
  if (gameState) {
    let dice = Math.floor(Math.random() * 6) + 1;

    imgDice.style.display = 'block';
    imgDice.src = 'img/dice-' + dice + '.png';

    if (dice === 6 && lastDice === 6) {
      // set the score to 0
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = 0;
      nextPlayer();
    } else if (dice !== 1) {
      // adding the value of dice to current round score
      roundScore += dice;
      document.querySelector(
        '#current-' + activePlayer,
      ).textContent = roundScore;
    } else {
      // if the value is one, change the player to the next one
      nextPlayer();
    }

    lastDice = dice;
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  // checking if the game states is true
  if (gameState) {
    // add current score to global score
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent =
      scores[activePlayer];

    // check the score
    if (scores[activePlayer] >= goalScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';

      // set dice display to none
      imgDice.style.display = 'none';

      // remove the active class
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.add('winner');
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.remove('active');
      gameState = false;
    } else {
      // next player
      nextPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
  //  set the round score to 0
  document.querySelector(
    '#current-' + activePlayer,
  ).textContent = roundScore = 0;

  // switch the player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // add or remove class
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // set dice display to none
  imgDice.style.display = 'none';
}

function init() {
  // initializing and declaring varibales
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gameState = true;

  // setting all scores value to 0
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;

  // set the dice display to none
  imgDice.style.display = 'none';

  // adding and removing class
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
}

function getScore() {
  inputValue = document.querySelector('#setScore').value;

  if (inputValue) {
    goalScore = inputValue;
  } else {
    goalScore = 100;
  }
}
