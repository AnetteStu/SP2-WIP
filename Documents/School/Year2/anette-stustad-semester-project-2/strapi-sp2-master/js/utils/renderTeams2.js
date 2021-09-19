import { featureCards, container } from "./variables.js";

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

// Product Render
export function renderProduct(productToRender) {
  container.innerHTML = "";

  productToRender.forEach((team) => {
    // function checkImg() {
    //   const baseUrl = "http://localhost:1337";
    //   let imageDest = team.image.url;

    //   if (!imageDest) {
    //     imageDest = team.image_url;
    //   }
    //   imageDest = baseUrl + team.image.url;
    //   console.log(imageDest);
    //   return imageDest;
    // }

    // Use ${checkImg()} in img src, fix code
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
                                           <button class="btn btn-primary cartBtn"><i class="fas fa-shopping-cart"></i></button>
                                       </div>
                                   </div>
                               </div>
                               `;
  });
}
