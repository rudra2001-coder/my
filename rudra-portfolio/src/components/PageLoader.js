import React from 'react'

export default function PageLoader({ visible = true }) {
  return (
    <div className={`page-loader${!visible ? ' hidden' : ''}`}>
      <div className="loader-content">
        <div className="loader-spinner"></div>
        <div style={{ color: 'var(--primary)', fontWeight: 600 }}>Loading...</div>
      </div>
    </div>
  )
}
