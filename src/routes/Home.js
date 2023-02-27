import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  const [name, setName] = useState("");
  const [time, setTime] = useState(new Date());

  function Name(props) {
    return (
      <h1 style={{ margin: "20px" }} className="text-center">
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
      <h1 className="my-4">Timer : {time.toLocaleTimeString()}</h1>

      <h1 style={{ margin: "40px" }}>
        HOME
      </h1>

      <Name name={name} />
      <div>
        <button
          onClick={() => {
            setName("Rashid");
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
