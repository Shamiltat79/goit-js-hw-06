function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorStorage = document.querySelector('.change-color');
const bodyColor = document.body;
const colorName = document.querySelector('.color');
colorStorage.addEventListener('click', selectColor);
function selectColor() {
  let colorSelect = getRandomHexColor();
  console.log(colorSelect);
  colorName.textContent = colorSelect;
  bodyColor.style.backgroundColor = colorSelect;

};
