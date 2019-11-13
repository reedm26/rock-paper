let computerChoice = "rock";
let answer = "";
function play(playerChoice) {
  if (playerChoice == computerChoice) {
    answer = "Tie";
  }
  if (playerChoice == "rock") {
    if (computerChoice == "scissors") {
      answer = "You Win";
    } else {
      answer = "You lose";
    }
  }
  if (playerChoice == "scissors") {
    if (computerChoice == "paper") {
      answer = "You Win";
    } else {
      answer = "You lose";
    }
  }
  if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      answer = " You Win";
    } else {
      answer = "You lose";
    }
  }
}

// let computerChoice = "Rock"
//   function playerChoice(playerChoice == computerChoice){

//     if (playerChoice == "Rock") {
//       return "Tie";
//     }else if("Rock" == "Scissors"){
//       return "Computer Wins";
//     }else if ("Rock" == "Paper")
//     return "Computer Wins"
//   }else{
//     return "You Win";
//   }
