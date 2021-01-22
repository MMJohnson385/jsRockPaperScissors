let playerScore = 0;

  const playerScoreBoard = document.querySelector('#playerScoreBoard'); //selects the playerScoreBoard id
  
let computerScore = 0;
  
  const computerScoreBoard = document.querySelector('#computerScoreBoard'); // selects the computerScoreBoard id
  
const roundResults = document.querySelector('#roundResults');

const finalResults = document.querySelector('#finalResults');


const buttonChoice = document.querySelectorAll('button'); //connects to button class

buttonChoice.forEach((button) =>{
  button.addEventListener('click', () =>{
    if (playerScore >= 5 || computerScore >= 5){
      return;
    } else if (playerScore === 4 || computerScore === 4){
        roundResults.textContent = playRound(button.id.toUpperCase());
        finalResults.textContent = finalScore(playerScore, computerScore);
    } else {
        roundResults.textContent = playRound(button.id.toUpperCase());
      }
    });
});//returns the id for the button clicked


function playRound(playerSelection){  //plays a single round of rock paper scissors
  
  function computerPlay() { //makes the choice for computer selection
    let computerChoice = Math.floor((Math.random() * 3) + 1 );
    if (computerChoice === 1){
      return 'ROCK';
    } else if (computerChoice === 2){
      return 'PAPER';
    } else {
      return 'SCISSORS';
    }
  } 
  //const playerSelection = prompt("Rock, Paper, Scissors Shoot!").toUpperCase(); //propmts player to choose and converts to upper case

  const computerSelection = computerPlay(); //runs computer play to make a selection for the computer

  if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ||
      playerSelection === 'PAPER' && computerSelection === 'ROCK' ||
      playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){

        ++playerScore; // updates score
        playerScoreBoard.textContent = playerScore.toString(); //updates score board
        return playerSelection + " beats " + computerSelection + ". \nYou Win!";

    } else if (playerSelection === computerSelection){

        return playerSelection + " ties " + computerSelection + " \nPlay again.";

    } else if( playerSelection === 'ROCK' && computerSelection === 'PAPER' ||
                playerSelection === 'PAPER' && computerSelection === 'SCISSORS'||
                playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){

                ++computerScore; //updates score
                computerScoreBoard.textContent = computerScore.toString(); //updates score board
                return computerSelection + " beats " + playerSelection + ".\n You lose.";

    } else {return "something went wrong.";}
}



function finalScore(playerScore, computerScore){
  if (playerScore > computerScore){
      return "YOU WIN! CONGRATULATIONS! CLICK REFRESH TO PLAY AGAIN.";
  } else if (playerScore == computerScore){
      return;
  } else if (playerScore < computerScore){
      return "YOU LOSE. CLICK REFRESH TO PLAY AGAIN.";
  } else {
      return "Something went wrong. Check the final score";
  }
}