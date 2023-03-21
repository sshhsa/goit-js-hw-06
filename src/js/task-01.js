const itemCategory = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemCategory.length}`);

itemCategory.forEach((Item) =>
  console.log(
    `Category: ${Item.firstElementChild.textContent}
    Elements: ${Item.lastElementChild.children.length}`
  )
);
