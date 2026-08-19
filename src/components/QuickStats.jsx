import React from "react";

const stats = [
  {
    value: "5+",
    label: "Projects Built",
    sub: "Full-stack & backend applications",
  },
  {
    value: "3+",
    label: "Full Stack Applications",
    sub: "Node.js + React projects deployed",
  },
  {
    value: "REST APIs",
    label: "Backend Development",
    sub: "Auth, RBAC, uploads, bookings",
  },
  {
    value: "MCA",
    label: "8.77/10 CGPA",
    sub: "Master of Computer Applications",
  },
];

export default function QuickStats() {
  return (
    <section
      aria-label="Quick statistics"
      className="container-wide w-full px-5 sm:px-8 lg:px-12 xl:px-16 py-6"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              bg-white/5 backdrop-blur-md
              border border-blue-400/20
              rounded-2xl
              p-5 sm:p-6
              text-center
              hover:border-blue-400/40
              transition-colors
            "
          >
            <p className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-bold text-slate-100">
              {stat.label}
            </p>
            <p className="mt-1 text-xs text-blue-200/60">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
