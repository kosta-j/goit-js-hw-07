const categoryItemsEl = document.querySelectorAll("#categories .item");
console.log(`В списке ${categoryItemsEl.length} категории.`);

categoryItemsEl.forEach((category) =>
  console.log(
    `Категория: ${category.firstElementChild.textContent}
Количество элементов: ${category.querySelectorAll("li").length}`
  )
);
