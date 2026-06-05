'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !username || !password) { setError('All fields required'); return }
    if (password.length < 6) { setError('Password must be 6+ characters'); return }
    setError(''); setLoading(true)

    const { data, error: err } = await supabase.auth.signUp({ email, password })
    if (err) { setError(err.message); setLoading(false); return }

    if (data.user) {
      await supabase.from('users').insert({
        id: data.user.id,
        email,
        username: username.toLowerCase().replace(/\s+/g, '_'),
        full_name: username,
        is_instructor: false,
        followers_count: 0,
        following_count: 0,
      })
    }
    setLoading(false)
    router.replace('/feed')
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center px-6">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black"
          style={{ background: 'linear-gradient(135deg,#FF6B2B,#E91E8C,#7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          LERN
        </h1>
        <p className="text-[#666] text-sm mt-2">Create your account</p>
      </div>

      <form onSubmit={handleSignup} className="space-y-3">
        <input className="lern-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
        <input className="lern-input" type="text" placeholder="Full name" value={username} onChange={e => setUsername(e.target.value)} autoComplete="name" />
        <input className="lern-input" type="password" placeholder="Password (6+ chars)" value={password} onChange={e => setPassword(e.target.value)} autoComplete="new-password" />
        {error && <p className="text-[#FF3B30] text-xs">{error}</p>}
        <button type="submit" className="btn-gradient w-full py-4 rounded-2xl text-sm" disabled={loading}>
          {loading ? 'Creating account…' : 'Create Account'}
        </button>
      </form>

      <p className="text-center text-sm text-[#666] mt-6">
        Already have an account?{' '}
        <button onClick={() => router.push('/login')} className="text-[#7C3AED] underline">Sign in</button>
      </p>
    </div>
  )
}
