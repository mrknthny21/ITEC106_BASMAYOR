let displayElement = document.getElementById('outputtext');
let remainingAttempts = 3;
let secretNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
    let userInput = parseInt(document.getElementById('userInput').value);
  
    if (isNaN(userInput) || userInput < 1 || userInput > 10) {
        displayElement.innerHTML = "Invalid input: Please input a number between 1 and 10";
        return;
    }
  
    if (userInput === secretNumber) {
        displayElement.innerHTML = `You guessed right! The number was ${secretNumber}`;
    } else if (userInput < secretNumber) {
        displayElement.innerHTML = "Your guess is too low!";
    } else if (userInput > secretNumber) {
        displayElement.innerHTML = "Your guess is too high!";
    }

    remainingAttempts--;
    displayElement.innerHTML += `<br>Attempts left: ${remainingAttempts}`;

    if (remainingAttempts === 0) {
        displayElement.innerHTML += `<br>Game over! The number was ${secretNumber}`;
        document.getElementById('btn').disabled = true;
    }
}
