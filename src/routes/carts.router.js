import { Router } from "express";
import Carts from "../dao/repositories/Carts.js";

const router = new Router();
const cm = new Carts();

router.post("/", async (req, res) => {
  try {
    const cart = await cm.createCart();
    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json({ error: "Error al crear carrito" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const cart = await cm.getCart(id);
    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json({ error: "Error al traer carrito" });
  }
});

router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const cart = await cm.deleteCart(id);
      res.status(200).json(cart);
    } catch (err) {
      res.status(400).json({ error: "Error al borrar carrito" });
    }
  });

export default router;
