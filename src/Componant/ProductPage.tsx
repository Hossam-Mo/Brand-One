import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./productPage.css";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import { useParams } from "react-router-dom";

interface product {
  price: string;
  id: string;
  name: string;
  rating: number;
  colors: {
    color: string;
    imgs: {
      img: string;
      _id: string;
    }[];
  }[];
  size: string[];
}

interface imgs {
  img: string;
  _id: string;
}
interface ParamTypes {
  productId: string;
}

export default function ProductPage() {
  const [colorName, setColorName] = useState(0);
  const [imgName, setImgName] = useState(0);
  const [size, setSize] = useState("");
  const [sideImgs, setSideImgs] = useState<imgs[]>([]);
  const { productId } = useParams<ParamTypes>();
  const [limit, setLimit] = useState(4);
  const [product, setProduct] = useState<product>();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${productId}`)
      .then((r) => {
        console.log(r.data);
        setProduct(r.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(sideImgs);
  }, [sideImgs]);
  const rating = () => {
    if (product) {
      let stars = [];
      let rating = Math.round(product.rating);
      for (let i = 0; i < rating; i++) {
        stars.push(<AiFillStar key={i}></AiFillStar>);
      }
      return stars;
    }
  };
  const colors = () => {
    if (product) {
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
    }
  };

  useEffect(() => {
    if (product) setSideImgs(product.colors[imgName].imgs.slice(0, limit));
  }, [limit, imgName, product, productId]);
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

            <p>{product && product.colors[colorName].color}</p>
          </div>
          <h5 className="product_sizeLabel">size</h5>
          <div className="product_size">
            {product &&
              product.size.map((it) => {
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
              <a key={img._id} href={`#${img._id}`}>
                <img src={img.img} alt="product"></img>
              </a>
            );
          })}
        </div>
        {sideImgs.map((img) => {
          return (
            <div key={img._id} id={img._id} className="right_imgCint">
              <img className="right_img" src={img.img} alt="boot"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
