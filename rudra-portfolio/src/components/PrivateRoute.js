import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user, loading } = useAuth()
  return (
    <Route
      {...rest}
      render={props =>
        loading ? (
          <div className="page-loader" style={{ opacity: 1, pointerEvents: 'auto' }}>
            <div className="loader-content">
              <div className="loader-spinner"></div>
              <div style={{ color: 'var(--primary)', fontWeight: 600 }}>Loading...</div>
            </div>
          </div>
        ) : user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/admin/login" />
        )
      }
    />
  )
}
