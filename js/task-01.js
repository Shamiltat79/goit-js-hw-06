const categories = document.querySelectorAll('.item');
console.log(categories);
console.log(`Number of categories: ${categories.length}`);



categories.forEach(category => {
    const categoryTitle = category.firstElementChild;
    const categorySublist = category.lastElementChild;
    if (categoryTitle.tagName === "H2") {
    console.log(`Category: ${categoryTitle.textContent}`);   
    }
    if (categorySublist.tagName === "UL") {
        console.log(
      `Elements: ${categorySublist.children.length}`);  
    }
    
   
});