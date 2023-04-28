const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title : String,
    price : Number,
    category : String,
    image : String,
    description : String,
    promo:Number,
    quantity: String,
});

module.exports = mongoose.model("product", productSchema);