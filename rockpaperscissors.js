var userChoice = prompt('Do you choose rock, paper, or scissors?')
var computerChoice = Math.random()

if (computerChoice <= 0.33 ) {
    computerChoice = 'rock'
} else if (computerChoice > 0.33 <= 0.66) {
    computerChoice = 'paper'
} else {
    computerChoice = 'scissors'
}

alert('You chose ' + userChoice + ' and the computer chose ' + computerChoice)

// function compare (choice1, choice2) {
//
// if (userChoice === computerChoice) {
//   alert("It's a tie")
// } else if (userChoice = 'rock' && computerChoice = 'paper') {
//   alert('The computer wins')
// }
//   else if (userChoice = 'rock' && computerChoice = 'scissors') {
//     alert('You win!')
// }
//   else if (userChoice = 'paper' && computerChoice = 'rock') {
//     alert('You win!')
// }
//   else if (userChoice = 'scissors' && computerChoice = 'rock') {
//     alert('The computer wins')
// }
//   else if (userChoice = 'scissors' && computerChoice = 'paper') {
//     alert('You win!')
// }
//   else if (userChoice = 'paper' && computerChoice = 'scissors') {
//     alert('The computer wins')
//   }
// }
