import React, { useState, useEffect } from 'react'
import { experiencesApi } from '../../services/api'

export default function ManageExperience() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ role: '', company: '', period: '', description: '', tags: '', order_index: 0 })
  const [editing, setEditing] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => { load() }, [])

  const load = async () => {
    setLoading(true)
    const data = await experiencesApi.list()
    setItems(data)
    setLoading(false)
  }

  const resetForm = () => {
    setForm({ role: '', company: '', period: '', description: '', tags: '', order_index: 0 })
    setEditing(null)
  }

  const handleEdit = item => {
    setForm({ role: item.role, company: item.company, period: item.period, description: item.description, tags: (item.tags || []).join(', '), order_index: item.order_index || 0 })
    setEditing(item.id)
  }

  const handleDelete = async id => {
    if (!window.confirm('Delete this experience?')) return
    await experiencesApi.delete(id)
    load()
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const data = { ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean), order_index: parseInt(form.order_index) || 0 }
    if (editing) { await experiencesApi.update(editing, data) }
    else { await experiencesApi.create(data) }
    resetForm()
    load()
  }

  if (loading) return <div className="text-center py-5 text-secondary">Loading...</div>

  return (
    <>
      <div className="admin-card">
        <h5 className="mb-4">{editing ? 'Edit Experience' : 'Add New Experience'}</h5>
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <input className="form-control" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Company</label>
              <input className="form-control" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
            </div>
            <div className="col-md-2">
              <label className="form-label">Period</label>
              <input className="form-control" value={form.period} onChange={e => setForm({ ...form, period: e.target.value })} placeholder="2024 — Present" />
            </div>
            <div className="col-md-2">
              <label className="form-label">Order</label>
              <input className="form-control" type="number" value={form.order_index} onChange={e => setForm({ ...form, order_index: e.target.value })} />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="3" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}></textarea>
            </div>
            <div className="col-12">
              <label className="form-label">Tags (comma separated)</label>
              <input className="form-control" value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} />
            </div>
          </div>
          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-primary" type="submit">{editing ? 'Update' : 'Add'} Experience</button>
            {editing && <button className="btn btn-outline-custom" type="button" onClick={resetForm}>Cancel</button>}
          </div>
        </form>
      </div>

      <div className="admin-card">
        <h5 className="mb-4">All Experiences ({items.length})</h5>
        {items.length === 0 ? <p className="text-secondary">No experiences added yet.</p> : (
          <div className="table-responsive">
            <table className="table" style={{ color: 'var(--text)' }}>
              <thead><tr><th>Role</th><th>Company</th><th>Period</th><th>Actions</th></tr></thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td>{item.role}</td>
                    <td>{item.company}</td>
                    <td><span className="badge badge-soft">{item.period}</span></td>
                    <td>
                      <button className="btn btn-sm btn-outline-custom me-2" onClick={() => handleEdit(item)}>Edit</button>
                      <button className="btn btn-sm" style={{ background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444' }} onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}
