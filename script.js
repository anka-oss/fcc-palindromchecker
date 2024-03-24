// --- VARIABLES
const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultField = document.getElementById('result');

// --- FUNCTIONS
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

// --- LISTENEERS