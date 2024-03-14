const userInput = document.getElementById("user-input");
const playBtn = document.getElementById("play-btn");
const computerOutput = document.getElementById("computer-output");
const userOutput = document.getElementById("user-output");
const result = document.getElementById("result");
const computerChoices = ["rock", "paper", "scissors"];

const capitalizeFirstLetter = (word) => {
  const capitalizedLetter = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalizedLetter;
};

const gameLogic = () => {
  const randomizedComputerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  const lowerCasedUserInput = userInput.value.toLowerCase();

  const userWinCases =
    (lowerCasedUserInput === "rock" &&
      randomizedComputerChoice === "scissors") ||
    (lowerCasedUserInput === "paper" && randomizedComputerChoice === "rock") ||
    (lowerCasedUserInput === "scissors" &&
      randomizedComputerChoice === "paper");

  const computerWinCases =
    (randomizedComputerChoice === "rock" &&
      lowerCasedUserInput === "scissors") ||
    (randomizedComputerChoice === "paper" && lowerCasedUserInput === "rock") ||
    (randomizedComputerChoice === "scissors" &&
      lowerCasedUserInput === "paper");

  if (userWinCases) {
    result.style.color = "green";
    result.textContent = "You win";
  } else if (computerWinCases) {
    result.style.color = "red";
    result.textContent = "Computer wins!";
  } else {
    result.style.color = "orange";
    result.textContent = "It seems like a draw!";
  }

  userOutput.textContent = `Your choice: ${capitalizeFirstLetter(
    userInput.value
  )}`;
  computerOutput.textContent = `Computers choice: ${capitalizeFirstLetter(
    randomizedComputerChoice
  )}`;
};

playBtn.addEventListener("click", () => {
  const lowerCaseInput = userInput.value.toLowerCase();
  if (userInput.value === "") {
    alert("Please do not leave the input field empty :)");
    return;
  } else if (
    lowerCaseInput !== "rock" &&
    lowerCaseInput !== "paper" &&
    lowerCaseInput !== "scissors"
  ) {
    alert("Invalid input. Please enter either rock, paper or scissors ");
  } else {
    gameLogic();
  }
  userInput.value = "";
});
