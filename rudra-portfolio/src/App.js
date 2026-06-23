import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import PrivateRoute from './components/PrivateRoute'
import ErrorBoundary from './components/ErrorBoundary'

export default function App() {
  return (
    <ErrorBoundary>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/admin/login" component={AdminLogin} />
        <PrivateRoute path="/admin" component={AdminDashboard} />
      </Switch>
    </ErrorBoundary>
  )
}
