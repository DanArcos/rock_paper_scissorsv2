console.log("Hello")

// Rock paper scissors
// 1 = Rock, 2 = Paper, 3 = Scissors
// 1 % 3 < 2% 3

// Step 1. write function to generate computer input based on random numbers
let computerPlay = () => {
    // Calculate a random number
    let number = Math.floor(Math.random() * 3) + 1;

    // Translate that number into a guess
    switch (number) {
        case (1):
            return "rock"
        case (2):
            return "paper"
        case (3):
            return "scissors"
    }
}

const playerSelection = "paper"
const computerSelection = computerPlay();

// console.log("The computer is now guessing")

// Step 3. Play a round
let playRound = (playerSelection, computerSelection) => {
    console.log("Playing Round")
    switch (playerSelection) {
        case ("rock"):
            if (computerSelection === "rock") {
                console.log("Draw!")
                return 0;
            } else if (computerSelection === "paper") {
                console.log("You Lose!")
                return -1;
            } else {
                console.log("You Win!")
                return 1;
            }
        case ("paper"):
            if (computerSelection === "rock") {
                console.log("You Win!")
                return 1;
            } else if (computerSelection === "paper") {
                console.log("Draw!")
                return 0;
            } else {
                console.log("You Lose!")
                return -1;
            }
        case ("scissors"):
            if (computerSelection === "rock") {
                console.log("You Lose!")
                return -1;
            } else if (computerSelection === "paper") {
                console.log("You Win!")
                return 1;
            } else {
                console.log("Draw")
                return 0;
            }
    }

}

playRound(playerSelection, computerSelection)

let game = () => {
    let playerScore, computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = "scissors"
        switch (playRound(playerSelection, computerSelection())) {
            case (1):
                playerScore++;
                break;
            case (-1):
                computerScore++;
                break;
            case (0):
                // Do Nothing
                break;
        }
    }
}