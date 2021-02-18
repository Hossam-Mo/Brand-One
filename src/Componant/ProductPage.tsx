import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./productPage.css";
import { AiFillStar } from "react-icons/ai";

interface imgs {
  img: string;
  id: string;
}

export default function ProductPage() {
  const [colorName, setColorName] = useState(0);
  const [imgName, setImgName] = useState(0);
  const [size, setSize] = useState("");
  const [sideImgs, setSideImgs] = useState<imgs[]>([]);

  const [limit, setLimit] = useState(4);

  /* const product = {
    price: "39.99",
    id: "12313",
    name: "manz sport",
    rating: 3.8,
    colors: ["blue", "red", "white", "black"],
    size: ["39", "40", "41"],
    imgs: [
      { img: "/assats/manBoots/MnzBlack.jpg", id: "1" },
      { img: "/assats/manBoots/MnzBlack.jpg", id: "2" },
      { img: "/assats/manBoots/MnzBlack.jpg", id: "3" },
      { img: "/assats/manBoots/MnzBlack.jpg", id: "4" },
      { img: "/assats/manBoots/MnzBlack.jpg", id: "5" },
      { img: "/assats/manBoots/MnzBlack.jpg", id: "6" },
      { img: "/assats/manBoots/MnzBlack.jpg", id: "7" },
    ],
  };*/

  const product = {
    price: "39.99",
    id: "12313",
    name: "manz sport",
    rating: 3.8,
    colors: [
      {
        color: "blue",
        imgs: [
          { img: "/assats/manBoots/MnzBlack.jpg", id: "1" },
          { img: "/assats/manBoots/MnzBlack.jpg", id: "2" },
          { img: "/assats/manBoots/MnzBlack.jpg", id: "3" },
          { img: "/assats/manBoots/MnzBlack.jpg", id: "4" },
          { img: "/assats/manBoots/MnzBlack.jpg", id: "5" },
          { img: "/assats/manBoots/MnzBlack.jpg", id: "6" },
          { img: "/assats/manBoots/MnzBlack.jpg", id: "7" },
        ],
      },
      {
        color: "red",
        imgs: [
          { img: "/assats/manBoots/MnzWhite.jpg", id: "1" },
          { img: "/assats/manBoots/MnzWhite.jpg", id: "2" },
          { img: "/assats/manBoots/MnzWhite.jpg", id: "3" },
        ],
      },
      {
        color: "white",
        imgs: [
          { img: "/assats/manBoots/MnzBlack.jpg", id: "1" },
          { img: "/assats/manBoots/MnzBlack.jpg", id: "2" },
        ],
      },
      {
        color: "black",
        imgs: [{ img: "/assats/manBoots/MnzBlack.jpg", id: "1" }],
      },
    ],
    size: ["39", "40", "41"],
  };

  const rating = () => {
    let stars = [];
    let rating = Math.round(product.rating);
    for (let i = 0; i < rating; i++) {
      stars.push(<AiFillStar key={i}></AiFillStar>);
    }
    return stars;
  };
  const colors = () => {
    let color = [];
    let colorsNumber = product.colors.length;
    for (let i = 0; i < colorsNumber; i++) {
      color.push(
        <div key={i} className="product_buttons">
          <button
            onClick={() => {
              setImgName(i);
            }}
            onMouseEnter={() => {
              setColorName(i);
            }}
            className="product_color"
            style={{ backgroundColor: product.colors[i].color }}
          ></button>
        </div>
      );
    }
    return color;
  };

  useEffect(() => {
    setSideImgs(product.colors[imgName].imgs.slice(0, limit));
  }, [limit, imgName]);
  return (
    <div className="product">
      <Nav border={true} scroll={false}></Nav>
      <div className="product_left">
        <div className="left_contant">
          <h1>Manz Sport</h1>
          <div className="left_price">
            <span>$</span>
            <span>39.99</span>
          </div>
          <div className="product_stars">{rating()}</div>
          <p>
            Everything you need for your day and night. The Apollo Backpack
            seamlessly transitions between day & night giving you the
            functionality
          </p>
          <div className="product_colors">
            <div>{colors()}</div>

            <p>{product.colors[colorName].color}</p>
          </div>
          <h5 className="product_sizeLabel">size</h5>
          <div className="product_size">
            {product.size.map((it) => {
              return (
                <div className="size_item" key={it}>
                  <input
                    className="size_selecter"
                    name="size"
                    id={it}
                    type="radio"
                    onClick={() => {
                      setSize(it);
                    }}
                  />
                  <label htmlFor={it}>{it}</label>
                </div>
              );
            })}
          </div>
          <button className="product_add">Add to Cart</button>
        </div>
      </div>
      <div className="product_right">
        <div className="right_imgLinks">
          {sideImgs.map((img) => {
            return (
              <a key={img.id} href={`#${img.id}`}>
                <img src={img.img} alt="product"></img>
              </a>
            );
          })}
        </div>
        {sideImgs.map((img) => {
          return (
            <div key={img.id} id={img.id} className="right_imgCint">
              <img className="right_img" src={img.img} alt="boot"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
