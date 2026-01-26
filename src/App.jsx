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
  disable: "mobile",
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

      {/* PERUBAHAN 1: Container lebih ramping (max-w-6xl) & Padding laptop lebih besar (lg:px-20) */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 overflow-x-hidden">
        {/* === HERO SECTION === */}
        {/* PERUBAHAN 2: Menambah gap (gap-16) agar teks dan kartu tidak terlalu rapat */}
        <div className="min-h-[auto] md:min-h-screen grid md:grid-cols-2 items-center gap-10 md:gap-16 lg:gap-24 pt-28 pb-12 md:pt-20 md:pb-20">
          <div className="order-1 md:order-1 animate__animated animate__fadeInUp text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
              <ShinyText text="Hi, I'm Ryonandha" disabled={false} speed={3} className="custom-class" />
            </h1>

            <div className="mb-8 px-2 md:px-0">
              <BlurText text="Crafting Digital Experiences with Code & Passion." className="text-indigo-200 text-lg sm:text-xl md:text-2xl font-light" />
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              <a href="#project" className="bg-indigo-600 text-white px-8 py-3 md:py-4 rounded-full font-bold hover:bg-indigo-500 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(99,102,241,0.5)] text-sm md:text-base">
                View My Work
              </a>
              <a
                href="/CV.pdf"
                download="CV_Ryonandha.pdf"
                className="border border-indigo-500/30 bg-indigo-900/20 backdrop-blur-md text-white px-8 py-3 md:py-4 rounded-full font-bold hover:bg-indigo-500/20 transition-all text-sm md:text-base"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="order-2 md:order-2 flex justify-center md:justify-end animate__animated animate__fadeInUp animate__delay-1s relative mt-8 md:mt-0">
            <div className="absolute inset-0 bg-indigo-500 blur-[60px] md:blur-[80px] opacity-20 -z-10 rounded-full transform scale-75"></div>
            <div className="w-full max-w-[320px] md:max-w-full">
              <ProfileCard name="Ryonandha" title="Full Stack Developer" handle="ryonandha" status="Online" contactText="Contact Me" avatarUrl="/ryonandha.png" showUserInfo={true} enableTilt={true} />
            </div>
          </div>
        </div>

        {/* === ABOUT ME SECTION === */}
        <div className="mt-12 md:mt-20 mx-auto w-full rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl p-6 md:p-12 shadow-2xl" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="basis-full md:basis-7/12 order-2 md:order-1" data-aos="fade-right">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3">
                About <span className="text-indigo-400">Me</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6 md:mb-8 text-base md:text-lg font-light text-justify md:text-left">
                I’m Ryonandha Mitchell, a Full Stack Developer dedicated to crafting seamless and high-performance digital experiences. With a strong foundation in Information Systems and a passion for modern web technologies like React,
                Node.js, and AI integration, I transform complex ideas into intuitive, scalable applications.
              </p>

              <div className="flex flex-row gap-8 md:gap-12 border-t border-white/10 pt-6 md:pt-8 justify-center md:justify-start">
                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                    20<span className="text-indigo-400 text-2xl md:text-3xl">+</span>
                  </h1>
                  <p className="text-gray-400 uppercase text-[10px] md:text-xs tracking-widest font-semibold">Projects</p>
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                    3<span className="text-indigo-400 text-2xl md:text-3xl">+</span>
                  </h1>
                  <p className="text-gray-400 uppercase text-[10px] md:text-xs tracking-widest font-semibold">Years Exp</p>
                </div>
              </div>
            </div>

            <div className="basis-full md:basis-5/12 h-[250px] md:h-[350px] w-full relative order-1 md:order-2 cursor-grab active:cursor-grabbing">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* === TOOLS SECTION === */}
        <div className="mt-20 md:mt-32 mb-12 md:mb-20" id="tools">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center" data-aos="fade-up">
            Tech <span className="text-indigo-400">Stack</span>
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                className="group flex flex-col items-center justify-center p-4 md:p-6 border border-white/5 rounded-2xl bg-white/5 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <img src={tool.gambar} alt={tool.nama} className="w-10 h-10 md:w-14 md:h-14 object-contain mb-3 md:mb-4 group-hover:scale-110 transition-transform filter drop-shadow-lg" />
                <h3 className="text-sm md:text-base text-white font-medium group-hover:text-indigo-300 transition-colors">{tool.nama}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* === PROJECT SECTION === */}
        <div className="mt-20 md:mt-32 mb-12 md:mb-20" id="project">
          <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">
              Featured <span className="text-indigo-400">Work</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base px-4">A selection of projects where design meets functionality.</p>
          </div>
          <ChromaGrid items={listProyek} onItemClick={handleProjectClick} />
        </div>

        {/* === CONTACT SECTION === */}
        <div className="mt-20 md:mt-32 mb-20 md:mb-32 text-center px-4" id="contact">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-500/30 mb-6 md:mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            <span className="text-indigo-200 text-xs md:text-sm font-medium">Available for work</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
            Let's create something
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            amazing together.
          </h1>
          <a
            href="mailto:ryonandha@gmail.com"
            className="inline-block bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl"
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
