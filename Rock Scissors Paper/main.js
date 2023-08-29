let scoreGame = JSON.parse(localStorage.getItem('scoreGame'));

    if (!scoreGame) {
      scoreGame = {
        win: 0,
        lose: 0,
        tie: 0
      };
    }

    document.querySelector('.js-score')
      .innerHTML = `Win: ${scoreGame.win} , Losses: ${scoreGame.lose}, Ties: ${scoreGame.tie}`;

    let computerMove = '';

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

    function pickResult(rock, scissors, paper, youPicked) {
      let result = '';

      if (computerMove === 'rock') {
        result = rock
      }
      else if (computerMove === 'scissors') {
        result = scissors
      }
      else {
        result = paper
      }
      return result;
    }


    function addScore(playerPicked) {
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