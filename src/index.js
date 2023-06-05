import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Estudios from "./components/Estudios.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader";

const Router = createBrowserRouter([
  { path: "/my-web", element: <App /> },
  { path: "/loader", element: <Loader /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/estudios", element: <Estudios /> },
  { path: "/contact", element: <Contact /> },
  { path: "/footer", element: <Footer /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
