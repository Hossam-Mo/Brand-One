import React from "react";
import "./landingPage.css";
import Nav from "./Nav";

export default function LandingPage() {
  return (
    <div>
      <div
        style={{ backgroundImage: "url(/assats/landingPageBackGround.jpg)" }}
        className="page"
      >
        <Nav border={false} scroll={false} logoScroll={false}></Nav>
        <div className="page_mid">
          <h2>New Era Of Fashion</h2>
          <div>
            <h3>The best clothes for the new era</h3>
          </div>
        </div>
        <button>
          <div className="page_discover">
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
                fill="white"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
