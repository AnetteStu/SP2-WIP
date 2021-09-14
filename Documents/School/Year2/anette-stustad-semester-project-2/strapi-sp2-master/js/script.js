// Import from modules

// Can import 1 default from each file

// Import default= import NAME from ""; NAME can be anything because this is the default, this is not recomended though
// Import non-def= import {NAME} from ".js";
// Import multiple= NAME, {NAME} from ".js"; only from same file

// Can import variables with aliases using NAME as NEWNAME

// Import and use functions by making the function in the file and calling it here
// (Not sure how this works for self-calling functions such as listener events)

// Use this file to manage active scripts

import determenNav from "./utils/navbar.js"; //Go back to and make it responsive
import { fetchFeatured } from "./utils/renderTeams.js";
import { fetchProducts } from "./modules/products.js";
import { addToCart } from "./modules/addToCart.js";

function where() {
  if (location.href.includes("login")) {
    console.log("Current page is login.html");
    determenNav();
    return false;
  }
  if (location.href.includes("cart")) {
    console.log("Current page is cart.html");
    determenNav();
    return false;
  }

  if (location.href.includes("products")) {
    console.log("Current page is products.html");
    determenNav();
    fetchFeatured();
    fetchProducts();
    addToCart();
    return false;
  }
  if (location.href.includes("index")) {
    console.log("Current page is index.html");
    determenNav();
    fetchFeatured();
    return false;
  } else console.log("elsewhere");
}
where();
