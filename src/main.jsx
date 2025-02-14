import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.scss";
import Topbar from "./components/Header/Topbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Topbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    <Footer />
  </StrictMode>
);
