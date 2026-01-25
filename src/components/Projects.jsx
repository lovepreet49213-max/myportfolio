import React from "react";
import { projects } from "../components/projectData";

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <article
            key={p.id}
            className="project-card animated-bg p-4 rounded-md
                       card-elevated card-glow motion-safe-transition card-lift"
          >
            {/* Project Image */}
            <div className="mb-3">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-zinc-300 text-sm">{p.desc}</p>

              {/* Tech Stack */}
              <div className="mt-3 flex gap-2 flex-wrap">
                {p.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[var(--primary-dark)] text-white rounded-md hover:opacity-90 transition"
              >
                GitHub
              </a>
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[var(--primary-dark)] text-white rounded-md hover:opacity-90 transition"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
