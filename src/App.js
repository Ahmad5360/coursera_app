import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import Navbar from "./Components/navbar";
import "./App.css";
import ListItems from "./Components/List Items";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        {/* <h1>Hi, {name}</h1> */}

      <BrowserRouter>
        <Navbar title={"SITE NAME"} Link1={"HOME"} Link2={"BLOG"} Link3={"LIST ITEMS"} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="listItems" element={<ListItems />} />
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
