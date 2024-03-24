import React from "react";
import "./App.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
   <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
