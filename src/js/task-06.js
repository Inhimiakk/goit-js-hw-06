const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
    const expLength = parseInt(input.getAttribute("data-length"));

    if (input.value.length === expLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
    else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
});