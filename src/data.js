// src/data.js

// 1. IMPORT SEMUA GAMBAR DI ATAS
// (VS Code akan otomatis cek apakah file ini ada. Kalau merah, berarti nama file salah!)
import imgVscode from "./assets/tools/vscode.png";
import imgReact from "./assets/tools/reactjs.png";
import imgNext from "./assets/tools/nextjs.png";
import imgTailwind from "./assets/tools/tailwind.png";

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
];
