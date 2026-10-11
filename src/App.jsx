import React, { useState, useEffect } from "react";
import {
  Github,
  Mail,
  ExternalLink,
  FileText,
  Copy,
  Check,
  ArrowRight,
  Code2,
  Cpu,
  GraduationCap,
  Sparkles,
  Layers,
  MapPin,
  Calendar,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import { listProyek, skillCategories } from "./data";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ryonandhar@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Filter projects
  const filteredProjects = listProyek.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  const featuredProjects = listProyek.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-indigo-600 selection:text-white">
      {/* Background Decorator (Subtle ambient glow & dot pattern) */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-950/20 blur-[130px] rounded-full" />
        <div className="absolute top-[800px] right-0 w-[600px] h-[600px] bg-emerald-950/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* =========================================================
            1. HERO SECTION
        ========================================================= */}
        <section id="home" className="pt-6 pb-20 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Terbuka untuk Magang & Peluang Full-Stack</span>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                  Halo, saya{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-indigo-300">
                    Ryonandha
                  </span>
                  .
                </h1>
                <p className="font-mono text-sm sm:text-base text-indigo-400 font-medium tracking-wide">
                  Full-Stack Web Developer & Mahasiswa Sistem Informasi
                </p>
              </div>

              {/* Bio Summary */}
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                Mahasiswa semester 7 di <span className="text-zinc-200 font-medium">STIKOM Yos Sudarso Purwokerto</span>.
                Fokus merancang aplikasi web terukur menggunakan <span className="text-zinc-200 font-medium">Laravel</span> &amp;{" "}
                <span className="text-zinc-200 font-medium">React / Next.js</span>, serta riset skripsi NLP deteksi dini kesehatan mental berbasis{" "}
                <span className="text-zinc-200 font-medium">IndoBERT</span>.
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-sm transition-all shadow-md shadow-white/5 cursor-pointer"
                >
                  <span>Lihat Karya & Proyek</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="/CV.pdf"
                  download="CV_Ryonandha.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm border border-zinc-800 transition-all cursor-pointer"
                >
                  <FileText size={16} />
                  <span>Unduh CV</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 hover:text-white text-sm border border-zinc-800 transition-all cursor-pointer"
                  title="Salin alamat email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  <span>{copiedEmail ? "Email Disalin!" : "Salin Email"}</span>
                </button>
              </div>

              {/* Key Highlights Metrics */}
              <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white">8+</div>
                  <p className="text-xs text-zinc-400 mt-0.5">Proyek Selesai</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-indigo-400">77.3%</div>
                  <p className="text-xs text-zinc-400 mt-0.5">Akurasi Model IndoBERT</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white">3+ Thn</div>
                  <p className="text-xs text-zinc-400 mt-0.5">Pengalaman Coding</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">Smtr 7</div>
                  <p className="text-xs text-zinc-400 mt-0.5">Sistem Informasi</p>
                </div>
              </div>
            </div>

            {/* Right Developer Profile Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 shadow-2xl backdrop-blur-sm space-y-6 relative group hover:border-zinc-700 transition-all">
                {/* Profile Top: Avatar + Quick Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src="/ryonandha.png"
                      alt="Ryonandha"
                      className="w-20 h-20 rounded-2xl object-cover bg-zinc-800 border-2 border-zinc-700 shadow-md"
                    />
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-zinc-900 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    </span>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-white tracking-tight">Ryonandha</h2>
                    <p className="text-xs text-zinc-400 font-mono">@ryonandha</p>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Ready to collaborate</span>
                    </div>
                  </div>
                </div>

                {/* Status Box */}
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-zinc-400 font-mono">
                    <span>STATUS SAAT INI</span>
                    <span className="text-emerald-400 font-semibold">AKTIF</span>
                  </div>
                  <p className="text-zinc-300 font-medium">
                    Menyelesaikan Skripsi &amp; Open for Web Developer Role.
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Core Technologies</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Laravel", "React", "Next.js", "PHP", "MySQL", "IndoBERT", "Tailwind"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Quick Bar */}
                <div className="pt-2 flex items-center justify-between border-t border-zinc-800/80 text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-zinc-400" />
                    Purwokerto, ID
                  </span>
                  <a
                    href="https://github.com/Ryonandha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>GitHub Profile</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. ABOUT SECTION (Bento Grid Style)
        ========================================================= */}
        <section id="about" className="py-16 border-t border-zinc-900">
          <div className="space-y-2 mb-10">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-400">
              <Sparkles size={14} />
              <span>Tentang Saya</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Latar Belakang &amp; Pendekatan Rekayasa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Story Card */}
            <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Code2 size={20} className="text-indigo-400" />
                <span>Membangun Solusi Berbasis Kebutuhan Riil</span>
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Sebagai mahasiswa Sistem Informasi tingkat akhir di STIKOM Yos Sudarso, saya tidak hanya tertarik pada sintaks kode, tetapi pada bagaimana sistem perangkat lunak dapat memecahkan masalah operasional secara nyata.
              </p>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Portofolio saya berfokus pada dua pilar: <strong>Full-Stack Web Engineering</strong> (mengembangkan sistem terstruktur seperti manajemen relawan dengan multi-role dan pembayaran online otomatis) dan <strong>Penerapan AI/NLP</strong> (membangun model skrining emosi berbasis IndoBERT untuk skripsi saya).
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/60">Clean Architecture</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/60">RESTful Standard</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/60">Applied Machine Learning</span>
              </div>
            </div>

            {/* Quick Fact / Focus Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-5 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                  <GraduationCap size={20} className="text-emerald-400" />
                  <span>Fokus Akademik</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
                  <div>
                    <span className="text-zinc-400 block text-xs font-mono">PROGRAM STUDI</span>
                    <span className="font-medium text-white">S1 Sistem Informasi</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-xs font-mono">INSTITUSI</span>
                    <span>STIKOM Yos Sudarso Purwokerto</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-xs font-mono">FOKUS SKRIPSI</span>
                    <span className="text-indigo-300 font-medium">Klasifikasi Emosi Teks Menggunakan Fine-Tuned IndoBERT</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>Diskusikan proyek dengan saya</span>
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. FEATURED PROJECTS SHOWCASE
        ========================================================= */}
        <section id="projects" className="py-16 border-t border-zinc-900">
          <div className="space-y-2 mb-10">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-400">
              <Layers size={14} />
              <span>Karya &amp; Implementasi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Proyek Pilihan Unggulan
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
              Tiga proyek utama dengan arsitektur terlengkap — mencakup sistem skripsi NLP, platform manajemen relawan riil, dan sistem registrasi event dengan payment gateway.
            </p>
          </div>

          {/* Featured Cards Stack */}
          <div className="space-y-8 mb-16">
            {featuredProjects.map((proj, idx) => (
              <div
                key={proj.id}
                className="group rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 overflow-hidden transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Project Image Preview */}
                <div
                  className="lg:col-span-6 aspect-video lg:aspect-auto bg-zinc-950 overflow-hidden relative cursor-pointer group-hover:opacity-95"
                  onClick={() => setSelectedProject(proj)}
                >
                  {proj.images && proj.images[0] ? (
                    <img
                      src={proj.images[0]}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm">
                      Preview screenshot
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent lg:hidden" />
                </div>

                {/* Project Details */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 font-medium">
                        {proj.categoryName}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">0{idx + 1} / FEATURED</span>
                    </div>

                    <h3
                      className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors cursor-pointer"
                      onClick={() => setSelectedProject(proj)}
                    >
                      {proj.title}
                    </h3>

                    {proj.highlightMetric && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-xs text-emerald-300 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{proj.highlightMetric}</span>
                      </div>
                    )}

                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed line-clamp-3">
                      {proj.deskripsi}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-zinc-800/60">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-800 text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(proj)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-indigo-300 transition-colors cursor-pointer"
                      >
                        <span>Pelajari Studi Kasus</span>
                        <ArrowRight size={15} />
                      </button>

                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors ml-auto"
                          aria-label="Lihat GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}

                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                          aria-label="Kunjungi Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =========================================================
              ALL PROJECTS GRID & FILTER
          ========================================================= */}
          <div className="pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Katalog Lengkap Proyek</h3>
                <p className="text-xs sm:text-sm text-zinc-400">Pilih kategori untuk melihat repositori dan aplikasi lainnya</p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 bg-zinc-900/80 p-1 rounded-xl border border-zinc-800 overflow-x-auto">
                {[
                  { id: "all", label: "Semua (8)" },
                  { id: "fullstack", label: "Full-Stack (4)" },
                  { id: "frontend", label: "Frontend (3)" },
                  { id: "ai", label: "AI & NLP (2)" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                      activeFilter === tab.id
                        ? "bg-zinc-800 text-white shadow-sm font-semibold"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 overflow-hidden flex flex-col justify-between transition-all group"
                >
                  <div>
                    {/* Thumbnail */}
                    <div
                      className="aspect-video bg-zinc-950 overflow-hidden relative cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.images && project.images[0] ? (
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-600 text-xs">
                          No Image
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-400">
                          {project.categoryName}
                        </span>
                        {project.highlightMetric && (
                          <span className="text-[11px] font-mono text-emerald-400 truncate max-w-[170px]">
                            {project.highlightMetric}
                          </span>
                        )}
                      </div>

                      <h4
                        className="font-bold text-white group-hover:text-indigo-300 transition-colors cursor-pointer text-base leading-snug"
                        onClick={() => setSelectedProject(project)}
                      >
                        {project.title}
                      </h4>

                      <p className="text-zinc-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                        {project.deskripsi}
                      </p>
                    </div>
                  </div>

                  {/* Footer & Actions */}
                  <div className="p-5 pt-0 space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-zinc-800/60 text-zinc-400">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-zinc-800/40 text-zinc-400">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-zinc-800/60 text-xs">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-zinc-300 hover:text-white font-medium cursor-pointer inline-flex items-center gap-1"
                      >
                        <span>Detail</span>
                        <ChevronRight size={13} />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white"
                            aria-label="GitHub Code"
                          >
                            <Github size={15} />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-0.5"
                            aria-label="Live Demo"
                          >
                            <span>Live</span>
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            4. SKILLS & TECH STACK SECTION
        ========================================================= */}
        <section id="skills" className="py-16 border-t border-zinc-900">
          <div className="space-y-2 mb-10">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-400">
              <Cpu size={14} />
              <span>Kompetensi Teknis</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Tech Stack &amp; Arsitektur
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
              Teknologi yang saya gunakan secara reguler dalam membangun sistem backend, frontend reaktif, dan eksplorasi model NLP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.category}
                className="p-6 sm:p-7 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-4 hover:border-zinc-700 transition-all"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span>{cat.category}</span>
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">{cat.description}</p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-6 h-6 object-contain"
                        />
                        <div>
                          <div className="font-medium text-xs sm:text-sm text-zinc-200">
                            {skill.name}
                          </div>
                          <div className="text-[11px] text-zinc-400">{skill.note}</div>
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full ${
                          skill.level === "Advanced"
                            ? "bg-indigo-950/80 text-indigo-300 border border-indigo-500/30"
                            : "bg-zinc-800/80 text-zinc-400 border border-zinc-700/40"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            5. EDUCATION & JOURNEY SECTION
        ========================================================= */}
        <section id="education" className="py-16 border-t border-zinc-900">
          <div className="space-y-2 mb-10">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-400">
              <Briefcase size={14} />
              <span>Rekam Jejak</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Pendidikan &amp; Pengalaman Rekayasa
            </h2>
          </div>

          <div className="space-y-6 max-w-3xl">
            {/* Timeline Item 1 */}
            <div className="relative pl-7 sm:pl-8 border-l border-zinc-800 space-y-2 pb-6">
              <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-zinc-950" />
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400">
                <span className="text-indigo-400 font-semibold">2021 — SEKARANG (SEMESTER 7)</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} />
                  Purwokerto, Jawa Tengah
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">
                S1 Sistem Informasi — STIKOM Yos Sudarso
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Fokus studi pada Analisis &amp; Perancangan Sistem, Basis Data Terdistribusi, serta Rekayasa Perangkat Lunak. Saat ini menyelesaikan skripsi implementasi model transformer <strong>IndoBERT</strong> untuk deteksi dini depresi dan kecemasan mahasiswa melalui ekspresi tulisan.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-7 sm:pl-8 border-l border-zinc-800 space-y-2 pb-6">
              <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-zinc-950" />
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400">
                <span className="text-emerald-400 font-semibold">2024</span>
                <span>Proyek Yayasan Nyata</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Pengembang Web — Yayasan Anak-Anak Terang (AAT)
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Membangun platform internal manajemen relawan terintegrasi menggunakan Laravel &amp; Livewire. Mengotomatisasi alur penjadwalan ratusan pendampingan anak asuh, pembuatan sertifikat berbarcode otomatis via DomPDF, dan pelaporan statistik operasional.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-7 sm:pl-8 border-l border-zinc-800 space-y-2">
              <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-600 border-2 border-zinc-950" />
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400">
                <span className="text-zinc-400 font-semibold">2025 — 2026</span>
                <span>Event Platform &amp; Payment</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Pengembang Full-Stack — Eco Padjadjaran Run 2026
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Mengembangkan platform registrasi event lari dengan sistem pembayaran online otomatis Midtrans Snap, peta rute lomba berbasis Leaflet.js, serta distribusi e-tiket QR check-in via Resend email service.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            6. CONTACT & CALL TO ACTION
        ========================================================= */}
        <section id="contact" className="py-16 border-t border-zinc-900">
          <div className="rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800/80 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            {/* Subtle light effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-indigo-500/10 blur-[80px] pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Mari Memulai Percakapan</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
              Tertarik merekrut atau berkolaborasi dengan saya?
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Saya sedang aktif mencari kesempatan magang (internship) maupun posisi full-stack / backend developer. Terbuka untuk diskusi proyek atau sekadar bertukar sapa.
            </p>

            {/* Contact Action Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:ryonandhar@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
              >
                <Mail size={16} />
                <span>Kirim Email Langsung</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium text-sm border border-zinc-700 transition-all cursor-pointer"
              >
                {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                <span>{copiedEmail ? "Alamat Email Disalin!" : "Salin Email"}</span>
              </button>

              <a
                href="https://github.com/Ryonandha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-sm border border-zinc-800 transition-all"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>

            <div className="pt-4 text-xs font-mono text-zinc-400">
              Email aktif: <span className="text-zinc-300">ryonandhar@gmail.com</span>
            </div>
          </div>
        </section>
      </main>

      {/* Case Study Detail Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  );
}

export default App;