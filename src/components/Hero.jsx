import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {

    
  const reduce = useReducedMotion()
  const enter = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
  const enterProps = reduce
    ? {}
    : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }

  return (
    <section className="grid gap-8 md:grid-cols-2 items-center" role="region" aria-labelledby="hero-heading">
      <motion.div {...enterProps}>
        <h1 id="hero-heading" className="text-4xl sm:text-4xl font-bold font-poppins">Hi, I’m Rupinder Singh </h1>
        <p className="mt-4 text-zinc-300 max-w-xl">LLMs | RAG | NLP | Deep Learning | Machine Learning | Python |
Content Writer</p>

        <div className="mt-6 flex gap-4">
          <a href="#projects" className="px-4 py-2 bg-[var(--primary)] text-white rounded-md">View Projects</a>
          <a href="#contact" className="px-4 py-2 bg-[var(--primary)] text-white rounded-md">Contact Me</a>
        </div>
      </motion.div>

      <motion.div {...(reduce ? { style: { opacity: 1 } } : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 } })} className="flex justify-center" aria-hidden="false">
        <div className="w-48 h-48 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border-2 border-zinc-700">
          <img src="/profile.png" alt="Profile photo" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </section>

  )
} 

