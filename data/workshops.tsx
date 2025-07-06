export const workshops = [
  {
    title: "Wordle",
    description: "Build a Wordle clone with HTML, CSS, and JavaScript.",
    link: "/w/wordle",
    icon: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Xs3Am9a3KmIBOEeVAM6zCD2w8d3qZ36XDw&s"
        alt="Apple Logo"
        className="w-5 h-5object-cover rounded-md"
      />
    ),
    starterCodeFiles: [
      {
        name: "index.html",
        content: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Wordle Clone - Coding Workshop</title>
            <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
            <h1>Wordle Clone</h1>
            <div class="game-board" id="gameBoard"></div>
            <div class="keyboard" id="keyboard"></div>
            <div class="message" id="message"></div>

            <script src="script.js"></script>
        </body>
        </html>
        `,
      },
      {
        name: "styles.css",
        content: `
        /* Base Styles */
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #121213;
            color: white;
        }
        
        /* Game Board Styles */
        .game-board {
            display: grid;
            grid-template-rows: repeat(6, 1fr);
            gap: 5px;
            margin: 20px;
        }
        
        .row {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 5px;
        }
        
        .tile {
            width: 60px;
            height: 60px;
            border: 2px solid #3a3a3c;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            font-weight: bold;
            text-transform: uppercase;
        }
        
        /* Tile State Styles */
        .correct {
            background-color: #538d4e;
            border-color: #538d4e;
        }
        
        .present {
            background-color: #b59f3b;
            border-color: #b59f3b;
        }
        
        .absent {
            background-color: #3a3a3c;
            border-color: #3a3a3c;
        }
        
        /* Keyboard Styles */
        .keyboard {
            display: grid;
            gap: 5px;
            margin-top: 20px;
        }
        
        .keyboard-row {
            display: flex;
            justify-content: center;
            gap: 5px;
        }
        
        .key {
            background-color: #818384;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 15px;
            font-weight: bold;
            cursor: pointer;
            min-width: 30px;
        }
        
        /* Message Styles */
        .message {
            margin-top: 20px;
            font-size: 1.2rem;
            min-height: 30px;
        }
  
        `,
      },
      {
        name: "script.js",
        content: `
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
        `,
      },
    ],
    finalCodeFiles: [
      {
        name: "index.html",
        content: `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Wordle Clone - Coding Workshop</title>
                <link rel="stylesheet" href="styles.css" />
            </head>
            <body>
                <h1>Wordle Clone</h1>
                <div class="game-board" id="gameBoard"></div>
                <div class="keyboard" id="keyboard"></div>
                <div class="message" id="message"></div>

                <script src="script.js"></script>
            </body>
            </html>
        `,
      },
      {
        name: "styles.css",
        content: `
        /* Base Styles */
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #121213;
            color: white;
        }
        
        /* Game Board Styles */
        .game-board {
            display: grid;
            grid-template-rows: repeat(6, 1fr);
            gap: 5px;
            margin: 20px;
        }
        
        .row {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 5px;
        }
        
        .tile {
            width: 60px;
            height: 60px;
            border: 2px solid #3a3a3c;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            font-weight: bold;
            text-transform: uppercase;
        }
        
        /* Tile State Styles */
        .correct {
            background-color: #538d4e;
            border-color: #538d4e;
        }
        
        .present {
            background-color: #b59f3b;
            border-color: #b59f3b;
        }
        
        .absent {
            background-color: #3a3a3c;
            border-color: #3a3a3c;
        }
        
        /* Keyboard Styles */
        .keyboard {
            display: grid;
            gap: 5px;
            margin-top: 20px;
        }
        
        .keyboard-row {
            display: flex;
            justify-content: center;
            gap: 5px;
        }
        
        .key {
            background-color: #818384;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 15px;
            font-weight: bold;
            cursor: pointer;
            min-width: 30px;
        }
        
        /* Message Styles */
        .message {
            margin-top: 20px;
            font-size: 1.2rem;
            min-height: 30px;
        }
  
        `,
      },
      {
        name: "script.js",
        content: `
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
        `,
      },
    ],
  },
  {
    title: "Personal Website",
    description: "Build a personal website with HTML, CSS, and JavaScript.",
    link: "/w/personal-website",
    icon: (
      <div className="flex items-center justify-center w-5 h-5bg-gray-200 rounded-md">
        🌐
      </div>
    ),
    starterCodeFiles: [
      {
        name: "index.html",
        content: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My Personal Website</title>
                <link rel="stylesheet" href="styles.css" />
            </head>
            <body>

                <header>
                <div class="container">
                    <h1>[Your Name]</h1>
                    <p>[Your Title/Role]</p>
                </div>
                </header>

                <nav>
                <div class="container">
                    <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#interests">My Interests</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                </nav>

                <main class="container">
                <section id="about">
                    <h2>About Me</h2>
                    <div class="about-content">
                    <img
                        src="https://via.placeholder.com/200"
                        alt="Profile Image"
                        class="profile-img"
                    />
                    <div>
                        <p>
                        Hi there! I'm [Your Name], a [grade level] student at [School Name] with a
                        passion for [your interests/hobbies].
                        </p>
                        <p>
                        I'm currently exploring the world of coding through my [Coding Club Name],
                        and I'm excited to share my journey and projects on this website!
                        </p>
                        <p>
                        When I'm not coding, you can find me [your other activities/hobbies].
                        </p>
                    </div>
                    </div>
                </section>

                <section id="interests">
                    <h2>My Interests</h2>
                    <div class="interests-grid">
                    <div class="interest-card">
                        <h3>Technology</h3>
                        <p>
                        I love learning about coding, web development, and how technology
                        can be used to solve real-world problems.
                        </p>
                    </div>
                    <div class="interest-card">
                        <h3>School Activities</h3>
                        <p>
                        I'm involved in [club/organization name] at my
                        school, where I've developed leadership and teamwork skills.
                        </p>
                    </div>
                    <div class="interest-card">
                        <h3>Future Goals</h3>
                        <p>
                        [Describe your future goals, dreams, or what you want to achieve]
                        </p>
                    </div>
                    </div>
                </section>

                <section id="projects">
                    <h2>My Projects</h2>
                    <div class="projects-grid">
                    <div class="project-card">
                        <img
                        src="https://via.placeholder.com/300x180"
                        alt="Project 1"
                        class="project-img"
                        />
                        <div class="project-content">
                        <h3>[Project Name 1]</h3>
                        <p>
                            [Brief description of your first project - what it does, what you learned]
                        </p>
                        </div>
                    </div>
                    <div class="project-card">
                        <img
                        src="https://via.placeholder.com/300x180"
                        alt="Project 2"
                        class="project-img"
                        />
                        <div class="project-content">
                        <h3>[Project Name 2]</h3>
                        <p>
                            [Brief description of your second project - what it does, what you learned]
                        </p>
                        </div>
                    </div>
                    <div class="project-card">
                        <img
                        src="https://via.placeholder.com/300x180"
                        alt="Project 3"
                        class="project-img"
                        />
                        <div class="project-content">
                        <h3>[Project Name 3]</h3>
                        <p>
                            [Brief description of your third project - what it does, what you learned]
                        </p>
                        </div>
                    </div>
                    </div>
                </section>

                <section id="contact">
                    <h2>Get In Touch</h2>
                    <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                    </form>
                </section>

                </main>

                <footer>
                <div class="container">
                    <p>&copy; 2025 [Your Name]'s Website. Created with [Coding Club Name]</p>
                    <div class="social-links">
                    <a href="#">Instagram</a>
                    <a href="#">GitHub</a>
                    <a href="#">Email</a>
                    </div>
                </div>
                </footer>

                <script src="script.js"></script>
            </body>
            </html>
            `,
      },
      {
        name: "styles.css",
        content: `
            /* CSS Reset */
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            /* General Styling */
            body {
                font-family: "Arial", sans-serif;
                line-height: 1.6;
                color: purple;
                background-color: purple;
            }
            
            .container {
                width: 85%;
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
            }
            
            /* Header Styling */
            header {
                background: linear-gradient(to right, #ff6b6b, #ff8e8e);
                color: white;
                padding: 30px 0;
                text-align: center;
            }
            
            header h1 {
                font-size: 2.5rem;
                margin-bottom: 10px;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
            }
            
            header p {
                font-size: 1.2rem;
                letter-spacing: 1px;
            }
            
            /* Navigation Styling */
            nav {
                background-color: #ff8e8e;
                padding: 15px 0;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            nav ul {
                list-style: none;
                display: flex;
                justify-content: center;
            }
            
            nav li {
                margin: 0 20px;
            }
            
            nav a {
                color: blue;
                text-decoration: none;
                font-weight: bold;
                font-size: 1.1rem;
                transition: all 0.3s;
                padding: 5px 10px;
                border-radius: 20px;
            }
            
            nav a:hover {
                background-color: pink;
                color: #ff6b6b;
            }
            
            /* Main Content Styling */
            main {
                padding: 40px 0;
            }
            
            section {
                margin-bottom: 50px;
                background-color: white;
                padding: 25px;
                border-radius: 15px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }
            
            h2 {
                color: #ff6b6b;
                margin-bottom: 20px;
                border-bottom: 2px solid #ff6b6b;
                padding-bottom: 10px;
                font-size: 1.8rem;
            }
            
            .about-content {
                display: flex;
                align-items: center;
                gap: 30px;
            }
            
            .profile-img {
                width: 200px;
                height: 200px;
                border-radius: 50%;
                object-fit: cover;
                border: 5px solid #ff8e8e;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            }
            
            /* Interests Section */
            .interests-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 20px;
            }
            
            .interest-card {
                background-color: #fff8f8;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;
            }
            
            .interest-card:hover {
                transform: translateY(-5px);
            }
            
            .interest-card h3 {
                color: #ff6b6b;
                margin-bottom: 10px;
                font-size: 1.3rem;
            }
            
            /* Projects Section */
            .projects-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 25px;
            }
            
            .project-card {
                background-color: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                transition: all 0.3s;
                border: 1px solid #eee;
            }
            
            .project-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
            }
            
            .project-img {
                width: 100%;
                height: 180px;
                object-fit: cover;
            }
            
            .project-content {
                padding: 20px;
            }
            
            .project-content h3 {
                color: #ff6b6b;
                margin-bottom: 10px;
                font-size: 1.3rem;
            }
            
            /* Contact Form Styling */
            form {
                background-color: #fff8f8;
                padding: 25px;
                border-radius: 15px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }
            
            .form-group {
                margin-bottom: 20px;
            }
            
            label {
                display: block;
                margin-bottom: 8px;
                font-weight: bold;
                color: #ff6b6b;
            }
            
            input,
            textarea {
                width: 100%;
                padding: 12px;
                border: 1px solid #ffcaca;
                border-radius: 8px;
                font-size: 1rem;
                transition: border 0.3s;
            }
            
            input:focus,
            textarea:focus {
                outline: none;
                border-color: #ff6b6b;
                box-shadow: 0 0 5px rgba(255, 107, 107, 0.3);
            }
            
            textarea {
                height: 150px;
                resize: vertical;
            }
            
            button {
                background-color: #ff6b6b;
                color: white;
                border: none;
                padding: 12px 25px;
                border-radius: 25px;
                cursor: pointer;
                font-size: 1rem;
                font-weight: bold;
                transition: all 0.3s;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            button:hover {
                background-color: #ff5252;
                transform: translateY(-3px);
                box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
            }
            
            /* Footer Styling */
            footer {
                background-color: #333;
                color: white;
                text-align: center;
                padding: 25px 0;
                margin-top: 40px;
                border-top: 5px solid #ff6b6b;
            }
            
            .social-links {
                margin-top: 15px;
            }
            
            .social-links a {
                color: white;
                margin: 0 15px;
                font-size: 1rem;
                text-decoration: none;
                transition: color 0.3s;
            }
            
            .social-links a:hover {
                color: #ff8e8e;
                text-decoration: underline;
            }
            
            /* Responsive Design */
            @media (max-width: 768px) {
                .about-content {
                flex-direction: column;
                text-align: center;
                }
            
                nav ul {
                flex-direction: column;
                align-items: center;
                }
            
                nav li {
                margin: 10px 0;
                }
            
                .projects-grid,
                .interests-grid {
                grid-template-columns: 1fr;
                }
            
                h2 {
                font-size: 1.6rem;
                }
            
                header h1 {
                font-size: 2rem;
                }
            }
  
            `,
      },
      {
        name: "script.js",
        content: `
        // ===========================================
        // Personal Website JavaScript
        // Description: Add interactivity to your personal website
        // ===========================================

        // Wait for the page to load
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Personal website loaded!');
            
            // ===========================================
            // Task 1: Smooth Scrolling Navigation
            // Description: Make navigation links scroll smoothly to sections
            // ===========================================
            
            // TODO: Add smooth scrolling to navigation links
            // 1. Get all navigation links
            // 2. Add click event listeners
            // 3. Prevent default behavior
            // 4. Scroll to the target section smoothly
            
            // ===========================================
            // Task 2: Contact Form Handling
            // Description: Handle form submission and show success message
            // ===========================================
            
            // TODO: Handle contact form submission
            // 1. Get the contact form
            // 2. Add submit event listener
            // 3. Prevent default form submission
            // 4. Get form data
            // 5. Show success message
            // 6. Clear the form
            
            // ===========================================
            // Task 3: Dynamic Content Loading
            // Description: Add some dynamic content to make the site more interactive
            // ===========================================
            
            // TODO: Add a visitor counter or dynamic greeting
            // 1. Create a function to update the page with dynamic content
            // 2. Add a visitor counter or personalized greeting
            // 3. Update the page when it loads
            
            // ===========================================
            // Task 4: Project Card Interactions
            // Description: Add hover effects and click interactions to project cards
            // ===========================================
            
            // TODO: Add interactions to project cards
            // 1. Get all project cards
            // 2. Add click event listeners
            // 3. Show project details or open links
            
            // ===========================================
            // Task 5: Theme Toggle (Bonus)
            // Description: Add a dark/light theme toggle
            // ===========================================
            
            // TODO: Create a theme toggle feature
            // 1. Add a theme toggle button to the header
            // 2. Create CSS classes for dark theme
            // 3. Toggle between themes when button is clicked
            // 4. Save theme preference in localStorage
            
            // BONUS CHALLENGES:
            // - Add animations when scrolling to sections
            // - Create a typing effect for the header text
            // - Add a skills progress bar
            // - Create a photo gallery for projects
            // - Add social media links with hover effects
            // - Create a blog section with dynamic content
        });
        `,
      },
    ],
    finalCodeFiles: [
      {
        name: "index.html",
        content: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My Personal Website</title>
                <link rel="stylesheet" href="styles.css" />
            </head>
            <body>

                <header>
                <div class="container">
                    <h1>[Your Name]</h1>
                    <p>[Your Title/Role]</p>
                </div>
                </header>

                <nav>
                <div class="container">
                    <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#interests">My Interests</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                </nav>

                <main class="container">
                <section id="about">
                    <h2>About Me</h2>
                    <div class="about-content">
                    <img
                        src="https://via.placeholder.com/200"
                        alt="Profile Image"
                        class="profile-img"
                    />
                    <div>
                        <p>
                        Hi there! I'm [Your Name], a [grade level] student at [School Name] with a
                        passion for [your interests/hobbies].
                        </p>
                        <p>
                        I'm currently exploring the world of coding through my [Coding Club Name],
                        and I'm excited to share my journey and projects on this website!
                        </p>
                        <p>
                        When I'm not coding, you can find me [your other activities/hobbies].
                        </p>
                    </div>
                    </div>
                </section>

                <section id="interests">
                    <h2>My Interests</h2>
                    <div class="interests-grid">
                    <div class="interest-card">
                        <h3>Technology</h3>
                        <p>
                        I love learning about coding, web development, and how technology
                        can be used to solve real-world problems.
                        </p>
                    </div>
                    <div class="interest-card">
                        <h3>School Activities</h3>
                        <p>
                        I'm involved in [club/organization name] at my
                        school, where I've developed leadership and teamwork skills.
                        </p>
                    </div>
                    <div class="interest-card">
                        <h3>Future Goals</h3>
                        <p>
                        [Describe your future goals, dreams, or what you want to achieve]
                        </p>
                    </div>
                    </div>
                </section>

                <section id="projects">
                    <h2>My Projects</h2>
                    <div class="projects-grid">
                    <div class="project-card">
                        <img
                        src="https://via.placeholder.com/300x180"
                        alt="Project 1"
                        class="project-img"
                        />
                        <div class="project-content">
                        <h3>[Project Name 1]</h3>
                        <p>
                            [Brief description of your first project - what it does, what you learned]
                        </p>
                        </div>
                    </div>
                    <div class="project-card">
                        <img
                        src="https://via.placeholder.com/300x180"
                        alt="Project 2"
                        class="project-img"
                        />
                        <div class="project-content">
                        <h3>[Project Name 2]</h3>
                        <p>
                            [Brief description of your second project - what it does, what you learned]
                        </p>
                        </div>
                    </div>
                    <div class="project-card">
                        <img
                        src="https://via.placeholder.com/300x180"
                        alt="Project 3"
                        class="project-img"
                        />
                        <div class="project-content">
                        <h3>[Project Name 3]</h3>
                        <p>
                            [Brief description of your third project - what it does, what you learned]
                        </p>
                        </div>
                    </div>
                    </div>
                </section>

                <section id="contact">
                    <h2>Get In Touch</h2>
                    <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                    </form>
                </section>

                </main>

                <footer>
                <div class="container">
                    <p>&copy; 2025 [Your Name]'s Website. Created with [Coding Club Name]</p>
                    <div class="social-links">
                    <a href="#">Instagram</a>
                    <a href="#">GitHub</a>
                    <a href="#">Email</a>
                    </div>
                </div>
                </footer>

                <script src="script.js"></script>
            </body>
            </html>
            `,
      },
      {
        name: "styles.css",
        content: `
            /* CSS Reset */
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            /* General Styling */
            body {
                font-family: "Arial", sans-serif;
                line-height: 1.6;
                color: purple;
                background-color: purple;
            }
            
            .container {
                width: 85%;
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
            }
            
            /* Header Styling */
            header {
                background: linear-gradient(to right, #ff6b6b, #ff8e8e);
                color: white;
                padding: 30px 0;
                text-align: center;
            }
            
            header h1 {
                font-size: 2.5rem;
                margin-bottom: 10px;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
            }
            
            header p {
                font-size: 1.2rem;
                letter-spacing: 1px;
            }
            
            /* Navigation Styling */
            nav {
                background-color: #ff8e8e;
                padding: 15px 0;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            nav ul {
                list-style: none;
                display: flex;
                justify-content: center;
            }
            
            nav li {
                margin: 0 20px;
            }
            
            nav a {
                color: blue;
                text-decoration: none;
                font-weight: bold;
                font-size: 1.1rem;
                transition: all 0.3s;
                padding: 5px 10px;
                border-radius: 20px;
            }
            
            nav a:hover {
                background-color: pink;
                color: #ff6b6b;
            }
            
            /* Main Content Styling */
            main {
                padding: 40px 0;
            }
            
            section {
                margin-bottom: 50px;
                background-color: white;
                padding: 25px;
                border-radius: 15px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }
            
            h2 {
                color: #ff6b6b;
                margin-bottom: 20px;
                border-bottom: 2px solid #ff6b6b;
                padding-bottom: 10px;
                font-size: 1.8rem;
            }
            
            .about-content {
                display: flex;
                align-items: center;
                gap: 30px;
            }
            
            .profile-img {
                width: 200px;
                height: 200px;
                border-radius: 50%;
                object-fit: cover;
                border: 5px solid #ff8e8e;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            }
            
            /* Interests Section */
            .interests-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 20px;
            }
            
            .interest-card {
                background-color: #fff8f8;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;
            }
            
            .interest-card:hover {
                transform: translateY(-5px);
            }
            
            .interest-card h3 {
                color: #ff6b6b;
                margin-bottom: 10px;
                font-size: 1.3rem;
            }
            
            /* Projects Section */
            .projects-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 25px;
            }
            
            .project-card {
                background-color: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                transition: all 0.3s;
                border: 1px solid #eee;
            }
            
            .project-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
            }
            
            .project-img {
                width: 100%;
                height: 180px;
                object-fit: cover;
            }
            
            .project-content {
                padding: 20px;
            }
            
            .project-content h3 {
                color: #ff6b6b;
                margin-bottom: 10px;
                font-size: 1.3rem;
            }
            
            /* Contact Form Styling */
            form {
                background-color: #fff8f8;
                padding: 25px;
                border-radius: 15px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }
            
            .form-group {
                margin-bottom: 20px;
            }
            
            label {
                display: block;
                margin-bottom: 8px;
                font-weight: bold;
                color: #ff6b6b;
            }
            
            input,
            textarea {
                width: 100%;
                padding: 12px;
                border: 1px solid #ffcaca;
                border-radius: 8px;
                font-size: 1rem;
                transition: border 0.3s;
            }
            
            input:focus,
            textarea:focus {
                outline: none;
                border-color: #ff6b6b;
                box-shadow: 0 0 5px rgba(255, 107, 107, 0.3);
            }
            
            textarea {
                height: 150px;
                resize: vertical;
            }
            
            button {
                background-color: #ff6b6b;
                color: white;
                border: none;
                padding: 12px 25px;
                border-radius: 25px;
                cursor: pointer;
                font-size: 1rem;
                font-weight: bold;
                transition: all 0.3s;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            button:hover {
                background-color: #ff5252;
                transform: translateY(-3px);
                box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
            }
            
            /* Footer Styling */
            footer {
                background-color: #333;
                color: white;
                text-align: center;
                padding: 25px 0;
                margin-top: 40px;
                border-top: 5px solid #ff6b6b;
            }
            
            .social-links {
                margin-top: 15px;
            }
            
            .social-links a {
                color: white;
                margin: 0 15px;
                font-size: 1rem;
                text-decoration: none;
                transition: color 0.3s;
            }
            
            .social-links a:hover {
                color: #ff8e8e;
                text-decoration: underline;
            }
            
            /* Responsive Design */
            @media (max-width: 768px) {
                .about-content {
                flex-direction: column;
                text-align: center;
                }
            
                nav ul {
                flex-direction: column;
                align-items: center;
                }
            
                nav li {
                margin: 10px 0;
                }
            
                .projects-grid,
                .interests-grid {
                grid-template-columns: 1fr;
                }
            
                h2 {
                font-size: 1.6rem;
                }
            
                header h1 {
                font-size: 2rem;
                }
            }
  
            `,
      },
      {
        name: "script.js",
        content: `
        // ===========================================
        // Personal Website JavaScript - Completed Version
        // Description: Interactive features for your personal website
        // ===========================================

        // Wait for the page to load
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Personal website loaded!');
            
            // ===========================================
            // Task 1: Smooth Scrolling Navigation
            // ===========================================
            
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
            
            // ===========================================
            // Task 2: Contact Form Handling
            // ===========================================
            
            const contactForm = document.querySelector('form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const formData = new FormData(this);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const message = formData.get('message');
                    
                    // Show success message
                    alert('Thank you for your message! I\\'ll get back to you soon.');
                    
                    // Clear the form
                    this.reset();
                });
            }
            
            // ===========================================
            // Task 3: Dynamic Content Loading
            // ===========================================
            
            // Add a visitor counter (stored in localStorage)
            let visitorCount = localStorage.getItem('visitorCount') || 0;
            visitorCount = parseInt(visitorCount) + 1;
            localStorage.setItem('visitorCount', visitorCount);
            
            // Add visitor count to the page (you can customize where to show it)
            const header = document.querySelector('header .container');
            if (header) {
                const visitorInfo = document.createElement('p');
                visitorInfo.textContent = 'Welcome! You are visitor #' + visitorCount;
                visitorInfo.style.fontSize = '0.9rem';
                visitorInfo.style.opacity = '0.8';
                header.appendChild(visitorInfo);
            }
            
            // ===========================================
            // Task 4: Project Card Interactions
            // ===========================================
            
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                card.addEventListener('click', function() {
                    const projectTitle = this.querySelector('h3').textContent;
                    alert('You clicked on: ' + projectTitle + '\\n\\nThis could open a detailed view or link to the project!');
                });
            });
            
            // ===========================================
            // Task 5: Theme Toggle (Bonus Feature)
            // ===========================================
            
            // Add theme toggle button to header
            const headerContainer = document.querySelector('header .container');
            if (headerContainer) {
                const themeToggle = document.createElement('button');
                themeToggle.textContent = '🌙';
                themeToggle.style.cssText = 'position: absolute; top: 20px; right: 20px; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: white;';
                headerContainer.style.position = 'relative';
                headerContainer.appendChild(themeToggle);
                
                // Check for saved theme preference
                const currentTheme = localStorage.getItem('theme') || 'light';
                if (currentTheme === 'dark') {
                    document.body.classList.add('dark-theme');
                    themeToggle.textContent = '☀️';
                }
                
                themeToggle.addEventListener('click', function() {
                    document.body.classList.toggle('dark-theme');
                    const isDark = document.body.classList.contains('dark-theme');
                    localStorage.setItem('theme', isDark ? 'dark' : 'light');
                    this.textContent = isDark ? '☀️' : '🌙';
                });
            }
        });
        
        // Add dark theme styles
        const darkThemeStyles = document.createElement('style');
        darkThemeStyles.textContent = \`
            .dark-theme {
                background-color: #1a1a1a !important;
                color: #ffffff !important;
            }
            .dark-theme section {
                background-color: #2d2d2d !important;
                color: #ffffff !important;
            }
            .dark-theme .interest-card,
            .dark-theme form {
                background-color: #3d3d3d !important;
                color: #ffffff !important;
            }
            .dark-theme .project-card {
                background-color: #2d2d2d !important;
                color: #ffffff !important;
            }
        \`;
        document.head.appendChild(darkThemeStyles);
        `,
      },
    ],
  },
];
