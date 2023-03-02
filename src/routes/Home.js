import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "../App.css";

export default function Home(props) {
  const [name, setName] = useState("");
  const [time, setTime] = useState(new Date());

  function Name(props) {
    return (
      <h1
        style={{
          margin: "20px",
          color: props.mode === "dark" ? "#72a24d" : "black",
        }}
        className="text-center"
      >
        Hi, Ahmad {props.name}
      </h1>
    );
  }

  // Timer Use Effect

  useEffect(() => {
    let timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className="text-center">
      <h1
        className="my-4"
        style={{
          color: props.mode === "dark" ? "#72a24d" : "black",
        }}
      >
        Clock : {time.toLocaleTimeString()}
      </h1>

      <h1
        style={{
          margin: "40px",
          color: props.mode === "dark" ? "#72a24d" : "black",
        }}
      >
        HOME
      </h1>

      <Name mode={props.mode} togglemode={props.togglemode} name={name} />
      <div>
        <button
          onClick={() => {
            setName("Rashid");
          }}
          style={{
            color: props.mode === "dark" ? "white" : "black",
            borderColor: props.mode === "dark" ? "#72a24d" : "black"
          }}
        >
          Update Name
        </button>
      </div>
      {/* <button
          
        >
            <Link to="blog">Blog</Link>
          
        </button> */}
    </div>
  );
}
