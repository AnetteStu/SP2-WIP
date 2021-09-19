import { url } from "../utils/variables.js";
import { getToken } from "../utils/storage.js";

const submitButton = document.querySelector(".submitButton");

const priceSelector = document.querySelector("#price");
const titleSelector = document.querySelector("#title");
const imageSelector = document.querySelector("#url");
const descriptionSelector = document.querySelector("#description");
const featureSelector = document.querySelector("#flexSwitchCheckDefault");

// Feature switch toggle
featureSelector.addEventListener("click", toggleFeatured);
let boolean = false;
console.log("Default value of bool is " + boolean);
function toggleFeatured() {
  console.log("Button was switched");
  boolean = !boolean;
  console.log("Default value of bool is " + boolean);
  return boolean;
}

console.log(featureSelector);
// console.log(titleSelector);
// console.log(imageSelector);
// console.log(descriptionSelector);
console.log(submitButton);

submitButton.addEventListener("click", submitForm);

function submitForm(event) {
  event.preventDefault();
  console.log("Thy button has been clicked");

  const priceValue = priceSelector.value;
  const titleValue = titleSelector.value.trim();
  const imageValue = imageSelector.value.trim();
  const descriptionValue = descriptionSelector.value;
  const featuredValue = boolean;

  if (
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    titleValue.length === 0 ||
    imageValue.length === 0 ||
    descriptionValue.length === 0
  ) {
    console.log("Values invalid!");
    //Call displaumessage
  }

  addProduct(
    priceValue,
    titleValue,
    imageValue,
    descriptionValue,
    featuredValue
  );
}

async function addProduct(price, title, image, description, featured) {
  //Import URL when fixed

  console.log(url);

  const data = JSON.stringify({
    price: price,
    title: title,
    image_url: image,
    description: description,
    featured: featured,
  });
  //Import GetToken function from localStorage
  const token = getToken();

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
  } catch (error) {
    console.log("An Error occured: " + error);
  }
}
