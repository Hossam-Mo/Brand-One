import React from "react";
import "./landingPage.css";
import Nav from "./Nav";

export default function LandingPage() {
  return (
    <div className="page">
      <Nav></Nav>
      <div className="page_mid">
        <h2>New Era Of Fashion</h2>
        <h3>The best clothes for the new era</h3>
      </div>
    </div>
  );
}
