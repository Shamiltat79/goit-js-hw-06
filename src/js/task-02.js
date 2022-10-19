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

const ingredientToAdd = ingredients.map(ingredient => {
  let ingredientsListElItem = document.createElement('li');
  ingredientsListElItem.classList.add('item');
  ingredientsListElItem.textContent = ingredient;
  ingredientsListEl.append(ingredientsListElItem);
});
console.log(ingredientsListEl);