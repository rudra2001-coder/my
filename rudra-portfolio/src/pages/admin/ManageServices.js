import React, { useState, useEffect } from 'react'
import { servicesApi } from '../../services/api'

export default function ManageServices() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ title: '', description: '', icon: 'bi-gear', tags: '', order_index: 0 })
  const [editing, setEditing] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    setLoading(true)
    const data = await servicesApi.list()
    setItems(data)
    setLoading(false)
  }

  const resetForm = () => {
    setForm({ title: '', description: '', icon: 'bi-gear', tags: '', order_index: 0 })
    setEditing(null)
  }

  const handleEdit = item => {
    setForm({ title: item.title, description: item.description, icon: item.icon, tags: (item.tags || []).join(', '), order_index: item.order_index || 0 })
    setEditing(item.id)
  }

  const handleDelete = async id => {
    if (!window.confirm('Delete this service?')) return
    await servicesApi.delete(id)
    load()
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const data = {
      ...form,
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
      order_index: parseInt(form.order_index) || 0
    }
    if (editing) {
      await servicesApi.update(editing, data)
    } else {
      await servicesApi.create(data)
    }
    resetForm()
    load()
  }

  if (loading) return <div className="text-center py-5 text-secondary">Loading...</div>

  return (
    <>
      <div className="admin-card">
        <h5 className="mb-4">{editing ? 'Edit Service' : 'Add New Service'}</h5>
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Title</label>
              <input className="form-control" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Service name" required />
            </div>
            <div className="col-md-3">
              <label className="form-label">Icon (bootstrap icon)</label>
              <input className="form-control" value={form.icon} onChange={e => setForm({ ...form, icon: e.target.value })} placeholder="bi-gear" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Order</label>
              <input className="form-control" type="number" value={form.order_index} onChange={e => setForm({ ...form, order_index: e.target.value })} />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="3" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Service description"></textarea>
            </div>
            <div className="col-12">
              <label className="form-label">Tags (comma separated)</label>
              <input className="form-control" value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} placeholder="Kotlin, Jetpack Compose, Firebase" />
            </div>
          </div>
          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-primary" type="submit">{editing ? 'Update' : 'Add'} Service</button>
            {editing && <button className="btn btn-outline-custom" type="button" onClick={resetForm}>Cancel</button>}
          </div>
        </form>
      </div>

      <div className="admin-card">
        <h5 className="mb-4">All Services ({items.length})</h5>
        {items.length === 0 ? (
          <p className="text-secondary">No services added yet.</p>
        ) : (
          <div className="table-responsive">
            <table className="table" style={{ color: 'var(--text)' }}>
              <thead><tr><th>Icon</th><th>Title</th><th>Tags</th><th>Order</th><th>Actions</th></tr></thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td><i className={`bi ${item.icon}`}></i></td>
                    <td>{item.title}</td>
                    <td>{(item.tags || []).join(', ')}</td>
                    <td>{item.order_index}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-custom me-2" onClick={() => handleEdit(item)}>Edit</button>
                      <button className="btn btn-sm btn-danger" style={{ background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444' }} onClick={() => handleDelete(item.id)}>Delete</button>
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
