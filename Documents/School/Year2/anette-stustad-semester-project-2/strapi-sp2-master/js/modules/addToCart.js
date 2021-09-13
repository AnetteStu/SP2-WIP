import { addButton } from "../utils/variables.js";
import { fetchProducts } from "./products.js";

export const addToCart = async () => {
    await fetchProducts()
    console.log ("ready to click buttons")
    console.log(addButton);
}