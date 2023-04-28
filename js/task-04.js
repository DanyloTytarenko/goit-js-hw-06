const btn = document.querySelectorAll("[data-action]");
const value = document.getElementById("value");
let counterValue = 0;

btn.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.getAttribute("data-action") === "decrement") {
      counterValue--;
    } else {
      counterValue++;
    }
    value.textContent = counterValue;
  });
});
