import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../../App.css";

export default function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  );
}
