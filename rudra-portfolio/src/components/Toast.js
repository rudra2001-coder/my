import React, { useEffect, useState } from 'react'

export default function Toast({ message, type = 'success', onClose }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (message) {
      setShow(true)
      const timer = setTimeout(() => {
        setShow(false)
        if (onClose) setTimeout(onClose, 400)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [message, onClose])

  return (
    <div className={`toast-notification${show ? ' show' : ''} ${type}`}>
      {message}
    </div>
  )
}
