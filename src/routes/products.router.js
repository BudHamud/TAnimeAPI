import { Router } from "express";
import Product from "../dao/repositories/Products.js";

const pm = new Product();

const router = Router();

router.get("/", async (req, res) => {
  const { search, filter, page, limit, order } = req.query;

  try {
    const searchResults = await pm.searchProds(search, filter, page, limit, order);

    res.status(200).json(searchResults);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const prod = await pm.getProdById(id);
    res.status(200).json(prod);
  } catch (err) {
    console.error(err);
  }
});

router.post("/", async (req, res) => {

  const prod = await pm.addProds(req.body);
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
