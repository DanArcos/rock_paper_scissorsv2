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
// Step 2. Write function to ask the user for their input?
// Step 2a. Format user input into standardized lower case
// Step 2b. See if it is an acceptable answer, if not, end the round


const playerSelection = "rock"
const computerSelection = computerPlay();

console.log("The computer is now guessing")

// Step 3. Play a round
let playRound = (playerSelection, computerSelection) => {
    // Translate computer selection


}

    // Step 4. Declare round winner

}

playRound(playerSelection, computerSelection)
