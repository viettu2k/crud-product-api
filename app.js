const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();

// import routes
const productRoutes = require("./routes/product");

// app
const app = express();

// connect db
mongoose.connect(process.env.DATABASE).then(() => console.log("DB connected"));

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use("/product", productRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
