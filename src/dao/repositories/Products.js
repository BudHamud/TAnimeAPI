import productsModel from "../models/products.model.js";

class Products {
  async getProds() {
    const prods = await productsModel.find();
    return prods;
  }

  async getProds() {
    const prods = await productsModel.find();
    return prods;
  }

  async searchProds(search, filter, page, limit) {

    const sort = filter === "asc" ? "asc" : "desc"; // Si price es "asc", ordena de forma ascendente, de lo contrario, ordena de forma descendente

    const options = {
      sort: { price: sort },
      limit: parseInt(limit),
      page: parseInt(page),
    };

    const searchQuery = { name: { $regex: search, $options: "i" } };

    const searchResults = await productsModel.paginate(searchQuery, options);

    return searchResults;
  }

  async updateProd(productId, updatedData) {
    const updatedProduct = await productsModel.findByIdAndUpdate(
      productId,
      updatedData,
      { new: true }
    );
    return updatedProduct;
  }
}

export default Products;
