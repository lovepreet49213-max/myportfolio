import React from "react";

const expertise = [
  {
    title: "REST API Development",
    desc: "Designing structured REST APIs using Node.js and Express.js with controllers, routes, middleware, validation, CRUD operations, and error handling.",
    tags: ["Node.js", "Express.js", "REST"],
    icon: "/svg/api.svg",
  },
  {
    title: "Authentication & Authorization",
    desc: "Implementing JWT authentication, protected routes, role-based authorization, password hashing, token validation, and secure user workflows.",
    tags: ["JWT", "bcrypt", "RBAC"],
    icon: "/svg/jwt.svg",
  },
  {
    title: "MongoDB Data Modelling",
    desc: "Designing MongoDB schemas with Mongoose, references, validation, CRUD operations, pagination, and structured data relationships.",
    tags: ["MongoDB", "Mongoose"],
    icon: "/svg/mongodb.svg",
  },
  {
    title: "File Uploads",
    desc: "Handling multipart uploads with Multer and integrating Cloudinary for scalable cloud image storage.",
    tags: ["Multer", "Cloudinary"],
    icon: "/svg/cloudinary.svg",
  },
  {
    title: "Third-Party Integrations",
    desc: "Integrating services such as Cloudinary, Nodemailer, and Razorpay into real backend workflows.",
    tags: ["Cloudinary", "Nodemailer", "Razorpay"],
    icon: "/svg/razorpay.svg",
  },
  {
    title: "Deployment",
    desc: "Deploying full-stack applications and backend APIs using Vercel with environment-based configuration.",
    tags: ["Vercel", "Docker", "Nginx"],
    icon: "/svg/vercel.svg",
  },
];

export default function BackendExpertise() {
  return (
    <section
      id="backend-expertise"
      aria-label="Backend expertise"
      className="container-wide w-full px-5 sm:px-8 lg:px-12 xl:px-16 py-10 border-t border-blue-400/20"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 mb-14 max-w-4xl">
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
          Backend Expertise
        </span>

        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-100">
          What I Can
          <br />
          <span className="text-blue-400">Actually Build.</span>
        </h2>

        <p className="text-lg text-blue-200/80 leading-relaxed">
          Beyond listing technologies, here is what I can implement end-to-end
          in a backend system.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertise.map((item) => (
          <div
            key={item.title}
            className="
              group
              bg-white/5 backdrop-blur-md
              border border-blue-400/20
              rounded-2xl
              p-7
              transition-all duration-500
              hover:-translate-y-1
              hover:shadow-xl hover:shadow-blue-500/20
            "
          >
            <div className="flex items-center justify-between mb-5">
              <div
                className="
                  w-12 h-12 flex items-center justify-center
                  rounded-2xl
                  bg-blue-500/15 border border-blue-400/30
                  group-hover:scale-110 group-hover:bg-blue-500/25
                  transition-all duration-300
                "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-6 h-6 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>

              <span className="text-[10px] font-mono font-bold text-blue-300 opacity-40 group-hover:opacity-100 transition-opacity">
                /backend
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-100 mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-blue-200/80 leading-relaxed">
              {item.desc}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    px-2.5 py-0.5 rounded-full text-[10px] font-bold
                    bg-blue-500/15 text-blue-100
                    border border-blue-400/25
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
