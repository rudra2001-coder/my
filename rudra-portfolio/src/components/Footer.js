import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <a className="navbar-brand mb-3 d-inline-block" href="/">
              <span>Rudra</span>
            </a>
            <p className="mb-3" style={{ color: 'var(--muted)' }}>Passionate Android Developer, AI Explorer, and Network Specialist building powerful digital solutions.</p>
            <div className="social d-flex gap-2">
              <a href="https://github.com/rudra2001-coder" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/mahmudul-hasan-rudra" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="https://youtube.com/@mahmudulhasanrudra" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
              <a href="https://facebook.com/sky.rudro.11" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              {['about', 'projects', 'services', 'contact'].map(item => (
                <li className="mb-2" key={item}>
                  <a href={`#${item}`} className="text-secondary text-decoration-none">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-4">
            <h6 className="mb-3">Services</h6>
            <ul className="list-unstyled">
              {['Android Development', 'Network Solutions', 'AI & Automation', 'DevOps & Consulting'].map((s, i) => (
                <li className="mb-2" key={i}><span className="text-secondary">{s}</span></li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-4">
            <h6 className="mb-3">Newsletter</h6>
            <p className="small mb-3" style={{ color: 'var(--muted)' }}>Subscribe for updates and tech insights.</p>
            <form className="d-flex gap-2" onSubmit={e => e.preventDefault()}>
              <input type="email" className="form-control" placeholder="Your email" style={{ borderRadius: '10px', background: 'rgba(6,9,18,0.5)', border: '1px solid var(--border-subtle)', color: 'var(--text)', padding: '10px 14px' }} />
              <button type="submit" className="btn btn-primary"><i className="bi bi-send"></i></button>
            </form>
          </div>
        </div>
        <hr style={{ borderColor: 'color-mix(in oklab, var(--text) 10%, transparent)', margin: '30px 0' }} />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <small className="text-secondary">&copy; {year} Mahmudul Hasan Rudra. All rights reserved.</small>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <small className="text-secondary">
              Made with <i className="bi bi-heart text-danger"></i> in Bangladesh
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}
