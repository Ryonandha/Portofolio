import { useRef, useState, useEffect } from "react";
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

// Inisialisasi animasi scroll
AOS.init();

function App() {
  // State untuk mengontrol Modal (Pop-up detail proyek)
  const [selectedProject, setSelectedProject] = useState(null);

  // Fungsi saat proyek diklik
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Fungsi menutup modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Background Aurora */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora colorStops={["#577870", "#1F97A6", "#127B99"]} speed={0.5} />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* === HERO SECTION === */}
        <div className="hero grid md:grid-cols-2 items-center pt-32 pb-20 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-1s">
            <h1 className="text-5xl font-bold mb-6 text-white">
              <ShinyText text="Hi I'm Ryonandha Mitchell" disabled={false} speed={3} className="custom-class" />
            </h1>
            <BlurText text="Web Developer & UI/UX Enthusiast" className="text-gray-400 mb-6" />
            <div className="flex gap-4">
              <a href="#project" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition">
                View My Work
              </a>
              <a href="./assets/CV.pdf" download className="border border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition">
                Download CV
              </a>
            </div>
          </div>

          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Ryonandha Mitchell"
              title="Web Developer"
              handle="ryonandha"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./public/ryonandha.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </div>

        {/* === ABOUT ME SECTION === */}
        <div className="mt-10 mx-auto w-full rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm p-8" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="basis-full md:basis-7/12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-white mb-5">About Me</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                I’m Ryonandha Mitchell, a full-stack developer passionate about building modern, high-performance applications using React, Node.js, and AI technologies. I love turning complex problems into simple, beautiful, and intuitive
                designs.
              </p>
              <div className="flex flex-row gap-8">
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    20<span className="text-emerald-400">+</span>
                  </h1>
                  <p className="text-zinc-500">Projects</p>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    3<span className="text-emerald-400">+</span>
                  </h1>
                  <p className="text-zinc-500">Years Exp</p>
                </div>
              </div>
            </div>

            {/* Area Lanyard (Tali Gantung 3D) */}
            <div className="basis-full md:basis-5/12 h-[400px] w-full relative">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* === TOOLS SECTION === */}
        <div className="mt-32 mb-20" id="tools">
          <h1 className="text-4xl font-bold text-white mb-4" data-aos="fade-up">
            Tools & Tech
          </h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10">
            {listTools.map((tool) => (
              <div key={tool.id} data-aos="fade-up" className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-all duration-300">
                <img src={tool.gambar} alt={tool.nama} className="w-12 h-12 object-contain bg-zinc-900 p-2 rounded-lg" />
                <h3 className="text-white font-bold">{tool.nama}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* === PROJECT SECTION === */}
        <div className="mt-32 mb-20" id="project">
          <h1 className="text-4xl font-bold text-center text-white mb-2" data-aos="fade-up">
            Featured Projects
          </h1>
          <p className="text-center text-zinc-500 mb-12" data-aos="fade-up">
            Check out what I've built recently
          </p>

          {/* Grid Proyek */}
          <ChromaGrid items={listProyek} onItemClick={handleProjectClick} />
        </div>

        {/* === CONTACT SECTION === */}
        <div className="mt-32 mb-20 text-center" id="contact">
          <h1 className="text-4xl font-bold text-white mb-6">Let's Connect</h1>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">Interested in working together? Feel free to reach out directly via email.</p>
          <a href="mailto:ryonandha@example.com" className="inline-block bg-emerald-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition transform hover:scale-105">
            Send Message
          </a>
        </div>
      </main>

      {/* MODAL (Pop-up Detail) */}
      <ProjectModal isOpen={!!selectedProject} onClose={handleCloseModal} project={selectedProject} />
    </>
  );
}

export default App;
