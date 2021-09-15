import { featureCards } from "./variables.js";
import { container, baseUrl } from "./variables.js";

const url = baseUrl + "products";
let allBtns = [];

export async function doFetch(currentUrl) {
  try {
    const response = await fetch(currentUrl);
    const products = await response.json();
    console.log(products);
    return products;
  } catch (error) {
    console.log("there was en error " + error);
  }
}

export function generateFeatured(product) {
  featureCards.innerHTML = "";

  for (let i = 0; i < product.length; i++) {
    if (product[i].featured === true) {
      featureCards.innerHTML += `
        <div class="col">     
            <div class="card" style="width: 18rem;">
                <img src="http://localhost:1337${product[i].image.url}" class="card-img-top card-img-custom" alt="${product[i].title}">
                <div class="card-body">
                    <h4 class="card-title">${product[i].title}</h4>
                    <h5>${product[i].price}</h5>
                </div>
            </div>                           
            `;
    }
  }
}

export function generateProductList(list) {
  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    container.innerHTML += `
                               <div class="d-flex position-relative result">
                                   <img src="http://localhost:1337${list[i].image.url}" width="10%" class="flex-shrink-0 me-3" alt="...">
                                   <div class="content">
                                       <div class ="left">
                                           <h4 class="mt-0">${list[i].title}</h4>
                                           <h5 class="mt-0">€${list[i].price}</h5>
                                       </div>
                                       <p class="description">${list[i].description}</p>
                                       <div class="right">
                                           <button class="btn btn-primary cartBtn">ADD TO CART</button>
                                       </div>
                                   </div>
                               </div>
                               `;
  }
}

// Product from doFetch is not properly configured and will need to be corrected for search to function, I believe
const search = document.querySelector("#searchInput");
function searchProducts(teams) {
  search.onkeyup = function (event) {
    const data = await doFetch(url);
    console.log(data);

    const searchValue = event.target.value.trim().toLowerCase();

    const filteredTeams = data.filter(function (team) {
      if (team.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });
    console.log(filteredTeams);
    generateProductList(filteredTeams);
  };
}

export async function init() {
  console.log(url);
  const data = await doFetch(url);
  generateFeatured(data);
  const featureFilter = data.filter((item) => {
    if (item.id > 4) {
      return false;
    }
    return true;
  });
  console.log(featureFilter);
  generateFeatured(featureFilter);
  generateProductList(data);

  console.log("data: " + data);

  allBtns = document.querySelectorAll(".cartBtn");
  console.log(allBtns);
}
init();
