import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'
import BlogsSection from './components/BlogsSection'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-white">
      <Navbar />
      <main id="main" role="main" aria-labelledby="hero-heading" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-12">
          <Hero />
        </section>

        <section id="about" className="py-12">
          <About />
        </section>
        {/* <section id="blogs" className="py-12">
          <BlogsSection />
        </section> */}

        <section id="skills" className="py-12">
          <Skills />
        </section>

        <section id="projects" className=" py-12">
          <Projects />
        </section>
        <section id="education" className="py-12">
          <Education />
        </section>

        <section id="experience" className="py-12">
          <Experience />
        </section>

        <section id="contact" className="py-12">
          <Contact />
        </section>
        
      </main>

      <Footer />
    </div>
  )
}
