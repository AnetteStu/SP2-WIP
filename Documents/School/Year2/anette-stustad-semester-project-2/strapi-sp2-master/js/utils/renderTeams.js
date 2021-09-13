import { featureCards } from "./variables.js"; 
import {container, baseUrl} from "./variables.js";

const url = baseUrl+"products"

export async function updateProducts() {

    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        container.innerHTML = "";

        for (let i = 0; i < json.length; i++) {
            if (i === 10) {
                break;
            }

            if (json[i].featured === true) {
                container.innerHTML += `
                            <div class="d-flex position-relative result">
                                <img src="http://localhost:1337${json[i].image.url}" width="10%" class="flex-shrink-0 me-3" alt="...">
                                <div class="content">
                                    <div class ="left">
                                        <h4 class="mt-0">${json[i].title}</h4>
                                        <h5 class="mt-0">€${json[i].price}</h5>
                                    </div>
                                    <p class="description">${json[i].description}</p>
                                    <div class="right">
                                        <button type="button" class="btn btn-primary">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>  
                            `;
           }
        }



    } catch(error) {
        console.log("there was en error")
    }
}

export async function fetchFeatured() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        featureCards.innerHTML = "";

        for (let i = 0; i < json.length; i++) {
            if (i === 10) {
                break;
            }

            if (json[i].featured === true) {
                featureCards.innerHTML += `
                                    <div class="col">     
                                        <div class="card" style="width: 18rem;">
                                            <img src="http://localhost:1337${json[i].image.url}" class="card-img-top card-img-custom" alt="${json[i].title}">
                                            <div class="card-body">
                                                <h4 class="card-title">${json[i].title}</h4>
                                                <h5>${json[i].price}</h5>
                                                
                                            </div>
                                        </div>                           
                                      `
            }
        } 
    } catch(error) {
        console.log("there was en error: " + error)
    }
}