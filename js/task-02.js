// Задание 2
// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");

const ingredientItems = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.classList.add("ingredient-item");
  ingredientItem.textContent = ingredient;
  return ingredientItem;
});

ingredientsRef.append(...ingredientItems);
