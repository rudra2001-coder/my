import React from 'react'

const servicesData = [
  {
    icon: 'bi-phone',
    title: 'Android Development',
    desc: 'Building modern, scalable Android applications with Kotlin, Jetpack Compose, and clean architecture principles.',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase']
  },
  {
    icon: 'bi-hdd-network',
    title: 'Network Solutions',
    desc: 'Designing and implementing robust network infrastructure, from home networks to ISP-scale deployments.',
    tags: ['MikroTik', 'Routing', 'Security']
  },
  {
    icon: 'bi-robot',
    title: 'AI & Automation',
    desc: 'Leveraging AI to create intelligent solutions, from chatbots to automated workflows and LLM integrations.',
    tags: ['Python', 'LLM', 'Automation']
  },
  {
    icon: 'bi-headset',
    title: 'Technical Support',
    desc: 'Providing expert IT support, system administration, and troubleshooting for Windows, Linux, and macOS environments.',
    tags: ['SaaS Support', 'System Admin', 'Remote Desktop']
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="kicker">Services</span>
          <h2>What I Can Do For You</h2>
          <p>Professional services tailored to bring your ideas to life with cutting-edge technology</p>
        </div>
        <div className="row g-4">
          {servicesData.map((s, i) => (
            <div className="col-md-6 col-lg-3" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="service-card h-100">
                <div className="service-icon"><i className={`bi ${s.icon}`}></i></div>
                <h4 className="mb-3">{s.title}</h4>
                <p style={{ color: 'var(--muted)' }}>{s.desc}</p>
                <div className="mt-3 d-flex flex-wrap gap-2 justify-content-center">
                  {s.tags.map((t, j) => (
                    <span className="badge badge-soft" key={j}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
