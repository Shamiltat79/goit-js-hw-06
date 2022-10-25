const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('ul#ingredients');
// console.log(ingredientsListEl);

const ingredientToAdd = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join('');
ingredientsListEl.innerHTML = ingredientToAdd;
console.log(ingredientsListEl);