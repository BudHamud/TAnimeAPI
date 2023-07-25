import productsModel from "../models/products.model.js";

class Products {
  async getProds() {
    const prods = await productsModel.find();
    return prods;
  }

  async addProds(prods) {
    try {
      const parsedProds = JSON.parse(prods);
  
      if (!Array.isArray(parsedProds)) {
        const myProds = new productsModel(parsedProds);
        await myProds.save();
        return myProds;
      }
  
      const myProds = await productsModel.insertMany(parsedProds);
      return myProds;
    } catch (error) {
      throw error;
    }
  }  

  async searchProds(search = '', filter = 'asc', page = 1, limit = 10) {

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
