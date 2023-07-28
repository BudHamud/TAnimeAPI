import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    products: {
        type: [
          {
            _id: {
              type: Schema.Types.ObjectId,
              ref: "products",
              required: true
            },
            quantity: {
              type: Number,
              required: true,
              default: 1
            },
          },
        ],
        required: true,
      },
})

const cartModel = model('carts', cartSchema)

export default cartModel