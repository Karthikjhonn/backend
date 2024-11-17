const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    flavor_profile: {
      type: [String],
      required: true,
    },
    grind_option: {
      type: [String],
      required: true,
    },
    roast_level: {
      type: Number,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const products = mongoose.model("products", productSchema);

module.exports = products;
