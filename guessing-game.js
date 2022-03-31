function guessingGame() {

    const num = Math.floor(Math.random() * 100)
    let count = 0
    let won = false

    return function game(guess) { 
        if (won) {
            return "The game is over, you already won!"
        }

        if (guess === num) {
            count ++
            won = true
            return `You win! You found ${num} in ${count} guesses.`
        } else if (guess < num) {
            count ++
            return `${guess} is too low!`
        } else if (guess > num) {
            count ++
            return `${guess} is too high!`
        }
    }


}

module.exports = { guessingGame };
