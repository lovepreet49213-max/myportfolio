import React from "react";

const technicalTools = [
  "/svg/git-deployment.svg",
  "/svg/github.svg",
  "/svg/vscode.svg",
  "/svg/postman.svg",
  "/svg/vercel.svg",
];

const professionalDetails = [
  {
    title: "Experience",
    desc: "2 years as a remote contract developer with a Canada-based startup",
  },
  {
    title: "Education",
    desc: "Master of Computer Application (MCA)",
  },
  {
    title: "Projects",
    desc: "Built and deployed multiple full-stack MERN applications",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
      <div className="flex flex-col gap-2 mb-16">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-100">
          Designing Systems <br /> That Scale.
        </h2>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

        {/* Left Column */}
        <div className="lg:col-span-7 space-y-8">
          <p className="text-xl md:text-2xl leading-tight text-slate-100 font-semibold">
            I design and build full-stack applications with a strong focus on
            backend architecture, scalability, and real-world performance.
          </p>

          <p className="text-lg text-blue-200/80 leading-relaxed">
            I have one year of hands-on experience working as a remote contract
            developer for a Canada-based startup, where I primarily worked on
            backend systems, APIs, authentication flows, and database design.
          </p>

          <p className="text-lg text-blue-200/80 leading-relaxed">
            My current stack centers around the{" "}
            <span className="text-white font-semibold">MERN ecosystem</span>,
            where I build secure REST APIs using{" "}
            <span className="text-white font-semibold">
              Node.js and Express
            </span>{" "}
            and develop modern, responsive frontends with{" "}
            <span className="text-white font-semibold">React</span>. I also bring
            strong backend fundamentals from my experience with{" "}
            <span className="text-white font-semibold">ASP.NET Core</span>.
          </p>

          <p className="text-lg text-blue-200/80 leading-relaxed">
            I enjoy working on problems involving system design, role-based
            access control, clean architecture, and deployment workflows, and I
            focus on writing maintainable code that scales with both traffic and
            team size.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 pt-4">
            {[
              "Scalable MERN Applications",
              "Secure REST APIs & Authentication",
              "Role-Based Access Control (RBAC)",
              "Production-Ready Deployment",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-blue-100 font-medium"
              >
                <svg
                  className="w-5 h-5 text-blue-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span className="text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          {/* Technical Tools */}
          <div className="flex items-center gap-6 pt-6">
            <h4 className="flex flex-col text-xs font-black uppercase tracking-[0.3em] text-blue-300">
              <span>Technical</span>
              <span>Arsenal</span>
            </h4>

            <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
              {technicalTools.map((tool, i) => (
                <li
                  key={i}
                  className="
                    bg-[383b73]/60 backdrop-blur-md p-4 rounded-2xl
                    border border-blue-400/20
                    hover:bg-[#022b7a]/70
                    hover:-translate-y-2 hover:shadow-xl
                    hover:shadow-blue-500/30
                    transition-all duration-300
                  "
                >
                  <img
                    src={tool}
                    alt="Tool"
                    className="h-6 w-6 object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5">
          <div
            className="
              bg-white/5 backdrop-blur-xl
              border border-blue-400/20
              p-8 rounded-[2.5rem] shadow-xl
            "
          >
            <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-300 mb-10">
              Professional Details
            </h4>

            <div className="space-y-10">
              {professionalDetails.map((item, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div
                    className="
                      bg-blue-500/20 p-3 rounded-2xl
                      text-blue-300 border border-blue-400/30
                      group-hover:scale-110 transition-transform duration-300
                    "
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-100 mb-1">
                      {item.title}
                    </h5>
                    <p className="text-sm text-blue-200/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Current Focus */}
            <div className="mt-12 pt-4 border-t border-blue-400/20">
              <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-4">
                Current Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {["MERN Stack", "ASP.NET Core", "System Design"].map((item) => (
                  <span
                    key={item}
                    className="
                      px-4 py-2 bg-blue-500/20 border border-blue-400/30
                      text-blue-100 rounded-full text-xs font-bold
                      hover:bg-blue-500/30 transition
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
