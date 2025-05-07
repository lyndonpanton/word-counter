document.addEventListener("DOMContentLoaded", function (e) {
    // Add a 1 second delay between calculating the new count(s)
    // Delete the current timeout when the input area is updated
    let wordInput = document.getElementById("word-input");
    wordInput.addEventListener("keyup", calculateStatistics);

    let wordCount = document.getElementById("word-count");
    let letterCount = document.getElementById("letter-count");
    let spaceCount = document.getElementById("space-count");
    let specialCharacterCount = document.getElementById("special-character-count");

    let moreInformation = document.getElementById("more-information");
    moreInformation.addEventListener("click", displayProjectInformation);
    moreInformation.addEventListener("keypress", displayProjectInformation);

    let isPopupDisplayed = false;

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

    function displayProjectInformation(e) {
        if (!isPopupDisplayed) {
            if (
                (e.type == "keypress" && e.key === "Enter")
                || e.type == "click"
            ) {
                let popup = document.createElement("div");
                popup.id = "popup";

                let popupTitle = document.createElement("h2");
                popupTitle.classList.add("popup-title");
                popupTitle.textContent = "About This Project";

                let popupText = document.createElement("p");
                popupText.classList.add("popup-text");
                popupText.textContent =
                        "An application which allows users to view statistics, "
                popupText.textContent +=
                        "such as the word count and letter count, of the text they "
                popupText.textContent +=
                        "supply to the application. This application can be used "
                popupText.textContent +=
                        "to assist users writing up reports, dissertations, "
                popupText.textContent +=
                    "essays, literaure reviews, and more.";

                let popupCloseIcon = document.createElement("i");
                popupCloseIcon.classList.add(
                        "fa-solid", "fa-xmark", "popup-close"
                );
                popupCloseIcon.tabIndex = "1";
                popupCloseIcon.addEventListener("keyup", hideProjectInformation);

                popup.appendChild(popupTitle);
                popup.appendChild(popupText);
                popup.appendChild(popupCloseIcon);

                document.addEventListener("click", hideProjectInformation);
                // https://stackoverflow.com/a/3369624
                document.addEventListener("keyup", hideProjectInformation);

                document.getElementsByTagName("main")[0].appendChild(popup);
                isPopupDisplayed = true;
            }
        }
    }

    function hideProjectInformation(e) {
        if (e.key === "Escape") {
            let popup = document.getElementById("popup");

            if (popup) {
                popup.remove();
            }

            document.removeEventListener("click", hideProjectInformation);
            document.removeEventListener("keypress", hideProjectInformation);
            isPopupDisplayed = false;
        } else if (e.type == "click") {
            if (e.target.classList.contains("popup-close")) {
                let popup = document.getElementById("popup");
    
                if (popup) {
                    popup.remove();
                }
    
                document.removeEventListener("click", hideProjectInformation);
                document.removeEventListener("keypress", hideProjectInformation);
                isPopupDisplayed = false;
            }
        } else if (e.key === "Enter" && e.target.classList.contains("popup-close")) {
            if (e.target.classList.contains("popup-close")) {
                let popup = document.getElementById("popup");
    
                if (popup) {
                    popup.remove();
                }
    
                document.removeEventListener("click", hideProjectInformation);
                document.removeEventListener("keypress", hideProjectInformation);
                isPopupDisplayed = false;
            }
        }
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
