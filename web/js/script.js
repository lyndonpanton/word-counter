document.addEventListener("DOMContentLoaded", function (e) {
    // Add a 1 second delay between calculating the new count(s)
    // Delete the current timeout when the input area is updated
    let wordInput = document.getElementById("word-input");
    wordInput.addEventListener("keypress", calculateStatistics);

    let wordCount = document.getElementById("word-count");
    let letterCount = document.getElementById("letter-count");
    let spaceCount = document.getElementById("space-count");

    // Use web storage to retain user input on load (save after word count is
    // calculated)
    loadStorage();
    calculateStatistics(wordInput.value);

    function calculateStatistics() {
        let words = wordInput.value.replace(/\s\s+/g, " ").split(" ");
        console.log(words);

        calculateWordCount(words);
        calculateLetterCount(words);
        calculateSpaceCount(wordInput.value);
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

    function calculateWordCount(words) {
        wordCount.textContent = words.length;
        console.log(words.length);
    }

    function loadStorage() {

    }

    function saveStatistics(e) {

    }
});
