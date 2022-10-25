const inputFieldValue = document.querySelector('#validation-input');
const inputLength = inputFieldValue.dataset.length;
const inputLengthToNumber = Number(inputLength);
console.log(inputLengthToNumber);

inputFieldValue.addEventListener('blur', onInputValue)

function onInputValue(event) {
    const value = event.currentTarget.value
    // console.log(value);
    // console.log(value.length);
    

        if (value.length === inputLengthToNumber) {
            inputFieldValue.classList.add('valid');
            inputFieldValue.classList.remove('invalid')
        }
    if (value.length !== inputLengthToNumber) {
        inputFieldValue.classList.add('invalid');
        inputFieldValue.classList.remove('valid')    }
    };


