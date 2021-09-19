export function handleCartItems(event) {
  this.classList.toggle("fa-times");
  this.classList.toggle("fa-shopping-cart");

  const id = this.dataset.id;
  const currentItems = getExistingItems();

  console.log(currentItems);

  const productExists = currentItems.find(function (item) {
    console.log(item);
    return this.dataset.id === id;
  });

  console.log("productExists: ", productExists);

  if (!productExists) {
    const product = { id: id };

    currentItems.push(product);
    saveItems(currentItems);
  } else {
    const newItems = currentItems.filter((item) => item.id !== id);
    saveItems(newItems);
  }
}

function getExistingItems() {
  const items = localStorage.getItem("item");
  // console.log(items);

  if (!items) {
    return [];
  } else {
    return JSON.parse(items);
  }
}

function saveItems(items) {
  console.log("Item added to local storage");
  localStorage.setItem("item", JSON.stringify(items));
}
