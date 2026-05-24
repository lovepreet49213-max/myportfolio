import React from "react";
import SkillCard from "../components/SkillCard";

const skillData = [
  {
    title: "Backend Development",
    count: "01",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: "/svg/nodejs.svg" },
      { name: "Express.js", level: "Intermediate", icon: "/svg/express.svg" },
      { name: "ASP.NET Core", level: "Intermediate", icon: "/svg/aspnet-svgrepo-com.svg" },
      { name: "REST APIs", level: "Intermediate", icon: "/svg/api.svg" },
      { name: "Authentication & Authorization (JWT)", level: "Intermediate", icon: "/svg/jwt.svg" },
      { name: "Real-Time Systems (Socket.IO)", level: "Intermediate", icon: "/svg/websocket-svgrepo-com.svg" },
    ],
  },

  {
    title: "Frontend Development",
    count: "02",
    skills: [
      { name: "JavaScript (ES6+)", level: "Intermediate", icon: "/svg/js.svg" },
      { name: "React.js", level: "Intermediate", icon: "/svg/react.svg" },
      { name: "Next.js", level: "Intermediate", icon: "/svg/nextjs.svg" },
      { name: "Tailwind CSS", level: "Intermediate", icon: "/svg/tailwind.svg" },
      { name: "HTML5", level: "Advanced", icon: "/svg/html.svg" },
      { name: "CSS3", level: "Intermediate", icon: "/svg/css.svg" },
    ],
  },

  {
    title: "Databases",
    count: "03",
    skills: [
      { name: "MongoDB", level: "Intermediate", icon: "/svg/mongodb.svg" },
      { name: "MySQL", level: "Intermediate", icon: "/svg/mysql.svg" },
      { name: "SQL Server", level: "Intermediate", icon: "/svg/microsoft-sql-server-logo-svgrepo-com.svg" },
    ],
  },

  {
    title: "Integrations & Services",
    count: "04",
    skills: [
      { name: "Razorpay Payment Integration", level: "Intermediate", icon: "/svg/razorpay.svg" },
      { name: "Cloudinary Media Management", level: "Intermediate", icon: "/svg/cloudinary.svg" },
      { name: "Twilio (SMS / Notifications)", level: "Intermediate", icon: "/svg/twilio-icon-svgrepo-com.svg" },
    ],
  },

  {
    title: "DevOps & Tooling",
    count: "05",
    skills: [
      { name: "Docker (Basics)", level: "Intermediate", icon: "/svg/docker.svg" },
      { name: "Git & GitHub", level: "Intermediate", icon: "/svg/git.svg" },
      {
        name: "Deployment (Vercel / Render / Railway)",
        level: "Intermediate",
        icon: "/svg/deployments.svg",
      },
      { name: "CI/CD Fundamentals", level: "Intermediate", icon: "/svg/ci-cd-svgrepo-com.svg" },
    ],
  },

  {
    title: "Currently Learning",
    count: "06",
    skills: [
      { name: "System Design Fundamentals", level: "Beginner", icon: "/svg/system.svg" },
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
      <div className="flex flex-col gap-4 mb-16 max-w-3xl">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-100">
          Technical Skillset
        </h2>

        <p className="text-lg text-blue-200/80 leading-relaxed">
          A backend-focused skill set built around the{" "}
          <span className="text-white font-semibold">MERN stack</span>, modern{" "}
          <span className="text-white font-semibold">React & Next.js</span>{" "}
          frontends, and scalable backend systems using{" "}
          <span className="text-white font-semibold">Node.js and ASP.NET Core</span>.
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
