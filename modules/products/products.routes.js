import express from "express";
import {
  getAllProducts,
  addProducts,
  deleteProducts,
  updateProducts,
  searchProducts,
} from "./products.controllers.js";
const routes = express.Router();

routes.get("/", getAllProducts);

routes.post("/products", addProducts);

routes.delete("/products", deleteProducts);

routes.put("/products", updateProducts);

routes.get("/products/:id", searchProducts);

export default routes
