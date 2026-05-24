// sections/Education.jsx
import React from "react";
import EducationCard from "../components/EducationCard";


const educationData = [
  {
    title: "Academic History",
    bgColor: "bg-blue-500/10",
    icon:<img src="/education-cap.svg" className="w-6 h-6 text-blue-400" alt="Graduation" />,
    details: [
      {
        degree: "Master of Computer Application (MCA)",
        institution: "Punjabi University, Patiala",
        years: "2022–24",
        result: "8.74 CGPA",
      },
      
    ],
  },
  {
    title: "Professional Certs",
    bgColor: "bg-indigo-500/10",
    icon: <img src="/svg/education-cap-svgrepo-com.svg" className="w-6 h-6 text-blue-100 bg-blue-100" alt="Graduation"  />,
    details: [
      {
        degree: ".Net Internship Program",
        years: "2024 – 2025",
        certificate: "/pp.svg",
        tags: ["MVC Core", "Entity Framework", "SQL Server", ".NET APIs", "C#", "Razor Pages"," LINQ"],
      },
      {
        degree: "MERN Stack Development",
        years: "2025-current",
        certificate: "/pp.svg",
        tags: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Express", "MongoDB"],
      }
    ],
  },
];

const Education = () => {
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
      <div className="flex flex-col gap-2 mb-16">
        
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter
                       text-slate-100 leading-[0.9]">
          Academic & <br /> Architectural Growth.
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {educationData.map((card, idx) => (
          <EducationCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Education;
