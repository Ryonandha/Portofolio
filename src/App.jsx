import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
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
  Award,
  Users,
  CheckCircle2,
  Cloud,
  FileCheck,
} from "lucide-react";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import {
  personalInfo,
  professionalExperiences,
  educationHistory,
  certifications,
  organizations,
  skillCategories,
  listProyek,
} from "./data";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  // Filter projects
  const filteredProjects = listProyek.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  const featuredProjects = listProyek.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-indigo-600 selection:text-white">
      {/* Background Decorator */}
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
                <span>Lulusan S1 Sistem Informasi (IPK 3.70) · Siap Kerja</span>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                  {personalInfo.fullName}
                </h1>
                <p className="font-mono text-sm sm:text-base text-indigo-400 font-medium tracking-wide">
                  {personalInfo.title}
                </p>
              </div>

              {/* Bio Summary from CV */}
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {personalInfo.summary}
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-sm transition-all shadow-md shadow-white/5 cursor-pointer"
                >
                  <span>Lihat Proyek & Skripsi</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="/CV.pdf"
                  download="CV_Ryonandha.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm border border-zinc-800 transition-all cursor-pointer"
                >
                  <FileText size={16} />
                  <span>Unduh CV Resmi</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 hover:text-white text-sm border border-zinc-800 transition-all cursor-pointer"
                >
                  <Linkedin size={16} className="text-indigo-400" />
                  <span>LinkedIn</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 hover:text-white text-sm border border-zinc-800 transition-all cursor-pointer"
                  title="Salin email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  <span>{copiedEmail ? "Email Disalin!" : "Salin Email"}</span>
                </button>
              </div>

              {/* Verified Metrics Bar */}
              <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">{personalInfo.gpa}</div>
                  <p className="text-xs text-zinc-400 mt-0.5">IPK Kumulatif</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-indigo-400">Bangkit '24</div>
                  <p className="text-xs text-zinc-400 mt-0.5">Google Cloud Cohort</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white">2+ Tahun</div>
                  <p className="text-xs text-zinc-400 mt-0.5">Pengalaman Kerja &amp; Dev</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white">8 Proyek</div>
                  <p className="text-xs text-zinc-400 mt-0.5">Web, Data &amp; NLP</p>
                </div>
              </div>
            </div>

            {/* Right Developer Profile Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 shadow-2xl backdrop-blur-sm space-y-6 relative group hover:border-zinc-700 transition-all">
                {/* Profile Top */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src="/ryonandha.png"
                      alt={personalInfo.fullName}
                      className="w-20 h-20 rounded-2xl object-cover bg-zinc-800 border-2 border-zinc-700 shadow-md"
                    />
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-zinc-900 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    </span>
                  </div>

                  <div>
                    <h2 className="text-base font-bold text-white tracking-tight leading-snug">
                      Ryonandha Mitchell A. P.
                    </h2>
                    <p className="text-xs text-zinc-400 font-mono">STIKOM Yos Sudarso (2026)</p>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Available for IT &amp; Web Roles</span>
                    </div>
                  </div>
                </div>

                {/* Status Box */}
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-zinc-400 font-mono">
                    <span>STATUS</span>
                    <span className="text-emerald-400 font-semibold">FRESH GRADUATE</span>
                  </div>
                  <p className="text-zinc-300 font-medium">
                    S1 Sistem Informasi (Lulus Okt 2026, IPK 3.70). Siap bekerja remote / on-site.
                  </p>
                </div>

                {/* Core Skills Badges */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Kompetensi Inti (CV)</span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Laravel",
                      "PHP",
                      "Google Cloud (GCP)",
                      "Python",
                      "NLP (IndoBERT)",
                      "React.js",
                      "SQL & MySQL",
                      "Microsoft Excel",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location & Contact Bar */}
                <div className="pt-2 flex items-center justify-between border-t border-zinc-800/80 text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-zinc-400" />
                    {personalInfo.location}
                  </span>
                  <a
                    href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <Phone size={12} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. ABOUT SECTION (Bento Grid)
        ========================================================= */}
        <section id="about" className="py-16 border-t border-zinc-900">
          <div className="space-y-2 mb-10">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-400">
              <Sparkles size={14} />
              <span>Profil Profesional</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Kombinasi Rekayasa Teknis &amp; Keahlian Organisasional
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Story Card */}
            <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Code2 size={20} className="text-indigo-400" />
                <span>Teknologi Web, Cloud &amp; Efisiensi Administrasi</span>
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Sebagai lulusan Sistem Informasi, saya menjembatani kebutuhan proses bisnis dengan solusi perangkat lunak yang andal. Saya memiliki pengalaman langsung dalam pengembangan backend web menggunakan <strong>Laravel</strong> di Yayasan Anak-Anak Terang Indonesia, implementasi cloud computing di <strong>Google Cloud Platform (GCP)</strong> melalui program Bangkit Academy, serta pengolahan data dan klasifikasi NLP (IndoBERT) untuk skripsi saya.
              </p>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Selain kemampuan teknis pemrograman, saya terlatih dalam pekerjaan administratif berorientasi detail: verifikasi ijazah &amp; rapor siswa, wawancara kandidat beasiswa, serta koordinasi aktif dengan perwakilan sekolah.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/60">Backend Laravel &amp; SQL</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/60">GCP Cloud Computing</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/60">Data Cleaning &amp; Labeling</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/60">Dokumentasi &amp; Administrasi</span>
              </div>
            </div>

            {/* Credential Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-5 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                  <Award size={20} className="text-emerald-400" />
                  <span>Sertifikasi Utama</span>
                </h3>
                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-1">
                    <div className="text-xs font-mono text-indigo-400 font-semibold">BANGKIT ACADEMY 2024</div>
                    <div className="text-sm font-bold text-white">Cloud Computing Graduate</div>
                    <p className="text-xs text-zinc-400">
                      Google, Tokopedia, Gojek, dan Traveloka. Menguasai Compute Engine, App Engine, Cloud Storage.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-1">
                    <div className="text-xs font-mono text-emerald-400 font-semibold">PRESTASI AKADEMIK</div>
                    <div className="text-sm font-bold text-white">IPK Kumulatif: 3.70 / 4.00</div>
                    <p className="text-xs text-zinc-400">
                      Sekolah Tinggi Ilmu Komputer Yos Sudarso Purwokerto (Lulus Oktober 2026).
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>Lihat pengalaman kerja</span>
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. PROFESSIONAL EXPERIENCE (Dari CV)
        ========================================================= */}
        <section id="experience" className="py-16 border-t border-zinc-900">
          <div className="space-y-2 mb-10">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-400">
              <Briefcase size={14} />
              <span>Pengalaman Kerja</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Riwayat Profesional &amp; Pelatihan Industri
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
              Pengalaman kerja riil di yayasan non-profit, proyek data freelance, dan program kesiapan karir teknologi nasional.
            </p>
          </div>

          <div className="space-y-6">
            {professionalExperiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-800/60">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                    <div className="text-sm text-indigo-400 font-medium">{exp.organization}</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300">{exp.period}</span>
                    <span>• {exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            4. PROJECTS & THESIS SHOWCASE
        ========================================================= */}
        <section id="projects" className="py-16 border-t border-zinc-900">
          <div className="space-y-2 mb-10">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-400">
              <Layers size={14} />
              <span>Karya &amp; Skripsi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Proyek Pilihan &amp; Penelitian Skripsi
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
              Proyek unggulan yang mencakup penelitian skripsi NLP IndoBERT, sistem website relawan nyata, dan proposal Program Kreativitas Mahasiswa (PKM).
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

          {/* All Projects Grid & Filter */}
          <div className="pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Katalog Lengkap Proyek Portofolio</h3>
                <p className="text-xs sm:text-sm text-zinc-400">Pilih kategori untuk melihat repositori dan aplikasi lainnya</p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 bg-zinc-900/80 p-1 rounded-xl border border-zinc-800 overflow-x-auto">
                {[
                  { id: "all", label: "Semua (8)" },
                  { id: "fullstack", label: "Full-Stack (3)" },
                  { id: "ai", label: "AI, NLP & Data (3)" },
                  { id: "frontend", label: "Frontend (2)" },
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
            5. TECHNICAL SKILLS SECTION (Sesuai CV)
        ========================================================= */}
        <section id="skills" className="py-16 border-t border-zinc-900">
          <div className="space-y-2 mb-10">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-400">
              <Cpu size={14} />
              <span>Keahlian Teknis (CV)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Technical Skills &amp; Kompetensi
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
              Klasifikasi keahlian teknis pemrograman, framework web, komputasi awan, perangkat kerja, dan keahlian administratif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.category}
                className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-4 hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                      <span>{cat.category}</span>
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">{cat.description}</p>
                  </div>

                  <div className="space-y-2 pt-1">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2 rounded-xl bg-zinc-950/60 border border-zinc-800/60 flex items-center justify-between gap-2.5"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-5 h-5 object-contain shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="font-medium text-xs text-zinc-200 truncate">
                              {skill.name}
                            </div>
                            <div className="text-[10px] text-zinc-400 truncate">{skill.note}</div>
                          </div>
                        </div>

                        <span
                          className={`text-[9px] font-mono font-medium px-1.5 py-0.5 rounded-full shrink-0 ${
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
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            6. EDUCATION, CERTIFICATIONS & ORGANIZATIONS (Sesuai CV)
        ========================================================= */}
        <section id="education" className="py-16 border-t border-zinc-900">
          <div className="space-y-2 mb-10">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-400">
              <GraduationCap size={14} />
              <span>Pendidikan &amp; Organisasi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Pendidikan Formal, Sertifikasi &amp; Aktivitas
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Education Box */}
            <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800">
                <div>
                  <div className="text-xs font-mono text-indigo-400 font-semibold">PENDIDIKAN FORMAL</div>
                  <h3 className="text-xl font-bold text-white">{educationHistory.institution}</h3>
                  <p className="text-sm text-zinc-300">{educationHistory.degree}</p>
                </div>
                <div className="text-right sm:text-right">
                  <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
                    IPK: {educationHistory.gpa}
                  </span>
                  <div className="text-xs text-zinc-400 mt-1 font-mono">{educationHistory.graduation}</div>
                </div>
              </div>

              {/* Undergraduate Thesis Box */}
              <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-1.5">
                <div className="text-xs font-mono text-indigo-400 font-semibold flex items-center gap-1.5">
                  <FileCheck size={14} />
                  <span>JUDUL SKRIPSI (UNDERGRADUATE THESIS)</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {educationHistory.thesisTitle}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {educationHistory.thesisDesc}
                </p>
              </div>

              {/* Coursework Pills */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Mata Kuliah Relevan (Relevant Coursework):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {educationHistory.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/60 text-zinc-300 border border-zinc-700/50"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Organizations Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Users size={18} className="text-indigo-400" />
                  <span>Pengalaman Organisasi</span>
                </h3>

                <div className="space-y-3.5">
                  {organizations.map((org, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800 space-y-1 text-xs">
                      <div className="flex items-center justify-between text-zinc-400 font-mono">
                        <span className="text-indigo-300 font-semibold">{org.role}</span>
                        <span>{org.period}</span>
                      </div>
                      <div className="font-bold text-white text-xs sm:text-sm">{org.event}</div>
                      <p className="text-zinc-400 leading-relaxed">{org.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            7. CONTACT & CALL TO ACTION
        ========================================================= */}
        <section id="contact" className="py-16 border-t border-zinc-900">
          <div className="rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800/80 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-indigo-500/10 blur-[80px] pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Mari Terhubung &amp; Berkolaborasi</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
              Tertarik Merekrut atau Berdiskusi Proyek?
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Saya terbuka untuk posisi entry-level IT, Web Developer (Laravel / Full-Stack), Data Analyst, maupun pekerjaan administratif yang membutuhkan ketelitian tinggi.
            </p>

            {/* Contact Action Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
              >
                <Mail size={16} />
                <span>Kirim Email Langsung</span>
              </a>

              <a
                href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm shadow-lg shadow-emerald-700/30 transition-all cursor-pointer"
              >
                <Phone size={16} />
                <span>Chat via WhatsApp</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium text-sm border border-zinc-700 transition-all cursor-pointer"
              >
                {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                <span>{copiedEmail ? "Email Disalin!" : "Salin Email"}</span>
              </button>

              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium text-sm border border-zinc-700 transition-all cursor-pointer"
              >
                {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                <span>{copiedPhone ? "No. HP Disalin!" : "Salin No. HP"}</span>
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-sm border border-zinc-800 transition-all"
              >
                <Linkedin size={16} className="text-indigo-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-sm border border-zinc-800 transition-all"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>

            <div className="pt-4 text-xs font-mono text-zinc-400 flex flex-wrap justify-center gap-4">
              <span>Email: <span className="text-zinc-200">{personalInfo.email}</span></span>
              <span>•</span>
              <span>Telepon: <span className="text-zinc-200">{personalInfo.phone}</span></span>
              <span>•</span>
              <span>Lokasi: <span className="text-zinc-200">{personalInfo.location}</span></span>
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