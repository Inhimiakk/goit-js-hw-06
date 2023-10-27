const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    const textInput = nameInput.value;

    if (textInput === '') {
        nameOutput.textContent = 'Anonymous';
        
    }
    else {
        nameOutput.textContent = textInput;
    }
});