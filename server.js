const express = require('express');
const connectDB = require('./config/connectDB');
const user = require("./routes/user");
const product = require("./routes/product");
const upload = require("./routes/upload");
const cart= require("./routes/cart");
const app = express();

connectDB();


app.use(express.json());


//user.routes
app.use("/user",user);

//router product require
app.use("/product", product);

//router upload
app.use("/upload", upload);

//router cart require
app.use("/cart", cart)



const PORT=process.env.PORT||5000;
app.listen(PORT,error=>error?console.log(error):console.log(`Majid server is running successfully on ${PORT}`));