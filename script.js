// --- VARIABLES
const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultField = document.getElementById('result');

// --- FUNCTIONS
const palindromChecker = (input) => {
    const originalInput =input;

    resultField.replaceChildren();

    if (userInput === '') {
        alert('Please input a value');
        return;
    } 

    const lowerCaseInput  = input.replace(/\s|[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(lowerCaseInput);

    let msg = `${originalInput} ${lowerCaseInput === [...lowerCaseInput].reverse().join('') ? 'is' : 'is not'} a palindrome.`;

    const newPar = document.createElement('p');
    newPar.className = 'user-input';
    newPar.innerHTML = msg;
    resultField.appendChild(newPar);

    resultField.classList.remove('hidden');
}

// --- LISTENERS
checkPalindromeBtn.addEventListener("click", () => {
    palindromChecker(userInput.value);
    userInput.value = '';
});