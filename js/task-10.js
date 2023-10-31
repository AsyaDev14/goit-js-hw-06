function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const container = document.querySelector("#boxes");

let amount = 0;
createButton.addEventListener("click", () => createBoxes(amount));
destroyButton.addEventListener("click", destroyBoxes);
input.addEventListener("input", handleChange);

function handleChange(e) { 
  amount = e.target.value
  console.log("amount", amount);
};

function destroyBoxes() { 
  container.innerHTML = '';
};

function createBoxes(amount) {
  console.log("amount", amount);
  let box = '';
  for (let index = 0; index < amount; index++) {
    const width = 30 + index * 10;
    box += `<div style="width: ${width}px; height: ${width}px; background-color: ${getRandomHexColor()} "></div>`
  }

  container.innerHTML = box;
 };