// src/data.js — Data portofolio terverifikasi sesuai CV resmi

import imgVscode from "./assets/tools/vscode.png";
import imgReact from "./assets/tools/reactjs.png";
import imgNext from "./assets/tools/nextjs.png";
import imgTailwind from "./assets/tools/tailwind.png";
import imgBootstrap from "./assets/tools/bootstrap.png";
import imgVite from "./assets/tools/vite.png";
import imgFigma from "./assets/tools/figma.png";
import imgJs from "./assets/tools/js.png";
import imgPHP from "./assets/tools/php.png";
import imgMySQL from "./assets/tools/mysql.png";
import imgTs from "./assets/tools/ts.png";
import imgNode from "./assets/tools/nodejs.png";
import imgAi from "./assets/tools/ai.png";
import imgGithub from "./assets/tools/github.png";

export const personalInfo = {
  fullName: "Ryonandha Mitchell Anggardha Putra",
  shortName: "Ryonandha",
  title: "Information Systems Graduate | Web Developer & Cloud Enthusiast",
  phone: "+62 877-4361-7149",
  email: "ryonandhar@gmail.com",
  location: "Purwokerto, Indonesia",
  github: "https://github.com/Ryonandha",
  linkedin: "https://linkedin.com/in/ryonandha/",
  gpa: "3.7 / 4.0",
  degree: "S1 Sistem Informasi (Bachelor's Degree)",
  institution: "Sekolah Tinggi Ilmu Komputer Yos Sudarso (STIKOM Yos Sudarso)",
  graduation: "Oktober 2026",
  summary:
    "Lulusan S1 Sistem Informasi STIKOM Yos Sudarso dengan IPK 3.70 dan alumni Bangkit Academy (Cloud Computing Cohort 2024 oleh Google, Tokopedia, Gojek, Traveloka). Berpengalaman dalam pengembangan backend web dengan Laravel, cloud computing di Google Cloud Platform (GCP), pengolahan data & NLP, serta dukungan administratif, verifikasi dokumen, dan komunikasi lintas instansi.",
};

export const professionalExperiences = [
  {
    role: "Administrative Staff & Backend Developer",
    organization: "Yayasan Anak-Anak Terang Indonesia",
    period: "2023 — 2025",
    type: "Staff & Developer",
    location: "Purwokerto / Remote",
    highlights: [
      "Melakukan verifikasi dan pengecekan rapor serta ijazah siswa untuk mendukung proses administrasi penerimaan beasiswa.",
      "Berkomunikasi dan berkoordinasi langsung dengan perwakilan sekolah mitra terkait kelengkapan dokumen siswa.",
      "Membuat konten dan artikel informatif untuk kebutuhan komunikasi internal maupun publikasi yayasan.",
      "Melakukan sesi wawancara dengan calon penerima beasiswa sebagai bagian dari tahapan seleksi.",
      "Mengembangkan fungsionalitas backend untuk website manajemen relawan menggunakan Laravel bekerja sama dengan rekan pengembang.",
    ],
  },
  {
    role: "Freelance Developer & Data Analyst",
    organization: "Remote Client Work",
    period: "2024 — Sekarang",
    type: "Freelance",
    location: "Remote",
    highlights: [
      "Menjalankan analisis data, analisis statistik, serta visualisasi data untuk kebutuhan riset klien; didukung entri data dan pelaporan rapi via Microsoft Excel.",
      "Melakukan pelabelan data (data labeling) dan pembersihan data (data cleaning) guna mempersiapkan dataset pelatihan model machine learning.",
      "Mengerjakan kebutuhan pemrograman web fungsional dan kebutuhan ekstraksi data (data scraping) untuk klien.",
    ],
  },
  {
    role: "Cloud Computing Cohort",
    organization: "Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)",
    period: "2024",
    type: "Career Readiness Program",
    location: "Studi Independen Bersertifikat",
    highlights: [
      "Menyelesaikan alur pembelajaran Cloud Computing pada program kesiapan karir yang dipimpin oleh konsorsium Google, Gojek, Tokopedia, dan Traveloka.",
      "Mengoperasikan layanan Google Cloud Platform (GCP) mencakup Compute Engine, App Engine, dan Cloud Storage.",
      "Melakukan deployment backend services dan mengelola arsitektur cloud untuk proyek capstone tim.",
      "Berkolaborasi intensif dengan tim Machine Learning dan Mobile Development dalam mewujudkan produk digital terpadu.",
    ],
  },
];

export const educationHistory = {
  institution: "Sekolah Tinggi Ilmu Komputer Yos Sudarso",
  degree: "S1 Sistem Informasi (Bachelor of Information Systems)",
  graduation: "Lulus Oktober 2026",
  gpa: "3.7 / 4.0 (Kumulatif)",
  location: "Purwokerto, Indonesia",
  thesisTitle: "Sistem Pemantauan Kesehatan Mental Mahasiswa (Early Mental Health Monitoring System)",
  thesisDesc: "Sistem berbasis web untuk deteksi dini permasalahan kesehatan mental mahasiswa menggunakan IndoBERT dan Natural Language Processing (NLP) untuk mengklasifikasikan emosi dari teks tulisan pengguna.",
  coursework: [
    "Algoritma & Struktur Data",
    "Clean Code & Design Patterns",
    "Pemrograman Berorientasi Objek (OOP)",
    "Sistem Basis Data & SQL",
    "UI/UX Design",
    "Cloud Computing",
    "Web Development",
    "Data Science & Machine Learning",
  ],
};

export const certifications = [
  {
    title: "Bangkit Academy Graduate — Cloud Computing Cohort",
    issuer: "Google, Tokopedia, Gojek, Traveloka",
    year: "2024",
    credential: "Cloud Computing Learning Path Completion & Capstone Project",
  },
];

export const organizations = [
  {
    role: "Sie Publikasi & Dokumentasi",
    event: "Penerimaan Mahasiswa Baru (PMB) STIKOM Yos Sudarso",
    period: "2023",
    description: "Mendokumentasikan dan mempublikasikan rangkaian kegiatan penerimaan mahasiswa baru.",
  },
  {
    role: "Sie Publikasi & Dokumentasi",
    event: "Keluarga Mahasiswa Katolik (KMK)",
    period: "2023 — 2024",
    description: "Mendokumentasikan kegiatan organisasi serta merancang flyer dan aset visual grafis.",
  },
  {
    role: "Sie Publikasi & Dokumentasi",
    event: "Event Natal STIKOM Yos Sudarso",
    period: "2024",
    description: "Merancang desain flyer, materi promosi acara, dan dokumentasi visual perayaan.",
  },
];

export const skillCategories = [
  {
    category: "Programming Languages",
    description: "Bahasa pemrograman utama yang dikuasai untuk web, pengolahan data, dan backend.",
    skills: [
      { name: "PHP", level: "Advanced", icon: imgPHP, note: "Modern PHP 8+, Object-Oriented, MVC" },
      { name: "Python", level: "Intermediate", icon: imgAi, note: "Data Processing (Pandas, NumPy, Scikit-learn)" },
      { name: "SQL", level: "Advanced", icon: imgMySQL, note: "Relational Database Queries & Schema Design" },
      { name: "JavaScript", level: "Advanced", icon: imgJs, note: "ES6+, Async/Await, Web APIs" },
      { name: "TypeScript", level: "Intermediate", icon: imgTs, note: "Type-Safe Development & Interfaces" },
      { name: "HTML & CSS", level: "Advanced", icon: imgTailwind, note: "Semantic Markup, Responsive Styling" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    description: "Kerangka kerja modern untuk pengembangan web full-stack dan machine learning.",
    skills: [
      { name: "Laravel", level: "Advanced", icon: imgPHP, note: "Backend Web Development, Sanctum, Livewire" },
      { name: "React.js", level: "Advanced", icon: imgReact, note: "State Management, Hooks, Component UI" },
      { name: "Next.js", level: "Intermediate", icon: imgNext, note: "App Router, SSR, Server Actions" },
      { name: "Tailwind CSS", level: "Advanced", icon: imgTailwind, note: "Modern Utility-First Design" },
      { name: "Bootstrap", level: "Advanced", icon: imgBootstrap, note: "Responsive Component Framework" },
      { name: "Scikit-learn", level: "Intermediate", icon: imgAi, note: "Klasifikasi Teks, TF-IDF, Naive Bayes" },
    ],
  },
  {
    category: "Cloud & DevOps",
    description: "Kompetensi cloud computing melalui Bangkit Academy dan deployment aplikasi.",
    skills: [
      { name: "Google Cloud (GCP)", level: "Intermediate", icon: imgNode, note: "Compute Engine, App Engine, Cloud Storage" },
      { name: "Cloud Deployment", level: "Intermediate", icon: imgNext, note: "Hosting Backend Services, Azure / Vercel" },
      { name: "Vite", level: "Advanced", icon: imgVite, note: "Modern Frontend Build Tooling" },
    ],
  },
  {
    category: "Tools & Software",
    description: "Perangkat kerja untuk kolaborasi, desain grafis, API testing, dan analisis data.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: imgGithub, note: "Version Control, Branching, Repository" },
      { name: "Microsoft Excel", level: "Advanced", icon: imgVscode, note: "Data Entry, Statistical Analysis, Reporting" },
      { name: "Postman", level: "Intermediate", icon: imgNode, note: "API Testing, Endpoint Verification" },
      { name: "Figma", level: "Intermediate", icon: imgFigma, note: "UI/UX Wireframing & Asset Visual" },
      { name: "VS Code", level: "Advanced", icon: imgVscode, note: "Primary Development IDE" },
    ],
  },
  {
    category: "Administrative & Communication",
    description: "Keahlian manajerial, verifikasi berkas, dan komunikasi profesional.",
    skills: [
      { name: "Verifikasi Dokumen", level: "Advanced", icon: imgVscode, note: "Pengecekan keabsahan rapor & ijazah beasiswa" },
      { name: "Koordinasi Instansi", level: "Advanced", icon: imgVscode, note: "Komunikasi aktif dengan perwakilan sekolah" },
      { name: "Wawancara Kandidat", level: "Intermediate", icon: imgVscode, note: "Wawancara seleksi penerima beasiswa" },
      { name: "Penulisan Artikel & Konten", level: "Advanced", icon: imgVscode, note: "Publikasi komunikasi yayasan & organisasi" },
    ],
  },
];

export const listProyek = [
  {
    id: 1,
    title: "Mental Health Monitoring System (Skripsi S1)",
    subtitle: "Sistem Skripsi Deteksi Dini Kesehatan Mental Mahasiswa Berbasis NLP",
    images: ["/sipeka.png"],
    category: "ai",
    categoryName: "AI & Full-Stack",
    featured: true,
    highlightMetric: "Akurasi 77.3% (F1-Macro 0.758, +10.1% vs Baseline)",
    deskripsi: "Sistem berbasis web untuk deteksi dini permasalahan kesehatan mental mahasiswa melalui analisis teks tulisan pengguna. Menggunakan model IndoBERT dan Natural Language Processing (NLP) untuk mengklasifikasikan 4 spektrum emosi. Dibangun dengan arsitektur terpisah (decoupled): Laravel untuk frontend & sistem asesmen, dan Flask API untuk inferensi model AI.",
    features: [
      "Fine-tuning model IndoBERT pada korpus teks emosi mahasiswa berbahasa Indonesia",
      "Arsitektur terpisah: Laravel Frontend & Assessment Dashboard + Flask API Model Inference",
      "Pelabelan data dan data cleaning komprehensif pada dataset riset",
      "Visualisasi tren emosi dan rekomendasi tindak lanjut bagi mahasiswa",
    ],
    github: "https://github.com/Ryonandha/SiPeka-STIKOM",
    demo: null,
    tech: ["Python", "IndoBERT", "Laravel", "Flask API", "NLP", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Relawan AAT — Volunteer Management System",
    subtitle: "Pengembangan Backend Website Relawan Yayasan Anak-Anak Terang",
    images: ["/relawan-aat.png"],
    category: "fullstack",
    categoryName: "Full-Stack Web",
    featured: true,
    highlightMetric: "Dikembangkan untuk Yayasan Anak-Anak Terang Indonesia",
    deskripsi: "Pengembangan fungsionalitas backend untuk website manajemen operasional relawan Yayasan Anak-Anak Terang Indonesia bekerja sama dengan rekan pengembang. Memfasilitasi koordinasi relawan, pencatatan pendampingan anak asuh, pembuatan sertifikat digital ber-barcode via DomPDF, dan manajemen hak akses Spatie Role-Based Access Control.",
    features: [
      "Pengembangan backend fungsionalitas Laravel berbasis Role-Based Access Control (Spatie)",
      "Sistem penjadwalan dan absensi pendampingan anak asuh secara berkala",
      "Pembuatan sertifikat digital otomatis ber-barcode dalam format PDF menggunakan DomPDF",
      "Integrasi antarmuka interaktif dengan Laravel Livewire & basis data MySQL",
    ],
    github: "https://github.com/Ryonandha/relawan-aat",
    demo: null,
    tech: ["Laravel", "PHP", "MySQL", "Spatie Permission", "Livewire", "DomPDF"],
  },
  {
    id: 3,
    title: "Stunting Spread Analysis (PKM 2024)",
    subtitle: "Proposal Program Kreativitas Mahasiswa: Analisis Sebaran Stunting via ML",
    images: ["/run-2026.png"],
    category: "ai",
    categoryName: "Data Science & UI/UX",
    featured: true,
    highlightMetric: "Proposal Program Kreativitas Mahasiswa (PKM) 2024",
    deskripsi: "Proyek pengajuan proposal Program Kreativitas Mahasiswa (PKM) untuk memetakan dan menganalisis pola penyebaran stunting menggunakan machine learning. Bertanggung jawab dalam perancangan antarmuka pengguna (UI) dan pengalaman pengguna (UX) aplikasi serta formulasi alur pengolahan datanya.",
    features: [
      "Perancangan prototipe User Interface (UI) dan User Experience (UX) aplikasi via Figma",
      "Konseptualisasi pipeline data dan algoritma machine learning untuk klasifikasi wilayah risiko stunting",
      "Penyusunan dokumen teknis proposal Program Kreativitas Mahasiswa",
    ],
    github: "https://github.com/Ryonandha",
    demo: null,
    tech: ["Figma", "UI/UX Design", "Machine Learning Concept", "Python", "Data Analysis"],
  },
  {
    id: 4,
    title: "Laravel Task Management API",
    subtitle: "RESTful API Manajemen Tugas Terstruktur dengan Sanctum Auth",
    images: ["/laravel-task-api.png"],
    category: "fullstack",
    categoryName: "Backend & API",
    featured: false,
    highlightMetric: "Code Coverage 92% + Dokumentasi Scribe Otomatis",
    deskripsi: "RESTful API manajemen tugas berkinerja tinggi yang menerapkan standar arsitektur REST, autentikasi berbasis Bearer token menggunakan Laravel Sanctum, validasi data ketat, soft-deletes, pagination, dan dokumentasi interaktif yang digenerate otomatis menggunakan Scribe.",
    features: [
      "Otentikasi token aman berbasis Laravel Sanctum dan middleware otorisasi",
      "Fitur CRUD tugas lengkap, filtering status, sorting tanggal, dan pagination responsif",
      "Pengujian otomatis (Automated Unit & Feature Testing) dengan coverage 92%",
      "Dokumentasi API interaktif yang tersusun otomatis via Scribe",
    ],
    github: "https://github.com/Ryonandha/laravel-task-api",
    demo: null,
    tech: ["Laravel 11", "PHP", "MySQL", "Sanctum", "Scribe API Docs"],
  },
  {
    id: 5,
    title: "Interactive React Kanban Board",
    subtitle: "Aplikasi Manajemen Proyek Interaktif Berfokus pada State Management",
    images: ["/kanban.png"],
    category: "frontend",
    categoryName: "Frontend Web",
    featured: false,
    highlightMetric: "State Management Terstruktur + Drag-and-Drop",
    deskripsi: "Aplikasi manajemen tugas bergaya Kanban terinspirasi Trello yang dibangun untuk mengeksplorasi state management React tingkat lanjut dan interaktivitas drag-and-drop (@dnd-kit). Mendukung multi-kolom, pembuatan kartu tugas dinamis, dan persistensi LocalStorage.",
    features: [
      "Arsitektur state management React yang terisolasi dan mudah di-maintain",
      "Interaksi drag-and-drop halus antar-kolom menggunakan pustaka modern @dnd-kit",
      "Penyimpanan otomatis status kartu di LocalStorage peramban",
      "Antarmuka responsif dengan Tailwind CSS dan mode gelap elegan",
    ],
    github: "https://github.com/Ryonandha/react-kanban-portfolio",
    demo: "https://react-kanban-portfolio.vercel.app/",
    tech: ["React.js", "JavaScript", "Vite", "@dnd-kit", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "SMS Spam Detector (Indonesia)",
    subtitle: "Model Klasifikasi Pesan Spam Teks Indonesia dengan Scikit-learn",
    images: ["/sms-spam.png"],
    category: "ai",
    categoryName: "AI & Machine Learning",
    featured: false,
    highlightMetric: "Akurasi 96.8% & F1-Score 0.96 (Multinomial Naive Bayes)",
    deskripsi: "Model pembelajaran mesin (Machine Learning) untuk mendeteksi pesan penipuan dan spam SMS dalam bahasa Indonesia. Menerapkan tahapan pembersihan data, normalisasi teks, stemming Sastrawi, pembobotan TF-IDF, serta evaluasi klasifikasi menggunakan Scikit-learn.",
    features: [
      "Pipeline preprocessing teks bahasa Indonesia (cleansing, tokenizing, Sastrawi stemming)",
      "Ekstraksi fitur teks menggunakan TF-IDF Vectorizer",
      "Pelatihan model Multinomial Naive Bayes dengan evaluasi Confusion Matrix & F1-Score 0.96",
      "Disusun dalam Jupyter Notebook yang rapi dan reproducible",
    ],
    github: "https://github.com/Ryonandha/sms-spam-detector-indonesia",
    demo: null,
    tech: ["Python", "Scikit-learn", "Sastrawi", "Pandas", "Jupyter Notebook"],
  },
  {
    id: 7,
    title: "Run 2026 — Eco Padjadjaran Registration",
    subtitle: "Platform Registrasi Event Lari dengan Integrasi Midtrans Snap",
    images: ["/run-2026.png"],
    category: "fullstack",
    categoryName: "Full-Stack Web",
    featured: false,
    highlightMetric: "Payment Gateway Midtrans + Peta Interaktif Leaflet",
    deskripsi: "Platform registrasi online terintegrasi untuk event lari. Mengintegrasikan formulir pendaftaran, pembayaran digital otomatis (Midtrans Snap), pengiriman tiket QR via email Resend, serta peta rute lari interaktif Leaflet.js.",
    features: [
      "Integrasi webhook Midtrans Snap untuk verifikasi pembayaran real-time",
      "Otentikasi Google OAuth & Credentials dengan NextAuth.js",
      "Peta rute lomba interaktif berbasis Leaflet.js",
    ],
    github: "https://github.com/Ryonandha/Run-2026",
    demo: "https://run-2026.vercel.app/",
    tech: ["Next.js", "Prisma ORM", "PostgreSQL", "Midtrans", "Leaflet", "Tailwind CSS"],
  },
  {
    id: 8,
    title: "Es Kopi Brasil — Brand Landing Page",
    subtitle: "Landing Page Modern Kedai Kuliner Legendaris Purwokerto",
    images: ["/es-kopi-brasil.png"],
    category: "frontend",
    categoryName: "Frontend Web",
    featured: false,
    highlightMetric: "Skor Lighthouse 95+ (SEO & Performance)",
    deskripsi: "Landing page modern untuk brand kuliner legendaris es krim & kopi Purwokerto. Dibangun dengan Next.js App Router, animasi transisi Framer Motion, galeri produk lightbox, dan struktur schema SEO JSON-LD.",
    features: [
      "Server-Side Rendering (SSR) untuk optimasi pengindeksan mesin pencari Google",
      "Animasi interaktif saat scroll menggunakan Framer Motion",
      "Galeri foto produk responsif dengan modal lightbox",
    ],
    github: "https://github.com/Ryonandha/es-kopi-brasil",
    demo: "https://es-kopi-brasil.vercel.app/",
    tech: ["Next.js 15", "React.js", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
];