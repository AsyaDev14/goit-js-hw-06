const inputName = document.querySelector("#validation-input");
console.log("inputName", inputName);

inputName.addEventListener("blur", handleInputBlur);
inputName.addEventListener("focus", handleInputFocus);

function handleInputBlur (e) {
  // e.preventDefault();
  console.log("event", e.target.value.length);
  console.log("event data", e.target.dataset.length);
  // 6- is string
  if (e.target.value.length === Number(e.target.dataset.length)) {
    inputName.classList.add("valid")
  } else {
    inputName.classList.add("invalid")
  }
}

function handleInputFocus(event) {
  event.target.classList.remove('valid');
  event.target.classList.remove('invalid');
}