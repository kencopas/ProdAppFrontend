'use client'

import { useEffect, useState } from 'react'

export default function HomePage() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage('Error connecting to backend'))
  }, [])

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Hello from Frontend</h1>
      <p>Backend says: {message}</p>
    </main>
  )
}
