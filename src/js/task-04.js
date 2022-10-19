const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
console.log(decrementBtn);
console.log(incrementBtn);
let counterValue = 0;

const remClick = () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
};
const addClick = () => {
    counterValue += 1;
     document.getElementById('value').textContent = counterValue;
};
decrementBtn.addEventListener('click', remClick);
incrementBtn.addEventListener('click', addClick);
