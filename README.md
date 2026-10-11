# Portofolio Developer — Ryonandha

Website portofolio pribadi modern, minimalis, dan berfokus pada rekayasa perangkat lunak web serta implementasi AI/NLP.

**Live URL:** https://portofolio-ryon.vercel.app

---

## 🛠️ Stack Teknologi

- **Frontend Core:** React 19, Vite 7, Tailwind CSS 4
- **Icons & Visual:** Lucide React
- **Hosting & CI/CD:** Vercel

---

## ✨ Fitur & Rombakan Desain

- **Desain Modern & Clean:** Estetika minimalis dark mode (zinc-950) terinspirasi platform tech modern (Vercel, Linear, Raycast) tanpa visual clutter / AI slop.
- **Performa Instan:** Menghilangkan preloader buatan dan beban 3D berat. Bundle size turun drastis dari **3.6 MB ke ~258 kB** (build time hanya 3 detik!).
- **Studi Kasus Unggulan:** 3 proyek unggulan lengkap dengan arsitektur teknis, metrik kinerja nyata (IndoBERT akurasi 77.3%), dan peran implementasi.
- **Filter Proyek Interaktif:** Filter kategori dinamis (Full-Stack, Frontend, AI/ML).
- **Keahlian Terstruktur:** Dikelompokkan ke 4 kategori arsitektur (Backend, Frontend, AI, Tools & Cloud).
- **Detail Proyek Interaktif:** Modal detail studi kasus lengkap dengan tangkapan layar, fitur utama, dan tautan repositori/demo.
- **Interaksi Kontak Cepat:** Fitur 1-click salin email dan tombol langsung ke GitHub serta email.

---

## 📂 Struktur Proyek

```
Portofolio/
├── public/                 # Screenshot proyek & CV.pdf
│   ├── sipeka.png          # Proyek Skripsi SiPeka
│   ├── relawan-aat.png     # Proyek Relawan AAT
│   ├── run-2026.png        # Proyek Run 2026
│   ├── ryonandha.png       # Foto profil
│   └── CV.pdf              # File CV
├── src/
│   ├── assets/tools/       # Ikon tech stack
│   ├── components/         # Komponen UI modular
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Footer.jsx      # Footer minimalis
│   │   └── ProjectModal/   # Modal studi kasus detail
│   ├── data.js             # Data utama proyek & keahlian
│   ├── App.jsx             # Layout & interaksi halaman utama
│   ├── main.jsx            # Entry point aplikasi
│   └── index.css           # Styling global & pattern
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Menjalankan Secara Lokal

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Build untuk produksi
npm run build
```