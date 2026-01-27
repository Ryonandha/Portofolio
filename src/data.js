// src/data.js

// 1. IMPORT SEMUA GAMBAR DI ATAS
// (VS Code akan otomatis cek apakah file ini ada. Kalau merah, berarti nama file salah!)
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

// Import gambar proyek (sementara pakai gambar tools dulu jika belum ada screenshot)
import imgProyek1 from "./assets/tools/vscode.png";

export const listTools = [
  {
    id: 1,
    gambar: imgVscode, // Panggil variabel import tadi
    nama: "VS Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: imgReact,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: imgNext,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: imgTailwind,
    nama: "Tailwind",
    ket: "Styling",
    dad: "400",
  },
  {
    id: 5,
    gambar: imgVite,
    nama: "Vite",
    ket: "Styling",
    dad: "400",
  },
  {
    id: 6,
    gambar: imgFigma,
    nama: "Figma",
    ket: "Styling",
    dad: "400",
  },
  {
    id: 7,
    gambar: imgJs,
    nama: "JavaScript",
    ket: "Styling",
    dad: "400",
  },
  {
    id: 8,
    gambar: imgPHP,
    nama: "PHP",
    ket: "Styling",
    dad: "400",
  },
  {
    id: 9,
    gambar: imgMySQL,
    nama: "MySQL",
    ket: "Styling",
    dad: "400",
  },
  {
    id: 10,
    gambar: imgTs,
    nama: "Typescript",
    ket: "Styling",
    dad: "400",
  },
];

export const listProyek = [
  {
    id: 1,
    title: "Sistem Monitoring Mental",
    subtitle: "Analisis Emosi AI",
    fullDescription: "Aplikasi deteksi kesehatan mental mahasiswa.",
    image: imgProyek1, // Pakai variabel import
    dad: "100",
  },
  {
    id: 2,
    title: "Freelance Data Entry",
    subtitle: "Pengalaman Kerja",
    fullDescription: "Pengolahan data Excel dan statistik.",
    image: imgProyek1, // Pakai variabel import
    dad: "200",
  },
  {
    id: 3,
    title: "Freelance Data Entry",
    subtitle: "Pengalaman Kerja",
    fullDescription: "Pengolahan data Excel dan statistik.",
    image: imgProyek1, // Pakai variabel import
    dad: "200",
  },
  {
    id: 4,
    title: "Freelance Data Entry",
    subtitle: "Pengalaman Kerja",
    fullDescription: "Pengolahan data Excel dan statistik.",
    image: imgProyek1, // Pakai variabel import
    dad: "200",
  },
  {
    id: 5,
    title: "Freelance Data Entry",
    subtitle: "Pengalaman Kerja",
    fullDescription: "Pengolahan data Excel dan statistik.",
    image: imgProyek1, // Pakai variabel import
    dad: "200",
  },
  {
    id: 6,
    title: "Freelance Data Entry",
    subtitle: "Pengalaman Kerja",
    fullDescription: "Pengolahan data Excel dan statistik.",
    image: imgProyek1, // Pakai variabel import
    dad: "200",
  },
];
