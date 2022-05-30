// DOM Elements
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXWZabcdefghijklmnopqrstuvwxwz!\"$%&/()=?@~`\\.\';:+=^*_-0123456789';
let output = document.getElementById("output");

// Random Value
function randomValue(value) {
    return Math.floor(Math.random()*value);
}

// Generate Password
function genPassword() {
    let length = document.getElementById('length').value;
    document.getElementById("length-val").textContent = length;
    let str = '';

    for (let i=0; i<length; i++) {
        let random = randomValue(characters.length);
        str += characters.charAt(random);
    }
    output.value = str;
}

// Copy on click
function copyClipboard() {
    output.select();
    document.execCommand('copy');
    alert("Password Copied!");
}

genPassword();