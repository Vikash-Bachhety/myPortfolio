import React from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet } from "react-router-dom";
// import Layout from "./Components/Layout.jsx";
import AllComponents from "./Components/AllComponents.jsx";

function App() {
  return (
   <div>
      <Header />
      {/* <Layout /> */}
      <Outlet />
      {/* <AllComponents /> */}
      <Footer />
    </div>
  )
}

export default App;
