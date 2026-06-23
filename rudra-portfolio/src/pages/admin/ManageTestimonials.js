import React, { useState, useEffect } from 'react'
import { testimonialsApi } from '../../services/api'

export default function ManageTestimonials() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ name: '', title: '', quote: '', avatar_url: '', rating: 5, order_index: 0 })
  const [editing, setEditing] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => { load() }, [])

  const load = async () => {
    setLoading(true)
    const data = await testimonialsApi.list()
    setItems(data)
    setLoading(false)
  }

  const resetForm = () => {
    setForm({ name: '', title: '', quote: '', avatar_url: '', rating: 5, order_index: 0 })
    setEditing(null)
  }

  const handleEdit = item => {
    setForm({ name: item.name, title: item.title, quote: item.quote, avatar_url: item.avatar_url || '', rating: item.rating || 5, order_index: item.order_index || 0 })
    setEditing(item.id)
  }

  const handleDelete = async id => {
    if (!window.confirm('Delete this testimonial?')) return
    await testimonialsApi.delete(id)
    load()
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const data = { ...form, rating: parseInt(form.rating) || 5, order_index: parseInt(form.order_index) || 0 }
    if (editing) { await testimonialsApi.update(editing, data) }
    else { await testimonialsApi.create(data) }
    resetForm()
    load()
  }

  if (loading) return <div className="text-center py-5 text-secondary">Loading...</div>

  return (
    <>
      <div className="admin-card">
        <h5 className="mb-4">{editing ? 'Edit Testimonial' : 'Add New Testimonial'}</h5>
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Client Name</label>
              <input className="form-control" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Title / Position</label>
              <input className="form-control" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
            </div>
            <div className="col-md-2">
              <label className="form-label">Order</label>
              <input className="form-control" type="number" value={form.order_index} onChange={e => setForm({ ...form, order_index: e.target.value })} />
            </div>
            <div className="col-12">
              <label className="form-label">Quote</label>
              <textarea className="form-control" rows="4" value={form.quote} onChange={e => setForm({ ...form, quote: e.target.value })} required></textarea>
            </div>
            <div className="col-md-8">
              <label className="form-label">Avatar URL (optional)</label>
              <input className="form-control" value={form.avatar_url} onChange={e => setForm({ ...form, avatar_url: e.target.value })} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Rating (1-5)</label>
              <input className="form-control" type="number" min="1" max="5" value={form.rating} onChange={e => setForm({ ...form, rating: e.target.value })} />
            </div>
          </div>
          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-primary" type="submit">{editing ? 'Update' : 'Add'} Testimonial</button>
            {editing && <button className="btn btn-outline-custom" type="button" onClick={resetForm}>Cancel</button>}
          </div>
        </form>
      </div>

      <div className="admin-card">
        <h5 className="mb-4">All Testimonials ({items.length})</h5>
        {items.length === 0 ? <p className="text-secondary">No testimonials added yet.</p> : (
          <div className="table-responsive">
            <table className="table" style={{ color: 'var(--text)' }}>
              <thead><tr><th>Name</th><th>Title</th><th>Quote Preview</th><th>Actions</th></tr></thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td><small className="text-secondary">{item.title}</small></td>
                    <td><small className="text-secondary">{(item.quote || '').substring(0, 60)}...</small></td>
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
