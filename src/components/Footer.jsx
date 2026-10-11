import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import { personalInfo } from "../data";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-24 border-t border-zinc-800/80 bg-zinc-950/70 py-12 text-zinc-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <a href="#home" className="inline-flex items-center gap-2 font-mono font-semibold text-zinc-100 text-base">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {personalInfo.fullName}
            </a>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Lulusan S1 Sistem Informasi STIKOM Yos Sudarso Purwokerto (IPK 3.70) &amp; Alumni Bangkit Academy Cloud Computing (Google, GoTo, Traveloka).
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-300">Navigasi Halaman</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-zinc-100 transition-colors">Tentang Profil</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-zinc-100 transition-colors">Pengalaman Kerja</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-zinc-100 transition-colors">Proyek & Skripsi</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-zinc-100 transition-colors">Keahlian Teknis</a>
              </li>
              <li>
                <a href="#education" className="hover:text-zinc-100 transition-colors">Pendidikan & Organisasi</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-zinc-100 transition-colors">Hubungi Saya</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Kontak & Jejaring */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-300">Kontak Resmi</h4>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
              >
                <Linkedin size={15} />
                <span>LinkedIn Profil</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
              >
                <Github size={15} />
                <span>GitHub Repositori</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
              >
                <Mail size={15} />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
              >
                <Phone size={15} />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all cursor-pointer"
          >
            <span>Kembali ke atas</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;