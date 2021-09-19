import { fetchUser, userStatus } from "./loginEvaluation.js";
import { featureCards, container } from "./variables.js";
import deleteProduct from "../modules/deleteProduct.js";

console.log(userStatus);

// Featured Render
export function renderFeatured(product) {
  featureCards.innerHTML = "";
  for (let i = 0; i < product.length; i++) {
    if (product[i].featured === true) {
      if (i >= 4) {
        break;
      }
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

  productToRender.forEach((team) => {
    let authUser = `<button class="btn btn-primary cartBtn"><i class="fa-shopping-cart fas" data-id="${team.id}" data-name="${team.name}"></i></button>`;
    if (userStatus) {
      authUser = `
          <button class="btn btn-primary cartBtn"><i class="fa-shopping-cart fas" data-id="${
            team.id
          }"></i></button>
          <button type="button" class="btn btn-secondary">Edit</button>
          <button type="button" class="btn btn-danger deleteBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-id="${
            team.id
          }" onclick="${deleteProduct(team.id)}">Delete</button>
      `;
    }
    container.innerHTML += `
                               <div class="d-flex position-relative result">
                                   <img src="" width="10%" class="flex-shrink-0 me-3" alt="...">
                                   <div class="content">
                                       <div class ="left">
                                           <h4 class="mt-0">${team.title}</h4>
                                           <h5 class="mt-0">€${team.price}</h5>
                                       </div>
                                       <p class="description">${team.description}</p>
                                       <div class="right">
                                           ${authUser}
                                       </div>
                                   </div>
                               </div>
                               `;
  });
}
