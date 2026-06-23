import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('')
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefers = window.matchMedia('(prefers-color-scheme: light)').matches
    const t = stored || (prefers ? 'light' : 'dark')
    setTheme(t)
    document.documentElement.setAttribute('data-theme', t)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(s => {
        const top = s.offsetTop
        if (window.scrollY >= top - 200) current = s.getAttribute('id')
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  const navItems = [
    'about', 'services', 'skills', 'experience', 'workflow',
    'projects', 'blog', 'testimonials', 'youtube', 'contact'
  ]

  return (
    <nav className="navbar navbar-expand-lg nav-blur sticky-top" style={{ padding: '0.75rem 0' }}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <span>Rudra</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${expanded ? ' show' : ''}`}>
          <ul className="navbar-nav mx-auto gap-1">
            {navItems.map(item => (
              <li className="nav-item" key={item}>
                <a
                  className={`nav-link${activeSection === item ? ' active' : ''}`}
                  href={`#${item}`}
                  onClick={() => setExpanded(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <button className="btn theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              <i className={`bi ${theme === 'dark' ? 'bi-brightness-high' : 'bi-moon'}`}></i>
            </button>
            <a
              className="btn btn-primary btn-glow"
              href="https://docs.google.com/document/d/1vuKU5iOcoJBsv0oCD5eyA2fKhzRvUOf0N_QTOVtF9HI/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-download me-1"></i> Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
