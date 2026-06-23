import React, { useEffect, useRef } from 'react'

const skillsData = [
  { icon: 'bi-phone', color: 'primary', title: 'Android Development', desc: 'Native Android applications with modern best practices', tags: ['Kotlin', 'Jetpack Compose', 'XML', 'MVVM'], width: 95 },
  { icon: 'bi-database', color: 'success', title: 'Backend & Database', desc: 'Server-side development and data management', tags: ['Firebase', 'Room DB', 'SQL', 'MongoDB'], width: 90 },
  { icon: 'bi-hdd-network', color: 'warning', title: 'Networking', desc: 'Enterprise network design and management', tags: ['MikroTik', 'OLT/ONU', 'VPN', 'Firewall'], width: 92 },
  { icon: 'bi-robot', color: 'info', title: 'AI & Python', desc: 'Machine learning and automation solutions', tags: ['Python', 'TensorFlow', 'LangChain', 'OpenAI'], width: 85 },
  { icon: 'bi-cloud-arrow-up', color: 'danger', title: 'DevOps', desc: 'Deployment and infrastructure management', tags: ['Docker', 'CI/CD', 'Linux', 'Git'], width: 88 },
  { icon: 'bi-tools', color: 'secondary', title: 'Tools & APIs', desc: 'Integration and third-party services', tags: ['Retrofit', 'REST API', 'GraphQL', 'Postman'], width: 90 },
  { icon: 'bi-headset', color: 'danger', title: 'Technical Support', desc: 'Helpdesk and customer support', tags: ['SaaS Support', 'Remote Desktop', 'Documentation'], width: 95 },
  { icon: 'bi-windows', color: 'info', title: 'Operating Systems', desc: 'Windows, Linux, macOS support', tags: ['Windows Server', 'Ubuntu', 'Active Directory'], width: 92 },
]

export default function SkillsSection() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const bars = el.querySelectorAll('.skill-progress')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.getAttribute('data-width') + '%'
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })
    bars.forEach(b => observer.observe(b))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="kicker">Skills</span>
          <h2>Technologies I Work With</h2>
          <p>A comprehensive toolkit of modern technologies and frameworks</p>
        </div>
        <div className="row g-4">
          {skillsData.map((s, i) => (
            <div className="col-md-6 col-lg-3" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="skill-card card h-100">
                <div style={{ padding: '30px 30px 10px' }}>
                  <i className={`bi ${s.icon} skill-icon text-${s.color}`}></i>
                  <h5 className="mt-2">{s.title}</h5>
                  <p className="small" style={{ color: 'var(--muted)' }}>{s.desc}</p>
                </div>
                <div style={{ padding: '0 30px 30px' }}>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {s.tags.map((t, j) => (
                      <span className="badge badge-soft" key={j}>{t}</span>
                    ))}
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width={s.width}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
