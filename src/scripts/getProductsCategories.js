import { readProducts } from "../utils/readProducts.js";

const getProductsCategories = async () => {
  try {
    const productsList = await readProducts();
    const productCategories = productsList.map(({ category }) => category);
    const filteredCategories = productCategories.filter(
      (category, index, array) => array.indexOf(category) === index
    );
    console.log(`Product Categories: ${filteredCategories} `);
  } catch (error) {
    console.error(error);
  }
};

getProductsCategories();
