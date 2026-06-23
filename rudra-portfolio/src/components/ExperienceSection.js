import React from 'react'

const experiences = [
  {
    role: 'Technical Support Specialist',
    company: 'SoftifyBD',
    period: '2024 — Present',
    desc: 'Leading ISP solutions deployment and network infrastructure management. Responsible for MikroTik routing, client provisioning, and automated monitoring systems.',
    tags: ['MikroTik', 'SysAdmin', 'Network Security', 'Automation']
  },
  {
    role: 'Freelance Android Developer & IT Specialist',
    company: 'Freelance',
    period: '2023 — Present',
    desc: 'Designing and developing Android applications with offline and real-time functionality. Published multiple apps on Google Play Store. Building desktop software for ISP management.',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Google Play', '.NET']
  },
  {
    role: 'IT Professional',
    company: 'Landate Limited',
    period: '2024',
    desc: 'Provided IT support for office systems, networks, and user devices. Assisted with system configuration, software installation, and troubleshooting.',
    tags: ['System Support', 'Network Maintenance', 'User Support']
  },
  {
    role: 'IT Support Specialist',
    company: 'Smarto Technology Limited',
    period: '2023',
    desc: 'Provided desktop and basic network support for internal users. Assisted in system setup, software installation, and hardware troubleshooting.',
    tags: ['Desktop Support', 'Hardware', 'Network Basics']
  },
  {
    role: 'Technical Content Creator',
    company: 'YouTube',
    period: '2024 — Present',
    desc: 'Creating and publishing tutorials on Android development, MikroTik networking, and AI tools. Research technical topics and simplify them for a broader audience.',
    tags: ['Tutorials', 'Technical Writing', 'Content Creation']
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="section" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.03) 50%, transparent 100%)' }}>
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="kicker">Experience</span>
          <h2>My Professional Journey</h2>
          <p>Years of hands-on experience in technology</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline">
              {experiences.map((e, i) => (
                <div className="t-item" key={i} data-aos="fade-left" data-aos-delay={i * 50}>
                  <div className="d-flex flex-wrap justify-content-between align-items-start mb-2">
                    <div>
                      <h5 className="mb-1">{e.role}</h5>
                      <div className="fw-bold" style={{ color: 'var(--primary)' }}>{e.company}</div>
                    </div>
                    <span className="badge badge-soft">{e.period}</span>
                  </div>
                  <p style={{ color: 'var(--muted)' }} className="mb-2">{e.desc}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {e.tags.map((t, j) => (
                      <span className="badge badge-soft" key={j}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
