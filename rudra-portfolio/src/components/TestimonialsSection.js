import React from 'react'

const testimonials = [
  {
    quote: "Rudra's expertise in MikroTik networking saved our ISP operations. He configured our entire infrastructure and the network has been rock-solid ever since.",
    name: 'Ahmed Khan',
    title: 'Operations Manager, ISP Bangladesh',
    color: '4da3ff'
  },
  {
    quote: "Outstanding Android development skills! The app Rudra built for us exceeded expectations. Clean code, great UI, and excellent communication throughout.",
    name: 'Sarah Lee',
    title: 'Startup Founder, TechVenture',
    color: '00d4ff'
  },
  {
    quote: "The AI automation solution Rudra created transformed our workflow. What used to take hours now happens automatically. Highly recommended!",
    name: 'James Wilson',
    title: 'Business Owner, RetailCo',
    color: '10b981'
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.03) 50%, transparent 100%)' }}>
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="kicker">Testimonials</span>
          <h2>What Clients Say</h2>
          <p>Feedback from clients and collaborators</p>
        </div>
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div className="col-md-6 col-lg-4" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="testimonial-card h-100">
                <p className="mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>"{t.quote}"</p>
                <div className="d-flex align-items-center mt-4">
                  <img className="testimonial-avatar me-3" src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=${t.color}&color=fff`} alt={t.name} />
                  <div>
                    <div className="fw-bold">{t.name}</div>
                    <div className="small" style={{ color: 'var(--muted)' }}>{t.title}</div>
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
