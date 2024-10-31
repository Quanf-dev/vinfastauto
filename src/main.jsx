import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.scss";
import Header from "./components/Header/Header";
import Topbar from "./components/Header/Topbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThenonMain from "./pages/Product/TheonPage/ThenonMain";
import Vf8Main from "./pages/Product/Vf8Page/Vf8Main";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Topbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thenons" element={<ThenonMain />} />
        <Route path="/vf8" element={<Vf8Main />} />
      </Routes>
    </Router>
    <Footer />
  </StrictMode>
);
