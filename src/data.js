// src/data.js

// PERUBAHAN 1: Tidak perlu import gambar dari public.
// Cukup tulis path-nya sebagai string. Vite otomatis tahu itu ada di folder public.

export const listTools = [
  {
    id: 1,
    // Pastikan file "vscode.png" ada di folder: public/tools/vscode.png
    gambar: "/tools/vscode.png",
    nama: "VS Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: "/tools/reactjs.png",
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: "/tools/nextjs.png",
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: "/tools/tailwind.png",
    nama: "Tailwind",
    ket: "Styling",
    dad: "400",
  },
];

// PERUBAHAN 2: Isi data proyekmu sendiri agar beda dari template
export const listProyek = [
  {
    id: 1,
    title: "Sistem Monitoring Mental",
    subtitle: "Analisis Emosi dengan AI",
    fullDescription: "Aplikasi pendeteksi kesehatan mental mahasiswa menggunakan IndoBERT.",
    image: "https://via.placeholder.com/400x300", // Ganti dengan screenshot proyekmu nanti
    dad: "100",
  },
  {
    id: 2,
    title: "Freelance Data Entry",
    subtitle: "Pengalaman Kerja",
    fullDescription: "Membantu klien mengolah data Excel dan statistik penjualan.",
    image: "https://via.placeholder.com/400x300",
    dad: "200",
  },
];
