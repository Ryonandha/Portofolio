import { useState, useEffect } from "react";
import ShinyText from "./ShinyText/ShinyText"; // Kita pakai komponen yang baru dibuat

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mendeteksi scroll agar navbar berubah warna/transparan
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-zinc-900/80 backdrop-blur-md border-b border-zinc-700 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <a href="#" className="text-2xl font-bold tracking-wider text-white">
              <ShinyText text="Portofolio" disabled={false} speed={3} className="custom-class" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#project">Project</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="#project" onClick={() => setIsOpen(false)}>
              Project
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

// Komponen Kecil untuk Link agar kode lebih rapi
const NavLink = ({ href, children }) => (
  <a href={href} className="text-gray-300 hover:text-white hover:bg-zinc-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }) => (
  <a href={href} onClick={onClick} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
    {children}
  </a>
);

export default Navbar;
