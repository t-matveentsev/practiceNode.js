import { readProducts } from "../utils/readProducts.js";

const groupProductsByCategories = async () => {
  try {
    const productsList = await readProducts();
    const groupedProducts = productsList.reduce((acc, product) => {
      const { category } = product;

      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(product);
      return acc;
    }, {});

    console.log(groupedProducts);
  } catch (error) {
    console.error(error);
  }
};

groupProductsByCategories();
