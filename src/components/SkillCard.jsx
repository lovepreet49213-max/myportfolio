import React from "react";

const SkillCard = ({ title, count, skills }) => {
  return (
    <div
      className="
        group flex flex-col gap-6 py-6
        bg-white/5 backdrop-blur-md
        border border-blue-400/20
        rounded-2xl
        shadow-lg shadow-blue-500/5
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-xl hover:shadow-blue-500/25
        overflow-hidden
      "
    >
      {/* Card Header */}
      <div className="px-6 pb-4">
        <div className="flex items-center justify-between">
          <h3 className="font-black text-lg tracking-tight uppercase text-slate-100">
            {title}
          </h3>
          <span
            className="
              text-[10px] font-mono font-bold
              text-blue-300
              opacity-40 group-hover:opacity-100
              transition-opacity
            "
          >
            {count}
          </span>
        </div>

        <div
          className="
            h-0.5 w-12 mt-2
            bg-gradient-to-r from-blue-400/40 to-indigo-500/40
            group-hover:w-full
            transition-all duration-700
          "
        />
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 px-6 pb-6">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="
              px-3.5 py-2 rounded-full
              text-xs font-semibold text-blue-100
              bg-gradient-to-br from-[#011b59]/70 to-[#022b7a]/70
              border border-blue-400/25
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-blue-400/50
              hover:shadow-lg hover:shadow-blue-500/25
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
