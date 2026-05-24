import React, { useEffect, useMemo, useState } from "react";

export default function Hero() {
  const titles = useMemo(
    () => [
       "MERN Stack Apps",
    "Node.js API Backend",
    "ASP.NET Core Backend",
    "Scalable Systems",
    "Real-Time Apps",
    ],
    []
  );

  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
const TYPING_SPEED = window.innerWidth < 640 ? 60 : 80;

  // const TYPING_SPEED = 80;
  const DELETING_SPEED = 50;
  const PAUSE_TIME = 1200;

  useEffect(() => {
    const current = titles[titleIndex];
    let timeoutId;

    if (!isDeleting && charIndex < current.length) {
      timeoutId = setTimeout(() => {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, TYPING_SPEED + Math.random() * 40);
    } else if (isDeleting && charIndex > 0) {
      timeoutId = setTimeout(() => {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, DELETING_SPEED);
    } else if (!isDeleting && charIndex === current.length) {
      timeoutId = setTimeout(() => setIsDeleting(true), PAUSE_TIME);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-[1400px] w-full pt-10 mx-auto items-center">

        {/* LEFT */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h3 className="text-blue-200 flex flex-col gap-1">
            <span>
              Hi, I'm{" "}
              <span className="text-[var(--primary)]">Lovepreet Singh</span>
            </span>

            <span className="text-sm text-blue-200 font-semibold tracking-wide">
              Full-Stack Developer{" "}
              <span className="text-blue-300">
                (Backend-Focused | MERN + ASP.NET Core)
              </span>
            </span>
          </h3>

        <div className="min-h-[180px] lg:min-h-[280px]">
  <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-slate-100">
    Building <br />
    <span className="block bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
      {text}
      <span className="animate-blink ml-1">|</span>
    </span>
  </h1>
</div>


          <p className="text-blue-200/80 max-w-2xl">
            I build production-ready web applications using the{" "}
            <span className="text-white font-semibold">MERN Stack</span> and
            design enterprise-grade backends with{" "}
            <span className="text-white font-semibold">ASP.NET Core</span>,
            focused on scalability, performance, and clean architecture.
          </p>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            className="
              bg-gradient-to-br from-[#011b59] to-[#022b7a]
              border border-blue-400/30 p-6 rounded-[2rem]
              shadow-xl backdrop-blur-md w-full max-w-[340px] text-center
            "
          >
            <img
              src="/Licon-nobg.png"
              alt="Lovepreet Singh"
              className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 aspect-square w-full"
            />
            <h2 className="mt-4 text-xl font-bold text-white">
              Lovepreet Singh
            </h2>
            <p className="text-blue-200 font-mono text-sm">
              Full-Stack Developer
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
