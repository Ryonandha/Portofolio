import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Import Komponen yang baru kita buat
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PreLoader from "./components/PreLoader.jsx";

// Import Styles untuk animasi
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Inisialisasi AOS (Animate On Scroll)
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PreLoader />
    <div className="container mx-auto px-6">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
);
