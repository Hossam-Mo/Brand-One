import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./storePage.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaVimeoV } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";

interface products {
  _id: string;
  price: string;
  name: string;
  rating: number;
  saction: string;
  type: string;
  size: [string];
  colors: [{ color: string; imgs: [{ img: string; _id: string }] }];
  cal?: any;
}

interface ParamTypes {
  section?: string;
  type?: string;
}
export default function StorePage() {
  const [rotate, setRotate] = useState(false);
  const [products, setProducts] = useState<products[]>([]);
  const { section } = useParams<ParamTypes>();
  const { type } = useParams<ParamTypes>();

  useEffect(() => {
    console.log(type);
  }, [type]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((r) => {
        console.log(r.data);
        let newR = [];
        for (let i = 0; i < r.data.length; i++) {
          if (i === 4) {
            newR.push({
              _id: "",
              price: "",
              name: "",
              rating: 0,
              saction: section,
              type: type,
              size: [],
              colors: [{ color: "", imgs: [{ img: "", _id: "" }] }],
              cal: true,
            });
            newR.push(r.data[i]);
          } else {
            newR.push(r.data[i]);
          }
        }

        setProducts(newR);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const x = () => {
    axios.post("http://localhost:5000/", { mess: "fuck" }).then((r) => {
      console.log(r);
    });
  };

  const piece: any = [
    { name: "f" },
    { name: "f" },
    { name: "f" },

    { name: "f" },
    { name: "f", cal: true },
    { name: "f" },
    { name: "f" },
    { name: "f" },
    { name: "f" },
    { name: "f" },
  ];

  return (
    <div className="store">
      <Nav border={true} scroll={true}></Nav>
      <div
        style={{ backgroundImage: "url(/assats/manBackGround.jpg)" }}
        className="store_img"
      ></div>
      <div className="store_text">
        <p>Generous and reliable collection for man</p>
        <p>Take on one of our most popular boots.</p>
      </div>
      <div
        style={{ backgroundImage: "url(/assats/landingPageBackGround.jpg)" }}
        className="store_body"
      >
        <div className="store_filter">
          <div onClick={x}>
            <h5>Home</h5>
            <h6> /</h6>
            <h5>Man </h5>
            <h6> /</h6>
            <h5> boots</h5>
          </div>
          <div>
            <h4>Filter</h4>
            <button
              onClick={() => {
                if (!rotate) {
                  setRotate(true);
                } else {
                  setRotate(false);
                }
              }}
            >
              <svg
                className={`filter_arrow ${rotate && "arrow_rotate"}`}
                width="11"
                height="8"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.56956 11.0422L0.156213 0.5789L14.8785 0.505672L7.56956 11.0422Z"
                  fill="#E7E4E4"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="store_grid">
          {products.map((it) => {
            return (
              it.saction === section &&
              it.type === type && (
                <div
                  key={it._id}
                  style={it.cal && { backgroundImage: "url(/assats/cal3.jpg)" }}
                  className={`grid_card ${it.cal && "grid_cardCal"}`}
                >
                  {it.cal ? (
                    <div className="card_cal">
                      <div>
                        <span>C</span>
                        <span>ollections</span>
                      </div>
                      <button>
                        <div className="grid_discover">
                          <div>
                            <span>D</span>
                            <span>iscover</span>
                          </div>

                          <svg
                            width="19"
                            height="9"
                            viewBox="0 0 26 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9H25V7H0V9Z"
                              fill="#232323"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  ) : (
                    <div className="card_pro">
                      <h3>{it.name}</h3>
                      <p>{it.price}</p>
                      <img
                        src={it.colors[0].imgs[0].img}
                        alt="White Boot"
                      ></img>
                      <div className="pro_view">
                        <h4>View The Product</h4>
                      </div>
                    </div>
                  )}
                </div>
              )
            );
          })}
        </div>
        <div className="store_footer">
          <ul>
            <li>©Brand one</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Shipping and Returns</li>
            <li>FAQ</li>
          </ul>
          <div className="footer_icons">
            <AiOutlineInstagram></AiOutlineInstagram>
            <AiFillFacebook></AiFillFacebook>
            <AiOutlineTwitter></AiOutlineTwitter>
            <FaVimeoV></FaVimeoV>
          </div>
        </div>
      </div>
    </div>
  );
}
