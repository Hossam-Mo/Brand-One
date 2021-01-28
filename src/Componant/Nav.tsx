import React from "react";
import "./nav.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav_logo">
        <span>Brand</span>
        <span>O</span>
        <span>ne </span>
      </div>
      <div className="nav_right">
        <div className="nav_list">
          <input
            className="list_checkbox"
            type="radio"
            id="man"
            name="slid"
          ></input>
          <label htmlFor="man">Man</label>
          <input
            className="list_checkbox"
            type="radio"
            id="woman"
            name="slid"
          ></input>
          <label htmlFor="woman">Woman</label>
          <label>Explore</label>

          <input
            className="list_checkbox"
            type="radio"
            id="close"
            name="slid"
          ></input>
          <label className="close" htmlFor="close">
            <AiOutlineCloseCircle></AiOutlineCloseCircle>
          </label>

          <div className="right_slide"></div>
        </div>
        <div className="right_icons">
          <button>
            <svg
              width="20"
              height="16"
              viewBox="0 0 25 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="4.85718"
                width="23"
                height="15.1429"
                rx="2"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M8.10809 7.42857V1H17.5675V7.42857" stroke="white" />
            </svg>
          </button>

          <h3>0</h3>

          <button>
            <svg
              className="search_icon"
              width="22"
              height="15"
              viewBox="0 0 29 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.8843"
                cy="10.3911"
                r="8"
                transform="rotate(9.72591 10.8843 10.3911)"
                stroke="white"
                strokeWidth="2"
              />
              <line
                y1="-1"
                x2="11.1998"
                y2="-1"
                transform="matrix(0.818116 0.575053 -0.57002 0.821631 17 15)"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
