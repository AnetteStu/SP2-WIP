const container = document.querySelector(".results");
let allBtns = "";

import { baseUrl } from "../utils/variables.js";

export async function fetchProducts() {
  const url = baseUrl + "products";
  console.log(url);

  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    container.innerHTML = "";

    for (let i = 0; i < json.length; i++) {
      if (i === 10) {
        break;
      }
      var toRender = json.lengt[i];
      console.log(toRender);

      //   container.innerHTML += `
      //                         <div class="d-flex position-relative result">
      //                             <img src="http://localhost:1337${json[i].image.url}" width="10%" class="flex-shrink-0 me-3" alt="...">
      //                             <div class="content">
      //                                 <div class ="left">
      //                                     <h4 class="mt-0">${json[i].title}</h4>
      //                                     <h5 class="mt-0">€${json[i].price}</h5>
      //                                 </div>
      //                                 <p class="description">${json[i].description}</p>
      //                                 <div class="right">
      //                                     <button class="btn btn-primary cartBtn">ADD TO CART</button>
      //                                 </div>
      //                             </div>
      //                         </div>
      //                         `;

      allBtns = document.querySelectorAll(".cartBtn");
    }
  } catch (error) {
    console.log("there was en error: " + error);
  }
}

console.log(allBtns);

function renderTeams() {}

// await detectResultClick.addEventListener("click", redirectUser);

// async function redirectUser() {
//     location.href = `id=1.html`;
// }
