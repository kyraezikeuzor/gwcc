// ===========================================
// Task 1: Game Constants and State
// Description: Set up the basic game configuration and variables
// ===========================================

const WORD_LENGTH = 5;
const MAX_GUESSES = 6;
const WORD_LIST = ['APPLE', 'BEACH', 'CRANE', 'DRAFT', 'EAGLE', 'FLUTE', 'GRAPE', 'HOUSE'];

let currentWord;
let currentRow = 0;
let currentTile = 0;
let isGameOver = false;
let isCustomWordMode = false;

// ===========================================
// Task 2: Custom Word Input
// Description: Allow users to set a custom word at game start
// ===========================================

function promptForCustomWord() {
    const customWord = prompt('Enter a 5-letter word to use (or click Cancel for random word):');
    if (customWord === null) {
        // User clicked Cancel, use random word
        currentWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
        isCustomWordMode = false;
    } else if (customWord.length === 5) {
        // Set custom word
        currentWord = customWord.toUpperCase();
        isCustomWordMode = false;
    } else {
        alert('Please enter a 5-letter word');
        promptForCustomWord();
    }
}

// ===========================================
// Task 3: Game Board Creation
// Description: Create the visual game board with tiles
// ===========================================

function createGameBoard() {
    const gameBoard = document.getElementById('gameBoard');
    for (let i = 0; i < MAX_GUESSES; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < WORD_LENGTH; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            row.appendChild(tile);
        }
        gameBoard.appendChild(row);
    }
}

// ===========================================
// Task 4: Keyboard Creation
// Description: Create the on-screen keyboard with click handlers
// ===========================================

function createKeyboard() {
    const keyboard = document.getElementById('keyboard');
    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '←']
    ];

    rows.forEach(row => {
        const keyboardRow = document.createElement('div');
        keyboardRow.className = 'keyboard-row';
        row.forEach(key => {
            const button = document.createElement('button');
            button.textContent = key;
            button.className = 'key';
            button.addEventListener('click', () => handleKeyInput(key));
            keyboardRow.appendChild(button);
        });
        keyboard.appendChild(keyboardRow);
    });
}

// ===========================================
// Task 5: Input Handling
// Description: Handle both keyboard and click inputs
// ===========================================

function handleKeyInput(key) {
    // First check if we're waiting for word setup
    if (isCustomWordMode && key === 'ENTER') {
        promptForCustomWord();
        return;
    }
    
    // Don't process other keys if we're still in custom word mode
    if (isCustomWordMode) {
        return;
    }

    // Don't process keys if game is over
    if (isGameOver) {
        return;
    }

    // Now handle the actual gameplay keys
    if (key === 'ENTER') {
        checkGuess();
    } else if (key === '←' || key === 'BACKSPACE') {
        deleteLetter();
    } else if (/^[A-Z]$/.test(key) && currentTile < WORD_LENGTH) {
        addLetter(key);
    }
}

function addLetter(letter) {
    if (currentTile < WORD_LENGTH) {
        const row = document.querySelector(`.row:nth-child(${currentRow + 1})`);
        const tile = row.children[currentTile];
        tile.textContent = letter;
        currentTile++;
    }
}

function deleteLetter() {
    if (currentTile > 0) {
        currentTile--;
        const row = document.querySelector(`.row:nth-child(${currentRow + 1})`);
        const tile = row.children[currentTile];
        tile.textContent = '';
    }
}

// ===========================================
// Task 6: Guess Checking
// Description: Check if the guess is correct and update tiles
// ===========================================

function checkGuess() {
    if (currentTile !== WORD_LENGTH) return;

    const row = document.querySelector(`.row:nth-child(${currentRow + 1})`);
    const tiles = [...row.children];
    const guess = tiles.map(tile => tile.textContent).join('');
    
    let remaining = currentWord.split('');
    const result = new Array(WORD_LENGTH).fill('absent');

    // First pass: check for correct letters
    for (let i = 0; i < WORD_LENGTH; i++) {
        if (guess[i] === currentWord[i]) {
            result[i] = 'correct';
            remaining[i] = null;
        }
    }

    // Second pass: check for present letters
    for (let i = 0; i < WORD_LENGTH; i++) {
        if (result[i] === 'absent') {
            const index = remaining.indexOf(guess[i]);
            if (index !== -1) {
                result[i] = 'present';
                remaining[index] = null;
            }
        }
    }

    // Update tile colors
    tiles.forEach((tile, index) => {
        tile.classList.add(result[index]);
    });

    // Check win/lose conditions
    if (guess === currentWord) {
        document.getElementById('message').textContent = 'Congratulations! You won!';
        isGameOver = true;
    } else if (currentRow === MAX_GUESSES - 1) {
        document.getElementById('message').textContent = `Game Over! The word was ${currentWord}`;
        isGameOver = true;
    } else {
        currentRow++;
        currentTile = 0;
    }
}

// ===========================================
// Task 7: Physical Keyboard Support
// Description: Add support for physical keyboard input
// ===========================================

document.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    handleKeyInput(key);
});

// ===========================================
// Task 8: Game Initialization
currentWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];  // Set initial random word

// Description: Initialize the game when the page loads
// ===========================================

createGameBoard();
createKeyboard();
document.getElementById('message').textContent = 'Press Enter to set a custom word or click Cancel for a random word';