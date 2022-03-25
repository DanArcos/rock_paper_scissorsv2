console.log("Hello")

// Rock paper scissors

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

// Step 2. Write a function to let the player make a choice.
let playerPlay = () => {
    let answer = prompt("Choose 'rock', 'paper', or 'scissors'");
    answer = answer.toLowerCase()
    if (answer === 'rock' || answer === 'paper' || answer === 'scissors') {
        console.log("Player selection made")
        return answer;
    } else {
        alert("type a correct option")
        playerPlay()
    }
}

// Step 3. write a function to play a round depending on the choices that the players make
let playRound = (playerSelection, computerSelection) => {
    console.log("Playing Round")
    console.log("You chose " + playerSelection)
    console.log("Computer chose " + computerSelection)
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

// Step 4. Write a game function
let game = () => {

    // Update screen helper function
    let updateScore = (roundResult) => {
        switch (roundResult) {
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

    let numberRounds = 5;
    let playerScore = 0, computerScore = 0;

    console.log("Playing a game of " + numberRounds + " rounds")

    for (let i = 0; i < numberRounds; i++) {

        console.log("Round " + (i + 1))

        let roundResult = playRound(playerPlay(), computerPlay())

        // Update the player and computer scores
        updateScore(roundResult)

    }

    console.log("The Game has ended")
    console.log("Final Player Score: " + playerScore)
    console.log("Final Computer Score: " + computerScore)

    // After the games have ended decide the winner
    if (playerScore > computerScore) {
        console.log("You Win the game!")
    } else if (playerScore < computerScore) {
        console.log('You Lose the game!')
    } else {
        console.log("The game ended in a draw")
    }
}

game()