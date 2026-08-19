import React, { useEffect, useMemo, useState } from "react";
import { siteConfig } from "../siteConfig";
import { scrollToId } from "../utils/scroll";

export default function Hero() {
  const titles = useMemo(
    () => [
      "RESTful APIs",
      "Secure Authentication",
      "MongoDB Applications",
      "Role-Based Access",
      "Full Stack Apps",
    ],
    []
  );

  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const TYPING_SPEED = 70;
  const DELETING_SPEED = 45;
  const PAUSE_TIME = 1400;

  useEffect(() => {
    const current = titles[titleIndex];
    let timeoutId;

    if (!isDeleting && charIndex < current.length) {
      timeoutId = setTimeout(() => {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, TYPING_SPEED + Math.random() * 30);
    } else if (isDeleting && charIndex > 0) {
      timeoutId = setTimeout(() => {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, DELETING_SPEED);
    } else if (!isDeleting && charIndex === current.length) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true)
      }, PAUSE_TIME);
    } else if (isDeleting && charIndex === 0) {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((i) => (i + 1) % titles.length);
      }, DELETING_SPEED);
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, titleIndex, titles]);

  return (
    <section
      id="home"
      className="
        container-wide
        w-full
        px-5
        sm:px-8
        lg:px-12
        xl:px-16
        py-1
        scroll-mt-16
        border-t border-blue-400/20
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-[1400px] w-full pt-10 lg:pt-16 mx-auto items-center">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 flex flex-col gap-6">

          {/* Intro */}
          <div className="flex flex-col gap-2">
            <h3 className="text-blue-200 text-lg">
              Hi, I'm{" "}
              <span className="text-[var(--primary)] font-semibold">
                {siteConfig.name}
              </span>
            </h3>
          </div>

          {/* Main Heading */}
          <div className="min-h-[160px] lg:min-h-[220px]">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-100 leading-[1.05]">
              Node.js
              <br />
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Backend Engineer
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg font-semibold text-blue-300">
              | Full Stack Developer
            </p>

            <p className="mt-3 text-lg sm:text-2xl font-bold text-slate-200">
              Building{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {text}
              </span>
              <span className="animate-blink ml-1">|</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-blue-200/80 max-w-2xl text-base sm:text-lg leading-relaxed">
            MCA graduate and Node.js Backend Engineer building{" "}
            <span className="text-white font-semibold">
              RESTful APIs, secure authentication systems,
            </span>{" "}
            database-driven applications, and production-ready full-stack web
            applications.
          </p>

          {/* Technology Stack */}
          <div className="flex flex-wrap gap-2 max-w-2xl">
            {[
              "Node.js",
              "Express.js",
              "MongoDB",
              "React",
              "REST APIs",
              "JWT",
              "Cloudinary",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-3 py-1.5
                  rounded-full
                  text-xs sm:text-sm
                  border border-blue-400/20
                  bg-blue-950/40
                  text-blue-200
                  hover:border-blue-400/50
                  hover:text-white
                  transition-colors
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("projects");
              }}
              className="
                px-6 py-3
                rounded-lg
                bg-[var(--primary)]
                text-white
                font-semibold
                hover:opacity-90
                transition-all
                shadow-lg
              "
            >
              View Projects
            </a>

            <a
              href={siteConfig.resumeFile}
              download={siteConfig.resumeDownloadName}
              className="
                px-6 py-3
                rounded-lg
                border border-blue-400/40
                text-blue-200
                font-semibold
                hover:bg-blue-500/10
                hover:text-white
                transition-all
              "
            >
              Download Resume
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3
                rounded-lg
                border border-blue-400/40
                text-blue-200
                font-semibold
                hover:bg-blue-500/10
                hover:text-white
                transition-all
              "
            >
              GitHub
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3
                rounded-lg
                border border-blue-400/40
                text-blue-200
                font-semibold
                hover:bg-blue-500/10
                hover:text-white
                transition-all
              "
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT PROFILE CARD */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            className="
              bg-gradient-to-br from-[#011b59] to-[#022b7a]
              border border-blue-400/30
              p-6
              rounded-[2rem]
              shadow-xl
              backdrop-blur-md
              w-full
              max-w-[340px]
              text-center
            "
          >
            <img
              src={"my.png"||"/Licon-nobg.png"}
              alt="Lovepreet Singh"
              className="
                rounded-2xl
                grayscale
                hover:grayscale-0
                transition-all
                duration-500
                aspect-square
                w-full
                object-cover
              "
            />

            <h2 className="mt-4 text-xl font-bold text-white">
              {siteConfig.name}
            </h2>

            <p className="text-blue-200 font-mono text-sm mt-1">
              Node.js Backend Engineer
            </p>

            <p className="text-blue-300/70 text-xs mt-2">
              Node.js • Express.js • MongoDB • React.js
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
