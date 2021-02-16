const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const product = require("./modules/product");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  product
    .find()
    .then((r) => {
      res.json(r);
    })
    .catch((err) => {
      res.json({ mess: "err" });
    });
});
app.post("/", (req, res) => {
  pr = new product({
    price: "39.99",

    name: "manz sport",
    rating: 3.8,
    colors: [
      {
        color: "blue",
        imgs: [
          { img: "/assats/manBoots/MnzBlack.jpg" },
          { img: "/assats/manBoots/MnzBlack.jpg" },
          { img: "/assats/manBoots/MnzBlack.jpg" },
          { img: "/assats/manBoots/MnzBlack.jpg" },
          { img: "/assats/manBoots/MnzBlack.jpg" },
        ],
      },
      {
        color: "red",
        imgs: [
          { img: "/assats/manBoots/MnzBlack.jpg" },
          { img: "/assats/manBoots/MnzBlack.jpg" },
          { img: "/assats/manBoots/MnzBlack.jpg" },
        ],
      },
      {
        color: "white",
        imgs: [
          { img: "/assats/manBoots/MnzBlack.jpg" },
          { img: "/assats/manBoots/MnzBlack.jpg" },
        ],
      },
      {
        color: "black",
        imgs: [{ img: "/assats/manBoots/MnzBlack.jpg" }],
      },
    ],
    size: ["39", "40", "41"],
  });
  pr.save().then((r) => {
    res.json(r);
  });
});

mongoose.connect(
  " mongodb+srv://admin:admin@cluster0.9aikh.mongodb.net/BrandOne?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB is connected");
  }
); // evan acc
app.listen(5000, () => {
  console.log("server is working");
});
