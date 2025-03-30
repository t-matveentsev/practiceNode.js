import fs from "node:fs/promises";

import { PATH_DB } from "../constants/path.js";

export const readProducts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
};

readProducts();
