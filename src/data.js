// src/data.js - Updated with real project data and CORRECT local screenshot paths

// 1. IMPORT GAMBAR TOOLS
import imgVscode from "./assets/tools/vscode.png";
import imgReact from "./assets/tools/reactjs.png";
import imgNext from "./assets/tools/nextjs.png";
import imgTailwind from "./assets/tools/tailwind.png";
import imgVite from "./assets/tools/vite.png";
import imgFigma from "./assets/tools/figma.png";
import imgJs from "./assets/tools/js.png";
import imgPHP from "./assets/tools/php.png";
import imgMySQL from "./assets/tools/mysql.png";
import imgTs from "./assets/tools/ts.png";
import imgLaravel from "./assets/tools/php.png"; // placeholder - use php for laravel
import imgPython from "./assets/tools/vscode.png"; // placeholder - use vscode for python
import imgFlask from "./assets/tools/vscode.png"; // placeholder
import imgIndoBERT from "./assets/tools/ai.png"; // ai.png already exists

export const listTools = [
  { id: 1, gambar: imgVscode, nama: "VS Code", ket: "Code Editor", dad: "100" },
  { id: 2, gambar: imgReact, nama: "React JS", ket: "Frontend Lib", dad: "200" },
  { id: 3, gambar: imgNext, nama: "Next JS", ket: "React Framework", dad: "300" },
  { id: 4, gambar: imgTailwind, nama: "Tailwind", ket: "CSS Framework", dad: "400" },
  { id: 5, gambar: imgVite, nama: "Vite", ket: "Build Tool", dad: "500" },
  { id: 6, gambar: imgFigma, nama: "Figma", ket: "UI/UX Design", dad: "600" },
  { id: 7, gambar: imgJs, nama: "JavaScript", ket: "Language", dad: "700" },
  { id: 8, gambar: imgPHP, nama: "PHP", ket: "Backend Lang", dad: "800" },
  { id: 9, gambar: imgMySQL, nama: "MySQL", ket: "Database", dad: "900" },
  { id: 10, gambar: imgTs, nama: "TypeScript", ket: "Language", dad: "1000" },
];

export const listProyek = [
  {
    id: 1,
    title: "SiPeka — Mental Health Screening",
    images: ["/sipeka.png"],
    deskripsi: "Sistem deteksi dini kesehatan mental mahasiswa via analisis teks. IndoBERT fine-tuned 4 kelas emosi, akurasi 77.3%, F1-macro 0.758 (baseline +10.10). Arsitektur: Laravel + Flask API, deploy Azure Container Apps.",
    github: "https://github.com/Ryonandha/SiPeka-STIKOM",
    demo: null,
    tech: ["Laravel", "Flask", "IndoBERT", "Azure"],
    dad: "100",
  },
  {
    id: 2,
    title: "Relawan AAT — Volunteer Management",
    images: ["/relawan-aat.png"],
    deskripsi: "Sistem manajemen relawan Yayasan Anak-Anak Terang: multi-role auth (Spatie Permission), jadwal pendampingan, sertifikat otomatis via DomPDF, dashboard admin statistik.",
    github: "https://github.com/Ryonandha/relawan-aat",
    demo: null,
    tech: ["Laravel", "Spatie Permission", "Livewire", "DomPDF"],
    dad: "200",
  },
  {
    id: 3,
    title: "Laravel Task API",
    images: ["/laravel-task-api.png"],
    deskripsi: "RESTful API manajemen tugas lengkap: CRUD, Sanctum auth, filtering, pagination, soft delete. Dokumentasi otomatis via Scribe. Test coverage 92%.",
    github: "https://github.com/Ryonandha/laravel-task-api",
    demo: null,
    tech: ["Laravel 11", "MySQL", "Sanctum", "Scribe"],
    dad: "300",
  },
  {
    id: 4,
    title: "Es Kopi Brasil — Landing Page",
    images: ["/es-kopi-brasil.png"],
    deskripsi: "Landing page kedai es krim & kopi legendaris Purwokerto. Next.js 15 App Router, Framer Motion animasi scroll, lightbox gallery, JSON-LD SEO, Lighthouse 95+.",
    github: "https://github.com/Ryonandha/es-kopi-brasil",
    demo: "https://es-kopi-brasil.vercel.app/",
    tech: ["Next.js 15", "Tailwind", "Framer Motion"],
    dad: "400",
  },
  {
    id: 5,
    title: "Run 2026 — Event Registration",
    images: ["/run-2026.png"],
    deskripsi: "Platform registrasi Eco Padjadjaran 2026: NextAuth (email/password + Google), Prisma + Postgres, Midtrans Snap payment, Leaflet maps lokasi, Resend email, QR check-in.",
    github: "https://github.com/Ryonandha/Run-2026",
    demo: "https://run-2026.vercel.app/",
    tech: ["Next.js", "Prisma", "NextAuth", "Midtrans", "Leaflet", "Resend"],
    dad: "500",
  },
  {
    id: 6,
    title: "Interactive Kanban Board",
    images: ["/kanban.png"],
    deskripsi: "Trello clone: drag-and-drop (@dnd-kit), localStorage persistence, multiple board/column/task, keyboard shortcuts, dark mode. React + Vite + Tailwind.",
    github: "https://github.com/Ryonandha/react-kanban-portfolio",
    demo: "https://react-kanban-portfolio.vercel.app/",
    tech: ["React", "Vite", "DnD Kit", "Tailwind"],
    dad: "600",
  },
  {
    id: 7,
    title: "FlixMeow — Movie Discovery",
    images: ["/flixmeow.png"],
    deskripsi: "Aplikasi pencarian film TMDB API: search debounce 300ms, infinite scroll grid populer, halaman detail (rating, genre, overview, cast), dark mode default, skeleton loading.",
    github: "https://github.com/Ryonandha/react-movie-discovery-flixmeow",
    demo: "https://react-movie-discovery-flixmeow.vercel.app/",
    tech: ["React", "Tailwind", "TMDB API"],
    dad: "700",
  },
  {
    id: 8,
    title: "SMS Spam Detector (Indonesia)",
    images: ["/sms-spam.png"],
    deskripsi: "Klasifikasi SMS spam/ham bahasa Indonesia: Naive Bayes + TF-IDF, preprocessing Sastrawi (stemming + stopword), evaluasi akurasi 96.8%, F1 0.96. Notebook lengkap reproducible.",
    github: "https://github.com/Ryonandha/sms-spam-detector-indonesia",
    demo: null,
    tech: ["Python", "scikit-learn", "Sastrawi", "Jupyter"],
    dad: "800",
  },
];