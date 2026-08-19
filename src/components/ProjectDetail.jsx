import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  Check,
  Server,
  ArrowDown,
  Lock,
  Code2,
  Database,
  Braces,
} from "lucide-react";
import { projects, getProjectBySlug } from "./ProjectData";

function MethodBadge({ method }) {
  const styles = {
    GET: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
    POST: "bg-blue-500/15 text-blue-300 border-blue-400/30",
    PUT: "bg-amber-500/15 text-amber-300 border-amber-400/30",
    PATCH: "bg-purple-500/15 text-purple-300 border-purple-400/30",
    DELETE: "bg-rose-500/15 text-rose-300 border-rose-400/30",
  };
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-black border ${styles[method]}`}
    >
      {method}
    </span>
  );
}

function FlowSteps({ steps }) {
  return (
    <ol className="space-y-2">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-3">
          <span className="w-7 h-7 shrink-0 flex items-center justify-center rounded-md border border-blue-400/30 bg-white/5 font-mono text-[10px] text-blue-200">
            {i + 1}
          </span>
          <span className="font-mono text-sm text-slate-200">{step}</span>
          {i < steps.length - 1 && (
            <ArrowRight size={13} className="shrink-0 text-blue-400/40" />
          )}
        </li>
      ))}
    </ol>
  );
}

function ArchitectureDiagram({ layers }) {
  return (
    <div className="space-y-0">
      {layers.map((l, i) => (
        <div key={`${l.layer}-${i}`}>
          <div className="flex items-center gap-3 rounded-xl border border-blue-400/25 bg-gradient-to-br from-[#011b59]/70 to-[#022b7a]/70 px-4 py-3">
            <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-md bg-blue-500/15 text-blue-400">
              {l.type === "db" ? (
                <Database size={18} />
              ) : l.type === "server" ? (
                <Server size={18} />
              ) : l.type === "client" ? (
                <Code2 size={18} />
              ) : (
                <ArrowRight size={15} />
              )}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-100">{l.layer}</p>
              {l.sub && (
                <p className="truncate font-mono text-[11px] text-blue-200/60">
                  {l.sub}
                </p>
              )}
            </div>
          </div>
          {i < layers.length - 1 && (
            <div className="flex justify-center py-1.5">
              <ArrowDown size={16} className="text-blue-400/50" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Gallery({ images }) {
  const [active, setActive] = useState(0);
  if (!images || images.length === 0) return null;
  return (
    <div className="overflow-hidden rounded-2xl border border-blue-400/25">
      <img
        src={images[active]}
        alt="Project screenshot"
        loading="lazy"
        className="aspect-[16/9] w-full object-cover"
      />
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto border-t border-blue-400/10 bg-[#011b59]/70 p-3">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              className={`h-14 w-20 shrink-0 overflow-hidden rounded-md border transition-colors ${
                i === active
                  ? "border-blue-400"
                  : "border-blue-400/20 opacity-60 hover:opacity-100"
              }`}
              aria-label={`Show screenshot ${i + 1}`}
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionCard({ title, icon, children }) {
  return (
    <section className="bg-white/5 backdrop-blur-md border border-blue-400/20 rounded-2xl p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
          {icon || <Code2 size={18} />}
        </span>
        <h2 className="text-lg font-bold text-slate-100">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ApiTable({ group }) {
  return (
    <div>
      <h4 className="font-mono text-sm font-semibold text-blue-200">
        {group.title}
      </h4>
      <div className="mt-3 space-y-2">
        {group.endpoints.map((ep) => (
          <div
            key={`${ep.method}-${ep.endpoint}`}
            className="flex flex-wrap items-start gap-x-3 gap-y-1.5 rounded-lg border border-blue-400/15 bg-[#011b59]/50 px-3.5 py-2.5"
          >
            <MethodBadge method={ep.method} />
            <code className="min-w-0 flex-1 break-all font-mono text-xs text-slate-200">
              {ep.endpoint}
            </code>
            <div className="w-full sm:w-auto">
              <span className="rounded-md border border-blue-400/20 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-blue-200/70">
                {ep.auth}
              </span>
            </div>
            <p className="w-full text-xs text-blue-200/60">{ep.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug) || projects[0];

  const neighbors = useMemo(() => {
    const idx = projects.findIndex((p) => p.slug === slug);
    const prev = idx > 0 ? projects[idx - 1] : null;
    const next = idx >= 0 && idx < projects.length - 1 ? projects[idx + 1] : null;
    return { prev, next };
  }, [slug]);

  if (!project) {
    return (
      <div className="container-page py-32 text-center">
        <h1 className="text-2xl font-bold text-slate-100">Project not found</h1>
        <p className="mt-2 text-blue-200/70">
          The project you're looking for doesn't exist.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--primary)] text-white font-semibold mt-6 hover:opacity-90 transition">
          <ArrowLeft size={16} /> Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container-wide w-full px-5 sm:px-8 lg:px-12 xl:px-16 py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-mono text-sm text-blue-300 hover:text-white transition-colors"
      >
        <ArrowLeft size={14} /> All projects
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        {/* Main column */}
        <div className="min-w-0 space-y-10">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              {project.flagship && (
                <span className="px-3 py-1 text-xs font-bold bg-blue-500/30 text-blue-100 border border-blue-400/40 rounded-full">
                  Flagship Project
                </span>
              )}
              <h1 className="text-2xl sm:text-3xl font-black text-slate-100">
                {project.title}
              </h1>
              <span className="rounded-md border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 font-mono text-xs font-semibold text-blue-200">
                {project.year}
              </span>
              <span className="rounded-md border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-1 font-mono text-xs font-semibold text-indigo-200">
                {project.category}
              </span>
            </div>

            <p className="mt-2 text-lg text-blue-300">{project.tagline}</p>

            <p className="mt-4 text-blue-200/80 leading-relaxed max-w-3xl">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-100 border border-blue-400/30"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--primary)] text-white font-semibold hover:opacity-90 transition"
                >
                  Live Demo <ExternalLink size={15} />
                </a>
              )}
              {project.backendApi && (
                <a
                  href={project.backendApi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-blue-400/40 text-blue-200 font-semibold hover:bg-blue-500/10 transition"
                >
                  Live Backend API <ExternalLink size={15} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-blue-400/40 text-blue-200 font-semibold hover:bg-blue-500/10 transition"
                >
                  Source on GitHub <Github size={15} />
                </a>
              )}
            </div>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <Gallery images={project.gallery} />
          )}

          <SectionCard title="Overview">
            <p className="leading-relaxed text-blue-200/80">{project.overview}</p>
          </SectionCard>

          <SectionCard title="The Problem">
            <p className="leading-relaxed text-blue-200/80">{project.problem}</p>
          </SectionCard>

          <SectionCard title="The Solution">
            <p className="leading-relaxed text-blue-200/80">{project.solution}</p>
          </SectionCard>

          <SectionCard title="Key Features">
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-100">
                  <Check size={16} className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                  {f}
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Backend Architecture" icon={<Braces size={18} />}>
            <ArchitectureDiagram layers={project.architecture} />
          </SectionCard>

          {project.uploadFlow && (
            <SectionCard title="Image Upload Flow" icon={<ExternalLink size={18} />}>
              <p className="mb-5 text-sm leading-relaxed text-blue-200/70">
                How multipart image uploads travel from the browser form to
                Cloudinary and end up stored in MongoDB.
              </p>
              <FlowSteps steps={project.uploadFlow} />
            </SectionCard>
          )}

          {project.authFlow && (
            <SectionCard title="Authentication Flow" icon={<Lock size={18} />}>
              <p className="mb-5 text-sm leading-relaxed text-blue-200/70">
                How a login request becomes a protected API call with
                role-based access.
              </p>
              <FlowSteps steps={project.authFlow} />
            </SectionCard>
          )}

          {project.apiGroups && (
            <SectionCard title="REST API Showcase" icon={<Braces size={18} />}>
              <p className="mb-6 text-sm leading-relaxed text-blue-200/70">
                Real endpoints from the deployed backend. Methods are
                colour-coded and the protected routes list the required role.
              </p>
              <div className="space-y-8">
                {project.apiGroups.map((g) => (
                  <ApiTable key={g.title} group={g} />
                ))}
              </div>
            </SectionCard>
          )}
        </div>

        {/* Sidebar */}
        <aside className="min-w-0 space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="bg-white/5 border border-blue-400/20 rounded-2xl p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-blue-300">
              Tech Stack
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-500/15 text-blue-100 border border-blue-400/25"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-blue-400/20 rounded-2xl p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-blue-300">
              Quick Links
            </p>
            <div className="mt-4 space-y-2">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-100 hover:text-blue-300">
                  Live Demo →
                </a>
              )}
              {project.backendApi && (
                <a href={project.backendApi} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-100 hover:text-blue-300">
                  Deployed Backend API →
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-100 hover:text-blue-300">
                  GitHub Repository →
                </a>
              )}
              <Link to="/" state={{ scrollTo: "contact" }} className="block text-sm text-blue-100 hover:text-blue-300">
                Ask me about this project →
              </Link>
            </div>
          </div>

          <div className="bg-white/5 border border-blue-400/20 rounded-2xl p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-blue-300">
              Key Features
            </p>
            <ul className="mt-4 space-y-2">
              {project.features.slice(0, 6).map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-blue-200/80">
                  <Check size={14} className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Prev / Next */}
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-blue-400/15 pt-8">
        {neighbors.prev ? (
          <Link
            to={`/project/${neighbors.prev.slug}`}
            className="group flex items-center gap-3 text-sm text-blue-200/80 hover:text-white"
          >
            <ArrowLeft size={16} className="text-blue-400/70" />
            <span>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-blue-300/50">
                Previous
              </span>
              {neighbors.prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {neighbors.next && (
          <Link
            to={`/project/${neighbors.next.slug}`}
            className="group flex items-center gap-3 text-right text-sm text-blue-200/80 hover:text-white"
          >
            <span>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-blue-300/50">
                Next
              </span>
              {neighbors.next.title}
            </span>
            <ArrowRight size={16} className="text-blue-400/70" />
          </Link>
        )}
      </div>
    </div>
  );
}
