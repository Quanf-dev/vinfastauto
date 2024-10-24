import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.scss";
import Header from "./components/Header/Header";
import Topbar from "./components/Header/Topbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { Router } from "lucide-react";

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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <Footer />
  </StrictMode>
);
