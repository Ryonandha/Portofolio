// src/data.js - Updated with real project data and images

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

// 2. IMPORT PROJECT IMAGES (from public folder)
import imgSiPeka from "/kanban.png"; // will use for SiPeka
import imgRelawanAat from "/relawan-aat.png";
import imgTaskApi from "/task-api.png";
import imgEsKopi from "/kanban.png"; // placeholder
import imgRun2026 from "/kanban.png"; // placeholder
import imgKanban from "/kanban.png";
import imgFlixMeow from "/kanban.png"; // placeholder
import imgSmsSpam from "/sms-spam.png";

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
    images: [imgSiPeka],
    deskripsi: "Sistem deteksi dini kesehatan mental mahasiswa via analisis teks (IndoBERT fine-tuned 4 kelas, akurasi 77.3%, F1-macro 0.758). Arsitektur: Laravel + Flask API, Azure Container Apps.",
    github: "https://github.com/Ryonandha/SiPeka-STIKOM",
    demo: null,
    tech: ["Laravel", "Flask", "IndoBERT", "Azure"],
    dad: "100",
  },
  {
    id: 2,
    title: "Relawan AAT — Volunteer Management",
    images: [imgRelawanAat],
    deskripsi: "Sistem manajemen relawan Yayasan Anak-Anak Terang: multi-role auth (Spatie), jadwal pendampingan, sertifikat otomatis, dashboard admin.",
    github: "https://github.com/Ryonandha/relawan-aat",
    demo: null,
    tech: ["Laravel", "Spatie Permission", "Livewire"],
    dad: "200",
  },
  {
    id: 3,
    title: "Laravel Task API",
    images: [imgTaskApi],
    deskripsi: "RESTful API manajemen tugas lengkap: CRUD, Sanctum auth, filtering, pagination. Dokumentasi via Scribe.",
    github: "https://github.com/Ryonandha/laravel-task-api",
    demo: null,
    tech: ["Laravel 11", "MySQL", "Sanctum", "Scribe"],
    dad: "300",
  },
  {
    id: 4,
    title: "Es Kopi Brasil — Landing Page",
    images: [imgEsKopi],
    deskripsi: "Landing page kedai es krim & kopi legendaris Purwokerto. Next.js 15, Framer Motion, lightbox gallery, SEO-ready.",
    github: "https://github.com/Ryonandha/es-kopi-brasil",
    demo: "https://es-kopi-brasil.vercel.app/",
    tech: ["Next.js 15", "Tailwind", "Framer Motion"],
    dad: "400",
  },
  {
    id: 5,
    title: "Run 2026 — Event Registration",
    images: [imgRun2026],
    deskripsi: "Platform registrasi event Eco Padjadjaran 2026: NextAuth, Prisma, Midtrans payment, Leaflet maps, Resend email, QR check-in.",
    github: "https://github.com/Ryonandha/Run-2026",
    demo: "https://run-2026.vercel.app/",
    tech: ["Next.js", "Prisma", "NextAuth", "Midtrans", "Leaflet"],
    dad: "500",
  },
  {
    id: 6,
    title: "Interactive Kanban Board",
    images: [imgKanban],
    deskripsi: "Trello clone dengan drag-and-drop (@dnd-kit), localStorage persistence, multiple board support. Dibangun pakai React + Vite.",
    github: "https://github.com/Ryonandha/react-kanban-portfolio",
    demo: "https://react-kanban-portfolio.vercel.app/",
    tech: ["React", "Vite", "DnD Kit", "Tailwind"],
    dad: "600",
  },
  {
    id: 7,
    title: "FlixMeow — Movie Discovery",
    images: [imgFlixMeow],
    deskripsi: "Aplikasi pencarian film TMDB API: search debounce, grid populer, halaman detail (rating, genre, overview), dark mode default.",
    github: "https://github.com/Ryonandha/react-movie-discovery-flixmeow",
    demo: "https://react-movie-discovery-flixmeow.vercel.app/",
    tech: ["React", "Tailwind", "TMDB API"],
    dad: "700",
  },
  {
    id: 8,
    title: "SMS Spam Detector (Indonesia)",
    images: [imgSmsSpam],
    deskripsi: "Klasifikasi SMS spam/ham bahasa Indonesia: Naive Bayes + TF-IDF, preprocessing Sastrawi, evaluasi akurasi 96.8%. Notebook lengkap.",
    github: "https://github.com/Ryonandha/sms-spam-detector-indonesia",
    demo: null,
    tech: ["Python", "scikit-learn", "Jupyter"],
    dad: "800",
  },
];