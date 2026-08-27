import { useState } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import { listTools, listProyek } from "./data";

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
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* === HERO === */}
        <section className="mb-16 sm:mb-24" aria-labelledby="hero-heading">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="text-center md:text-left">
              <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 leading-tight mb-4">
                Hi, I'm Ryonandha
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl mb-8 max-w-xl mx-auto md:mx-0">
                Information Systems student at STIKOM Yos Sudarso Purwokerto. Building web apps with Laravel and React, currently focused on NLP for my thesis.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  View Projects
                </a>
                <a
                  href="/CV.pdf"
                  download="CV_Ryonandha.pdf"
                  className="inline-flex items-center px-6 py-3 border border-indigo-500 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="w-full max-w-xs md:max-w-sm mx-auto md:mx-0 md:shrink-0">
              <ProfileCard
                name="Ryonandha"
                title="Information Systems Student"
                handle="ryonandha"
                avatarUrl="/ryonandha.png"
                showUserInfo={true}
                enableTilt={false}
              />
            </div>
          </div>
        </section>

        {/* === ABOUT === */}
        <section id="about" className="mb-16 sm:mb-24" aria-labelledby="about-heading">
          <h2 id="about-heading" className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            About
          </h2>
          <div className="prose prose-invert dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
            <p className="mb-4">
              I'm in my 7th semester at STIKOM Yos Sudarso Purwokerto. My thesis is SiPeka — a mental health early detection system for students using IndoBERT fine-tuned on 4 emotion classes (accuracy 77.3%, F1-macro 0.758).
            </p>
            <p className="mb-4">
              Before that, I built a few things: a volunteer management system for a real foundation (Relawan AAT), an event registration platform with payments (Run 2026), and some smaller tools like a Kanban board and a movie search app. Most are on GitHub with live demos.
            </p>
            <p className="mb-4">
              Stack I use day to day: Laravel for backends, React/Next.js for frontends, Tailwind for styling. I'm comfortable with MySQL, Postgres, and deploying to Vercel or Azure Container Apps.
            </p>
          </div>
        </section>

        {/* === TECH STACK === */}
        <section id="skills" className="mb-16 sm:mb-24" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-2"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">
                  {tool.nama}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* === PROJECTS === */}
        <section id="projects" className="mb-16 sm:mb-24" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Selected Work
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Projects I've built that are complete enough to show. Each has a GitHub repo; most have live demos.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listProyek.map((project) => (
              <article
                key={project.id}
                className="group border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 overflow-hidden hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="aspect-video relative overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
                    {project.deskripsi}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 text-sm">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* === CONTACT === */}
        <section id="contact" className="text-center" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            Open to internships, freelance work, or just talking about Laravel, React, or NLP.
          </p>
          <a
            href="mailto:ryonandhar@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Email Me
          </a>
        </section>
      </main>

      <ProjectModal isOpen={!!selectedProject} onClose={handleCloseModal} project={selectedProject} />
    </>
  );
}

export default App;