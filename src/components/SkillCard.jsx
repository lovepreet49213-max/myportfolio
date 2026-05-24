import React from "react";

const SkillCard = ({ title, skills, count }) => {
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
      <div className="flex flex-wrap gap-3 px-6 pb-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              group/item relative
              flex items-center gap-3
              px-4 py-2.5 rounded-2xl

              bg-gradient-to-br from-[#011b59]/70 to-[#022b7a]/70
              border border-blue-400/25
              backdrop-blur-md

              transition-all duration-300
              hover:-translate-y-1
              hover:border-blue-400/50
              hover:shadow-lg hover:shadow-blue-500/25

              /* ✨ Outer card hover effect */
              group-hover:border-blue-400/40
              group-hover:shadow-blue-500/30
            "
          >
            {/* Icon */}
            <div
              className="
                w-9 h-9 flex items-center justify-center
                rounded-xl
                bg-blue-500/15
                ring-1 ring-blue-400/20

                transition-all duration-300
                group-hover:scale-110
                group-hover:bg-blue-500/25
              "
            >
              <img
                src={skill.icon}
                alt={skill.name}
                width={22}
                height={22}
                className="
                  object-contain
                  grayscale opacity-80
                  transition-all duration-300
                  group-hover:grayscale-0
                  group-hover:opacity-100
                "
              />
            </div>

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold text-slate-100 group-hover:text-white">
                {skill.name}
              </span>
              <span
                className="
                  text-[9px] font-bold uppercase tracking-widest
                  text-blue-300/70
                  group-hover:text-blue-300
                "
              >
                {skill.level}
              </span>
            </div>

            {/* ✨ Glossy Shine Overlay (activates on outer hover) */}
            <span
              className="
                pointer-events-none
                absolute inset-0 rounded-2xl
                bg-gradient-to-r
                from-transparent via-white/15 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
            />

            {/* Subtle bottom glow line */}
            <span
              className="
                absolute inset-x-0 bottom-0 h-px
                bg-gradient-to-r from-transparent via-blue-400/40 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
