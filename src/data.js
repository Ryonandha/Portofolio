// src/data.js

// Import Gambar (Pastikan path-nya benar sesuai folder public/public/tools/)
// Jika gambar belum ada, kode ini tetap jalan tapi gambar akan blank/pecah.
import Tools1 from "/public/tools/vscode.png";
import Tools2 from "/public/tools/reactjs.png";
import Tools3 from "/public/tools/nextjs.png";
import Tools4 from "/public/tools/tailwind.png";

// PENTING: Harus pakai "export const" agar bisa di-import di App.jsx
export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "VS Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind",
    ket: "Styling",
    dad: "400",
  },
];

// Data Proyek (Kita siapkan sekalian agar tidak error jika nanti dipanggil)
export const listProyek = [
  {
    id: 1,
    title: "Contoh Proyek 1",
    subtitle: "Deskripsi singkat...",
    fullDescription: "Deskripsi lengkap proyek ini...",
    image: "https://via.placeholder.com/400x300", // Placeholder sementara
    dad: "100",
  },
];
