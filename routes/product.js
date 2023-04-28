const express=require("express");
const {addProduct,getAllProduct, updateProduct ,deleteProduct, getOneProduct, getSofaProducts, getChairProducts, getMobileProducts, getWatchProducts, getWirelessProducts }=require("../controllers/product.controller")


router = express.Router();

//add Product
router.post("/addProduct",addProduct)
///getAllProduct
router.get("/getAllProduct", getAllProduct);
/////updateProduct
router.put("/updateProduct/:_id", updateProduct);
/////deleteOneProduct
router.delete("/deleteOneProduct/:_id", deleteProduct);

/////getOneProduct
router.get("/getOneProduct/:_id", getOneProduct);

///////get sofa  products
router.get("/getSofaProducts", getSofaProducts);

///////get chair products
router.get("/getChairProducts", getChairProducts);


//////////get mobile Products
router.get("/getMobileProducts", getMobileProducts);

//////////get watch Products
router.get("/getWatchProducts", getWatchProducts);


//////////get wireless Products
router.get("/getWirelessProducts", getWirelessProducts);


module.exports = router;