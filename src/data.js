// src/data.js — Data proyek & keahlian terstruktur profesional

// Import ikon tools
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
import imgNode from "./assets/tools/nodejs.png";
import imgAi from "./assets/tools/ai.png";
import imgGithub from "./assets/tools/github.png";

export const skillCategories = [
  {
    category: "Backend & Database",
    description: "Arsitektur server, API terstruktur, otentikasi aman, dan manajemen basis data relasional.",
    skills: [
      { name: "Laravel", level: "Advanced", icon: imgPHP, note: "MVC, Eloquent, Sanctum, Livewire" },
      { name: "PHP", level: "Advanced", icon: imgPHP, note: "Modern PHP 8+, OOP" },
      { name: "MySQL", level: "Intermediate", icon: imgMySQL, note: "Indexing, Relational Design" },
      { name: "PostgreSQL", level: "Intermediate", icon: imgMySQL, note: "Prisma ORM, Supabase/Neon" },
      { name: "RESTful API", level: "Advanced", icon: imgNode, note: "JSON API, Rate Limiting, Scribe Docs" },
    ],
  },
  {
    category: "Frontend Development",
    description: "Antarmuka responsif, performa cepat, dan interaksi pengguna yang mulus.",
    skills: [
      { name: "React.js", level: "Advanced", icon: imgReact, note: "Hooks, Context, State Management" },
      { name: "Next.js", level: "Intermediate", icon: imgNext, note: "App Router, SSR, Server Actions" },
      { name: "TypeScript", level: "Intermediate", icon: imgTs, note: "Type Safety, Interfaces" },
      { name: "JavaScript", level: "Advanced", icon: imgJs, note: "ES6+, Async/Await, DOM" },
      { name: "Tailwind CSS", level: "Advanced", icon: imgTailwind, note: "Modern Utility, Responsive UI" },
      { name: "Vite", level: "Advanced", icon: imgVite, note: "Fast Bundling & Modern Build" },
    ],
  },
  {
    category: "AI & Machine Learning",
    description: "Eksplorasi NLP, klasifikasi teks, dan integrasi model ke aplikasi web.",
    skills: [
      { name: "Python", level: "Intermediate", icon: imgAi, note: "Pandas, NumPy, Scikit-Learn" },
      { name: "IndoBERT / HuggingFace", level: "Intermediate", icon: imgAi, note: "Fine-tuning NLP, Sentiment & Emotion" },
      { name: "Flask API", level: "Intermediate", icon: imgAi, note: "Microservice Serving Model AI" },
      { name: "Text Preprocessing", level: "Intermediate", icon: imgAi, note: "Sastrawi Stemming, TF-IDF Vectorizer" },
    ],
  },
  {
    category: "Tools & Deployment",
    description: "Lingkungan kerja terstandar, kolaborasi tim, dan rilis aplikasi.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: imgGithub, note: "Version Control, Branching, PRs" },
      { name: "Azure Container Apps", level: "Intermediate", icon: imgAi, note: "Docker Container Cloud Deployment" },
      { name: "Vercel", level: "Advanced", icon: imgNext, note: "CI/CD & Serverless Deployment" },
      { name: "VS Code", level: "Advanced", icon: imgVscode, note: "Primary IDE & Extensions" },
      { name: "Figma", level: "Intermediate", icon: imgFigma, note: "UI/UX Wireframing & Prototyping" },
    ],
  },
];

export const listTools = [
  { id: 1, gambar: imgPHP, nama: "Laravel", ket: "PHP Framework", dad: "100" },
  { id: 2, gambar: imgReact, nama: "React.js", ket: "Frontend Library", dad: "200" },
  { id: 3, gambar: imgNext, nama: "Next.js", ket: "React Framework", dad: "300" },
  { id: 4, gambar: imgTailwind, nama: "Tailwind CSS", ket: "Styling Framework", dad: "400" },
  { id: 5, gambar: imgPHP, nama: "PHP", ket: "Backend Language", dad: "500" },
  { id: 6, gambar: imgMySQL, nama: "MySQL", ket: "Relational Database", dad: "600" },
  { id: 7, gambar: imgTs, nama: "TypeScript", ket: "Type-Safe JS", dad: "700" },
  { id: 8, gambar: imgJs, nama: "JavaScript", ket: "Programming Language", dad: "800" },
  { id: 9, gambar: imgAi, nama: "Python / IndoBERT", ket: "Machine Learning & NLP", dad: "900" },
  { id: 10, gambar: imgVite, nama: "Vite", ket: "Build Tool", dad: "1000" },
];

export const listProyek = [
  {
    id: 1,
    title: "SiPeka — Mental Health Screening System",
    subtitle: "Sistem Skripsi Deteksi Dini Kesehatan Mental Mahasiswa",
    images: ["/sipeka.png"],
    category: "ai",
    categoryName: "AI & Full-Stack",
    featured: true,
    highlightMetric: "Akurasi 77.3% (F1-Macro 0.758, +10.1% vs Baseline)",
    deskripsi: "Sistem cerdas deteksi dini kesehatan mental mahasiswa melalui analisis teks berbasis IndoBERT yang di-fine-tuning pada 4 kelas emosi. Menggunakan arsitektur microservices terpisah: Laravel untuk frontend & sistem asesmen, Flask API untuk inferensi model AI, serta dideploy di Azure Container Apps.",
    features: [
      "Fine-tuning model IndoBERT pada korpus emosi mahasiswa berbahasa Indonesia",
      "Arsitektur terpisah (Decoupled): Laravel 11 Client + Flask Model Inference Microservice",
      "Dashboard asesmen berkala dengan visualisasi tren emosional pengguna",
      "Deploy kontainerisasi penuh via Azure Container Apps & Docker",
    ],
    github: "https://github.com/Ryonandha/SiPeka-STIKOM",
    demo: null,
    tech: ["Laravel 11", "Flask API", "IndoBERT", "Python", "Azure", "Tailwind CSS"],
    dad: "100",
  },
  {
    id: 2,
    title: "Relawan AAT — Volunteer Management Platform",
    subtitle: "Sistem Manajemen Relawan Nyata Yayasan Anak-Anak Terang",
    images: ["/relawan-aat.png"],
    category: "fullstack",
    categoryName: "Full-Stack Web",
    featured: true,
    highlightMetric: "Digunakan aktif untuk operasional pendampingan relawan",
    deskripsi: "Aplikasi manajemen operasional relawan Yayasan Anak-Anak Terang. Mempermudah koordinasi ratusan relawan, absensi kegiatan pendampingan anak asuh, pembuatan sertifikat digital otomatis ber-barcode, dan rekapitulasi data relawan berbasis hak akses berjenjang (Role-Based Access Control).",
    features: [
      "Role-Based Access Control menggunakan Spatie Permission (Admin, Koordinator, Relawan)",
      "Penjadwalan kegiatan pendampingan interaktif dengan filter wilayah",
      "Generasi sertifikat kegiatan otomatis dalam format PDF menggunakan DomPDF",
      "Interaksi antarmuka dinamis dan real-time menggunakan Laravel Livewire",
    ],
    github: "https://github.com/Ryonandha/relawan-aat",
    demo: null,
    tech: ["Laravel", "Spatie Permission", "Livewire", "MySQL", "DomPDF", "Tailwind CSS"],
    dad: "200",
  },
  {
    id: 3,
    title: "Run 2026 — Eco Padjadjaran Registration",
    subtitle: "Platform Registrasi Event Lari & Integrasi Payment Gateway",
    images: ["/run-2026.png"],
    category: "fullstack",
    categoryName: "Full-Stack Web",
    featured: true,
    highlightMetric: "Payment Gateway Midtrans Snap + Peta Rute Leaflet",
    deskripsi: "Platform registrasi online terintegrasi untuk event Eco Padjadjaran Run 2026. Dilengkapi alur pendaftaran peserta, integrasi pembayaran digital otomatis (Midtrans Snap), pengiriman tiket email konfirmasi dengan QR code untuk check-in lomba, serta peta rute interaktif dengan Leaflet.js.",
    features: [
      "Otentikasi multi-provider (Google OAuth & Email Credentials via NextAuth.js)",
      "Integrasi webhook Midtrans Snap untuk verifikasi status transaksi otomatis",
      "Peta rute interaktif lomba menggunakan Leaflet.js & OpenStreetMap",
      "Sistem pengiriman tiket & QR check-in peserta otomatis melalui Resend Email API",
    ],
    github: "https://github.com/Ryonandha/Run-2026",
    demo: "https://run-2026.vercel.app/",
    tech: ["Next.js", "Prisma ORM", "PostgreSQL", "Midtrans", "NextAuth", "Leaflet", "Tailwind CSS"],
    dad: "300",
  },
  {
    id: 4,
    title: "Laravel Task Management API",
    subtitle: "RESTful API Standar Industri dengan Dokumentasi Otomatis",
    images: ["/laravel-task-api.png"],
    category: "fullstack",
    categoryName: "Backend & API",
    featured: false,
    highlightMetric: "Test Coverage 92% + Auto Scribe Documentation",
    deskripsi: "RESTful API terstruktur untuk sistem manajemen tugas produktivitas. Menerapkan standar arsitektur REST, autentikasi berbasis Bearer token menggunakan Laravel Sanctum, validasi ketat, soft-deletes, pagination, serta dokumentasi interaktif otomatis menggunakan Scribe.",
    features: [
      "Autentikasi token aman berbasis Laravel Sanctum dengan auto token refresh",
      "Fitur filtering status, sorting tanggal, search query, dan pagination responsif",
      "Unit testing & Feature testing komprehensif mencapai code coverage 92%",
      "Dokumentasi API interaktif yang otomatis digenerate dari docblock via Scribe",
    ],
    github: "https://github.com/Ryonandha/laravel-task-api",
    demo: null,
    tech: ["Laravel 11", "MySQL", "Sanctum", "Scribe API Docs", "PHPUnit"],
    dad: "400",
  },
  {
    id: 5,
    title: "Es Kopi Brasil — Authentic Brand Landing Page",
    subtitle: "Modern Business Landing Page Kedai Kopi Legendaris",
    images: ["/es-kopi-brasil.png"],
    category: "frontend",
    categoryName: "Frontend Web",
    featured: false,
    highlightMetric: "Skor Lighthouse 95+ (Performance & SEO)",
    deskripsi: "Landing page modern dan elegan untuk brand kuliner legendaris es krim & kopi di Purwokerto. Dibangun dengan Next.js App Router untuk performa SEO optimal, animasi transisi halus menggunakan Framer Motion, lightbox galeri produk, dan struktur data schema JSON-LD.",
    features: [
      "Server-Side Rendering (SSR) & optimasi SEO terindeks Google dengan JSON-LD",
      "Animasi interaktif saat scroll dan mikro-interaksi tombol menggunakan Framer Motion",
      "Galeri foto interaktif dengan modal lightbox responsif",
      "Desain tipografi premium bernuansa retro-modern yang selaras dengan identitas brand",
    ],
    github: "https://github.com/Ryonandha/es-kopi-brasil",
    demo: "https://es-kopi-brasil.vercel.app/",
    tech: ["Next.js 15", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    dad: "500",
  },
  {
    id: 6,
    title: "Interactive Kanban Board",
    subtitle: "Aplikasi Manajemen Tugas Drag-and-Drop Terorganisir",
    images: ["/kanban.png"],
    category: "frontend",
    categoryName: "Frontend Web",
    featured: false,
    highlightMetric: "Drag-and-Drop Halus + LocalStorage Persistence",
    deskripsi: "Aplikasi manajemen workflow tugas bergaya Trello yang memungkinkan pengguna membuat kolom kerja, menambahkan kartu tugas, dan memindahkannya secara intuitif dengan drag-and-drop. Seluruh status tersimpan otomatis di penyimpanan lokal browser.",
    features: [
      "Sistem drag-and-drop performa tinggi berbasis @dnd-kit dengan animasi natural",
      "Penyimpanan otomatis menggunakan LocalStorage tanpa dependensi database eksternal",
      "Dukungan keyboard navigation dan pintasan cepat (shortcuts)",
      "Dukungan Dark Mode dan responsive layout untuk penggunaan di tablet/desktop",
    ],
    github: "https://github.com/Ryonandha/react-kanban-portfolio",
    demo: "https://react-kanban-portfolio.vercel.app/",
    tech: ["React.js", "Vite", "@dnd-kit", "Tailwind CSS", "LocalStorage"],
    dad: "600",
  },
  {
    id: 7,
    title: "FlixMeow — Movie Discovery App",
    subtitle: "Katalog & Eksplorasi Film Terintegrasi TMDB API",
    images: ["/flixmeow.png"],
    category: "frontend",
    categoryName: "Frontend Web",
    featured: false,
    highlightMetric: "Live Search Debounce 300ms + Skeleton Loading",
    deskripsi: "Aplikasi pencarian dan katalog film modern yang terhubung langsung dengan REST API The Movie Database (TMDB). Dilengkapi live search debounce 300ms untuk efisiensi kuota API, infinite scrolling, detail lengkap (skor rating, trailer, pemeran), dan state loading skeleton.",
    features: [
      "Pencarian cerdas dengan teknik debouncing untuk meminimalkan beban network request",
      "Penanganan transisi visual menggunakan skeleton placeholder saat data sedang di-fetch",
      "Halaman detail film yang menyajikan informasi sinopsis, daftar aktor, rating, dan trailer",
      "Responsif di berbagai resolusi layar dari smartphone hingga monitor layar lebar",
    ],
    github: "https://github.com/Ryonandha/react-movie-discovery-flixmeow",
    demo: "https://react-movie-discovery-flixmeow.vercel.app/",
    tech: ["React.js", "TMDB API", "Tailwind CSS", "Vite"],
    dad: "700",
  },
  {
    id: 8,
    title: "SMS Spam Detector (Indonesia)",
    subtitle: "Klasifikasi Pesan Teks Bahasa Indonesia Menggunakan NLP",
    images: ["/sms-spam.png"],
    category: "ai",
    categoryName: "AI & Machine Learning",
    featured: false,
    highlightMetric: "Akurasi Klasifikasi 96.8% (F1-Score 0.96)",
    deskripsi: "Model pembelajaran mesin (Machine Learning) untuk mendeteksi pesan penipuan dan spam SMS dalam bahasa Indonesia. Menerapkan pipeline preprocessing teks spesifik bahasa Indonesia (stemming sastrawi, pembersihan pola teks, pembobotan TF-IDF) dan algoritma Multinomial Naive Bayes.",
    features: [
      "Pipeline preprocessing teks bahasa Indonesia lengkap (Normalisasi slang, Stopword removal, Sastrawi Stemmer)",
      "Ekstraksi fitur teks menggunakan TF-IDF Vectorizer dengan tuning parameter",
      "Evaluasi model mendalam: Confusion Matrix, Precision, Recall, dan F1-Score 96.8%",
      "Notebook penelitian yang terstruktur dan dapat direproduksi (reproducible research)",
    ],
    github: "https://github.com/Ryonandha/sms-spam-detector-indonesia",
    demo: null,
    tech: ["Python", "Scikit-Learn", "Sastrawi", "TF-IDF", "Jupyter Notebook"],
    dad: "800",
  },
];