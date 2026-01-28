// src/data.js

// === 1. IMPORT GAMBAR TOOLS ===
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
import imgLaravel from "./assets/tools/laravel.png"; // Pastikan ikon ini ada atau ganti dengan imgPHP sementara
import imgPython from "./assets/tools/python.png"; // Pastikan ikon ini ada atau ganti dengan imgVscode sementara

// === 2. IMPORT GAMBAR PROYEK (Ganti ini dengan Screenshot Asli nanti) ===
// Contoh cara import gambar asli nanti:
// import projMental1 from "./assets/projects/mental-1.png";
// import projMental2 from "./assets/projects/mental-2.png";

// SEMENTARA pakai gambar tools sebagai placeholder agar tidak error
import placeholderImg from "./assets/tools/vscode.png";

export const listTools = [
  {
    id: 1,
    gambar: imgVscode,
    nama: "VS Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: imgReact,
    nama: "React JS",
    ket: "Frontend Lib",
    dad: "200",
  },
  {
    id: 3,
    gambar: imgNext,
    nama: "Next JS",
    ket: "React Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: imgTailwind,
    nama: "Tailwind",
    ket: "CSS Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: imgVite,
    nama: "Vite",
    ket: "Build Tool",
    dad: "500",
  },
  {
    id: 6,
    gambar: imgFigma,
    nama: "Figma",
    ket: "UI/UX Design",
    dad: "600",
  },
  {
    id: 7,
    gambar: imgJs,
    nama: "JavaScript",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: imgPHP,
    nama: "PHP",
    ket: "Backend Lang",
    dad: "800",
  },
  {
    id: 9,
    gambar: imgMySQL,
    nama: "MySQL",
    ket: "Database",
    dad: "900",
  },
  {
    id: 10,
    gambar: imgTs,
    nama: "TypeScript",
    ket: "Language",
    dad: "1000",
  },
];

export const listProyek = [
  {
    id: 1,
    title: "Mental Health Detection",
    // Gunakan array images agar slider berfungsi
    images: [placeholderImg, placeholderImg],
    deskripsi: "Sistem deteksi dini kesehatan mental mahasiswa menggunakan metode IndoBERT (NLP). Proyek ini mengklasifikasikan teks curhatan mahasiswa untuk mendeteksi indikasi depresi atau kecemasan.",
    github: "https://github.com/Ryonandha", // Update link repo spesifik jika ada
    demo: null,
    tech: ["Python", "IndoBERT", "Flask", "React"],
    dad: "100",
  },
  {
    id: 2,
    title: "SMS Spam Detector",
    images: [placeholderImg, placeholderImg],
    deskripsi: "Aplikasi Machine Learning untuk mendeteksi SMS spam dalam bahasa Indonesia. Menggunakan algoritma klasifikasi teks untuk memisahkan pesan penipuan dan pesan normal.",
    github: "https://github.com/Ryonandha",
    demo: "https://ryonandha.github.io/sms-spam-detection",
    tech: ["Python", "Streamlit", "Scikit-Learn"],
    dad: "200",
  },
  {
    id: 3,
    title: "Movie Discovery App",
    images: [placeholderImg],
    deskripsi: "Aplikasi pencarian film interaktif yang menggunakan TMDB API. Memungkinkan pengguna melihat film populer, detail film, dan rating secara real-time.",
    github: "https://github.com/Ryonandha",
    demo: null,
    tech: ["React JS", "Tailwind CSS", "TMDB API"],
    dad: "300",
  },
  {
    id: 4,
    title: "Interactive Kanban Board",
    images: [placeholderImg],
    deskripsi: "Aplikasi manajemen tugas bergaya Trello dengan fitur Drag-and-Drop. Membantu mengorganisir status tugas (To Do, In Progress, Done).",
    github: "https://github.com/Ryonandha",
    demo: null,
    tech: ["React JS", "Dnd Kit", "Tailwind"],
    dad: "400",
  },
  {
    id: 5,
    title: "Task Management API",
    images: [placeholderImg],
    deskripsi: "Backend API lengkap untuk aplikasi manajemen tugas. Mendukung autentikasi pengguna (Sanctum), CRUD tugas, dan dokumentasi API otomatis.",
    github: "https://github.com/Ryonandha",
    demo: null,
    tech: ["Laravel", "MySQL", "Scribe"],
    dad: "500",
  },
  {
    id: 6,
    title: "Price Scraping Tool",
    images: [placeholderImg],
    deskripsi: "Bot otomatisasi untuk memantau harga produk e-commerce dan menyimpan riwayat harga ke database untuk analisis tren pasar.",
    github: "https://github.com/Ryonandha",
    demo: null,
    tech: ["Python", "Selenium", "Supabase"],
    dad: "600",
  },
];
