import { Router } from "express";
import Product from "../dao/repositories/Products.js";

const pm = new Product();

const router = Router();

router.get("/", async (req, res) => {
  const { search, filter, page, limit } = req.query;

  try {
    const searchResults = await pm.searchProds(search, filter, page, limit);

    res.status(200).json(searchResults);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  const prod = pm.addProd(req.body);
  res.json(prod);
});

router.put("/:id", async (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedProduct = await pm.updateProd(productId, updatedData);
    res.json(updatedProduct);
  } catch (error) {
    console.log("Error al actualizar el producto:", error);
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
});

export default router;
