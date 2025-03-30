import { readProducts } from "../utils/readProducts.js";

const getProductsByMinPrice = async (price) => {
  try {
    const productList = await readProducts();
    const filteredProducts = productList.filter((prod) => prod.price >= price);
    console.table(filteredProducts);
  } catch (error) {
    console.error(error);
  }
};

getProductsByMinPrice(500);
