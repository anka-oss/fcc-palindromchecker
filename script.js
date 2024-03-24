// --- VARIABLES
const resultField = document.getElementById('result');

// --- FUNCTIONS
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

// --- LISTENEERS