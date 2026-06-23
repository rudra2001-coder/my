import React, { useEffect, useRef } from 'react'

const stats = [
  { count: 50, label: 'Projects Completed' },
  { count: 5, label: 'Years Experience' },
  { count: 200, label: 'Happy Clients' },
  { count: 15, label: 'Certifications' },
]

export default function StatsSection() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const numbers = el.querySelectorAll('.stat-number')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target
          const count = parseInt(target.getAttribute('data-count'))
          const duration = 2000
          const step = count / (duration / 16)
          let current = 0
          const timer = setInterval(() => {
            current += step
            if (current >= count) {
              current = count
              clearInterval(timer)
            }
            target.textContent = Math.floor(current)
          }, 16)
          observer.unobserve(target)
        }
      })
    }, { threshold: 0.5 })
    numbers.forEach(n => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section" ref={ref} style={{ margin: '80px 0' }}>
      <div className="container">
        <div className="row justify-content-center">
          {stats.map((s, i) => (
            <div className="col-6 col-md-3" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="stat-box">
                <div className="stat-number" data-count={s.count}>0</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
