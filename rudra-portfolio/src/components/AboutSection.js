import React from 'react'

const features = [
  { icon: 'bi-check-circle', color: 'primary', title: 'Android Expert', sub: 'Kotlin & Jetpack' },
  { icon: 'bi-globe', color: '--accent', title: 'Network Pro', sub: 'MikroTik Certified' },
  { icon: 'bi-cpu', color: '#10b981', title: 'AI Enthusiast', sub: 'LLM & Automation' },
  { icon: 'bi-server', color: '#f59e0b', title: 'DevOps Ready', sub: 'Docker & CI/CD' },
  { icon: 'bi-lightning-charge', color: 'var(--primary)', title: 'Fast Learner', sub: 'Quick Adaptation' },
  { icon: 'bi-puzzle', color: '#10b981', title: 'Solution-Centric', sub: 'Problem Solver' },
]

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.03) 50%, transparent 100%)' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div style={{ position: 'relative' }}>
              <img
                className="w-100 rounded-4 shadow-soft"
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1400&auto=format&fit=crop"
                alt="Working setup"
                loading="lazy"
                style={{ borderRadius: '20px' }}
              />
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--gradient-primary)', padding: '25px', borderRadius: '16px', boxShadow: '0 15px 40px rgba(77,163,255,0.3)' }}>
                <div className="h3 fw-bold text-white mb-0">5+</div>
                <div className="small text-white">Years of Experience</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <span className="kicker">About Me</span>
            <h2 className="fw-bold mb-4">Building Digital Solutions That Matter</h2>
            <p style={{ color: 'var(--muted)' }} className="mb-4">
              I'm <strong>Mahmudul Hasan Rudra</strong>, an IT professional with 4+ years of hands-on experience in network administration, system support, SaaS platforms, and technical troubleshooting. Skilled in supporting Windows, Linux, and macOS environments, configuring MikroTik networks (LAN/WAN, VLAN, BGP), and providing customer-facing product support. I'm a <strong>fast learner</strong> with strong adaptability to new tools and systems, and I'm <strong>solution-centric</strong>.
            </p>
            <div className="row g-3 mb-4">
              {features.map((f, i) => (
                <div className="col-6" key={i}>
                  <div className="d-flex align-items-center">
                    <div style={{ width: '45px', height: '45px', background: f.color === '--accent' ? 'color-mix(in oklab, var(--accent) 15%, transparent)' : f.color.includes('var') ? `linear-gradient(135deg, ${f.color}22, ${f.color}15)` : `color-mix(in oklab, ${f.color} 15%, transparent)`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', flexShrink: 0 }}>
                      <i className={`bi ${f.icon}`} style={{ fontSize: '1.3rem', color: f.color === '--accent' ? 'var(--accent)' : f.color.includes('var') ? 'var(--primary)' : f.color }}></i>
                    </div>
                    <div>
                      <div className="fw-bold">{f.title}</div>
                      <div className="small" style={{ color: 'var(--muted)' }}>{f.sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex gap-3">
              <a href="#contact" className="btn btn-primary btn-glow">Let's Collaborate</a>
              <a href="#projects" className="btn btn-outline-custom">See Projects</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
