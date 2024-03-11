
let score =  JSON.parse(localStorage.getItem('score')) ||     {
  win:0,
  lose:0,
  tie:0
}
updateScoreElement();

function playGame(playerMove) {
const computerMove = pickComputerMove();
let result = '';
if (playerMove === 'Scissors') {
  if (computerMove === 'rock') {
    result = 'You lose.';
  } else if (computerMove === 'paper') {
    result = 'You win.';
  } else if (computerMove === 'scissors') {
    result = 'Tie.';
  }
}

else if (playerMove === 'Paper') {
  if (computerMove === 'rock') {
    result = 'You win.';
  } else if (computerMove === 'paper') {
    result = 'Tie.';
  } else if (computerMove === 'scissors') {
    result = 'You lose.';
  }
}

else if (playerMove === 'Rock') {
  if (computerMove === 'rock') {
    result = 'Tie.';
  } else if (computerMove === 'paper') {
    result = 'You lose.';
  } else if (computerMove === 'scissors') {
    result = 'You win.';
  }
}

if (result === 'You win.') {
  score.win += 1;
} else if (result === 'You lose.') {
  score.lose += 1;
} else if (result === 'Tie.') {
  score.tie += 1;
}
localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();
document.querySelector('.js-result').
innerHTML= result;

let you_move=''
let Computer_move=''
if (result === 'Tie.') {
  you_move='#ffff00'
  Computer_move='#ffff00'
    
} else if (result === 'You lose.') {
  you_move='#ff0000'
  Computer_move='#00ff2f'

} else if (result === 'You win.') {
  you_move='#00ff2f'
  Computer_move='#ff0000'
}

document.querySelector('.js-moves').
innerHTML=`You <img src="${playerMove}.png" class="move-icon-result-you" style="background-color:${you_move};"> - <img src="${computerMove}.png" class="move-icon-result-computer" style="background-color:${Computer_move};"> Computer`;
}
function updateScoreElement()
{
document.querySelector('.js-score').
innerHTML=`Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}

function pickComputerMove() {
let computerMove = '';
const randomNumber = Math.random();

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'rock';
}

else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'paper';
}

else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'scissors';
}
return computerMove;
}

