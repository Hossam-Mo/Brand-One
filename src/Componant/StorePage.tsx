import { url } from "inspector";
import React from "react";
import Nav from "./Nav";
import "./storePage.css";

export default function StorePage() {
  return (
    <div className="store">
      <Nav border={true}></Nav>
      <div className="store_img"></div>
    </div>
  );
}
