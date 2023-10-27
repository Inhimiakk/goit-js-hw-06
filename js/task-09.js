function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('.change-color');
const spanText = document.querySelector('.color');
const body = document.body;

bodyColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;

  spanText.textContent = randomColor;
});
