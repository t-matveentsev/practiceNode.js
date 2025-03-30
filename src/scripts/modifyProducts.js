import { readProducts } from "../utils/readProducts.js";
import { writeProducts } from "../utils/writeProducts.js";

const modifyProducts = async () => {
  try {
    const productList = await readProducts();
    const modifiedProducts = productList.map(
      ({ description, ...product }) => product
    );
    writeProducts(modifiedProducts);
  } catch (error) {
    console.error(error);
  }
};

modifyProducts();
