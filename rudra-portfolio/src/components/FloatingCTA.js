import React from 'react'

export default function FloatingCTA() {
  return (
    <div className="sticky-cta">
      <button
        className="floating-btn"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Contact"
      >
        <i className="bi bi-chat-dots"></i>
      </button>
    </div>
  )
}
