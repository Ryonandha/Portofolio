import { useState, useEffect } from "react";
import { Github, FileText, Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tentang", href: "#about" },
    { name: "Proyek", href: "#projects" },
    { name: "Keahlian", href: "#skills" },
    { name: "Pendidikan", href: "#education" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-zinc-100 hover:text-white transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform animate-pulse" />
            <span className="font-mono font-semibold tracking-tight text-base sm:text-lg">
              ryonandha<span className="text-indigo-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/Ryonandha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-lg border border-transparent hover:border-zinc-800 transition-all"
            >
              <Github size={18} />
            </a>

            <a
              href="/CV.pdf"
              download="CV_Ryonandha.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white hover:shadow-md hover:shadow-white/10 transition-all"
            >
              <FileText size={15} />
              <span>Unduh CV</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/CV.pdf"
              download="CV_Ryonandha.pdf"
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-100 text-zinc-950"
            >
              CV
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation"
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              <span>{link.name}</span>
              <ArrowUpRight size={14} className="text-zinc-500" />
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-900 flex gap-3">
            <a
              href="https://github.com/Ryonandha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:ryonandhar@gmail.com"
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium bg-indigo-600 text-white rounded-lg"
            >
              <span>Email</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;