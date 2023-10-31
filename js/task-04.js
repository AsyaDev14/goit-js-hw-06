const decrement = document.querySelector('[data-action="decrement"]')
console.log("dec", decrement);
const increment = document.querySelector('[data-action="increment"]')
console.log("incr",increment);
const value = document.querySelector("#value")
console.log("buttons", increment, value);

let total = 0;
const handleDecrement = () => {
  total -= 1;
  value.textContent = total;
};

const handleIncrement = () => {
  total += 1;
  value.textContent = total;
};

decrement.addEventListener("click", handleDecrement);
increment.addEventListener("click", handleIncrement);