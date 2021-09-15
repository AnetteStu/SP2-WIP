import { renderFeatured, renderProduct } from "./utils/renderTeams2";

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
  } catch (error) {
    console.log("an error occured " + error);
  }
}
getTeams();
