import React, { useState, useRef, useEffect } from 'react'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header role="navigation" className="sticky top-0 z-40 bg-[rgba(15,23,42,0.6)] backdrop-blur-md border-b border-zinc-800">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
       <div className="flex items-center gap-3">
  <img
    src="/Lsicon-nobg.png"
    alt="Logo"
    className="w-10 h-10 object-contain"
  />

  <span className="text-white font-poppins font-semibold text-lg">
    Lovepreet Singh
  </span>
</div>
        <div className="hidden md:flex items-center space-x-6" aria-hidden={open}>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <a href="/lovepreetCV.pdf" download="lovepreetCv.pdf" className="ml-4 px-4 py-2 border rounded-md border-primary text-primary bg-[var(--primary)] hover:bg-primary/10">
            Download CV
          </a>
        </div>

        <div className="md:hidden">
          <button aria-controls="mobile-menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="p-2 border rounded-md border-zinc-700">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" ref={menuRef} className="md:hidden animated-bg border-t border-zinc-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)} className="py-2 hover:text-primary">{link.label}</a>
            ))}
            <a href="/lovepreetCV.pdf" download="lovepreetCv.pdf" className="mt-2 px-4 py-2 border rounded-md border-primary text-primary hover:bg-primary/10 inline-block w-max">Download CV</a>
          </div>
        </div>
      )}
    </header>
  )
} 
