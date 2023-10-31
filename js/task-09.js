function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

const handleChange = (e) => {
  // console.log(getRandomHexColor());
  bodyRef.style.backgroundColor = getRandomHexColor(); 
  spanRef.innerHTML = getRandomHexColor();
};

buttonRef.addEventListener("click", handleChange);