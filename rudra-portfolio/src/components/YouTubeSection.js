import React from 'react'

export default function YouTubeSection() {
  return (
    <section id="youtube" className="section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="kicker">YouTube</span>
          <h2>Tech Tutorials & Insights</h2>
          <p>Educational content on Android, AI, and networking</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="youtube-card h-100">
              <div className="youtube-thumbnail position-relative">
                <img className="w-100" src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1400&auto=format&fit=crop" alt="Featured Video" loading="lazy" />
                <div className="play-btn"><i className="bi bi-play-fill"></i></div>
                <span style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.8)', color: '#fff', padding: '5px 10px', borderRadius: '5px', fontSize: '0.8rem' }}>
                  <i className="bi bi-play-circle me-1"></i> Featured
                </span>
              </div>
              <div className="p-4">
                <h5>MikroTik from Scratch: Complete Beginner Guide</h5>
                <p style={{ color: 'var(--muted)' }}>Learn everything about MikroTik networking from installation to advanced configurations.</p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-2">
                    <span className="badge badge-soft"><i className="bi bi-eye me-1"></i> 12K views</span>
                    <span className="badge badge-soft"><i className="bi bi-clock me-1"></i> 45 min</span>
                  </div>
                  <a href="https://youtube.com/@mahmudulhasanrudra" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Watch Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="row g-3">
              {[
                { img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=200&auto=format&fit=crop', title: 'Android Jetpack Compose Crash Course', desc: 'Learn modern Android UI development', views: '8.5K' },
                { img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=200&auto=format&fit=crop', title: 'Python AI: Building Your First LLM App', desc: 'Create AI applications with Python', views: '15K' },
                { img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=200&auto=format&fit=crop', title: 'ISP Network Setup with MikroTik', desc: 'Professional ISP networking guide', views: '20K' },
              ].map((v, i) => (
                <div className="col-12" key={i}>
                  <div className="d-flex gap-3 p-3 card" style={{ borderRadius: '12px' }}>
                    <img src={v.img} alt={v.title} style={{ width: '100px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} loading="lazy" />
                    <div>
                      <h6 className="mb-1">{v.title}</h6>
                      <p className="small mb-1" style={{ color: 'var(--muted)' }}>{v.desc}</p>
                      <span className="badge badge-soft"><i className="bi bi-eye me-1"></i> {v.views} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <a className="btn btn-outline-custom btn-glow" href="https://youtube.com/@mahmudulhasanrudra" target="_blank" rel="noreferrer">
                <i className="bi bi-youtube me-2"></i> Subscribe to Channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
