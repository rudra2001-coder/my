import React, { useState, useEffect } from 'react'
import { skillsApi } from '../../services/api'

export default function ManageSkills() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ title: '', description: '', icon: 'bi-code', tags: '', width: 80, order_index: 0 })
  const [editing, setEditing] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => { load() }, [])

  const load = async () => {
    setLoading(true)
    const data = await skillsApi.list()
    setItems(data)
    setLoading(false)
  }

  const resetForm = () => {
    setForm({ title: '', description: '', icon: 'bi-code', tags: '', width: 80, order_index: 0 })
    setEditing(null)
  }

  const handleEdit = item => {
    setForm({ title: item.title, description: item.description, icon: item.icon, tags: (item.tags || []).join(', '), width: item.width || 80, order_index: item.order_index || 0 })
    setEditing(item.id)
  }

  const handleDelete = async id => {
    if (!window.confirm('Delete this skill?')) return
    await skillsApi.delete(id)
    load()
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const data = { ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean), width: parseInt(form.width) || 80, order_index: parseInt(form.order_index) || 0 }
    if (editing) { await skillsApi.update(editing, data) }
    else { await skillsApi.create(data) }
    resetForm()
    load()
  }

  if (loading) return <div className="text-center py-5 text-secondary">Loading...</div>

  return (
    <>
      <div className="admin-card">
        <h5 className="mb-4">{editing ? 'Edit Skill' : 'Add New Skill'}</h5>
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Title</label>
              <input className="form-control" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div className="col-md-2">
              <label className="form-label">Icon</label>
              <input className="form-control" value={form.icon} onChange={e => setForm({ ...form, icon: e.target.value })} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Proficiency %</label>
              <input className="form-control" type="number" min="0" max="100" value={form.width} onChange={e => setForm({ ...form, width: e.target.value })} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Order</label>
              <input className="form-control" type="number" value={form.order_index} onChange={e => setForm({ ...form, order_index: e.target.value })} />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="2" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}></textarea>
            </div>
            <div className="col-12">
              <label className="form-label">Tags (comma separated)</label>
              <input className="form-control" value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} />
            </div>
          </div>
          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-primary" type="submit">{editing ? 'Update' : 'Add'} Skill</button>
            {editing && <button className="btn btn-outline-custom" type="button" onClick={resetForm}>Cancel</button>}
          </div>
        </form>
      </div>

      <div className="admin-card">
        <h5 className="mb-4">All Skills ({items.length})</h5>
        {items.length === 0 ? <p className="text-secondary">No skills added yet.</p> : (
          <div className="table-responsive">
            <table className="table" style={{ color: 'var(--text)' }}>
              <thead><tr><th>Title</th><th>Proficiency</th><th>Tags</th><th>Actions</th></tr></thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td><i className={`bi ${item.icon} me-2`}></i>{item.title}</td>
                    <td>
                      <div className="skill-bar" style={{ maxWidth: '200px' }}>
                        <div className="skill-progress" style={{ width: (item.width || 0) + '%' }}></div>
                      </div>
                      <small className="text-secondary">{item.width}%</small>
                    </td>
                    <td>{(item.tags || []).join(', ')}</td>
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
