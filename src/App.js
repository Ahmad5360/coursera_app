import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import Navbar from "./Components/navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        {/* <h1>Hi, {name}</h1> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      

      {/* <button
          onClick={() => {
            setName("Ahmad");
          }}
        >
          Click Me
        </button> */}
      

      {/* </header> */}
    </div>
  );
}



export default App;
