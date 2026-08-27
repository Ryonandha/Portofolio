import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"; // Footer dipanggil di sini
import PreLoader from "./components/PreLoader.jsx"; // PreLoader dipanggil di sini
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PreLoader /> {/* Muncul di awal */}
    <div className="container mx-auto px-6">
      <Navbar />
      <App />
      <Footer /> {/* Muncul di bawah */}
    </div>
  </StrictMode>,
);
