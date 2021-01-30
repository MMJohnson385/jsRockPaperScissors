let playerScore = 0;

  const playerScoreBoard = document.querySelector('#playerScoreBoard'); //selects the playerScoreBoard id
  
let computerScore = 0;
  
  const computerScoreBoard = document.querySelector('#computerScoreBoard'); // selects the computerScoreBoard id
  
const roundResults = document.querySelector('#roundResults'); //connects to the round results div

const finalResults = document.querySelector('#finalResults'); //connects to othe final results div

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
});//on click checks the score, and feeds the button id as the player selection

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

  const computerSelection = computerPlay(); //runs computer play to make a selection for the computer

  if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ||
      playerSelection === 'PAPER' && computerSelection === 'ROCK' ||
      playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){

        ++playerScore; // updates score
        playerScoreBoard.textContent = playerScore.toString(); //updates score board
        return playerSelection + " BEATS " + computerSelection + ". YOU WIN!";

    } else if (playerSelection === computerSelection){

        return playerSelection + " TIES " + computerSelection + " CHOOSE AGAIN.";

    } else if( playerSelection === 'ROCK' && computerSelection === 'PAPER' ||
                playerSelection === 'PAPER' && computerSelection === 'SCISSORS'||
                playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){

                ++computerScore; //updates score
                computerScoreBoard.textContent = computerScore.toString(); //updates score board
                return computerSelection + " BEATS " + playerSelection + ". YOU LOSE.";

    } else {return "something went wrong.";}
}



function finalScore(playerScore, computerScore){
  if (playerScore > computerScore && playerScore == 5){
        return "YOU WIN! CONGRATULATIONS!";
    } else if (playerScore < computerScore && computerScore == 5){
        return "OH NO! YOU LOSE.";
    } else {  
        return;
    }
}