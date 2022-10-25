const inputRange = document.querySelector('#font-size-control');
const outputRange = document.querySelector('#text');
console.log(inputRange);
console.log(outputRange);
inputRange.addEventListener('input', fontSizeRange);

function fontSizeRange(event) {
    // console.log(event.target.value);
    const fontSizeAfterRange = event.target.value;
    outputRange.style.fontSize = `${fontSizeAfterRange}px`;   
};