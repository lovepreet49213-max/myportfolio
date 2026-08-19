import React from "react";

const degrees = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Punjabi University, Patiala",
    years: "2022 – 2024",
    result: "CGPA 8.77/10",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "DM College, Moga",
    years: "2019 – 2022",
    result: "74.9%",
  },
];

export default function Education() {
  return (
    <section
      id="education"
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
      <div className="flex flex-col gap-2 mb-14">
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
          Education
        </span>

        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-100 leading-[0.9]">
          Academic
          <br />
          Background.
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {degrees.map((degree) => (
          <div
            key={degree.degree}
            className="
              bg-white/5 backdrop-blur-md
              border border-blue-400/20
              rounded-2xl
              p-7
              transition-all duration-500
              hover:-translate-y-1
              hover:border-blue-400/40
              hover:shadow-xl hover:shadow-blue-500/20
            "
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-slate-100">
                {degree.degree}
              </h3>

              <span
                className="
                  shrink-0 text-[10px] font-mono font-bold
                  text-blue-300 bg-blue-500/10
                  border border-blue-400/30
                  px-2 py-1 rounded-md
                "
              >
                {degree.years}
              </span>
            </div>

            <p className="text-sm text-blue-200/70 font-medium mt-2 mb-4">
              {degree.institution}
            </p>

            <span
              className="
                inline-flex items-center justify-center
                rounded-md px-3 py-1
                bg-white/5 border border-blue-400/20
                text-xs font-bold text-slate-100
              "
            >
              {degree.result}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
