import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: "https://res.cloudinary.com/dcmic2snw/image/upload/v1686150338/tiendaAnime/269784565_10215916041054354_488217451815171759_n_umshrh.jpg"
  },
});

productSchema.plugin(mongoosePaginate);

const productModel = mongoose.model("products", productSchema);

export default productModel;
