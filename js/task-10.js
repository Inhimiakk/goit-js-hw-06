function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = input.value;
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
}

  const boxes = [];
  for (let i = 0; i < amount; i++) {
  const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
