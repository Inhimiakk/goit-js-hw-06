const counter = document.getElementById('counter');
const valueSpan = document.getElementById('value');
const incrementButton = counter.querySelector('[data-action = "increment"]');
const descrementButton = counter.querySelector('[data-action = "decrement"]');

let couneterValue = 0;

function updateSpanValue(){
    valueSpan.textContent = couneterValue;
}

descrementButton.addEventListener('click', () => {
    couneterValue -= 1;
    updateSpanValue();
});

incrementButton.addEventListener('click', () => {
    couneterValue += 1;
    updateSpanValue();
});

updateSpanValue();

