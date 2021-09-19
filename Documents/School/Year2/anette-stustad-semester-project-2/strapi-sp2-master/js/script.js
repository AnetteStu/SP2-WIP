import { url } from "./utils/variables.js";
import { renderFeatured, renderProduct } from "./utils/renderTeams2.js";
// import { searchProducts } from "./modules/searchEngine.js";
// import { handleCartItems } from "./utils/renderTeams2.js";
import determenNav from "./utils/navbar.js";
import { determenUser } from "./utils/navbar.js";

export const featureCards = document.querySelector(".featureCards");
export const container = document.querySelector(".results");
const cartBtns = document.querySelectorAll(".cartBtn button");

document.documentElement.addEventListener("click", function (e) {
  // console.log(e.target);
});

determenNav();

async function getTeams() {
  try {
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    const teams = json;

    if (location.href.includes("index")) {
      console.log("Current page is index.html");
      renderFeatured(teams);
      return false;
    }

    if (location.href.includes("products")) {
      console.log("Current page is products.html");
      renderFeatured(teams);
      renderProduct(teams);
      return false;
    }
  } catch (error) {
    console.log("an error occured " + error);
  }
}
getTeams();

// Try to fetch buttons from products and add Functions to them
cartBtns.forEach((item) => {
  item.addEventListener("click", handleCartItems());
});

export function handleCartItems(event) {
  console.log("click");
  console.log(event);
}
