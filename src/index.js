import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Estudios from "./components/Estudios.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/my-web" element={<App />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/estudios" element={<Estudios />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
