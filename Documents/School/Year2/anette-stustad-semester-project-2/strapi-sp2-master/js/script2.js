// import { baseUrl } from "./utils/variables";
// import { renderFeatured, renderProduct } from "./utils/renderTeams2";

export const featureCards = document.querySelector(".featureCards");
export const container = document.querySelector(".results");

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

export function renderProduct(productToRender) {
  container.innerHTML = "";

  productToRender.forEach(function (team) {
    container.innerHTML += `
                               <div class="d-flex position-relative result">
                                   <img src="http://localhost:1337${team.image.url}" width="10%" class="flex-shrink-0 me-3" alt="...">
                                   <div class="content">
                                       <div class ="left">
                                           <h4 class="mt-0">${team.title}</h4>
                                           <h5 class="mt-0">€${team.price}</h5>
                                       </div>
                                       <p class="description">${team.description}</p>
                                       <div class="right">
                                           <button class="btn btn-primary cartBtn">ADD TO CART</button>
                                       </div>
                                   </div>
                               </div>
                               `;
  });
}

export const baseUrl = "http://localhost:1337/";
export const url = baseUrl + "products";

async function getTeams() {
  try {
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    const teams = json;

    renderProduct(teams);
    generateFeatured(teams);
  } catch (error) {
    console.log("an error occured " + error);
  }
}
getTeams();
