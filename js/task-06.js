const input = document.getElementById("validation-input");
const correct = input.getAttribute("data-length");
input.addEventListener("blur", () => {
  if (input.value.length === Number(correct)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
