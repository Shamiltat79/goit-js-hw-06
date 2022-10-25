function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

input.addEventListener('input', getInputAmount);
createBtn.addEventListener('click', createBoxes);
function getInputAmount(event) {
return event.currentTarget.value
};

function createBoxes(amount) {
  amount = Number(input.value);
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.marginTop = '20px';
    boxes.appendChild(box);
  }
}
destroyBtn.addEventListener('click', clearInput);
function clearInput() {
  boxes.innerHTML = '';
  input.value = '';
};