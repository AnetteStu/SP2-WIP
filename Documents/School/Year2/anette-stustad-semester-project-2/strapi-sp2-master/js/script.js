import { url } from "./utils/variables.js";
import { renderFeatured, renderProduct } from "./utils/renderTeams2.js";
import { searchInput, searchProducts } from "./modules/searchEngine.js";
// import deleteProduct from "./modules/deleteProduct.js";
import { handleCartItems } from "./modules/addToCart.js";
import determenNav from "./utils/navbar.js";
import { setupLogoutBtn } from "./utils/navbar.js";

export const featureCards = document.querySelector(".featureCards");
export const container = document.querySelector(".results");

document.documentElement.addEventListener("click", function (e) {
  // console.log(e.target);
});

determenNav();
setupLogoutBtn();

export let teams = "";

async function getTeams() {
  try {
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);

    teams = json;
    console.log(teams);

    if (location.href.includes("index")) {
      console.log("Current page is index.html");
      renderFeatured(teams);
      return false;
    }

    if (location.href.includes("products")) {
      console.log("Current page is products.html");
      renderFeatured(teams);
      renderProduct(teams);

      const cartBtns = document.querySelectorAll(".cartBtn i");
      cartBtns.forEach((item) => {
        item.addEventListener("click", handleCartItems);
      });

      searchInput.addEventListener("keyup", searchProducts(teams));
      return;
    }
  } catch (error) {
    console.log("an error occured " + error);
  }
}
getTeams();
