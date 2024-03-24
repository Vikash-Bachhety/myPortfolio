import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
// import AuthProvider from "./Components/AuthProvider.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx"
import Skills from "./Components/Skills.jsx"
import Projects from "./Components/Projects.jsx"
import Contact from "./Components/Contact.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Skills",
        element: <Skills />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
