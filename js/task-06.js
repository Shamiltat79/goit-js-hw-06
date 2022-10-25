const inputFieldValue = document.querySelector('#validation-input');
const inputLength = inputFieldValue.dataset.length;
// console.log(inputFieldValue);
// console.log(inputLength);
// console.log(typeof inputLength);   
const inputLengthToNumber = Number(inputLength);
// console.log(inputLengthToNumber);
// console.log(typeof inputLengthToNumber);
inputFieldValue.addEventListener('blur', counterCharacter);
function counterCharacter(event) {
    let currentLength = event.currentTarget.value;
    if (currentLength.length === inputLengthToNumber) {
        inputFieldValue.classList.add('valid');
    }
    else { inputFieldValue.classList.add('invalid') }
    
};