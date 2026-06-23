import React, { useState } from 'react'
import { Switch, Route, Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import ManageProfile from './admin/ManageProfile'
import ManageProjects from './admin/ManageProjects'
import ManageBlog from './admin/ManageBlog'
import ManageServices from './admin/ManageServices'
import ManageSkills from './admin/ManageSkills'
import ManageExperience from './admin/ManageExperience'
import ManageTestimonials from './admin/ManageTestimonials'

const navItems = [
  { path: '', label: 'Dashboard', icon: 'bi-speedometer2' },
  { path: '/profile', label: 'Profile', icon: 'bi-person' },
  { path: '/services', label: 'Services', icon: 'bi-gear' },
  { path: '/skills', label: 'Skills', icon: 'bi-bar-chart' },
  { path: '/experience', label: 'Experience', icon: 'bi-briefcase' },
  { path: '/projects', label: 'Projects', icon: 'bi-folder' },
  { path: '/testimonials', label: 'Testimonials', icon: 'bi-chat-quote' },
  { path: '/blog', label: 'Blog', icon: 'bi-pencil' },
]

export default function AdminDashboard() {
  const { path, url } = useRouteMatch()
  const location = useLocation()
  const history = useHistory()
  const { signOut } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleLogout = async () => {
    await signOut()
    history.push('/admin/login')
  }

  return (
    <div className="admin-layout">
      <div className="admin-sidebar" style={{ transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
        <div className="text-center mb-4 pb-3" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
          <h4 style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 800, marginBottom: 0 }}>
            Rudra
          </h4>
          <small className="text-secondary">Admin Panel</small>
        </div>
        {navItems.map(item => (
          <Link
            key={item.path}
            to={`${url}${item.path}`}
            className={`admin-nav-item${location.pathname === `${url}${item.path}` ? ' active' : ''}`}
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.label}</span>
          </Link>
        ))}
        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
          <button className="admin-nav-item w-100" style={{ border: 'none', background: 'none', cursor: 'pointer' }} onClick={handleLogout}>
            <i className="bi bi-box-arrow-left"></i>
            <span>Logout</span>
          </button>
        </div>
      </div>

      <div className="admin-main">
        <div className="admin-header">
          <div>
            <button className="btn btn-sm me-2" style={{ background: 'var(--card)', border: '1px solid var(--border-subtle)', borderRadius: '10px', color: 'var(--text)' }}
              onClick={() => setSidebarOpen(!sidebarOpen)}>
              <i className="bi bi-list"></i>
            </button>
            <h4 className="d-inline" style={{ margin: 0 }}>
              {navItems.find(n => location.pathname === `${url}${n.path}`)?.label || 'Dashboard'}
            </h4>
          </div>
          <a href="/" className="btn btn-outline-custom btn-sm" target="_blank" rel="noreferrer">
            <i className="bi bi-box-arrow-up-right me-1"></i> View Site
          </a>
        </div>

        <Switch>
          <Route exact path={`${path}`} component={AdminOverview} />
          <Route path={`${path}/profile`} component={ManageProfile} />
          <Route path={`${path}/services`} component={ManageServices} />
          <Route path={`${path}/skills`} component={ManageSkills} />
          <Route path={`${path}/experience`} component={ManageExperience} />
          <Route path={`${path}/projects`} component={ManageProjects} />
          <Route path={`${path}/testimonials`} component={ManageTestimonials} />
          <Route path={`${path}/blog`} component={ManageBlog} />
        </Switch>
      </div>
    </div>
  )
}

function AdminOverview() {
  return (
    <>
      <div className="row g-4 mb-4">
        {[
          { icon: 'bi-folder', label: 'Projects', count: 6, color: '#3b82f6' },
          { icon: 'bi-pencil', label: 'Blog Posts', count: 3, color: '#10b981' },
          { icon: 'bi-gear', label: 'Services', count: 4, color: '#f59e0b' },
          { icon: 'bi-bar-chart', label: 'Skills', count: 8, color: '#8b5cf6' },
        ].map((item, i) => (
          <div className="col-md-6 col-lg-3" key={i}>
            <div className="admin-card">
              <div className="d-flex align-items-center gap-3">
                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: `rgba(${item.color === '#3b82f6' ? '59,130,246' : item.color === '#10b981' ? '16,185,129' : item.color === '#f59e0b' ? '245,158,11' : '139,92,246'}, 0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`bi ${item.icon}`} style={{ fontSize: '1.5rem', color: item.color }}></i>
                </div>
                <div>
                  <h3 className="fw-bold mb-0" style={{ fontSize: '1.8rem' }}>{item.count}</h3>
                  <small className="text-secondary">{item.label}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-card">
        <h5 className="mb-3">Quick Actions</h5>
        <div className="row g-3">
          {[
            { to: '/profile', icon: 'bi-person', label: 'Update Profile' },
            { to: '/projects', icon: 'bi-folder', label: 'Add Project' },
            { to: '/blog', icon: 'bi-pencil', label: 'Write Blog' },
            { to: '/services', icon: 'bi-gear', label: 'Manage Services' },
          ].map((item, i) => (
            <div className="col-md-3" key={i}>
              <Link to={`/admin${item.to}`} className="btn btn-outline-custom w-100 py-3 text-center text-decoration-none">
                <i className={`bi ${item.icon} d-block mb-1`} style={{ fontSize: '1.5rem' }}></i>
                <small>{item.label}</small>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="admin-card">
        <h5 className="mb-2">Welcome to Admin Panel</h5>
        <p className="text-secondary mb-0">
          From here you can manage all content on your portfolio site. Use the sidebar to navigate between sections.
          Changes are saved to the database and will reflect on your public site.
        </p>
      </div>
    </>
  )
}
