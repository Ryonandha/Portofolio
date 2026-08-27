# Portofolio Website (Vite + React)

Source code website portofolio pribadi saya. Konten (daftar proyek, deskripsi, link GitHub/demo) diambil dari **data.js** dan ditampilkan via komponen React.

**Live:** https://portofolio-ryon.vercel.app

---

## Stack

- **React 19** + **Vite 7** (ESM)
- **Tailwind CSS 4** (via `@tailwindcss/vite`)
- Animasi: AOS, animate.css, GSAP, Motion
- 3D/Visual: Three.js, @react-three/fiber, @react-three/drei, @react-three/rapier, OGL
- Icons: Lucide React, React Icons, Remixicon
- Firebase (untuk keperluan auth/database jika nanti dipakai)

---

## Struktur Proyek

```
Portofolio/
├── public/                 # Aset statis (gambar project, CV.pdf)
│   ├── kanban.png          # Screenshot Kanban/FlixMeow (placeholder untuk semua)
│   ├── relawan-aat.png     # Screenshot Relawan AAT
│   ├── task-api.png        # Screenshot Task API
│   ├── sms-spam.png        # Screenshot SMS Spam Detector
│   ├── ryonandha.png       # Foto profil (hero)
│   ├── hero-img.webp       # Background hero
│   └── CV.pdf              # CV download
├── src/
│   ├── assets/tools/       # Ikon tech stack (PNG)
│   ├── components/         # Komponen UI (Navbar, Footer, ProfileCard, ShinyText, BlurText, Lanyard, Aurora, ChromaGrid, ProjectModal, PreLoader)
│   ├── data.js             # DATA UTAMA: listTools + listProyek — EDIT DI SINI
│   ├── App.jsx             # Layout halaman (Hero, About, Tools, Projects, Contact)
│   ├── main.jsx            # Entry point
│   └── index.css / App.css # Global & component styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Menjalankan Lokal

```bash
# Clone
git clone https://github.com/Ryonandha/Portofolio.git
cd Portofolio

# Install deps
npm install

# Development server (HMR)
npm run dev
# Buka http://localhost:5173

# Production build
npm run build
# Output di folder dist/

# Preview build lokal
npm run preview
```

---

## Mengubah Konten Proyek

Semua data proyek ada di **`src/data.js`** — edit array `listProyek`:

```js
export const listProyek = [
  {
    id: 1,
    title: "Nama Proyek",
    images: ["/nama-file-di-public.png"],  // gambar di public/
    deskripsi: "Deskripsi singkat...",
    github: "https://github.com/Ryonandha/repo",
    demo: "https://demo.vercel.app/",       // atau null
    tech: ["React", "Tailwind", "API"],     // tag teknologi
    dad: "100",                             // delay AOS (ms)
  },
  // ...
];
```

**Gambar:** taruh file PNG/JPG di `public/`, lalu referensikan dengan `/nama-file.png`.

**Tech stack (tools):** edit array `listTools` di file yang sama.

---

## Deploy ke Vercel

1. Push ke GitHub (branch `main`)
2. Import project di Vercel → Framework Preset: **Vite**
3. Build Command: `npm run build` (default)
4. Output Directory: `dist` (default)
5. Environment variables: tidak perlu kecuali pakai Firebase

---

## Catatan

- `hero-img.webp` dan `ryonandha.png` cukup besar (~2 MB). Untuk performa produksi, pertimbangkan kompresi atau pakai WebP/AVIF yang lebih kecil.
- `CV.pdf` di `public/` akan tersedia di `/CV.pdf` (sudah dipakai di tombol *Download CV* di Hero).
- Komponen 3D (`Aurora`, `Lanyard`, `ChromaGrid`) pakai Three.js — pastikan browser mendukung WebGL.

---

Dibuat oleh [Ryonandha](https://github.com/Ryonandha) · 2026