const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ing = document.getElementById("ingredients");
const fragment = document.createDocumentFragment();
ingredients.forEach((item) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = item;
  ingredientsItem.classList.add("item");
  fragment.appendChild(ingredientsItem);
});
ing.append(fragment);
