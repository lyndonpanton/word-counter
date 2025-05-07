document.addEventListener("DOMContentLoaded", function (e) {
    // Add a 1 second delay between calculating the new count(s)
    // Delete the current timeout when the input area is updated
    let wordInput = document.getElementById("word-input");
    wordInput.addEventListener("keyup", calculateStatistics);

    let wordCount = document.getElementById("word-count");
    let letterCount = document.getElementById("letter-count");
    let spaceCount = document.getElementById("space-count");
    let specialCharacterCount = document.getElementById("special-character-count");

    // Use web storage to retain user input on load (save after word count is
    // calculated)
    loadStorage();
    calculateStatistics(wordInput.value);

    function calculateStatistics() {
        let words = wordInput.value.trim().replace(/\s\s+/g, " ").split(" ");

        setTimeout(function (e) {
            calculateWordCount(words);
            calculateLetterCount(words);
            calculateSpaceCount(wordInput.value);
            calculateSpecialCharacterCount(words);
        }, 0);
    }

    function calculateLetterCount(words) {
        let letters = 0;

        for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < words[i].length; j++) {
                if (words[i][j].match(/[a-z]/i) !== null) {
                    letters += 1;
                }
            }
        }

        letterCount.textContent = letters;
    }

    function calculateSpaceCount(text) {
        let spaces = 0;

        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i) == " ") {
                spaces += 1;
            }
        }

        spaceCount.textContent = spaces;
    }

    function calculateSpecialCharacterCount(words) {
        let specialCharacters = 0;

        for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < words[i].length; j++) {
                if (words[i][j].match(/^[^a-zA-Z0-9]+$/i) !== null) {
                    specialCharacters += 1;
                }
            }
        }

        specialCharacterCount.textContent = specialCharacters;
    }

    function calculateWordCount(words) {
        if (words.length == 1 && words[0] == "") wordCount.textContent = 0
        else wordCount.textContent = words.length;
    }

    function loadStorage() {

    }

    function saveStatistics(e) {

    }
});
