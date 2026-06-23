import React from 'react'

const blogs = [
  {
    img: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1400&auto=format&fit=crop',
    date: 'Mar 10, 2026',
    category: 'Android',
    title: 'Building Modern Android Apps with Jetpack Compose',
    desc: 'Learn how to create beautiful, performant Android applications using modern UI toolkit.'
  },
  {
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1400&auto=format&fit=crop',
    date: 'Mar 5, 2026',
    category: 'AI & ML',
    title: 'Getting Started with Large Language Models',
    desc: 'A comprehensive guide to integrating LLMs into your applications.'
  },
  {
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1400&auto=format&fit=crop',
    date: 'Feb 28, 2026',
    category: 'Networking',
    title: 'MikroTik Best Practices for ISP Networks',
    desc: 'Essential tips for configuring and securing MikroTik routers in production.'
  }
]

export default function BlogSection({ posts }) {
  const items = posts && posts.length > 0 ? posts : blogs

  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="kicker">Blog</span>
          <h2>Latest Articles</h2>
          <p>Thoughts on technology, development, and innovation</p>
        </div>
        <div className="row g-4">
          {items.map((b, i) => (
            <div className="col-md-6 col-lg-4" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="blog-card h-100">
                <div className="position-relative overflow-hidden">
                  <img className="blog-img w-100" src={b.img || b.image_url} alt={b.title} loading="lazy" />
                  <span className="blog-date">{b.date}</span>
                  <span className="blog-category">{b.category}</span>
                </div>
                <div className="p-4">
                  <h5>{b.title}</h5>
                  <p className="small" style={{ color: 'var(--muted)' }}>{b.desc || b.description}</p>
                  <span className="text-primary small fw-bold" style={{ cursor: 'pointer' }}>
                    Read More <i className="bi bi-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5" data-aos="fade-up">
          <a className="btn btn-outline-custom btn-glow" href="https://medium.com/@mhrudra064" target="_blank" rel="noreferrer">
            <i className="bi bi-medium me-2"></i> View All Articles
          </a>
        </div>
      </div>
    </section>
  )
}
