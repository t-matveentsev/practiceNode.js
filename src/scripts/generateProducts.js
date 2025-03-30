import { readProducts } from "../utils/readProducts.js";
import { writeProducts } from "../utils/writeProducts.js";
import { createFakeProduct } from "../utils/createFakeProduct.js";

const generateProducts = async (number) => {
  try {
    const productsList = await readProducts();
    const newProducts = Array(number).fill("").map(createFakeProduct);
    await writeProducts([...productsList, ...newProducts]);
  } catch (error) {
    console.error(error);
  }
};

generateProducts(2);
