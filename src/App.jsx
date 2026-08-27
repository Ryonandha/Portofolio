import { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import Lanyard from "./components/Lanyard/Lanyard";
import Aurora from "./components/Aurora/Aurora";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import { listTools, listProyek } from "./data";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* === BACKGROUND === */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0f172a]">
        <Aurora colorStops={["#1e1b4b", "#312e81", "#4338ca"]} speed={0.6} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />
      </div>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 overflow-x-hidden">
        {/* === HERO SECTION === */}
        <section aria-labelledby="hero-heading" className="relative pt-32 pb-20 md:pt-0 md:pb-0 md:min-h-screen md:grid md:grid-cols-2 md:items-center md:gap-16">
          {/* TEXT (Left) */}
          <div className="order-1 md:order-1 flex flex-col items-center md:items-start text-center md:text-left animate__animated animate__fadeInUp">
            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight max-w-xl">
              <ShinyText text="Hi, I'm Ryonandha" disabled={false} speed={2.5} className="custom-class" />
            </h1>

            <p className="mb-10 w-full max-w-lg md:max-w-none text-indigo-100 text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
              Information Systems student at STIKOM Yos Sudarso Purwokerto. Building web apps with Laravel & React. Thesis: mental health screening with IndoBERT.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(99,102,241,0.3)] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#0f172a]"
              >
                View Projects
              </a>
              <a
                href="/CV.pdf"
                download="CV_Ryonandha.pdf"
                className="border border-indigo-500/40 bg-indigo-900/30 backdrop-blur-md text-white px-8 py-3.5 rounded-full font-semibold hover:bg-indigo-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#0f172a]"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* PROFILE CARD (Right) */}
          <div className="order-2 md:order-2 flex w-full justify-center md:justify-end animate__animated animate__fadeInUp animate__delay-1s relative mt-12 md:mt-0">
            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] -z-10 rounded-full transform scale-80" />
            <div className="w-full max-w-[340px] md:max-w-sm">
              <ProfileCard
                name="Ryonandha"
                title="Information Systems Student"
                handle="ryonandha"
                status="Online"
                contactText="Get in Touch"
                avatarUrl="/ryonandha.png"
                showUserInfo={true}
                enableTilt={true}
              />
            </div>
          </div>
        </section>

        {/* === ABOUT SECTION === */}
        <section id="about" aria-labelledby="about-heading" className="my-20 md:my-32">
          <div className="mx-auto w-full rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Text About */}
              <div className="w-full md:w-7/12 order-2 md:order-1" data-aos="fade-right">
                <h2 id="about-heading" className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-indigo-400">01</span>
                  About
                </h2>

                <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-6">
                  <p>
                    I'm a 7th-semester Information Systems student at STIKOM Yos Sudarso Purwokerto.
                    My thesis, <strong>SiPeka</strong>, is a mental health early detection system for students
                    using IndoBERT fine-tuned on 4 emotion classes (accuracy 77.3%, F1-macro 0.758).
                  </p>
                  <p>
                    Before that, I built a volunteer management system for a real foundation (<strong>Relawan AAT</strong>),
                    an event registration platform with payments (<strong>Run 2026</strong>),
                    and smaller tools like a Kanban board and a movie search app.
                  </p>
                  <p>
                    Day-to-day stack: Laravel for backends, React/Next.js for frontends, Tailwind for styling.
                    Comfortable with MySQL, Postgres, and deploying to Vercel or Azure Container Apps.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                  <div className="text-center md:text-left">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-1">8</div>
                    <p className="text-gray-400 uppercase text-xs tracking-widest font-medium">Featured Projects</p>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                      <span className="text-indigo-400">7</span>+
                    </div>
                    <p className="text-gray-400 uppercase text-xs tracking-widest font-medium">Tech Categories</p>
                  </div>
                </div>
              </div>

              {/* Lanyard 3D */}
              <div className="w-full md:w-5/12 h-[300px] md:h-[400px] relative order-1 md:order-2 cursor-grab active:cursor-grabbing" data-aos="fade-left">
                <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </div>
        </section>

        {/* === TECH STACK === */}
        <section id="skills" aria-labelledby="skills-heading" className="mb-20 md:mb-32">
          <header className="text-center mb-12" data-aos="fade-up">
            <h2 id="skills-heading" className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
              <span className="text-indigo-400">02</span>
              Tech Stack
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Tools I use regularly across projects</p>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" role="list">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                role="listitem"
                data-aos="fade-up"
                data-aos-delay={tool.dad}
                className="group flex flex-col items-center p-5 border border-white/5 rounded-2xl bg-white/5 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="relative mb-3">
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
                  />
                </div>
                <span className="text-white font-medium group-hover:text-indigo-300 transition-colors text-sm md:text-base text-center">
                  {tool.nama}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* === PROJECTS === */}
        <section id="projects" aria-labelledby="projects-heading" className="mb-20 md:mb-32">
          <header className="text-center mb-12" data-aos="fade-up">
            <h2 id="projects-heading" className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
              <span className="text-indigo-400">03</span>
              Selected Work
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto px-4">
              Complete projects with live demos. Each card links to the GitHub repo and deployed version.
            </p>
          </header>

          <ChromaGrid items={listProyek} onItemClick={handleProjectClick} />
        </section>

        {/* === CONTACT === */}
        <section id="contact" aria-labelledby="contact-heading" className="text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-500/30 mb-8" data-aos="fade-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500" />
            </span>
            <span className="text-indigo-200 text-sm font-medium">Open for internship & freelance</span>
          </div>

          <h2 id="contact-heading" className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" data-aos="fade-up">
            Let's build something useful together.
          </h2>

          <a
            href="mailto:ryonandhar@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold text-lg rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#0f172a]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Email Me
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </a>
        </section>
      </main>

      <ProjectModal isOpen={!!selectedProject} onClose={handleCloseModal} project={selectedProject} />
    </>
  );
}

export default App;