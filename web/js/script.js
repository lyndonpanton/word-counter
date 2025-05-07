document.addEventListener("DOMContentLoaded", function (e) {
    console.log("DOM content has been loaded");


    // Add a 1 second delay between calculating the new count(s)
    // Delete the current timeout when the input area is updated
    let wordInput = document.getElementById("word-input");
    wordInput.addEventListener("keypress", calculateStatistics);

    let wordCount = document.getElementById("word-count");
    let letterCount = document.getElementById("letter-count");

    // Use web storage to retain user input on load (save after word count is
    // calculated)
    calculateStatistics(wordInput.value);

    function calculateStatistics() {
        // console.log(wordInput.value);
        let words = wordInput.value.replace(/\s\s+/g, " ").split(" ");
        console.log(words);

        calculateWordCount(words);
        calculateLetterCount(words);
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

    function calculateSpaceCount(e) {

    }

    function calculateWordCount(words) {
        wordCount.textContent = words.length;
        console.log(words.length);
    }

    function saveStatistics(e) {

    }
});
