const inputControl = document.getElementById('font-size-control');
const spanText = document.getElementById('text');

inputControl.addEventListener('input', () => {
    spanText.style.fontSize = inputControl.value + 'px';
});