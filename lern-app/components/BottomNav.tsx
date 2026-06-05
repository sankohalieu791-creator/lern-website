'use client'

import { Home, Radio, BookOpen, Compass, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { name: 'Feed',     icon: Home,    href: '/feed' },
  { name: 'Live',     icon: Radio,   href: '/live' },
  { name: 'Courses',  icon: BookOpen, href: '/courses' },
  { name: 'Discover', icon: Compass, href: '/discover' },
  { name: 'Profile',  icon: User,    href: '/profile' },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[500px] mx-auto bg-[#0a0a0a] border-t border-gray-900 z-50"
         style={{ height: 65 }}>
      <div className="flex justify-around items-center h-full px-2">
        {tabs.map(({ name, icon: Icon, href }) => {
          const active = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link key={href} href={href}
              className="flex flex-col items-center gap-[3px] px-3 py-2 transition-colors"
              style={{ color: active ? '#fff' : '#555' }}>
              <Icon size={22} strokeWidth={active ? 2.2 : 1.8} />
              <span className="text-[10px] font-medium">{name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
