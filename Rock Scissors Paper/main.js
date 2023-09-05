let scoreGame = JSON.parse(localStorage.getItem('scoreGame'));

const resetButton = document.querySelector('.reset-button');
const autoButton = document.querySelector('.auto-button');
const scoreText = document.querySelector('.js-score');
const resetConf = document.querySelector('.reset-confirm');
const resetConfYes = document.querySelector('.reset-confirm-button');
const resetConfNo = document.querySelector('.reset-confirm2-button');

if (!scoreGame) {
  scoreGame = {
    win: 0,
    lose: 0,
    tie: 0
  }
}


scoreText.innerHTML = `Win: ${scoreGame.win} , Losses: ${scoreGame.lose}, Ties: ${scoreGame.tie}`;

let computerMove = '';
let autoPlayIs = 'OFF';

function main(string) {
  computerMove = overComputerMove();
  result = pickResult(string)
  addScore();
  youComputer(string);
}

function clickAuto() {
  if (autoPlayIs === 'OFF') {
    myInterval = autoPlay();
    document.querySelector('.auto-button')
      .innerHTML = 'Turn Off'
  } else {
    stopAuto();
    document.querySelector('.auto-button')
      .innerHTML = 'Autoplay';
  }
}


function autoPlay() {
  const myInterval = setInterval(function () {
    computerMove = overComputerMove();
    playerMove = overPlayerMove();
    result = autoPlayResult();
    addScore(playerMove);
    youComputer(playerMove);
  }, 1500)
  autoPlayIs = 'ON';
  return myInterval;
}

function stopAuto() {
  clearInterval(myInterval);
  autoPlayIs = 'OFF'
}

function overComputerMove() {
  randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock'
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'scissors'
  }
  else {
    computerMove = 'paper'
  }

  return computerMove;
}

function overPlayerMove() {
  randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    playerMove = 'rock'
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    playerMove = 'scissors'
  }
  else {
    playerMove = 'paper'
  }

  return playerMove;
}

function autoPlayResult() {
  let result = '';
  const object = {
    win: 'You win!',
    lose: 'You lose...',
    tie: 'Tie.'
  }
  const { win, lose, tie } = object

  if (playerMove === 'rock' && computerMove === 'rock') {
    result = tie
  }
  else if (playerMove === 'rock' && computerMove === 'scissors') {
    result = win
  }
  else if (playerMove === 'rock' && computerMove === 'paper') {
    result = lose
  }
  else if (playerMove === 'scissors' && computerMove === 'rock') {
    result = lose
  }
  else if (playerMove === 'scissors' && computerMove === 'scissors') {
    result = tie
  }
  else if (playerMove === 'scissors' && computerMove === 'paper') {
    result = win
  }
  else if (playerMove === 'paper' && computerMove === 'rock') {
    result = win
  }
  else if (playerMove === 'paper' && computerMove === 'scissors') {
    result = lose
  }
  else if (playerMove === 'paper' && computerMove === 'paper') {
    result = tie
  }
  return result;
};

function pickResult(string) {
  let result = '';
  let messages = {
    win: 'You win!',
    lose: 'You lose...',
    tie: 'Tie.'
  }
  let { win, lose, tie } = messages;

  if (string === computerMove) {
    result = tie
  } else if (string === 'rock' && computerMove === 'paper') {
    result = lose;
  }
  else if (string === 'rock' && computerMove === 'scissors') {
    result = win;
  }
  else if (string === 'paper' && computerMove === 'rock') {
    result = win;
  }
  else if (string === 'paper' && computerMove === 'scissors') {
    result = lose;
  }
  else if (string === 'scissors' && computerMove === 'rock') {
    result = lose;
  }
  else if (string === 'scissors' && computerMove === 'paper') {
    result = win;
  }
  return result;
}


function addScore() {
  if (result === 'Tie.') {
    scoreGame.tie += 1;
  }
  if (result === 'You win!') {
    scoreGame.win += 1;
  }
  if (result === 'You lose...') {
    scoreGame.lose += 1;
  }

  document.querySelector('.js-result')
    .innerHTML = `${result}`;

  document.querySelector('.js-score')
    .innerHTML = `Win: ${scoreGame.win} , Losses: ${scoreGame.lose}, Ties: ${scoreGame.tie}`;
  localStorage.setItem('scoreGame', JSON.stringify(scoreGame));
}

function youComputer(picked) {
  const pickedRock = document.querySelector('.js-compare-you');
  const pickedScissors = document.querySelector('.js-compare-youu');
  const pickedPaper = document.querySelector('.js-compare-youuu');
  const aiRock = document.querySelector('.js-compare-computer');
  const aiScissors = document.querySelector('.js-compare-computerr');
  const aiPaper = document.querySelector('.js-compare-computerrr');

  if (picked === 'rock') {
    pickedRock.innerHTML = `You`;
    pickedScissors.innerHTML = ``;
    pickedPaper.innerHTML = ``;

  }
  else if (picked === 'scissors') {
    pickedScissors.innerHTML = `You`;
    pickedRock.innerHTML = ``;
    pickedPaper.innerHTML = ``;

  }
  else {
    pickedPaper.innerHTML = `You`;
    pickedScissors.innerHTML = ``;
    pickedRock.innerHTML = ``;
  }

  if (computerMove === 'rock') {
    aiRock.innerHTML = `Computer`;
    aiScissors.innerHTML = ``;
    aiPaper.innerHTML = ``;
  }
  else if (computerMove === 'scissors') {
    aiRock.innerHTML = ``;
    aiScissors.innerHTML = `Computer`;
    aiPaper.innerHTML = ``;
  }
  else {
    aiRock.innerHTML = ``;
    aiScissors.innerHTML = ``;
    aiPaper.innerHTML = `Computer`;
  }
}

function resetScore(){
  scoreGame.win = 0;
  scoreGame.lose = 0;
  scoreGame.tie = 0;
  localStorage.setItem('scoreGame', JSON.stringify(scoreGame));
  scoreText.innerHTML = `Win: ${scoreGame.win}, Losses: ${scoreGame.lose}, Ties: ${scoreGame.tie}`;
  resetConf.innerHTML = '';
}

function eventClick() {
  resetButton.addEventListener('click', () => {
    resetConf.innerHTML = `Are you sure you want to reset the score?
                            <button class="reset-confirm-button" 
                            onclick="resetScore();">Yes</button> 
                            <button class="reset-confirm2-button" onclick="resetConf.innerHTML = '';">No</button>`
  })
  autoButton.addEventListener('click', () => {
    clickAuto();
  })
}
eventClick();





function eventKeydown() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
      main('rock');
    }
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 's') {
      main('scissors');
    }
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 'p') {
      main('paper');
    }
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
      clickAuto();
    }
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
      resetConf.innerHTML = `Are you sure you want to reset the score?
                            <button class="reset-confirm-button" 
                            onclick="resetScore();">Yes</button>
                            <button class="reset-confirm2-button" onclick="resetConf.innerHTML = '';">No</button>`
 
    }
  })
}
eventKeydown();
