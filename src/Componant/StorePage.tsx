import React, { useState } from "react";
import Nav from "./Nav";
import "./storePage.css";

export default function StorePage() {
  const [rotate, setRotate] = useState(false);

  return (
    <div className="store">
      <Nav border={true}></Nav>
      <div
        style={{ backgroundImage: "url(/assats/manBackGround.jpg)" }}
        className="store_img"
      ></div>
      <div className="store_text">
        <p>Generous and reliable collection for man</p>
        <p>Take on one of our most popular boots.</p>
      </div>
      <div className="store_body">
        <div className="store_filter">
          <div>
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
      </div>
    </div>
  );
}
