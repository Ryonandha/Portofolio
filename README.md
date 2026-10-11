# Portofolio Website

Source code website portofolio pribadi. Dibangun dengan Vite + React 19 dan Tailwind CSS 4.

**Live:** https://portofolio-ryon.vercel.app

---

## Stack

| Kategori | Teknologi |
|---|---|
| Frontend | React 19, Vite 7, Tailwind CSS 4 |
| Animasi | AOS, animate.css, GSAP, Motion |
| 3D / Visual | Three.js, @react-three/fiber, @react-three/drei, OGL |
| Icons | Lucide React, React Icons, Remixicon |

---

## Struktur Proyek

```
Portofolio/
├── public/
│   ├── sipeka.png
│   ├── relawan-aat.png
│   ├── laravel-task-api.png
│   ├── es-kopi-brasil.png
│   ├── run-2026.png
│   ├── kanban.png
│   ├── flixmeow.png
│   ├── sms-spam.png
│   ├── ryonandha.png
│   └── CV.pdf
├── src/
│   ├── assets/tools/       # Ikon tech stack (PNG)
│   ├── components/         # Komponen UI (Navbar, Footer, ProfileCard, dll.)
│   ├── data.js             # DATA UTAMA: listTools + listProyek
│   ├── App.jsx             # Layout halaman
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
└── vite.config.js
```

---

## Menjalankan Lokal

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

---

## Update Konten

Semua data proyek dan tech stack ada di [`src/data.js`](src/data.js):
- `listTools` — daftar tool yang ditampilkan di section Skills
- `listProyek` — daftar proyek yang ditampilkan di section Projects

Screenshot proyek disimpan di folder `public/`.