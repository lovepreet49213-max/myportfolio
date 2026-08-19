import React from "react";

const professionalDetails = [
  {
    title: "Specialization",
    desc: "Node.js backend development with Express.js, REST APIs, MongoDB, and Mongoose",
  },
  {
    title: "Education",
    desc: "Master of Computer Applications (MCA) — CGPA 8.77/10",
  },
  {
    title: "Project Experience",
    desc: "Built full-stack applications including Real Estate Management Platform, GarageGo, and Roylos Web Services",
  },
  {
    title: "Additional Experience",
    desc: "ASP.NET MVC, Entity Framework, SQL Server, C#, and relational database development",
  },
];

const highlights = [
  "RESTful API Development",
  "JWT Authentication & RBAC",
  "MongoDB & Mongoose",
  "Cloudinary File Uploads",
  "API Integration & Debugging",
  "Production Deployment",
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
      <div className="flex flex-col gap-3 mb-12">
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
          About Me
        </span>

        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-100">
          Building Backend Systems
          <br />
          <span className="text-blue-400">That Solve Real Problems.</span>
        </h2>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-7">
          <p className="text-xl md:text-2xl leading-tight text-slate-100 font-semibold">
            I'm an MCA graduate and{" "}
            <span className="text-blue-400">Node.js Backend Engineer</span>{" "}
            focused on building reliable REST APIs and full-stack web
            applications.
          </p>

          <p className="text-lg text-blue-200/80 leading-relaxed">
            My recent work includes real estate and garage management platforms
            involving authentication, role-based authorization, MongoDB data
            modelling, file uploads, bookings, and third-party integrations.
          </p>

          <p className="text-lg text-blue-200/80 leading-relaxed">
            I work with{" "}
            <span className="text-white font-semibold">
              Node.js, Express.js, MongoDB, and Mongoose
            </span>{" "}
            to design REST APIs, middleware, JWT authentication, role-based
            access control, CRUD operations, and pagination. I have also
            integrated services such as{" "}
            <span className="text-white font-semibold">
              Cloudinary, Nodemailer, and Razorpay
            </span>
            .
          </p>

          <p className="text-lg text-blue-200/80 leading-relaxed">
            Alongside my Node.js experience, I have previous project experience
            with{" "}
            <span className="text-white font-semibold">
              ASP.NET MVC, Entity Framework, and SQL Server
            </span>
            , giving me exposure to both NoSQL and relational database
            applications.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pt-2">
            {highlights.map((item) => (
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
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5">
          <div
            className="
              bg-white/5
              backdrop-blur-xl
              border border-blue-400/20
              p-7 sm:p-8
              rounded-[2.5rem]
              shadow-xl
            "
          >
            <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-300 mb-8">
              Professional Profile
            </h4>

            <div className="space-y-8">
              {professionalDetails.map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div
                    className="
                      bg-blue-500/20
                      p-3
                      rounded-2xl
                      text-blue-300
                      border border-blue-400/30
                      group-hover:scale-110
                      transition-transform
                      duration-300
                      shrink-0
                    "
                  >
                    <svg
                      className="w-5 h-5"
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

                    <p className="text-sm text-blue-200/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Current Focus */}
            <div className="mt-10 pt-6 border-t border-blue-400/20">
              <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-4">
                Current Focus
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "REST APIs",
                  "JWT & RBAC",
                  "React.js",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      px-3 py-2
                      bg-blue-500/20
                      border border-blue-400/30
                      text-blue-100
                      rounded-full
                      text-xs
                      font-bold
                      hover:bg-blue-500/30
                      transition
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Open To */}
            <div className="mt-8">
              <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-2">
                Open To
              </p>

              <p className="text-sm text-slate-200">
                Node.js Backend Engineer & Full Stack Developer opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
