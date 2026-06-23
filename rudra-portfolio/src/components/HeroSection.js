import React, { useEffect, useRef } from 'react'

export default function HeroSection({ profile }) {
  const typingRef = useRef(null)
  const particlesRef = useRef(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div')
      p.classList.add('particle')
      const size = Math.random() * 6 + 3
      p.style.width = size + 'px'
      p.style.height = size + 'px'
      p.style.left = Math.random() * 100 + '%'
      p.style.top = Math.random() * 100 + '%'
      p.style.animationDelay = Math.random() * 20 + 's'
      p.style.animationDuration = (Math.random() * 15 + 15) + 's'
      container.appendChild(p)
    }
  }, [])

  useEffect(() => {
    const texts = ['Android Developer (Kotlin)', 'AI Explorer', 'Network Specialist', 'Freelancer']
    let textIndex = 0, charIndex = 0, isDeleting = false
    let timeout

    function typeWriter() {
      const el = typingRef.current
      if (!el) return
      const currentText = texts[textIndex]
      if (isDeleting) {
        el.textContent = currentText.substring(0, charIndex - 1)
        charIndex--
      } else {
        el.textContent = currentText.substring(0, charIndex + 1)
        charIndex++
      }
      let speed = isDeleting ? 50 : 100
      if (!isDeleting && charIndex === currentText.length) {
        speed = 2000
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % texts.length
        speed = 500
      }
      timeout = setTimeout(typeWriter, speed)
    }

    timeout = setTimeout(typeWriter, 1000)
    return () => clearTimeout(timeout)
  }, [])

  const socials = [
    { icon: 'bi-github', url: 'https://github.com/rudra2001-coder', label: 'GitHub' },
    { icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/mahmudul-hasan-rudra', label: 'LinkedIn' },
    { icon: 'bi-youtube', url: 'https://youtube.com/@mahmudulhasanrudra', label: 'YouTube' },
    { icon: 'bi-facebook', url: 'https://facebook.com/sky.rudro.11', label: 'Facebook' },
    { icon: 'bi-instagram', url: 'https://instagram.com/hy_rudro', label: 'Instagram' },
    { icon: 'bi-twitter-x', url: 'https://twitter.com/rudra2001_coder', label: 'Twitter' },
  ]

  const pills = [
    { icon: 'bi-hdd-network', text: 'MikroTik Expert' },
    { icon: 'bi-phone', text: 'Android Dev' },
    { icon: 'bi-cpu', text: 'Technical Support' },
    { icon: 'bi-robot', text: 'Automation' },
  ]

  return (
    <header className="hero section pb-0" id="hero">
      <div className="hero-glow"></div>
      <div className="hero-particles" ref={particlesRef}></div>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7" data-aos="fade-right" data-aos-duration="1000">
            <div className="badge-soft mb-3 d-inline-flex align-items-center">
              <span className="me-2">🚀</span> Available for hire
            </div>
            <h1 className="display-4 fw-bold lh-tight mb-3">
              Hi, I'm{' '}
              <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Mahmudul Hasan Rudra
              </span>
            </h1>
            <h2 className="h3 fw-medium mb-4" style={{ color: 'var(--muted)' }}>
              <span ref={typingRef}></span>
              <span className="typing-cursor" style={{ animation: 'blink 1s step-end infinite' }}></span>
            </h2>
            <p className="lead mb-4" style={{ color: 'var(--muted)', maxWidth: '600px' }}>
              A results-driven <strong>IT Professional</strong> with 4+ years of hands-on experience in network administration, system support, SaaS platforms, and technical troubleshooting. Skilled in supporting Windows, Linux, and macOS environments, configuring MikroTik networks (LAN/WAN, VLAN, BGP), and providing customer-facing product support.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="#projects" className="btn btn-primary btn-glow">
                <i className="bi bi-rocket-takeoff me-2"></i> View My Work
              </a>
              <a href="#contact" className="btn btn-outline-custom">
                <i className="bi bi-envelope me-2"></i> Get In Touch
              </a>
            </div>
            <div className="d-flex flex-wrap gap-3">
              {pills.map((p, i) => (
                <span className="icon-pill" key={i}>
                  <i className={p.icon}></i> {p.text}
                </span>
              ))}
            </div>
          </div>
          <div className="col-lg-5 text-center" data-aos="fade-left" data-aos-duration="1000">
            <div className="position-relative d-inline-block">
              <img
                className="avatar shadow-soft"
                src={profile?.avatar_url || 'https://i.postimg.cc/CxPFtMzz/Whats-App-Image-2025-09-06-at-15-58-31-1b41d22e.jpg'}
                alt="Mahmudul Hasan Rudra"
                loading="lazy"
              />
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'var(--gradient-primary)', width: '25px', height: '25px', borderRadius: '50%', border: '3px solid var(--bg)' }}></div>
            </div>
            <div className="mt-4 social d-flex justify-content-center gap-3">
              {socials.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
