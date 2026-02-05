// src/data.js

// 1. IMPORT GAMBAR TOOLS (Gunakan gambar yang SUDAH ADA di folder assets)
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

// PENTING: Gunakan gambar placeholder yang ADA dulu agar tidak error build
// Nanti Anda bisa upload gambar laravel.png dan python.png ke folder assets jika sudah ada
const imgLaravel = imgPHP; // Placeholder sementara pakai PHP
const imgPython = imgVscode; // Placeholder sementara pakai VS Code

// Placeholder untuk gambar project
const placeholderImg = imgVscode;

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
    title: "Mental Health Detection",
    // Gunakan array images agar slider berfungsi
    images: [placeholderImg, placeholderImg],
    deskripsi: "Sistem deteksi dini kesehatan mental mahasiswa menggunakan metode IndoBERT.",
    github: "https://github.com/Ryonandha/SiPeka-STIKOM",
    demo: null,
    tech: ["Python", "IndoBERT", "Flask", "React"],
    dad: "100",
  },
  {
    id: 2,
    title: "SMS Spam Detector",
    images: [placeholderImg],
    deskripsi: "Aplikasi Machine Learning untuk mendeteksi SMS spam dalam bahasa Indonesia.",
    github: "https://github.com/Ryonandha/sms-spam-detector-indonesia",
    demo: null,
    tech: ["Python", "Streamlit", "Scikit-Learn"],
    dad: "200",
  },
  {
    id: 3,
    title: "Movie Discovery App",
    images: [placeholderImg],
    deskripsi: "Aplikasi pencarian film interaktif yang menggunakan TMDB API.",
    github: "https://github.com/Ryonandha/react-movie-discovery-flixmeow",
    demo: "https://react-movie-discovery-flixmeow.vercel.app/",
    tech: ["React JS", "Tailwind CSS", "TMDB API"],
    dad: "300",
  },
  {
    id: 4,
    title: "Interactive Kanban Board",
    images: [placeholderImg],
    deskripsi: "Aplikasi manajemen tugas bergaya Trello dengan fitur Drag-and-Drop.",
    github: "https://github.com/Ryonandha/react-kanban-portfolio",
    demo: "https://react-kanban-portfolio.vercel.app/",
    tech: ["React JS", "Dnd Kit", "Tailwind"],
    dad: "400",
  },
  {
    id: 5,
    title: "Task Management API",
    images: [placeholderImg],
    deskripsi: "Backend API lengkap untuk aplikasi manajemen tugas dengan autentikasi.",
    github: "https://github.com/Ryonandha/laravel-task-api",
    demo: null,
    tech: ["Laravel", "MySQL", "Scribe"],
    dad: "500",
  },
  {
    id: 6,
    title: "Gamification MATH",
    images: [placeholderImg],
    deskripsi: "Web untuk Gamifikasi Mata Pelajaran Matematika SD.",
    github: "https://github.com/Ryonandha/Gamify",
    demo: null,
    tech: ["Laravel", "MySQL", "PHP"],
    dad: "600",
  },
];
