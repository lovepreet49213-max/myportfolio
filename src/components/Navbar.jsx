
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { siteConfig } from '../siteConfig'
import { scrollToId } from '../utils/scroll'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const closeMenu = () => {
    setOpen(false)
  }

  const goTo = (e, id) => {
    e.preventDefault()
    closeMenu()
    if (isHome) {
      scrollToId(id)
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <header
      role="banner"
      className="sticky top-0 z-40 bg-[rgba(15,23,42,0.75)] backdrop-blur-md border-b border-zinc-800"
    >
      <nav
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between"
      >
        {/* Logo / Brand */}
        <a
          href="#home"
          onClick={(e) => goTo(e, 'home')}
          className="flex items-center gap-3 group"
          aria-label="Lovepreet Singh - Home"
        >
          <img
            src="/Lsicon-nobg.png"
            alt="Lovepreet Singh logo"
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <div className="hidden sm:block">
            <span className="block text-white font-poppins font-semibold text-lg leading-tight">
              {siteConfig.name}
            </span>

            <span className="block text-xs text-zinc-400 mt-0.5">
              {siteConfig.role}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => goTo(e, link.id)}
              className="text-sm text-zinc-300 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Resume */}
          <a
            href={siteConfig.resumeFile}
            download={siteConfig.resumeDownloadName}
            className="ml-2 px-4 py-2 border rounded-md border-primary text-primary hover:bg-primary/10 transition-colors duration-200 text-sm font-medium"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-2 px-3 border rounded-md border-zinc-700 text-zinc-200 hover:border-primary hover:text-primary transition-colors"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[rgba(15,23,42,0.98)] border-t border-zinc-800"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => goTo(e, link.id)}
                className="py-3 px-2 text-zinc-300 hover:text-primary hover:bg-zinc-900/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href={siteConfig.resumeFile}
              download={siteConfig.resumeDownloadName}
              onClick={closeMenu}
              className="mt-3 px-4 py-2.5 border rounded-md border-primary text-primary hover:bg-primary/10 transition-colors inline-block text-center font-medium"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
