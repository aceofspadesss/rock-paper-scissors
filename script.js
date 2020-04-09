let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let buttons = document.querySelectorAll('button:not(#restart)');
let restart = document.querySelector('#restart');

let choice = document.querySelector('.choiceMessage');
let computerChoice = document.querySelector('.computerChoice');
let gameWindow = document.querySelector('.gameWindow');

let choiceID = 0;
let computerSelection = 0;

let playerScoreMSG = document.querySelector('#playerScore');
let computerScoreMSG = document.querySelector('#computerScore');
let playerScore = 0;
let computerScore = 0;

let round = 0;
let roundCounter = document.querySelector('#roundCounter');

let result = document.querySelector('#resultScreen');

rock.addEventListener('click', () => {
  choice.textContent = 'Your Choice: Rock';
  choiceID = 1;
  return choiceID;
});

paper.addEventListener('click', () => {
  choice.textContent = 'Your Choice: Paper';
  choiceID = 2;
  return choiceID;
});

scissors.addEventListener('click', () => {
  choice.textContent = 'Your Choice: Scissors';
  choiceID = 3;
  return choiceID;
});

function computerPlay(){                                                         //AI
  let choiceArray = ["Rock", "Paper", "Scissors"];
  let AI = choiceArray[Math.floor(Math.random() * choiceArray.length)];
  return AI;
}

function playRound(choiceID, computerSelection){                                 //Round play
  if (choiceID == 1 && computerSelection == "Scissors"){
    gameWindow.textContent = "You win!";
    playerScoreMSG.textContent = 'Your Score: ' + ++playerScore;
    return playerScore;
  } else if (choiceID == 2 && computerSelection == "Rock") {
    gameWindow.textContent = "You win!";
    playerScoreMSG.textContent = 'Your Score: ' + ++playerScore;
    return playerScore;
  } else if (choiceID == 3 && computerSelection == "Paper") {
    gameWindow.textContent = "You win!";
    playerScoreMSG.textContent = 'Your Score: ' + ++playerScore;
    return playerScore;
  } else if (choiceID == 1 && computerSelection == "Paper") {
    gameWindow.textContent = "You lose!";
    computerScoreMSG.textContent = 'Computer Score: ' + ++computerScore;
    return computerScore;
  } else if (choiceID == 2 && computerSelection == "Scissors") {
    gameWindow.textContent = "You lose!";
    computerScoreMSG.textContent = 'Computer Score: ' + ++computerScore;
    return computerScore;
  } else if (choiceID == 3 && computerSelection == "Rock") {
    gameWindow.textContent = "You lose!"
    computerScoreMSG.textContent = 'Computer Score: ' + ++computerScore;
    return computerScore;
  } else if (choiceID == 1 && computerSelection == "Rock") {
    gameWindow.textContent = "DRAW!";
  } else if (choiceID == 2 && computerSelection == "Scissors") {
    gameWindow.textContent = "DRAW!";
  } else if (choiceID == 3 && computerSelection == "Paper") {
    gameWindow.textContent = "DRAW!";
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    computerPlay();
    computerSelection = computerPlay();
    computerChoice.textContent = 'Computer Choice: ' + computerSelection;
    playRound(choiceID, computerSelection);
    round = ++round;
    roundCounter.textContent = 'Round: ' + round;
    if (round === 5){
      rock.style.visibility = 'hidden';
      paper.style.visibility = 'hidden';
      scissors.style.visibility = 'hidden';
      restart.style.visibility = 'visible';
    }

    if (round === 5 && playerScore > computerScore){
      result.textContent = 'CONGRATULATIONS!'
    } else if (round === 5 && playerScore < computerScore) {
      result.textContent = 'GAME OVER';
    } else if (round === 5 && playerScore == computerScore) {
      result.textContent = 'DRAW';
    }

    return playRound();
  });
});

restart.addEventListener('click', () => {
  round = 0;
  roundCounter.textContent = 'Round: ' + round;
  rock.style.visibility = 'visible';
  paper.style.visibility = 'visible';
  scissors.style.visibility = 'visible'
  playerScore = 0;
  computerScore = 0;
  playerScoreMSG.textContent = 'Your Score: ' + playerScore;
  computerScoreMSG.textContent = 'Computer Score: ' + playerScore;
  choice.textContent = 'Your Choice: ';
  computerChoice.textContent = 'Computer Choice: ';
  gameWindow.textContent = '';
  result.textContent = '';
})



































/*let playerScore = 0;
let computerScore = 0;
let turns = 0;
let choice = 0;
let AI = 0;

function computerPlay(){
  let choiceArray = ["Rock", "Paper", "Scissors"];
  AI = choiceArray[Math.floor(Math.random() * choiceArray.length)];
  return AI;
}

let choiceAnnounce = document.querySelector('#choice');
let choiceAnnounceAI = document.querySelector('#choice2');
let debug1 = document.querySelector('#debug1');
let debug2 = document.querySelector('#debug2');

function playRound(playerSelection, computerSelection){
  if (playerSelection == "Rock" && computerSelection == "Scissors"){
    console.log("You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase() + " beats " + computerSelection);
    playerScore = ++playerScore;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    console.log("You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase() + " beats " + computerSelection);
    playerScore = ++playerScore;
    return playerScore;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    console.log("You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase() + " beats " + computerSelection);
    playerScore = ++playerScore;
    return playerScore;
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    console.log("You lose! " + computerSelection + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase());
    computerScore = ++computerScore;
    return computerScore;
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    console.log("You lose! " + computerSelection + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase());
    computerScore = ++computerScore;
    return computerScore;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    console.log("You lose! " + computerSelection + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase());
    computerScore = ++computerScore;
    return computerScore;
  } else if (playerSelection == "Rock" && computerSelection == "Rock") {
    console.log("DRAW!");
  } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    console.log("DRAW!");
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    console.log("DRAW!");
  }
}

let rock = document.querySelector('#rock');
rock.addEventListener('click', () =>{
  choiceAnnounce.textContent = "YOU CHOSE ROCK";
  function playerPlay(){
    choice = 1;
    return choice;
  }
  playerPlay();
  computerPlay();
  playRound();
  debug1.textContent = choice;
  choiceAnnounceAI.textContent = "COMPUTER CHOSE " + AI.toUpperCase();
  rock.style.backgroundColor = 'red';
});

let paper = document.querySelector('#paper');
paper.addEventListener('click', (e) =>{
  choiceAnnounce.textContent = "YOU CHOSE PAPER";
  function playerPlay(){
    choice = 2;
    return choice;
  }
  playerPlay();
  computerPlay();

  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  playRound();
  debug1.textContent = choice;
  choiceAnnounceAI.textContent = "COMPUTER CHOSE " + AI.toUpperCase();
  paper.style.backgroundColor = 'red';
  return playRound();
});

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', (e) =>{
  choiceAnnounce.textContent = "YOU CHOSE SCISSORS";
  function playerPlay(){
    choice = 3;
    return choice;
  }
  playerPlay();
  computerPlay();
  playRound();
  debug1.textContent = choice;
  choiceAnnounceAI.textContent = "COMPUTER CHOSE " + AI.toUpperCase();
  scissors.style.backgroundColor = 'red';
});
*/
