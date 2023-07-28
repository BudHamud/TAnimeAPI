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

  async addProds() {
    try {
      const arr = [
        {
          name: "Sakura. Figura De Coleccion.",
          price: 125,
          description:
            "Sakura Haruno Gals Naruto Shippuden. FIGURA DE COLECCION UNICA.",
          category: "ropa",
          stock: 1,
          brand: "なると",
          img: "https://res.cloudinary.com/dr1lboqfo/image/upload/v1690326043/tiendaAnime/Sakura-mu%C3%B1eco_fix7le.png",
        },
        {
          name: "Gaara. Figura De Coleccion.",
          price: 90,
          description: "Gaara Naruto Shippuden. FIGURA DE COLECCION UNICA.",
          category: "ropa",
          stock: 1,
          brand: "なると",
          img: "https://res.cloudinary.com/dr1lboqfo/image/upload/v1690326291/tiendaAnime/Gaara-mu%C3%B1eco_lboehz.png",
        },
        {
          name: "Banda Chunin Naruto Shippuden.",
          price: 5,
          description: "Vincha Naruto Aldea. Calidad.",
          category: "ropa",
          stock: 12,
          brand: "なると",
          img: "https://res.cloudinary.com/dr1lboqfo/image/upload/v1690326376/tiendaAnime/Banda-shipudden_uu01tw.png",
        },
        {
          name: "Naruto Ransengan. Figura De Coleccion.",
          price: 125,
          description:
            "Naruto Ransengan. Figura De Coleccion. FIGURA DE COLECCION UNICA.",
          category: "ropa",
          stock: 1,
          brand: "なると",
          img: "https://res.cloudinary.com/dr1lboqfo/image/upload/v1690326886/tiendaAnime/Nuruto-Shippuden-Rasengan_brpmpz.png",
        },
        {
          name: "Megumi Fushiguro Chokonose Jujutsu Kaisen",
          price: 110,
          description:
            "Megumi Fushiguro Premium Sega Chokonose Jujutsu Kaisen. FIGURA DE COLECCION UNICA.",
          category: "ropa",
          stock: 2,
          brand: "呪術廻戦",
          img: "https://res.cloudinary.com/dr1lboqfo/image/upload/v1690327128/tiendaAnime/Megumi-Jujutsu-Kaisen_joqzrs.png",
        },
        {
          name: "Jujutsu Kaisen 14 - Gege Akutami",
          price: 20,
          description: "Jujutsu Kaisen 14 - Gege Akutami volumen 5",
          category: "ropa",
          stock: 1,
          brand: "呪術廻戦",
          img: "https://res.cloudinary.com/dr1lboqfo/image/upload/v1690327293/tiendaAnime/Jujutsu_Kaisen_14_-_Gege_Akutami_c2h3mr.png",
        },
        {
          name: "Gojo. Jujutsu Kaisen.",
          price: 125,
          description:
            "Figura Satoru Gojo Jujutsu Kaisen Jukon No Kata Banpresto FIGURA DE COLECCION UNICA.",
          category: "ropa",
          stock: 1,
          brand: "呪術廻戦",
          img: "https://res.cloudinary.com/dr1lboqfo/image/upload/v1690326043/tiendaAnime/Sakura-mu%C3%B1eco_fix7le.png",
        },
        {
          name: "Sukuna. Jujutsu Kaisen.",
          price: 100,
          description:
            "Jujutsu Kaisen Banpresto Sukuna. FIGURA DE COLECCION UNICA.",
          category: "ropa",
          stock: 2,
          brand: "呪術廻戦",
          img: "https://res.cloudinary.com/dr1lboqfo/image/upload/v1690327794/tiendaAnime/Sukuna-jujutsu-kaisen_hjlsts.png",
        },
      ];

      // if (!Array.isArray(parsedProds)) {
      //   const myProds = new productsModel(parsedProds);
      //   await myProds.save();
      //   return myProds;
      // }

      const myProds = await productsModel.insertMany(arr);
      return myProds;
    } catch (error) {
      throw error;
    }
  }

  async searchProds(search = "", filter = "asc", page = 1, limit = 10) {
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
