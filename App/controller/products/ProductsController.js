const products = require("../../model/productsModule");
const getProducts = async (req, res, next) => {
  try {
    const AllProducts = await products.find();

    res.status(200).json(AllProducts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getProducts };
