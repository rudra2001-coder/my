import React, { createContext, useState, useEffect, useContext } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('admin_user')
    if (stored) setUser(JSON.parse(stored))
    setLoading(false)
  }, [])

  const signIn = (username, password) => {
    if (username === 'rudra' && password === 'rudra') {
      const userData = { username, name: 'Admin' }
      localStorage.setItem('admin_user', JSON.stringify(userData))
      setUser(userData)
    } else {
      throw new Error('Invalid username or password')
    }
  }

  const signOut = () => {
    localStorage.removeItem('admin_user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
