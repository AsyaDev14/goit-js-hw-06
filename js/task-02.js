const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector("#ingredients");
console.log("ulRef", ulRef);

// ingredients.forEach(ingredient => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   ulRef.append(li);
//   console.log(ingredient);
// });

ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  ulRef.append(li);
  console.log(ingredient);
})