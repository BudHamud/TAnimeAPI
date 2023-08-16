import productsModel from "../models/products.model.js";

class Products {
  async getProds() {
    const prods = await productsModel.find();
    return prods;
  }

  async getProdById(id) {
    const prod = await productsModel.findById(id)
    return prod
  }

  async addProds(obj) {
    try {
      const myProd = await productsModel.create(obj)
      return myProd;
    } catch (error) {
      throw error;
    }
  }

  async searchProds(search = "", filter = '', page = 1, limit = 10, order = 'asc') {
    const options = {
      sort: { price: order },
      limit: parseInt(limit),
      page: parseInt(page),
    };

    const searchQuery = filter !== '' ? { category: filter } : { name: { $regex: search, $options: "i" } };

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
