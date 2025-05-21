const hangmanImage = document.querySelector(".hangman-box img"); // Selects the hangman image element
const wordDisplay = document.querySelector(".word-display"); // Selects the word display element
const guessesText = document.querySelector(".guesses-text b"); // Selects the incorrect guesses text element
const keyboardDiv = document.querySelector(".keyboard"); // Selects the keyboard element
const gameModal = document.querySelector(".game-modal"); // Selects the game modal element
const playAgainBtn = document.querySelector(".play-again"); // Selects the play again button

// Declares variables for the current word, correct letters, and wrong guess count

let currentWord, originalWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {

  // Resetting all game variables and UI elements...

  correctLetters = [];
  wrongGuessCount = 0;
  hangmanImage.src = `/Assets/Hangman Game Images/Hangman-${wrongGuessCount}.svg`;
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

  keyboardDiv
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = false)); // Enables all keyboard buttons
    
  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");

  gameModal.classList.remove("show");
};

const getRandomWord = () => {

  // Selecting a random word and hint from the word List

  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  originalWord = word;
  currentWord = word.toLowerCase();
  console.log(word);
  document.querySelector(".hint-text b").innerText = hint;

  resetGame(); // Resets the game
};

const gameOver = (isVictory) => {

  // After 600ms Of game complete.. showing modal with relevant details

  setTimeout(() => {
    const modalText = isVictory
      ? `You Found The Word :`
      : `The Correct Word Was :`;

    gameModal.querySelector('img').src = `/Assets/Hangman Game Images/${isVictory ? 'Victory' : 'Lost'}.gif`;
    // gameModal.querySelector("img").src = `/Assets/Hangman Game Images/${
    //   isVictory ? "wow" : "chii"
    // }.gif`;
    
    gameModal.querySelector("h4").innerText = `${
      isVictory ? "Congrats !!" : "Game Over !"
    }`;
    // gameModal.querySelector('h4').innerText = `${isVictory ? 'Kya Baat Hai Woww Nicee !!' : 'Chii Itna Bhi Nhi Aata Chii !! '}`;

    gameModal.querySelector(
      "p"
    ).innerHTML = `${modalText} <b>${originalWord}</b> `;

    gameModal.classList.add("show");
  }, 300);
};

const initGame = (button, clickedLetter) => {

  // Added To Match The clickedLetter Case With currentWord Case

  clickedLetter = clickedLetter.toLowerCase();

  // Checking if clickedLetter is exist on the currentWord

  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {

      if (letter === clickedLetter) {

        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed"); // Adds the "guessed" class to the letter element
      }
    });
  } else {

    // If clicked letter doesn't exist then update the wrongGuessCount and Hangman Image

    wrongGuessCount++;
    hangmanImage.src = `/Assets/Hangman Game Images/Hangman-${wrongGuessCount}.svg`;

    hangmanImage.classList.add("shake"); // Adds the "shake" class to the hangman image
    setTimeout(() => {
      hangmanImage.classList.remove("shake"); // Removes the "shake" class after 500ms
    }, 500);
  }

  button.disabled = true;
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

  // Calling gameOver function if any of these condition meets

  if (wrongGuessCount === maxGuesses) return gameOver(false);

  if (correctLetters.length === currentWord.length) return gameOver(true);
};

//Creating Keyboards Buttons

for (let i = 97; i <= 122; i++) {

  // Creates keyboard buttons for each letter of the alphabet

  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);

  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}

getRandomWord(); // Starts the game by selecting a random word

playAgainBtn.addEventListener("click", getRandomWord); // Adds a click event listener to the play again button






// Full Explaination


// const hangmanImage = document.querySelector(".hangman-box img"); // Selects the hangman image element
// const wordDisplay = document.querySelector(".word-display"); // Selects the word display element
// const guessesText = document.querySelector(".guesses-text b"); // Selects the incorrect guesses text element
// const keyboardDiv = document.querySelector(".keyboard"); // Selects the keyboard element
// const gameModal = document.querySelector(".game-modal"); // Selects the game modal element
// const playAgainBtn = document.querySelector(".play-again"); // Selects the play again button

// let currentWord, originalWord, correctLetters, wrongGuessCount; // Declares variables for the current word, correct letters, and wrong guess count
// const maxGuesses = 6; // Sets the maximum number of incorrect guesses

// const resetGame = () => {
//   // Resetting all game variables and UI elements...
//   correctLetters = []; // Resets the array of correct letters
//   wrongGuessCount = 0; // Resets the wrong guess count
//   hangmanImage.src = `/Assets/Hangman Game Images/Hangman-${wrongGuessCount}.svg`; // Resets the hangman image
//   guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`; // Resets the guesses text
//   keyboardDiv
//     .querySelectorAll("button")
//     .forEach((btn) => (btn.disabled = false)); // Enables all keyboard buttons
//   wordDisplay.innerHTML = currentWord
//     .split("")
//     .map(() => `<li class="letter"></li>`)
//     .join(""); // Resets the word display with empty letters
//   gameModal.classList.remove("show"); // Hides the game modal
// };

// const getRandomWord = () => {
//   // Selecting a random word and hint from the word List

//   const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)]; // Selects a random word and hint from the wordList array
//   originalWord = word;
//   currentWord = word.toLowerCase(); // Converts the word to lowercase
//   console.log(word); // Logs the word to the console
//   document.querySelector(".hint-text b").innerText = hint; // Sets the hint text
//   resetGame(); // Resets the game
// };

// const gameOver = (isVictory) => {
//   // After 600ms Of game complete.. showing modal with relevant details

//   setTimeout(() => {
//     const modalText = isVictory
//       ? `You Found The Word :`
//       : `The Correct Word Was :`; // Sets the modal text based on whether the game was won or lost
//     // gameModal.querySelector('img').src = `/Assets/Hangman Game Images/${isVictory ? 'Victory' : 'Lost'}.gif`;
//     gameModal.querySelector("img").src = `/Assets/Hangman Game Images/${
//       isVictory ? "wow" : "chii"
//     }.gif`; // Sets the modal image based on whether the game was won or lost
//     gameModal.querySelector("h4").innerText = `${
//       isVictory ? "Congrats !!" : "Game Over !"
//     }`; // Sets the modal heading based on whether the game was won or lost
//     // gameModal.querySelector('h4').innerText = `${isVictory ? 'Kya Baat Hai Woww Nicee !!' : 'Chii Itna Bhi Nhi Aata Chii !! '}`;
//     gameModal.querySelector(
//       "p"
//     ).innerHTML = `${modalText} <b>${originalWord}</b> `; // Sets the modal paragraph with the correct word
//     gameModal.classList.add("show"); // Shows the game modal
//   }, 300);
// };

// const initGame = (button, clickedLetter) => {
//   // Added To Match The clickedLetter Case With currentWord Case

//   clickedLetter = clickedLetter.toLowerCase(); // Converts the clicked letter to lowercase

//   // Checking if clickedLetter is exist on the currentWord

//   if (currentWord.includes(clickedLetter)) {
//     [...currentWord].forEach((letter, index) => {
//       if (letter === clickedLetter) {
//         correctLetters.push(letter); // Adds the letter to the correct letters array
//         wordDisplay.querySelectorAll("li")[index].innerText = letter; // Displays the letter in the word display
//         wordDisplay.querySelectorAll("li")[index].classList.add("guessed"); // Adds the "guessed" class to the letter element
//       }
//     });
//   } else {
//     // If clicked letter doesn't exist then update the wrongGuessCount and Hangman Image

//     wrongGuessCount++; // Increments the wrong guess count
//     hangmanImage.src = `/Assets/Hangman Game Images/Hangman-${wrongGuessCount}.svg`; // Updates the hangman image

//     hangmanImage.classList.add("shake"); // Adds the "shake" class to the hangman image
//     setTimeout(() => {
//       hangmanImage.classList.remove("shake"); // Removes the "shake" class after 500ms
//     }, 500);
//   }

//   button.disabled = true; // Disables the clicked button
//   guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`; // Updates the guesses text

//   // Calling gameOver function if any of these condition meets

//   if (wrongGuessCount === maxGuesses) return gameOver(false); // Calls the gameOver function with "false" if the maximum number of guesses is reached
//   if (correctLetters.length === currentWord.length) return gameOver(true); // Calls the gameOver function with "true" if all letters are guessed
// };

// //Creating Keyboards Buttons

// for (let i = 97; i <= 122; i++) {
//   // Creates keyboard buttons for each letter of the alphabet
//   const button = document.createElement("button"); // Creates a new button element
//   button.innerText = String.fromCharCode(i); // Sets the text of the button to the corresponding letter
//   keyboardDiv.appendChild(button); // Appends the button to the keyboard div
//   button.addEventListener("click", (e) =>
//     initGame(e.target, String.fromCharCode(i))
//   ); // Adds a click event listener to the button
// }

// getRandomWord(); // Starts the game by selecting a random word

// playAgainBtn.addEventListener("click", getRandomWord); // Adds a click event listener to the play again button
