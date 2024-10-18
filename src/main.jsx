import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import Header from "./components/Header/Header";
import Topbar from "./components/Header/Topbar";
import Slider_car from "./components/Header/Main/Slider_car";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Topbar />
    <Header />
    <Slider_car />
  </StrictMode>
);
