import React from "react";
import { Download } from "lucide-react";
import { siteConfig } from "../siteConfig";

export default function ResumeCta() {
  return (
    <section
      id="resume"
      aria-label="Resume"
      className="container-wide w-full px-5 sm:px-8 lg:px-12 xl:px-16 py-16 scroll-mt-16"
    >
      <div
        className="
          relative overflow-hidden
          bg-gradient-to-br from-[#011b59] to-[#022b7a]
          border border-blue-400/30
          rounded-[2.5rem]
          px-8 py-14 sm:p-16
          text-center
          shadow-xl
        "
      >
        {/* Glow accents */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-100">
            Want to know more about my experience?
          </h2>

          <p className="mt-4 text-lg text-blue-200/80 max-w-2xl mx-auto leading-relaxed">
            Download my resume for a detailed overview of my technical skills,
            projects, education, and development experience.
          </p>

          <a
            href={siteConfig.resumeFile}
            download={siteConfig.resumeDownloadName}
            className="
              inline-flex items-center gap-2
              mt-8 px-8 py-4 rounded-xl
              bg-[var(--primary)] text-white font-bold text-lg
              hover:opacity-90 hover:scale-[1.02]
              transition-all shadow-lg
            "
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
