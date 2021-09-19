const deleteButton = document.querySelector("button.deleteBtn");
console.log(deleteButton);
// deleteButton.forEach((deleteItem) => {
//   deleteItem.addEventListenerAll("click", deleteProduct);
// });

export default function deleteProduct(id) {
  console.log(id);
  const deleteConfirmBtn = document.querySelector(".deleteConfirmBtn");

  deleteConfirmBtn.addEventListener("click", confirmDelete(id));
  // console.log(teams);
  // console.log(deleteConfirmBtn);
}

export function confirmDelete(id) {
  console.log("Delete Item " + id);
}

// When initial Delete button is hit, save the dataset-id to a variable in deleteProduct()
// When confirm button is tapped, fetch id from deleteProduct()
// Populate warning popup with name of the selected product, and when the "Confonfirm" button is clicked,
