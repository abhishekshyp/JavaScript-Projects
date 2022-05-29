// Getting DOM Elements
const fromText = document.querySelector(".from-text"),
    toText = document.querySelector(".to-text"),
    exchageIcon = document.querySelector(".exchange"),
    selectTag = document.querySelectorAll("select"),
    icons = document.querySelectorAll(".row i"),
    translateBtn = document.querySelector("button");

selectTag.forEach((tag, id) => {
    for (const country_code in countries) {
        // English to Hindi set as default option
        let selected;
        if (id == 0 && country_code == "en-GB") {
            selected = "selected";
        } else if (id == 1 && country_code == "hi-IN") {
            selected = "selected";
        }
        // Adding all available languages as options
        let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
        tag.insertAdjacentHTML('beforeend', option);
    }
});

// Translate button event
translateBtn.addEventListener('click', () => {
    let text = fromText.value, // Entered Text
        translateFrom = selectTag[0].value, // Getting from tag values
        translateTo = selectTag[1].value; // Getting to tag values

    // Stop calling API if text area is empty
    if (!text) return;
    toText.setAttribute("placeholder", "Translating...");

    // Tranlating using an API
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    // Fetching the API
    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
        toText.setAttribute("placeholder", "Translation");
    });
});

// Exchange the Language selected
exchageIcon.addEventListener("click", () => {
    let tempText = fromText.value,
    tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

// Text to Speech Icon and Copy Icon Functionality
icons.forEach(icon => {
    icon.addEventListener('click', ({target}) => {
        // Text Copy Button
        if (target.classList.contains("fa-copy")) {
            if (target.id == "from") {
                navigator.clipboard.writeText(fromText.value);
                alert("Entered Text Copied");
            } else {
                navigator.clipboard.writeText(toText.value);
                alert("Translated Text Copied");
            }
        } else { // Text to Speech Button
            let utterance;
            if (target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value;
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
});