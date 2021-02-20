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
app.get("/:id", (req, res) => {
  product
    .updateOne({ _id: req.params.id }, { $pull: { colors: { color: "xxx" } } })
    .then((r) => {
      res.json(r);
    })
    .catch((err) => {
      res.json({ mess: "err" });
    });

  //product
  //.updateOne(
  //{ _id: req.params.id },
  //{ $push: { colors: { color: "xxx", imgs: [{ img: "fff" }] } } }
  //)
  //.then((r) => {
  // res.json(r);
  // })
  //.catch((err) => {
  // res.json({ mess: err });
  // });
});
app.post("/", (req, res) => {
  pr = new product({
    price: "39.99",
    saction: "man",
    name: "Manz Sport",
    type: "boot",
    rating: 3.8,
    colors: [
      {
        color: "blue",
        imgs: [
          { img: "/assats/manBoots/MnzWhite.jpg" },
          { img: "/assats/manBoots/MnzWhite.jpg" },
          { img: "/assats/manBoots/MnzWhite.jpg" },
          { img: "/assats/manBoots/MnzWhite.jpg" },
          { img: "/assats/manBoots/MnzWhite.jpg" },
          { img: "/assats/manBoots/MnzWhite.jpg" },
          { img: "/assats/manBoots/MnzWhite.jpg" },
          { img: "/assats/manBoots/MnzWhite.jpg" },
          { img: "/assats/manBoots/MnzWhite.jpg" },
        ],
      },
      {
        color: "red",
        imgs: [
          { img: "/assats/manBoots/MnzWhite.jpg" },
          { img: "/assats/manBoots/MnzWhite.jpg" },
          { img: "/assats/manBoots/MnzWhite.jpg" },
        ],
      },
      {
        color: "white",
        imgs: [
          { img: "/assats/manBoots/MnzWhite.jpg" },
          { img: "/assats/manBoots/MnzWhite.jpg" },
        ],
      },
      {
        color: "black",
        imgs: [{ img: "/assats/manBoots/MnzWhite.jpg" }],
      },
    ],
    size: ["39", "40", "41"],
  });
  pr.save();
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
