const inputName = document.querySelector('#name-input');
console.log("input", inputName);
const spanName = document.querySelector('#name-output');
console.log("span", spanName);

const handleInput = (e) => {
  e.preventDefault();
  const currentValue = e.target.value;
  console.log("value", currentValue);
  if (currentValue === "") {
    return spanName.innerHTML = "Anonymous"
  }
  spanName.innerHTML = currentValue;
}

inputName.addEventListener("input", handleInput);
