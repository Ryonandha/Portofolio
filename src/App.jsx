import { useState } from "react";
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

AOS.init({
  once: true,
  disable: "mobile", // Mematikan animasi berat di HP
});

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0f172a]">
        <Aurora colorStops={["#312e81", "#4338ca", "#1e1b4b"]} speed={0.8} />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      </div>

      {/* KEMBALI KE 7XL (Desktop Lebar) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        
        {/* === HERO SECTION === */}
        {/* Mobile: padding atas-bawah dikurangi. Desktop: Tetap min-h-screen agar full layaknya awal */}
        <div className="min-h-[auto] pt-28 pb-12 md:min-h-screen md:grid md:grid-cols-2 md:items-center md:gap-12 md:pt-20 md:pb-20">
          
          {/* TEXT (Kiri) */}
          <div className="order-1 md:order-1 animate__animated animate__fadeInUp text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
              <ShinyText text="Hi, I'm Ryonandha" disabled={false} speed={3} className="custom-class" />
            </h1>

            <div className="mb-8">
              {/* Ukuran font mobile disesuaikan sedikit, desktop tetap besar */}
              <BlurText text="Crafting Digital Experiences with Code & Passion." className="text-indigo-200 text-lg md:text-2xl font-light" />
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#project" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-500 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                View My Work
              </a>
              <a href="/CV.pdf" download="CV_Ryonandha.pdf" className="border border-indigo-500/30 bg-indigo-900/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-500/20 transition-all">
                Download CV
              </a>
            </div>
          </div>

          {/* PROFILE CARD (Kanan) */}
          {/* justify-center (Mobile: Tengah) | md:justify-end (Desktop: Pojok Kanan seperti awal) */}
          <div className="order-2 md:order-2 flex justify-center md:justify-end animate__animated animate__fadeInUp animate__delay-1s relative mt-12 md:mt-0">
            <div className="absolute inset-0 bg-indigo-500 blur-[80px] opacity-20 -z-10 rounded-full transform scale-75"></div>
            {/* Wrapper Mobile Only: Membatasi lebar hanya di HP agar tidak gepeng */}
            <div className="w-full max-w-[320px] md:max-w-full">
               <ProfileCard name="Ryonandha" title="Full Stack Developer" handle="ryonandha" status="Online" contactText="Contact Me" avatarUrl="/ryonandha.png" showUserInfo={true} enableTilt={true} />
            </div>
          </div>
        </div>

        {/* === ABOUT ME SECTION === */}
        <div className="mt-12 md:mt-20 mx-auto w-full rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl p-6 md:p-12 shadow-2xl" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* Text About */}
            <div className="basis-full md:basis-7/12 order-2 md:order-1" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3 justify-center md:justify-start">
                About <span className="text-indigo-400">Me</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg font-light text-justify md:text-left">
                I’m Ryonandha Mitchell, a Full Stack Developer dedicated to crafting seamless and high-performance digital experiences. With a strong foundation in Information Systems and a passion for modern web technologies like React,
                Node.js, and AI integration, I transform complex ideas into intuitive, scalable applications. Backed by over 3 years of experience and 20+ successful projects, I strive to deliver functional and aesthetically pleasing
                solutions that drive growth in the digital landscape.
              </p>

              <div className="flex flex-row gap-12 border-t border-white/10 pt-8 justify-center md:justify-start">
                <div className="text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    20<span className="text-indigo-400 text-3xl">+</span>
                  </h1>
                  <p className="text-gray-400 uppercase text-xs tracking-widest font-semibold">Projects</p>
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    3<span className="text-indigo-400 text-3xl">+</span>
                  </h1>
                  <p className="text-gray-400 uppercase text-xs tracking-widest font-semibold">Years Exp</p>
                </div>
              </div>
            </div>

            {/* Lanyard 3D */}
            {/* Mobile: Height terbatas (250px) agar bisa di-scroll. Desktop: Normal (350px) */}
            <div className="basis-full md:basis-5/12 h-[250px] md:h-[350px] w-full relative order-1 md:order-2">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* === TOOLS SECTION === */}
        <div className="mt-20 md:mt-32 mb-20" id="tools">
          <h1 className="text-4xl font-bold text-white mb-12 text-center" data-aos="fade-up">
            Tech <span className="text-indigo-400">Stack</span>
          </h1>
          {/* Mobile: 2 Kolom. Tablet: 3. Desktop: 4 (Seperti awal) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                className="group flex flex-col items-center justify-center p-6 border border-white/5 rounded-2xl bg-white/5 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <img src={tool.gambar} alt={tool.nama} className="w-12 h-12 md:w-14 md:h-14 object-contain mb-4 group-hover:scale-110 transition-transform filter drop-shadow-lg" />
                <h3 className="text-white font-medium group-hover:text-indigo-300 transition-colors text-sm md:text-base">{tool.nama}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* === PROJECT SECTION === */}
        <div className="mt-20 md:mt-32 mb-20" id="project">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-indigo-400">Work</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto px-4">A selection of projects where design meets functionality.</p>
          </div>

          <ChromaGrid items={listProyek} onItemClick={handleProjectClick} />
        </div>

        {/* === CONTACT SECTION === */}
        <div className="mt-20 md:mt-32 mb-20 md:mb-32 text-center px-4" id="contact">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-500/30 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            <span className="text-indigo-200 text-sm font-medium">Available for work</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Let's create something
            <br />
            amazing together.
          </h1>

          <a
            href="mailto:ryonandha@gmail.com"
            className="inline-block bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl"
          >
            Say Hello 👋
          </a>
        </div>
      </main>

      <ProjectModal isOpen={!!selectedProject} onClose={handleCloseModal} project={selectedProject} />
    </>
  );
}

export default App;