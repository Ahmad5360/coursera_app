import React,{ useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  const [name, setName] = useState("");

  function Name(props) {
    return (
      <h1 style={{ margin: "20px" }} className="text-center">
        Hi, Ahmad {props.name}
      </h1>
    );
  }
  return (
    <div>
      <h1 style={{ margin: "50px" }} className="text-center">
        HOME
      </h1>

      <Name name={name} />
      <div className="text-center">
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
