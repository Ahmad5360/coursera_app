import React from "react";
// import { Link } from "react-router-dom";

import "../App.css";

export default function Blog(props) {
  return (
    <div className="container">
      <h1
        className="text-center my-4"
        style={{
          color: props.mode === "dark" ? "#72a24d" : "black"
        }}
      >
        BLOG
      </h1>
      {/* <button>
        <Link to="/">Home</Link>
      </button> */}
    </div>
  );
}
