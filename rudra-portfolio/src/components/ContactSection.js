import React, { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await fetch('https://formspree.io/f/mblpyveb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSent(false), 3000)
      }
    } catch {
      window.location.href = `mailto:mhrudra064@gmail.com?subject=${encodeURIComponent(form.subject || 'Project Inquiry')}`
    }
  }

  return (
    <section id="contact" className="section" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.03) 50%, transparent 100%)' }}>
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="kicker">Contact</span>
          <h2>Let's Work Together</h2>
          <p>Ready to start your next project? Get in touch!</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="card h-100" style={{ background: 'linear-gradient(135deg, rgba(77,163,255,0.1), rgba(0,212,255,0.1))', border: 'none' }}>
              <div className="card-body p-4">
                <h5 className="mb-4">Contact Information</h5>
                <div className="d-flex align-items-start mb-4">
                  <div style={{ width: '50px', height: '50px', background: 'var(--gradient-primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', flexShrink: 0 }}>
                    <i className="bi bi-envelope text-white" style={{ fontSize: '1.3rem' }}></i>
                  </div>
                  <div>
                    <div className="fw-bold">Email</div>
                    <a href="mailto:mhrudra064@gmail.com" className="text-secondary text-decoration-none">mhrudra064@gmail.com</a>
                    <div className="small text-secondary">mahmudulhasanrudra@gmail.com</div>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <div style={{ width: '50px', height: '50px', background: 'var(--gradient-primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', flexShrink: 0 }}>
                    <i className="bi bi-telephone text-white" style={{ fontSize: '1.3rem' }}></i>
                  </div>
                  <div>
                    <div className="fw-bold">Phone</div>
                    <a href="tel:+8801915266658" className="text-secondary text-decoration-none">+880 1915 266658</a>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <div style={{ width: '50px', height: '50px', background: 'var(--gradient-primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', flexShrink: 0 }}>
                    <i className="bi bi-geo-alt text-white" style={{ fontSize: '1.3rem' }}></i>
                  </div>
                  <div>
                    <div className="fw-bold">Location</div>
                    <div className="text-secondary">Narayanganj, Dhaka, Bangladesh</div>
                  </div>
                </div>
                <div className="mt-5">
                  <h6 className="mb-3">Follow Me</h6>
                  <div className="social d-flex gap-2">
                    <a href="https://github.com/rudra2001-coder" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="bi bi-github"></i></a>
                    <a href="https://www.linkedin.com/in/mahmudul-hasan-rudra" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                    <a href="https://youtube.com/@mahmudulhasanrudra" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
                    <a href="https://facebook.com/sky.rudro.11" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                    <a href="https://instagram.com/hy_rudro" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            <div className="card contact-form h-100">
              <div className="card-body p-4">
                <h5 className="mb-4">Send a Message</h5>
                {sent && (
                  <div className="alert alert-success py-2" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', color: 'var(--text)', borderRadius: '10px' }}>
                    <i className="bi bi-check-circle me-2"></i>Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small">Your Name</label>
                      <input className="form-control" required name="name" value={form.name} onChange={handleChange} placeholder="John Doe" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small">Email Address</label>
                      <input className="form-control" required type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
                    </div>
                    <div className="col-12">
                      <label className="form-label small">Subject</label>
                      <input className="form-control" name="subject" value={form.subject} onChange={handleChange} placeholder="Project Inquiry" />
                    </div>
                    <div className="col-12">
                      <label className="form-label small">Message</label>
                      <textarea className="form-control" required name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Tell me about your project..."></textarea>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <button className="btn btn-primary btn-glow" type="submit">
                      <i className="bi bi-send me-2"></i> Send Message
                    </button>
                    <a className="btn btn-outline-custom" href="mailto:mhrudra064@gmail.com?subject=Project%20Inquiry">
                      <i className="bi bi-envelope me-2"></i> Use Email
                    </a>
                    <a className="schedule-btn" href="https://calendly.com/mhrudra064" target="_blank" rel="noreferrer">
                      <i className="bi bi-calendar-check me-2"></i> Schedule Call
                    </a>
                  </div>
                  <small className="d-block mt-3" style={{ color: 'var(--muted)' }}>
                    <i className="bi bi-shield-check me-1"></i> Your information is secure. I usually reply within 24-48 hours.
                  </small>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 mt-4">
          <div className="col-12" data-aos="fade-up">
            <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.4950435773!2d90.25486937915315!3d23.7806365363422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b4c3552f71%3A0x1e70e6e6b2e7e6e6!2sNarayanganj%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" title="Location" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
