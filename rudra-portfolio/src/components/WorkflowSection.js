import React from 'react'

const steps = [
  { icon: 'bi-lightbulb', title: 'Discovery', desc: 'Understanding your vision, requirements, and goals through detailed consultation' },
  { icon: 'bi-pencil-square', title: 'Planning', desc: 'Creating detailed roadmap, technical specifications, and timeline estimates' },
  { icon: 'bi-code-slash', title: 'Development', desc: 'Building with clean code, regular updates, and iterative testing' },
  { icon: 'bi-rocket-takeoff', title: 'Delivery', desc: 'Launch, documentation, training, and ongoing support when needed' },
]

export default function WorkflowSection() {
  return (
    <section id="workflow" className="section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="kicker">How I Work</span>
          <h2>My Process</h2>
          <p>A systematic approach to delivering exceptional results</p>
        </div>
        <div className="row g-4">
          {steps.map((s, i) => (
            <div className="col-6 col-md-3" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="card h-100 text-center p-4 workflow-card">
                <div className="workflow-step">0{i + 1}</div>
                <div className="workflow-icon"><i className={`bi ${s.icon}`}></i></div>
                <h5 className="mt-3">{s.title}</h5>
                <p className="small mb-0" style={{ color: 'var(--muted)' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
