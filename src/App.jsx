import React, { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { scrollToId } from "./utils/scroll";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import QuickStats from "./components/QuickStats"
import About from "./components/About"
import Skills from "./components/Skills"
import BackendExpertise from "./components/BackendExpertise"
import Projects from "./components/Projects"
import ApiShowcase from "./components/ApiShowcase"
import DotNetProjects from "./components/DotNetProjects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Achievements from "./components/Achievements"
import ResumeCta from "./components/ResumeCta"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ProjectDetail from "./components/ProjectDetail"

function ScrollManager() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const id = location.state.scrollTo
      requestAnimationFrame(() => {
        scrollToId(id)
        navigate("/", { replace: true, state: null })
      })
    }
  }, [location, navigate])

  return null
}

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="py-12 sm:py-16">
        <Hero />
      </section>

      <QuickStats />

      {/* About */}
      <section id="about" className="py-12 sm:py-16">
        <About />
      </section>

      {/* Technical Skills */}
      <section id="skills" className="py-12 sm:py-16">
        <Skills />
      </section>

      {/* Backend Expertise */}
      <section className="py-12 sm:py-16">
        <BackendExpertise />
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-12 sm:py-16">
        <Projects />
      </section>

      {/* API Showcase */}
      <section className="py-12 sm:py-16">
        <ApiShowcase />
      </section>

      {/* Previous .NET Projects */}
      <section className="py-12 sm:py-16">
        <DotNetProjects />
      </section>

      {/* Project / Development Journey */}
      <section id="journey" className="py-12 sm:py-16">
        <Experience />
      </section>

      {/* Education */}
      <section id="education" className="py-12 sm:py-16">
        <Education />
      </section>

      {/* Achievements */}
      <section className="py-12 sm:py-16">
        <Achievements />
      </section>

      {/* Resume */}
      <ResumeCta />

      {/* Contact */}
      <section id="contact" className="py-12 sm:py-16">
        <Contact />
      </section>
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ScrollManager />
      <div className="min-h-screen bg-[var(--bg)] text-white">
        <Navbar />

        <main
          id="main"
          role="main"
          aria-labelledby="hero-heading"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  )
}
