import React, { useState, useEffect } from 'react'
import { projectsApi } from '../../services/api'

export default function ManageProjects() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ title: '', description: '', category: 'android', image_url: '', tags: '', project_url: '', github_url: '', order_index: 0 })
  const [editing, setEditing] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => { load() }, [])

  const load = async () => {
    setLoading(true)
    const data = await projectsApi.list()
    setItems(data)
    setLoading(false)
  }

  const resetForm = () => {
    setForm({ title: '', description: '', category: 'android', image_url: '', tags: '', project_url: '', github_url: '', order_index: 0 })
    setEditing(null)
  }

  const handleEdit = item => {
    setForm({ title: item.title, description: item.description, category: item.category || 'android', image_url: item.image_url || '', tags: (item.tags || []).join(', '), project_url: item.project_url || '', github_url: item.github_url || '', order_index: item.order_index || 0 })
    setEditing(item.id)
  }

  const handleDelete = async id => {
    if (!window.confirm('Delete this project?')) return
    await projectsApi.delete(id)
    load()
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const data = { ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean), order_index: parseInt(form.order_index) || 0 }
    if (editing) { await projectsApi.update(editing, data) }
    else { await projectsApi.create(data) }
    resetForm()
    load()
  }

  if (loading) return <div className="text-center py-5 text-secondary">Loading...</div>

  return (
    <>
      <div className="admin-card">
        <h5 className="mb-4">{editing ? 'Edit Project' : 'Add New Project'}</h5>
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Title</label>
              <input className="form-control" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div className="col-md-3">
              <label className="form-label">Category</label>
              <select className="form-control" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                <option value="android">Android</option>
                <option value="network">Networking</option>
                <option value="ai">AI</option>
                <option value="devops">DevOps</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Order</label>
              <input className="form-control" type="number" value={form.order_index} onChange={e => setForm({ ...form, order_index: e.target.value })} />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="3" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}></textarea>
            </div>
            <div className="col-md-6">
              <label className="form-label">Image URL</label>
              <input className="form-control" value={form.image_url} onChange={e => setForm({ ...form, image_url: e.target.value })} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Tags (comma separated)</label>
              <input className="form-control" value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} />
            </div>
            <div className="col-md-6">
              <label className="form-label">GitHub URL</label>
              <input className="form-control" value={form.github_url} onChange={e => setForm({ ...form, github_url: e.target.value })} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Project URL</label>
              <input className="form-control" value={form.project_url} onChange={e => setForm({ ...form, project_url: e.target.value })} />
            </div>
          </div>
          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-primary" type="submit">{editing ? 'Update' : 'Add'} Project</button>
            {editing && <button className="btn btn-outline-custom" type="button" onClick={resetForm}>Cancel</button>}
          </div>
        </form>
      </div>

      <div className="admin-card">
        <h5 className="mb-4">All Projects ({items.length})</h5>
        {items.length === 0 ? <p className="text-secondary">No projects added yet.</p> : (
          <div className="table-responsive">
            <table className="table" style={{ color: 'var(--text)' }}>
              <thead><tr><th>Title</th><th>Category</th><th>Tags</th><th>Actions</th></tr></thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td><span className="badge badge-soft">{item.category}</span></td>
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
