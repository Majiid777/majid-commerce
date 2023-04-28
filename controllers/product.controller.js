const product = require("../model/product");

//add product
exports.addProduct = async (req, res) => {
  const { title, price, category,image, description,promo } =
    req.body;
  try {
    const newProduct = new product({
      title,
      price,
      category,
      description,
      image,
      promo,
    });
    await newProduct.save();
    newProduct
      ? res.status(200).json(newProduct)
      : res.status(401).json({ msg: "create product error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

//get all product
exports.getAllProduct = async (req, res) => {
    try {
      const allProducts = await product.find();
      allProducts
        ? res.status(201).json(allProducts)
        : res.status(401).json({ msg: "getAll error" });
    } catch (error) {
      res.status(501).json({ msg: error.message });
    }
  };


  //edit or update Product
  exports.updateProduct = async (req, res) => {
    try {
      const updateProduct = await product.findByIdAndUpdate(
        req.params._id,
        { ...req.body },
        { new: true }
      );
      res.status(201).send(updateProduct);
    } catch (error) {
      res.status(501).json({ msg: error.message });
    }
  };

  //delete one product
exports.deleteProduct = async (req, res) => {
    try {
      const deleteProduct = await product.findByIdAndDelete(req.params._id);
      res.status(201).json({ msg: "product deleted successfully" });
    } catch (error) {
      res.status(501).json({ msg: error.message });
    }
  };
  
  
  //get one product
  exports.getOneProduct = async (req, res) => {
    try {
      const oneProduct = await product.findById(req.params._id);
      oneProduct
        ? res.status(201).send(oneProduct)
        : res.status(401).json({ msg: "get one product error" });
    } catch (error) {
      res.status(501).json({ msg: error.message });
    }
  };

  ///////get products sofa

exports.getSofaProducts = async (req, res) => {
  try {
    const sofaProducts = await product.find({category:"sofa"});
    sofaProducts
      ? res.status(201).json(sofaProducts)
      : res.status(401).json({ msg: "get sofa Products error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};


///////get products chair

exports.getChairProducts = async (req, res) => {
  try {
    const chairProducts = await product.find({category:"chair"});
    chairProducts
      ? res.status(201).json(chairProducts)
      : res.status(401).json({ msg: "get chair Products error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};


///////get products Mobile

exports.getMobileProducts = async (req, res) => {
  try {
    const mobileProducts = await product.find({category:"mobile"});
    mobileProducts
      ? res.status(201).json(mobileProducts)
      : res.status(401).json({ msg: "get mobile Products error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};


///////get products watch

exports.getWatchProducts = async (req, res) => {
  try {
    const watchProducts = await product.find({category:"watch"});
    watchProducts
      ? res.status(201).json(watchProducts)
      : res.status(401).json({ msg: "get watch Products error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};



///////get products wireless

exports.getWirelessProducts = async (req, res) => {
  try {
    const wirelessProducts = await product.find({category:"wireless"});
    wirelessProducts
      ? res.status(201).json(wirelessProducts)
      : res.status(401).json({ msg: "get wireless Products error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

