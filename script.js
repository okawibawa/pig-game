let scores, roundScore, dice, activePlayer;

scores = [0, 0];
roundScore = 0;

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

document.querySelector('#score-0').textContent = dice;
