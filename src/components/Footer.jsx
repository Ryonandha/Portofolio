import { Github, Instagram, Mail, ArrowUp } from "lucide-react";

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
              ryonandha.dev
            </a>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Mahasiswa Sistem Informasi STIKOM Yos Sudarso Purwokerto. Membangun aplikasi web full-stack terukur dan riset NLP kesehatan mental.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Purwokerto, Jawa Tengah, Indonesia</span>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-300">Navigasi</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-zinc-100 transition-colors">Tentang Profil</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-zinc-100 transition-colors">Proyek Pilihan</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-zinc-100 transition-colors">Keahlian & Stack</a>
              </li>
              <li>
                <a href="#education" className="hover:text-zinc-100 transition-colors">Pendidikan & Riwayat</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-zinc-100 transition-colors">Hubungi Saya</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Jejaring & Kontak */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-300">Koneksi</h4>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm">
              <a
                href="https://github.com/Ryonandha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:ryonandhar@gmail.com"
                className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
              >
                <Mail size={15} />
                <span>ryonandhar@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/ryon_ap/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
              >
                <Instagram size={15} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Ryonandha. All rights reserved.</p>

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