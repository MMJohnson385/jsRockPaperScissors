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
  
  -fixed funtionality of finalScore() to check if one score is equal to 5
    -if not equal to 5 returns out
    -if equal to 5 displays final win/loss message
  -updated css
    -placed scoreboard div centered in page
    -set the score boxes with the score to inline block so they seat next to each other
    -placed the results display div at the bottom of the score board div
    -text aligned the player choices div to center to center the buttons in the div
    -set button background to transparent, outline none, border none, border-radius 50% so there will be no background or border and the border will be a circle
    -set images with 125px height and width and transparent backgrounds as the button content in the HTML
    -added a box shadow effect on the button hover so produce a shadowed ring around the selection
    -added the note card background image to the score board div
    -added the table top background image to the body div
  	
