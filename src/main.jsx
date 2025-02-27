import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.scss";
import Topbar from "./components/Header/Topbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import IndexJoin from "./pages/Home/JoinSection/IndexJoin";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Topbar />
    <Header
      urlVideo="video\bike.mp4"
      urlImage1="images/Header/SliderHead/image_207.png"
      urlImage2="images/Header/SliderHead/image80.png"
    />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    <IndexJoin />
    <Footer />
  </StrictMode>
);
