import fs from "node:fs/promises";

import { PATH_DB } from "../constants/path.js";

export const writeProducts = async (updateProducts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updateProducts, null, 2));
  } catch (error) {
    console.error(error);
  }
};
