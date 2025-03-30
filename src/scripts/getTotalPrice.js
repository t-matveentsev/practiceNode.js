import { readProducts } from "../utils/readProducts.js";

const getTotalPrice = async () => {
  try {
    const productList = await readProducts();
    const totalPrice = productList.reduce(
      (total, product) => total + Number(product.price),
      0
    );
    console.log(`Total price - $${totalPrice.toFixed(2)}`);
  } catch (error) {
    console.error(error);
  }
};

getTotalPrice();
