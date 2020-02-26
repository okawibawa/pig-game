let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// document.querySelector('#current-' + activePlayer).textContent = dice;
let rollDice = document.querySelector('.btn-roll');
let holdDice = document.querySelector('.btn-hold');
let imgDice = document.querySelector('.dice');

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

imgDice.style.display = 'none';

rollDice.addEventListener('click', function() {
  let dice = Math.floor(Math.random() * 6) + 1;

  imgDice.style.display = 'block';
  imgDice.src = 'img/dice-' + dice + '.png';

  if (dice !== 1) {
    document.querySelector('#current-' + activePlayer).textContent = dice;
  } else {
    //  switch player
  }
});

holdDice.addEventListener('click', function() {});
