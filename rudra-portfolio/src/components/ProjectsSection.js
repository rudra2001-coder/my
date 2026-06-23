import React, { useState } from 'react'

const projects = [
  { category: 'android', img: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1400&auto=format&fit=crop', title: 'Shift Fixer', desc: 'Employee shift scheduling management app with real-time Firebase sync and intuitive dashboard.', tags: ['Android', 'Firebase', 'Kotlin'], url: 'https://github.com/rudra2001-coder/shift-fixer' },
  { category: 'android', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1400&auto=format&fit=crop', title: 'BalanceMe', desc: 'Wellness tracking app with AI-powered insights for energy levels and mood analysis.', tags: ['Android', 'AI', 'Wellness'], url: 'https://github.com/rudra2001-coder/balanceme' },
  { category: 'network', img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1400&auto=format&fit=crop', title: 'MikroTik Manager', desc: 'Mobile app for network admins to monitor MikroTik routers and manage client connections.', tags: ['Networking', 'Android', 'API'], url: 'https://github.com/rudra2001-coder/mikrotik-manager' },
  { category: 'ai', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1400&auto=format&fit=crop', title: 'AI Agent Projects', desc: 'Collection of LLM-powered agents for task automation and intelligent assistance.', tags: ['AI', 'Python', 'LLM'], url: 'https://github.com/rudra2001-coder/ai-agents' },
  { category: 'devops', img: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=1400&auto=format&fit=crop', title: 'Log Server Deployment', desc: 'Centralized logging solution for network devices with real-time monitoring dashboards.', tags: ['DevOps', 'Docker', 'SysAdmin'], url: 'https://github.com/rudra2001-coder/log-server' },
  { category: 'devops', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop', title: 'ISP Management Software', desc: 'Comprehensive .NET application for ISP billing, customer management, and MikroTik integration.', tags: ['.NET', 'WPF', 'ISP'], url: 'https://github.com/rudra2001-coder/isp-management' },
]

const filters = ['all', 'android', 'network', 'ai', 'devops']

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="kicker">Projects</span>
          <h2>Featured Work</h2>
          <p>A selection of my recent projects and contributions</p>
        </div>
        <div className="text-center mb-4" data-aos="fade-up">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <div className="row g-4">
          {filtered.map((p, i) => (
            <div className="col-md-6 col-lg-4" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="project-card card h-100">
                <div className="position-relative overflow-hidden">
                  <img className="project-img w-100" src={p.img} alt={p.title} loading="lazy" />
                  <div className="project-overlay">
                    <a href={p.url} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                      <i className="bi bi-github me-1"></i> View Code
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p style={{ color: 'var(--muted)' }}>{p.desc}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {p.tags.map((t, j) => (
                      <span className="badge badge-soft" key={j}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5" data-aos="fade-up">
          <a className="btn btn-outline-custom btn-glow" target="_blank" rel="noreferrer" href="https://github.com/rudra2001-coder?tab=repositories">
            <i className="bi bi-github me-2"></i> View All Projects
          </a>
        </div>

        <div className="row g-4 mt-5" data-aos="fade-up">
          <div className="col-md-6">
            <div className="card p-3 h-100" style={{ transform: 'none' }}>
              <h6 className="mb-3"><i className="bi bi-github me-2"></i>GitHub Stats</h6>
              <img className="w-100 rounded" loading="lazy" alt="GitHub Stats" src="https://github-readme-stats.vercel.app/api?username=rudra2001-coder&show_icons=true&theme=transparent&bg_color=0b1324&title_color=4da3ff&text_color=eaf0ff&icon_color=4da3ff" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3 h-100" style={{ transform: 'none' }}>
              <h6 className="mb-3"><i className="bi bi-code-slash me-2"></i>Top Languages</h6>
              <img className="w-100 rounded" loading="lazy" alt="Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=rudra2001-coder&layout=compact&theme=transparent&bg_color=0b1324&title_color=4da3ff&text_color=eaf0ff" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
