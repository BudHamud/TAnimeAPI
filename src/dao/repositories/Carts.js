import cartModel from "../models/carts.model.js";

class Carts {
  async createCart() {
    try {
      const newCart = new cartModel({ products: [] });
      return newCart;
    } catch (err) {
      console.error("Error creando el carrito", err);
    }
  }

  async deleteCart(id) {
    try {
      const cart = await cartModel.findByIdAndDelete(id);
      return cart;
    } catch (err) {
      console.error("Error borrando el carrito", err);
    }
  }

  async getCart(id) {
    try {
      const cart = await cartModel
        .findById(id)
        .populate({ path: "products._id" });
      return cart;
    } catch (err) {
      console.error("Error trayendo el carrito", err);
    }
  }
}

export default Carts;
