import React from 'react'

const certs = [
  { icon: 'bi-award', gradient: '#ff6b6b, #feca57', title: 'Network Administration', desc: 'Cisco & MikroTik certified training' },
  { icon: 'bi-code-slash', gradient: '#4da3ff, #00d4ff', title: 'Python Programming', desc: 'Python & Automation certification' },
  { icon: 'bi-phone', gradient: '#10b981, #00d4ff', title: 'Android Development', desc: 'App development & UI/UX design' },
  { icon: 'bi-mortarboard', gradient: '#f59e0b, #ef4444', title: 'Diploma in Computer Science', desc: 'BACE Institute of Science and Technology - 2023' },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="kicker">Certifications</span>
          <h2>Professional Training</h2>
          <p>Continuous learning and professional development</p>
        </div>
        <div className="row g-4">
          {certs.map((c, i) => (
            <div className="col-md-6 col-lg-3" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="card p-4 h-100 text-center">
                <div style={{ width: '70px', height: '70px', background: `linear-gradient(135deg, ${c.gradient})`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontSize: '1.8rem' }}>
                  <i className={`bi ${c.icon} text-white`}></i>
                </div>
                <h5>{c.title}</h5>
                <p className="small" style={{ color: 'var(--muted)' }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
