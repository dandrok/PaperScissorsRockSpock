/*
Rock Paper Scissors & Spock

You know the rules, spock always win !


line 77 getUserChoice('your choice HERE')

*/




const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
 if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'spock') {
   return userInput;
 } else {
   console.log('Error!');
 }
};
//console.log(getUserChoice('rock'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return 'Error!';
  }
}
// console.log(getComputerChoice()); 

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!'
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'spock') {
    if (computerChoice === 'rock' || computerChoice === 'scissors' || computerChoice === 'paper') {
      return 'YOU WON!';
    }
  }
}

//console.log(determineWinner('rock', 'scissors'));

const playGame = () => {
  const userChoice = getUserChoice('spock'); // Your choice
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}.`);
  console.log(`The computer threw: ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();





