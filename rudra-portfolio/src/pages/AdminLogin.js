import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn } = useAuth()
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signIn(username, password)
      history.push('/admin')
    } catch (err) {
      setError(err.message || 'Invalid email or password')
    }
    setLoading(false)
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="text-center mb-4">
          <h3 style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 800 }}>
            Rudra
          </h3>
          <p className="text-secondary mt-2">Admin Portal Login</p>
        </div>
        {error && (
          <div className="alert alert-danger py-2" style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444', borderRadius: '10px', fontSize: '0.9rem' }}>
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small text-secondary">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label small text-secondary">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button className="btn btn-primary btn-glow w-100 py-3" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="/" className="text-secondary text-decoration-none small">
            <i className="bi bi-arrow-left me-1"></i> Back to site
          </a>
        </div>
      </div>
    </div>
  )
}
