import React from "react";
import SkillCard from "../components/SkillCard";

const skillData = [
  {
    title: "Backend",
    count: "01",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Middleware",
      "API Architecture",
      "CRUD",
      "Pagination",
    ],
  },
  {
    title: "Authentication & Security",
    count: "02",
    skills: [
      "JWT",
      "Role-Based Access Control",
      "bcrypt",
      "OTP Verification",
      "Password Hashing",
      "Token Invalidation",
      "CORS",
      "Environment Variables",
    ],
  },
  {
    title: "Database",
    count: "03",
    skills: [
      "MongoDB",
      "Mongoose",
      "SQL Server",
      "Entity Framework",
      "Schema Design",
      "Database Relationships",
    ],
  },
  {
    title: "Frontend",
    count: "04",
    skills: [
      "React.js",
      "Vite",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Axios",
      "Responsive Design",
    ],
  },
  {
    title: "Integrations",
    count: "05",
    skills: ["Cloudinary", "Multer", "Nodemailer", "Razorpay"],
  },
  {
    title: "DevOps & Tools",
    count: "06",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Nginx",
      "Vercel",
      "Postman",
      "VS Code",
      "Visual Studio",
    ],
  },
  {
    title: "Additional",
    count: "07",
    skills: [
      "C#",
      "C++",
      "Java",
      "Python",
      "OOP",
      "DSA",
      "LINQ",
      "MVC",
      "Debugging",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
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
      {/* Header */}
      <div className="flex flex-col gap-4 mb-16 max-w-4xl">
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
          Technical Skills
        </span>

        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-100">
          Tools I Use to
          <br />
          <span className="text-blue-400">Build Applications.</span>
        </h2>

        <p className="text-lg text-blue-200/80 leading-relaxed">
          My primary focus is backend development with{" "}
          <span className="text-white font-semibold">
            Node.js, Express.js, MongoDB, and REST APIs
          </span>
          , supported by React.js for frontend development and additional
          experience with{" "}
          <span className="text-white font-semibold">
            ASP.NET MVC and SQL Server
          </span>
          .
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillData.map((category, idx) => (
          <SkillCard
            key={idx}
            title={category.title}
            skills={category.skills}
            count={category.count}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
