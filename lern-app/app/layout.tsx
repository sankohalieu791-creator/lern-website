'use client'

import { ReactNode, useEffect, useState } from 'react'
import BottomNav from '@/components/BottomNav'
import { useRouter, usePathname } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import '../styles/globals.css'

const AUTH_PATHS = ['/login', '/signup']

export default function RootLayout({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session && !AUTH_PATHS.includes(pathname)) {
        router.replace('/login')
      }
      setReady(true)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session && !AUTH_PATHS.includes(pathname)) {
        router.replace('/login')
      }
    })

    return () => subscription.unsubscribe()
  }, [pathname, router])

  if (!ready) return <div className="min-h-screen bg-[#0a0a0a]" />

  const isAuth = AUTH_PATHS.includes(pathname)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0a0a0a" />
        <title>LERN</title>
      </head>
      <body className="bg-[#0a0a0a] text-white min-h-screen">
        <div className="max-w-[500px] mx-auto relative min-h-screen flex flex-col">
          <main className={`flex-1 ${!isAuth ? 'pb-[65px]' : ''}`}>
            {children}
          </main>
          {!isAuth && <BottomNav />}
        </div>
      </body>
    </html>
  )
}
