import React from "react";
import { Award } from "lucide-react";

const achievements = [
  "Class & Placement Representative, MCA",
  "Management Committee Member",
  "Hostel Welfare Committee Member",
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-label="Achievements"
      className="container-wide w-full px-5 sm:px-8 lg:px-12 xl:px-16 py-10 border-t border-blue-400/20"
    >
      <div className="flex flex-col gap-3 mb-10 max-w-4xl">
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
          Achievements
        </span>

        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-100">
          Leadership & <span className="text-blue-400">Responsibility.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {achievements.map((item) => (
          <div
            key={item}
            className="
              flex items-center gap-4
              bg-white/5 backdrop-blur-md
              border border-blue-400/20
              rounded-2xl
              p-5
              transition-all duration-300
              hover:border-blue-400/40
            "
          >
            <div
              className="
                w-10 h-10 shrink-0 flex items-center justify-center
                rounded-xl bg-blue-500/15 border border-blue-400/30
              "
            >
              <Award size={18} className="text-blue-400" />
            </div>

            <p className="text-sm font-semibold text-slate-100">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
