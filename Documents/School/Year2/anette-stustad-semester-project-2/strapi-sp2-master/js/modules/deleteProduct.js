const deleteButton = document.querySelector("button.deleteBtn");
console.log(deleteButton);
// deleteButton.forEach((deleteItem) => {
//   deleteItem.addEventListenerAll("click", deleteProduct);
// });

export default function deleteProduct(id) {
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
// Populate warning popup with name of the selected product, and when the "Conform" button is clicked, Run conformDelete()

// I'm unable to add forEach loop which would be handy
//Neither of the functions are being declaired yet it is being declaired for all the products and does not get called when clicking on the button. It's currently less than an hour till hand in and I don't know if I can fix it
