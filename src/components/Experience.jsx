import React from "react";
import { Link } from "react-router-dom";

const journey = [
  {
    year: "2026",
    label: "Current Focus",
    items: [
      {
        title: "Real Estate Management Platform",
        tech: "Node.js / Express / MongoDB / React",
        detail:
          "Full-stack platform with role-based access, property management, bookings, Cloudinary uploads, and an admin dashboard.",
        link: "/project/real-estate",
      },
      {
        title: "GarageGo",
        tech: "Node.js / Express / MongoDB / React",
        detail:
          "Garage rental platform with customer and admin flows, JWT auth, Cloudinary images, and Nodemailer email integration.",
      },
      {
        title: "Roylos Web Services",
        tech: "React / Node.js / MongoDB",
        detail:
          "Responsive company website with services, project portfolio, and contact inquiry handling.",
      },
    ],
  },
  {
    year: "2024",
    label: "Earlier Work",
    items: [
      {
        title: "Dispatch & Trucking Management System",
        tech: "ASP.NET MVC / Entity Framework",
        detail:
          "Dispatch management with route tracking, dynamic dashboards, and classic MVC architecture.",
      },
      {
        title: "Immigration Management System",
        tech: "ASP.NET MVC / SQL Server",
        detail:
          "Case and applicant management with document tracking and relational database design.",
      },
    ],
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
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
      <div className="flex flex-col gap-2 mb-10">
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
          Development Journey
        </span>

        <h2
          id="journey-heading"
          className="text-4xl md:text-7xl font-black tracking-tighter text-slate-100"
        >
          Project Experience
        </h2>

        <p className="text-blue-200/70 max-w-2xl mt-2">
          A timeline of the real projects I have built — from current Node.js
          and MongoDB work back to earlier ASP.NET MVC applications.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-12">
        {journey.map((period) => (
          <div key={period.year} className="relative">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl md:text-5xl font-black text-blue-400">
                {period.year}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/15 text-blue-200 border border-blue-400/30">
                {period.label}
              </span>
            </div>

            <div className="space-y-6 pl-6 border-l border-blue-400/20">
              {period.items.map((item) => (
                <div
                  key={item.title}
                  className="group relative"
                >
                  <div
                    className="
                      absolute -left-[31px] top-6
                      w-3 h-3 rounded-full bg-blue-400
                      ring-4 ring-blue-500/10
                      group-hover:scale-125 transition-transform
                    "
                  />

                  <div
                    className="
                      bg-white/5 backdrop-blur-xl
                      border border-blue-400/20
                      rounded-2xl
                      p-6
                      shadow-lg shadow-blue-900/20
                      transition-all
                      group-hover:border-blue-400/40
                      group-hover:shadow-blue-800/30
                    "
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-100">
                          {item.title}
                        </h3>
                        <p className="text-sm text-blue-300 font-mono font-semibold mt-0.5">
                          {item.tech}
                        </p>
                      </div>

                      {item.link && (
                        <Link
                          to={item.link}
                          className="
                            shrink-0 text-xs font-bold
                            text-blue-400 hover:text-blue-300
                            transition-colors
                          "
                        >
                          View Details →
                        </Link>
                      )}
                    </div>

                    <p className="text-sm text-blue-200/70 leading-relaxed mt-3">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
