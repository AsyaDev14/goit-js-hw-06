const form = document.querySelector(".login-form");

const object = {}
const handlerFormSumbit = (event) => {
  event.preventDefault();
  const emailInputValue = event.currentTarget.elements.email.value;
  console.log("emailInput", emailInputValue);
  const passwordInputValue = event.currentTarget.elements.password.value;
  console.log("passwordInput", passwordInputValue);
  if (emailInputValue === "" || passwordInputValue === "") {
    alert("всі поля повинні бути заповнені.")
    return;
  }
  object.email = emailInputValue;
  object.password = passwordInputValue;
  console.log("object", object);
  event.currentTarget.reset();
};

form.addEventListener("submit", handlerFormSumbit);
