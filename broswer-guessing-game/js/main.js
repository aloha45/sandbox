/*------Constants------*/

/*------Variables------*/

let secretNum, guessList, isWinner, currentGuess;

/*------Cached Element References------*/

const messageEl = document.getElementById('message');
const guessesEl = document.getElementById('prevGuesses');
const guessBtn = document.getElementById('guessButton');
const resetBtn = document.getElementById('resetButton');
const guessInput = document.getElementById('guessInput');
const titleEl = document.querySelector('h1')

/*------Event Listeners------*/

resetBtn.addEventListener('click', function(){
    init();
})
guessBtn.addEventListener('click', function(){
    if (guessList.length === 0){
        guessesEl.innerText = 'Previous Guesses:';
    }
    if (isWinner === false){
        checkGuess(parseInt(guessInput.value));
    }
})

/*------Functions------*/

//Init function sets all state variable back to the state for a new game.
init();

function init(){
    //easy way to remove all appended children from an element.
    guessesEl.innerText = '';
    messageEl.innerText = 'Please enter a number between 1 and 100!';
    messageEl.className ='';
    guessInput.value='';
    guessList = [];
    isWinner = false;
    secretNum = Math.floor(Math.random()*100) + 1;
    render();
}
function checkGuess(guess){
    if (guess < 1 || guess > 100){
        messageEl.innerText = 'Whoops! Please enter a number between 1 and 100!';
    } else if (guess === secretNum){
        messageEl.className = 'winner';
        isWinner = true;
        messageEl.innerText = `Congrats! You found the number in ${guessList.length + 1} guesses!`;
        confetti.start(1500);
        titleEl.className = "animate__animated animate__bounce";
    } else if (guess < secretNum){
        messageEl.className = 'low';
        messageEl.innerText = `Your guess of ${guess} is too low.`;
        guessList.push(guess);
        render(guess);
    } else {
        messageEl.className = 'high';
        messageEl.innerText = `Your guess of ${guess} is too high.`;
        guessList.push(guess);
        render(guess);
    }
    console.log(guessList)
}

function render(guess){
    //Append a child div to the guessEl div based on whether our guess is higher or lower than secretNum
    if (guess > secretNum) {
        //create a new div, then append to the apparent div (guessesEl)
        let div = document.createElement('div');
        div.innerText = guess;
        div.className = 'high';
        guessesEl.appendChild(div);
    } else {
        let div = document.createElement('div');
        div.innerText = guess;
        div.className = 'low';
        guessesEl.appendChild(div);
    }
}

// Add an event listener for the 'Submit' button that calls a function to check the current guess. Pass the current value of the input element into the function for comparison. This function should compare the guess to the secret number. Stub up conditional statements to handle what happens when the number is higher, lower, or equal to the secret number.
// Fill in each of the conditional statements for the checkGuess function. Flip the isWinner variable to true if there's a correct guess to prevent additional clicks. Add a line to clear out the guess input value as well as error handling for inputting a number out of range. Push the guess into the previous guesses array. Call a function to render all guesses.
// Write a render function to display the list of previous guesses on the page. Append an element to the cached guesses element, also adding a class name indicating whether it is higher or lower than the secret number.