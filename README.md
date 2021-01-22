# jsRockPaperScissors


  -added constants for player selectiona and computer selection
  -computer selection is chosen with the function computerPlay
  -added a function for a single round of play

  -created variables for player and computer scores
  -added inrementation for player score on player win and computer score on computer win
  -created function to announce final score
  -used console.log() to announce round number, run a single round, and announce the winner of the round

  -added button functionality with event listeners to run playerSelection through play round
  -playRound() now updates score display using .textContent
  -clicking a button now checks to see if either score is 5 or more and returns ending the game
    -then checks to see if it is the final round and returns playRound() and finalScore()
    -otherwise just runs playRound()
