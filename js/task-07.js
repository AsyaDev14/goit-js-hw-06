const nameInput= document.querySelector("#font-size-control")
const nameSpan = document.querySelector("#text")

const handleChange = (event) => {
  nameSpan.style.fontSize = event.target.value + "px"
  console.log("event", event.target.value);
}
nameInput.addEventListener("input", handleChange)