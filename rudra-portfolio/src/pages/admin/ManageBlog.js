import React, { useState, useEffect } from 'react'
import { blogsApi } from '../../services/api'

export default function ManageBlog() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ title: '', description: '', content: '', category: 'Technology', image_url: '', date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }), tags: '' })
  const [editing, setEditing] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => { load() }, [])

  const load = async () => {
    setLoading(true)
    const data = await blogsApi.list()
    setItems(data)
    setLoading(false)
  }

  const resetForm = () => {
    setForm({ title: '', description: '', content: '', category: 'Technology', image_url: '', date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }), tags: '' })
    setEditing(null)
  }

  const handleEdit = item => {
    setForm({ title: item.title, description: item.description, content: item.content || '', category: item.category, image_url: item.image_url || '', date: item.date, tags: (item.tags || []).join(', ') })
    setEditing(item.id)
  }

  const handleDelete = async id => {
    if (!window.confirm('Delete this blog post?')) return
    await blogsApi.delete(id)
    load()
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const data = { ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean) }
    if (editing) { await blogsApi.update(editing, data) }
    else { await blogsApi.create(data) }
    resetForm()
    load()
  }

  if (loading) return <div className="text-center py-5 text-secondary">Loading...</div>

  return (
    <>
      <div className="admin-card">
        <h5 className="mb-4">{editing ? 'Edit Blog Post' : 'Create New Blog Post'}</h5>
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-8">
              <label className="form-label">Title</label>
              <input className="form-control" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div className="col-md-2">
              <label className="form-label">Category</label>
              <input className="form-control" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
            </div>
            <div className="col-md-2">
              <label className="form-label">Date</label>
              <input className="form-control" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
            </div>
            <div className="col-12">
              <label className="form-label">Short Description</label>
              <textarea className="form-control" rows="2" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}></textarea>
            </div>
            <div className="col-12">
              <label className="form-label">Content (HTML supported)</label>
              <textarea className="form-control" rows="10" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} placeholder="Write your blog content here..."></textarea>
            </div>
            <div className="col-md-6">
              <label className="form-label">Image URL</label>
              <input className="form-control" value={form.image_url} onChange={e => setForm({ ...form, image_url: e.target.value })} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Tags (comma separated)</label>
              <input className="form-control" value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} />
            </div>
          </div>
          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-primary" type="submit">{editing ? 'Update' : 'Publish'} Post</button>
            {editing && <button className="btn btn-outline-custom" type="button" onClick={resetForm}>Cancel</button>}
          </div>
        </form>
      </div>

      <div className="admin-card">
        <h5 className="mb-4">All Blog Posts ({items.length})</h5>
        {items.length === 0 ? <p className="text-secondary">No blog posts yet.</p> : (
          <div className="table-responsive">
            <table className="table" style={{ color: 'var(--text)' }}>
              <thead><tr><th>Title</th><th>Category</th><th>Date</th><th>Actions</th></tr></thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td><span className="badge badge-soft">{item.category}</span></td>
                    <td><small className="text-secondary">{item.date}</small></td>
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
