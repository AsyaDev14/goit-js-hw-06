const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ingredients.forEach(ingredient => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   ulRef.append(li);
//   console.log(ingredient);
// });

// ingredients.map(ingredient => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   ulRef.append(li);
//   console.log(ingredient);
// })

function ingredientTemplate(ingredient) {
  const item = document.createElement("li");
  item.textContent = `${ingredient}`;
  item.classList.add("item");
  return item;
};

function loopTemplate(ingredients) {
  return ingredients.map(ingredientTemplate)
};

function renderIngridient(ingredients) {
  const ulRef = document.querySelector("#ingredients");
console.log("ulRef", ulRef);
  const list = loopTemplate(ingredients)
  ulRef.append(...list);
}

renderIngridient(ingredients)