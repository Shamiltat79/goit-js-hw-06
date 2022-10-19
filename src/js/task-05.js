const input = document.querySelector('#name-input');
// console.log(input);
const inputName = document.querySelector('#name-output');
// console.log(inputName);
const inputTextChange = (event) => {
    console.log(event.currentTarget.value);
    inputName.textContent = event.currentTarget.value;
};
input.addEventListener('input', inputTextChange);