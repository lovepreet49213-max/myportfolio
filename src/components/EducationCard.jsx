// components/EducationCard.jsx
import React from "react";

const EducationCard = ({
  title,
  icon,
  bgColor = "bg-blue-500/20",
  details,
}) => {
  return (
    <div
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
      {/* Card Header */}
      <div className="flex items-center gap-4 mb-10">
        <div
          className={`
            p-3 rounded-2xl
            ${bgColor}
            text-blue-300
            border border-blue-400/30
            shadow-md
          `}
        >
          {icon}
        </div>

        <h3 className="text-xl font-black uppercase tracking-tight text-slate-100">
          {title}
        </h3>
      </div>

      {/* Card Content */}
      <div className="space-y-8 flex-grow">
        {details.map((item, index) => (
          <div key={index} className="group relative">
            {/* Degree + Years */}
            <div className="flex justify-between items-start mb-1 gap-4">
              <h4
                className="
                  text-lg font-bold text-slate-100
                  group-hover:text-blue-300
                  transition-colors
                "
              >
                {item.degree}
              </h4>

              {item.years && (
                <span
                  className="
                    text-[10px] font-mono font-bold
                    text-blue-300
                    bg-blue-500/10
                    border border-blue-400/30
                    px-2 py-1 rounded-md
                    whitespace-nowrap
                  "
                >
                  {item.years}
                </span>
              )}
            </div>

            {/* Institution */}
            {item.institution && (
              <p className="text-sm text-blue-200/70 font-medium mb-3">
                {item.institution}
              </p>
            )}

            {/* Result */}
            {item.result && (
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase text-blue-200/60">
                  Result
                </span>
                <span
                  className="
                    inline-flex items-center justify-center
                    rounded-md px-2 py-0.5
                    bg-white/5
                    border border-blue-400/20
                    text-[10px] font-bold
                    text-slate-100
                  "
                >
                  {item.result}
                </span>
              </div>
            )}

            {/* Certificate Link */}
            {/* {item.certificate && (
              <a
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  absolute top-0 right-0
                  p-2 rounded-full
                  hover:bg-blue-500/10
                  transition-colors
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
                    w-4 h-4
                    text-blue-300/60
                    hover:text-blue-300
                  "
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            )} */}

            {/* Tags */}
            {item.tags && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="
                      text-[9px] font-bold
                      text-blue-300
                      bg-blue-500/10
                      border border-blue-400/20
                      px-2 py-0.5 rounded-md
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationCard;
