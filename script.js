let scores, roundScore, activePlayer, gameState;

let imgDice = document.querySelector('.dice');

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gameState) {
    let dice = Math.floor(Math.random() * 6) + 1;

    imgDice.style.display = 'block';
    imgDice.src = 'img/dice-' + dice + '.png';

    if (dice !== 1) {
      // adding the value of dice to current round score
      roundScore += dice;
      document.querySelector(
        '#current-' + activePlayer,
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gameState) {
    // add current score to global score
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent =
      scores[activePlayer];

    // check the score
    if (scores[activePlayer] >= 20) {
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
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gameState = true;

  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;

  imgDice.style.display = 'none';

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
}
