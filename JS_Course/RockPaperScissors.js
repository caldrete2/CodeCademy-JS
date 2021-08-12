/*
Our code will break the game into four parts:

1. Get the user’s choice.
2. Get the computer’s choice.
3. Compare the two choices and determine a winner.
4. Start the program and display the results.
*/
const getUserChoice = userInput => {
  //user can pass in a parameter, such as ‘Rock’ or ‘rock’
  userInput = userInput.toLowerCase()
  let found = false
  //check to make sure that the user typed a valid choice
  switch(userInput) {
    case 'scissors':
      found = true
      break
    case 'paper':
      found = true
      break
    case 'rock':
      found = true
      break
    default: 
      console.log(`${userInput}, invalid entry!`)
      break
  }
  return found? userInput: 0
}

const getCompChoice = () => {
  // utilize Math.random() and Math.floor() to get a whole number between 0 and 2.
  const rndNum = Math.floor(Math.random() * 3)
  //return either 'rock', 'paper', or 'scissors'
  let choice = ''
  switch(rndNum) {
    case 0:
      choice = 'paper'
      break
    case 1:
      choice = 'rock'
      break 
    case 2:
      choice = 'scissors'
      break
  }
 return choice
}

//Write logic that will return a winner.
const determineWinner = (user, pc) => {
  if(user === pc) { return 'tie'}
  if(user === 'rock') {
    return pc === 'paper'? 'pc wins': 'user wins'  
  }
  if(user === 'paper') {
    return pc === 'scissors'? 'pc wins': 'user wins'
  }
  if(user === 'scissors') {
    return pc === 'rock'? 'pc wins' : 'user wins'
  }
}

const playGame = () => {
  const userChoice = getUserChoice('rock')
  const pcChoice = getCompChoice()

  console.log(`User:${userChoice} | PC:${pcChoice}`)
  console.log(determineWinner(userChoice, pcChoice))
}

playGame()


