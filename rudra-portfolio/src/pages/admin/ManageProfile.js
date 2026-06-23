import React, { useState, useEffect } from 'react'
import { profileApi } from '../../services/api'

export default function ManageProfile() {
  const [form, setForm] = useState({
    name: '', title: '', bio: '', email: '', phone: '', location: '', avatar_url: '', resume_url: ''
  })
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    profileApi.get().then(data => {
      if (data) setForm(prev => ({ ...prev, ...data }))
    }).catch(() => {})
  }, [])

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSave = async e => {
    e.preventDefault()
    setSaving(true)
    setMsg('')
    try {
      await profileApi.update(form)
      setMsg('Profile updated successfully!')
    } catch (err) {
      setMsg('Error: ' + err.message)
    }
    setSaving(false)
  }

  return (
    <div className="admin-card">
      <h5 className="mb-4">Edit Profile</h5>
      {msg && (
        <div className={`alert ${msg.includes('Error') ? 'alert-danger' : 'alert-success'} py-2`} style={{ background: msg.includes('Error') ? 'rgba(239,68,68,0.15)' : 'rgba(16,185,129,0.15)', border: `1px solid ${msg.includes('Error') ? 'rgba(239,68,68,0.3)' : 'rgba(16,185,129,0.3)'}`, color: 'var(--text)', borderRadius: '10px' }}>
          {msg}
        </div>
      )}
      <form className="admin-form" onSubmit={handleSave}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input className="form-control" name="name" value={form.name} onChange={handleChange} placeholder="MD Mahmudul Hasan Rudra" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Title</label>
            <input className="form-control" name="title" value={form.title} onChange={handleChange} placeholder="System & Network Engineer" />
          </div>
          <div className="col-12">
            <label className="form-label">Bio</label>
            <textarea className="form-control" name="bio" rows="4" value={form.bio} onChange={handleChange} placeholder="Tell your story..."></textarea>
          </div>
          <div className="col-md-4">
            <label className="form-label">Email</label>
            <input className="form-control" name="email" value={form.email} onChange={handleChange} placeholder="mhrudra064@gmail.com" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Phone</label>
            <input className="form-control" name="phone" value={form.phone} onChange={handleChange} placeholder="+880 1915 266658" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Location</label>
            <input className="form-control" name="location" value={form.location} onChange={handleChange} placeholder="Narayanganj, Dhaka, Bangladesh" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Avatar URL</label>
            <input className="form-control" name="avatar_url" value={form.avatar_url} onChange={handleChange} placeholder="https://..." />
          </div>
          <div className="col-md-6">
            <label className="form-label">Resume URL</label>
            <input className="form-control" name="resume_url" value={form.resume_url} onChange={handleChange} placeholder="https://..." />
          </div>
        </div>
        <button className="btn btn-primary btn-glow mt-4" type="submit" disabled={saving}>
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  )
}
