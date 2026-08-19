import { featuredProjects } from "./ProjectData";
import { Github, ExternalLink, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
        container-wide
        w-full
        px-5
        sm:px-8
        lg:px-12
        xl:px-16
        py-24
        scroll-mt-16
        border-t border-blue-400/20
      "
    >
      {/* Section Heading */}
      <div className="flex flex-col gap-2 mb-16">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-100">
          Selected Projects
        </h2>
        <p className="text-blue-200/70 max-w-2xl">
          A collection of full-stack applications showcasing backend-focused
          architecture, authentication, APIs, and real-world deployment.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="
              group relative
              bg-white/5 backdrop-blur-md
              border border-blue-400/20
              rounded-[2rem] overflow-hidden
              shadow-lg shadow-blue-500/5
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-xl hover:shadow-blue-500/30
            "
          >
            {/* Image */}
            <div className="overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full h-56 object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                  p-2
                "
              />

              {project.flagship && (
                <span
                  className="
                    absolute top-4 left-4
                    px-3 py-1 text-xs font-bold
                    bg-blue-500/30 text-blue-100
                    border border-blue-400/40
                    rounded-full backdrop-blur-md
                  "
                >
                  Flagship Project
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4 relative z-10">
              <h3 className="text-xl font-bold text-slate-100">
                {project.title}
              </h3>

              <p className="text-blue-200/80 text-sm leading-relaxed">
                {project.tagline}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1 rounded-full text-xs font-bold
                      bg-blue-500/20 text-blue-100
                      border border-blue-400/30
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Key Features */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1">
                {project.features.slice(0, 4).map((feature) => (
                  <span
                    key={feature}
                    className="flex items-center gap-1.5 text-xs text-blue-200/70"
                  >
                    <Check size={13} className="text-blue-400 shrink-0" />
                    {feature}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-5 pt-4 mt-auto items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 text-sm font-bold
                    text-blue-200 hover:text-white transition-colors
                  "
                >
                  <Github size={16} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 text-sm font-bold
                    text-blue-400 hover:text-blue-300 transition-colors
                  "
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>

                <Link
                  to={`/project/${project.slug}`}
                  className="
                    flex items-center gap-2 text-sm font-bold
                    text-slate-100 hover:text-blue-300 transition-colors
                  "
                >
                  View Details
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Hover Gradient Overlay */}
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition-opacity duration-500
                bg-gradient-to-br
                from-blue-500/20 via-transparent to-indigo-500/20
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
