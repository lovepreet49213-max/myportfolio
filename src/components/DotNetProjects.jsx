import React from "react";
import { Check } from "lucide-react";
import { dotnetProjects } from "./ProjectData";
import { Link } from "react-router-dom";

export default function DotNetProjects() {
  return (
    <section
      id="dotnet-projects"
      aria-label="Previous .NET projects"
      className="container-wide w-full px-5 sm:px-8 lg:px-12 xl:px-16 py-10 border-t border-blue-400/20"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 mb-14 max-w-4xl">
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
          Previous Experience
        </span>

        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-100">
          .NET Projects
        </h2>

        <p className="text-lg text-blue-200/80 leading-relaxed">
          Earlier academic and project work in the ASP.NET ecosystem. These
          projects sit alongside my current Node.js backend specialization.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dotnetProjects.map((project) => (
          <div
            key={project.slug}
            className="
              bg-white/5 backdrop-blur-md
              border border-blue-400/20
              rounded-2xl
              p-7
              transition-all duration-500
              hover:-translate-y-1
              hover:shadow-xl hover:shadow-blue-500/20
            "
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-slate-100">
                {project.title}
              </h3>
              <span className="shrink-0 text-[10px] font-mono font-bold text-blue-300 bg-blue-500/10 border border-blue-400/30 px-2 py-1 rounded-md">
                {project.year}
              </span>
            </div>

            <p className="text-sm text-blue-200/70 leading-relaxed mt-2 mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              {project.features.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-sm text-blue-200/80"
                >
                  <Check size={14} className="text-blue-400 shrink-0" />
                  {highlight}
                </div>
              ))}
            </div>

            <Link
              to={`/project/${project.slug}`}
              className="inline-flex items-center gap-1.5 mt-5 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}