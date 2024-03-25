import React from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet } from "react-router-dom";
import AllComponents from "./Components/AllComponents.jsx";

function App() {
  return (
   <div>
      <Header />
      <Outlet />
      {/* <AllComponents /> */}
      <Footer />
    </div>
  )
}

export default App;
