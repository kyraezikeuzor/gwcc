// ===========================================
// Task 1: Game Constants and State
// Description: Set up the basic game configuration and variables
// ===========================================

// TODO: Define constants for word length and maximum guesses
const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

// TODO: Create a list of words to use in the game
const WORD_LIST = ["APPLE"]; // Add more words!

// TODO: Set up variables to track game state
let currentWord;
let currentRow = 0;
let currentTile = 0;
let isGameOver = false;
let isCustomWordMode = true;

// ===========================================
// Task 2: Custom Word Input
// Description: Allow users to set a custom word at game start
// ===========================================

function promptForCustomWord() {
    const customWord = prompt('Enter a 5-letter word for the Wordle')
    if (customWord === null) {
        // User clicked Cancel, use random word
        currentWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]
        isCustomWordMode = false;
    } else if (customWord.length === 5) {
        // Set up custom word 
        currentWord = customWord.toUpperCase()
        isCustomWordMode = false
    } else {
        alert('Please enter a 5-letter word')
        promptForCustomWord()
    }
  // TODO: Implement the custom word prompt
  // 1. Show a prompt to get a word from the user
  // 2. Make sure the word is 5 letters
  // 3. Set it as the currentWord
  // BONUS: Add error handling!
}

// ===========================================
// Task 3: Game Board Creation
// Description: Create the visual game board with tiles
// ===========================================

function createGameBoard() {
    const gameBoard = document.getElementById('gameBoard')
    for (let i = 0; i < MAX_GUESSES; i++) {
        const row  = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < WORD_LENGTH; j++) {
            const tile = document.createElement('div')
            tile.className = 'tile'
            row.appendChild(tile)
        }
        gameBoard.appendChild(row)
    }
  // TODO: Create the game board
  // 1. Get the gameBoard element
  // 2. Create rows (use MAX_GUESSES)
  // 3. Create tiles in each row (use WORD_LENGTH)
  // 4. Add the appropriate classes
}

// ===========================================
// Task 4: Keyboard Creation
// Description: Create the on-screen keyboard with click handlers
// ===========================================

function createKeyboard() {
  // TODO: Create the on-screen keyboard
  // 1. Define the keyboard layout
  // 2. Create buttons for each key
  // 3. Add click handlers
  // 4. Style the keyboard with CSS classes
}

// ===========================================
// Task 5: Input Handling
// Description: Handle both keyboard and click inputs
// ===========================================

function handleKeyInput(key) {
  // TODO: Handle different types of input
  // 1. Check if we're in custom word mode
  // 2. Check if the game is over
  // 3. Handle Enter, Backspace, and letter keys
}

function addLetter(letter) {
  // TODO: Add a letter to the current tile
  // 1. Check if we can add more letters
  // 2. Find the current tile
  // 3. Add the letter to the tile
}

function deleteLetter() {
  // TODO: Delete the last letter
  // 1. Check if there are letters to delete
  // 2. Find the current tile
  // 3. Remove the letter
}

// ===========================================
// Task 6: Guess Checking
// Description: Check if the guess is correct and update tiles
// ===========================================

function checkGuess() {
  // TODO: Implement guess checking logic
  // 1. Get the current guess from the tiles
  // 2. Check for correct letters (green)
  // 3. Check for present letters (yellow)
  // 4. Check for absent letters (gray)
  // 5. Update the tile colors
  // 6. Check for win/lose conditions
}

// ===========================================
// Task 7: Physical Keyboard Support
// Description: Add support for physical keyboard input
// ===========================================

// TODO: Add keyboard event listener
// 1. Listen for keydown events
// 2. Convert keys to the right format
// 3. Handle the input

// ===========================================
// Task 8: Game Initialization
// Description: Initialize the game when the page loads
// ===========================================

// TODO: Initialize the game
// 1. Create the game board
// 2. Create the keyboard
// 3. Show starting message

// BONUS CHALLENGES:
// - Add animations when revealing tiles
// - Add a scoring system
// - Add a timer
// - Add a hint system
// - Add local storage to save game state
// - Add a virtual "Share" button for results
