'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) { setError('Both fields are required'); return }
    setError(''); setLoading(true)
    const { error: err } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (err) setError(err.message)
    else router.replace('/feed')
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center px-6">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black"
          style={{ background: 'linear-gradient(135deg,#FF6B2B,#E91E8C,#7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          LERN
        </h1>
        <p className="text-[#666] text-sm mt-2">Sign in to continue</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-3">
        <input className="lern-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
        <input className="lern-input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
        {error && <p className="text-[#FF3B30] text-xs">{error}</p>}
        <button type="submit" className="btn-gradient w-full py-4 rounded-2xl text-sm" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign In'}
        </button>
      </form>

      <p className="text-center text-sm text-[#666] mt-6">
        No account?{' '}
        <button onClick={() => router.push('/signup')} className="text-[#7C3AED] underline">Sign up</button>
      </p>
    </div>
  )
}
