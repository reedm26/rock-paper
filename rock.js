var choices = ["rock", "paper", "scissors"];
function play(playerChoice) {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let answer = "";
  console.log(computerChoice);
  // debugger;
  if (playerChoice == computerChoice) {
    answer = "Tie";
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    answer = "You Win";
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    answer = "You Lose";
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    answer = "You Lose";
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    answer = "You Win";
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    answer = "You Win";
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    answer = "You Lose";
  }
  document.querySelector("#outcome").textContent = answer;
}

//   if (playerChoice == "scissors") {
//     if (computerChoice == "paper") {
//       answer = "You Win";
//     } else {
//       answer = "You lose";
//     }
//   }
//   if (playerChoice == "paper") {
//     if (computerChoice == "rock") {
//       answer = " You Win";
//     } else {
//       answer = "You lose";
//     }
//   }

// }
