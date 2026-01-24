import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";

const Footer = () => {
  const items = [
    { icon: <VscHome size={20} />, label: "Home", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={20} />, label: "About Me", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={20} />, label: "Project", onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <div className="mt-32 pb-12 flex flex-col items-center relative z-10">
      {/* Garis pemisah tipis */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent mb-12"></div>

      <div className="w-full max-w-7xl px-4 flex flex-col md:flex-row items-center md:justify-between gap-8">
        {/* Brand */}
        <div className="order-1 md:order-none text-center md:text-left">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">Portofolio</h1>
          <p className="text-indigo-300/60 text-sm mt-1">© 2026 Ryonandha. All rights reserved.</p>
        </div>

        {/* Ikon Sosmed */}
        <div className="flex gap-6 order-2 md:order-none">
          <SocialLink href="https://github.com/Ryonandha" icon="ri-github-fill" />
          <SocialLink href="https://www.instagram.com/ryon_ap/" icon="ri-instagram-fill" />
          <SocialLink href="mailto:ryonandhar@gmail.com" icon="ri-mail-fill" />
        </div>

        {/* Dock Navigation */}
        <div className="order-3 md:order-none">
          <Dock items={items} panelHeight={40} baseItemSize={50} magnification={70} />
        </div>
      </div>
    </div>
  );
};

// Komponen kecil untuk ikon sosmed
const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-white hover:scale-110 transition-all duration-300">
    <i className={`${icon} text-2xl`}></i>
  </a>
);

export default Footer;
