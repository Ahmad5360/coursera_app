import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import Navbar from "./Components/navbar";
import "./App.css";
import ListItems from "./Components/List Items";
import Alert from "./Components/Alert";


function App() {
  const [mode, setMode] = useState("dark");
  const [alert,setAlert]=useState(null);

  const showAlert =(message)=>
  {
      setAlert(
        {
          message:message
        }
      )
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

 
  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");

      document.querySelector(".navbar").style.backgroundColor = "#e6feff"; // document.querySelector(".navbar").style.color = "black";
      document.querySelector(".App").style.backgroundColor = "white";
      showAlert("Light Mode Enabled")
      
    } else {
      setMode("dark");
      document.querySelector(".navbar").style.backgroundColor = "#253454"; // document.querySelector(".navbar").style.color = "white";
      document.querySelector(".App").style.backgroundColor = "#1b263d";
      showAlert("Dark Mode Enabled")

    }
  };
  return (
    <div className="App">
      {/* <header className="App-header">
        {/* <h1>Hi, {name}</h1> */}

      <BrowserRouter>
        <Navbar
          title={"SITE NAME"}
          Link1={"HOME"}
          Link2={"BLOG"}
          Link3={"LIST ITEMS"}
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={<Home mode={mode} togglemode={togglemode} />}
          />
          <Route
            path="blog"
            element={<Blog mode={mode} togglemode={togglemode} />}
          />
          <Route
            path="listItems"
            element={<ListItems mode={mode} togglemode={togglemode} />}
          />
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
