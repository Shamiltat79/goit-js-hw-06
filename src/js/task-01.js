const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const categoryItems = [...category.children];
    categoryItems.forEach(element => {
        if (element.tagName === 'H2') {
            console.log(`Category: ${element.textContent}`);
        }
    });
    categoryItems.forEach(element => {
        if (element.tagName === 'UL') {
            console.log(`Elements: ${element.children.length}`)
        }
    })
});