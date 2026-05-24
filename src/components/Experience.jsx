import React from "react";

const items = [
  {
    year: "2025 – Present",
    title: "Full-Stack Developer (MERN)",
    company: "Freelance / Independent Projects",
  },
  {
    year: "Jan 2024 – Jan 2025",
    title: "Software Developer (Remote – Contract)",
    company: "Canada-based Software Startup",
  },
  {
    year: "2022 – 2024",
    title: "Master of Computer Applications (MCA)",
    company: "Punjabi University, Patiala • CGPA: 8.74",
  },
];


export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
    className="
  container-wide
  w-full
  px-5
  sm:px-8
  lg:px-12
  xl:px-16
  py-10
  scroll-mt-16
  border-t border-blue-400/20
"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-10">
      
        <h2
          id="experience-heading"
          className="text-4xl md:text-7xl font-black tracking-tighter text-slate-100"
        >
          Experience & <br /> Education
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative space-y-6">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-400/20 hidden sm:block" />

        {items.map((it, idx) => (
          <div
            key={`${it.year}-${it.title}`}
            className="relative group flex gap-6"
          >
            {/* Timeline Dot */}
            <div
              className="
                hidden sm:flex
                w-8 h-8 rounded-full
                bg-blue-500/20
                border border-blue-400/40
                items-center justify-center
                shrink-0
                mt-2
                group-hover:scale-110
                transition-transform
              "
            >
              <div className="w-2 h-2 rounded-full bg-blue-400" />
            </div>

            {/* Card */}
            <div
              className="
                animated-bg
                w-full
                p-6
                rounded-2xl
                border border-blue-400/20
                backdrop-blur-xl
                shadow-lg shadow-blue-900/20
                transition-all
                group-hover:shadow-blue-800/30
              "
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-100">
                    {it.title}
                  </h3>
                  <p className="text-sm text-blue-200/70 font-medium">
                    {it.company}
                  </p>
                </div>

                <time
                  className="
                    text-xs font-mono font-bold
                    text-blue-300
                    bg-blue-500/10
                    border border-blue-400/30
                    px-3 py-1 rounded-full
                    w-fit
                  "
                  aria-label="Duration"
                >
                  {it.year}
                </time>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
