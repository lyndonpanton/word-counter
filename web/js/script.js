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

        // setTimeout(function (e) {
            calculateWordCount(words);
            calculateLetterCount(words);
            calculateSpaceCount(wordInput.value);
            calculateSpecialCharacterCount(words);
        // }, 0);

        saveWordInput(wordInput.value);
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
        if (storageAvailable("localStorage")) {
            if (localStorage.getItem("word-input")) {
                wordInput.value = localStorage.getItem("word-input");
            }
        } else {
            console.log(
                "Local storage is not available. Failed to load storage."
            );
        }
    }

    function saveWordInput(text) {
        localStorage.setItem("word-input", text);
    }

    function storageAvailable(storageType) {
        let storage;
        try {
            storage = window[storageType];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                e.name === "QuotaExceededError" &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    }
});
