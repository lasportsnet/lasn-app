'use client'
import { useState } from 'react'
import Link from 'next/link'

const SPORTS = [
  { name: 'Soccer',        slug: 'soccer'        },
  { name: 'Softball',      slug: 'softball'       },
  { name: 'Volleyball',    slug: 'volleyball'     },
  { name: 'Flag Football', slug: 'flag-football'  },
  { name: 'Basketball',    slug: 'basketball'     },
  { name: 'Kickball',      slug: 'kickball'       },
  { name: 'Cornhole',      slug: 'cornhole'       },
  { name: 'Pickleball',    slug: 'pickleball'     },
  { name: 'Bowling',       slug: 'bowling'        },
  { name: 'Running',       slug: 'running'        },
  { name: 'Dodgeball',     slug: 'dodgeball'      },
  { name: 'Tennis',        slug: 'tennis'         },
]

const LOCATIONS = [
  'Hollywood','Valley','West LA','Santa Monica',
  'South Bay','Glendale','Pasadena','Alhambra','Downtown LA',
]

export default function Nav() {
  const [sportsOpen, setSportsOpen] = useState(false)
  const [locOpen, setLocOpen]       = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-lasn-blue sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none flex-shrink-0">
            <span className="text-white font-display font-bold text-lg tracking-tight">LASPORTSNET</span>
            <span className="text-blue-300 text-[9px] tracking-widest uppercase">A Smarter Way to Play</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <div className="relative"
              onMouseEnter={() => setSportsOpen(true)}
              onMouseLeave={() => setSportsOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-blue-100 hover:text-white transition-colors rounded-lg hover:bg-white/10">
                Sports
                <svg className={`w-4 h-4 transition-transform ${sportsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {sportsOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-lasn-border rounded-xl shadow-lg py-2 z-50">
                  {SPORTS.map(s => (
                    <Link key={s.slug} href={`/sports/${s.slug}`}
                      className="block px-4 py-2 text-sm text-lasn-navy hover:bg-orange-50 hover:text-lasn-orange transition-colors font-medium">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative"
              onMouseEnter={() => setLocOpen(true)}
              onMouseLeave={() => setLocOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-blue-100 hover:text-white transition-colors rounded-lg hover:bg-white/10">
                Locations
                <svg className={`w-4 h-4 transition-transform ${locOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {locOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-lasn-border rounded-xl shadow-lg py-2 z-50">
                  {LOCATIONS.map(loc => (
                    <Link key={loc} href={`/locations/${loc.toLowerCase().replace(/ /g,'-')}`}
                      className="block px-4 py-2 text-sm text-lasn-navy hover:bg-orange-50 hover:text-lasn-orange transition-colors font-medium">
                      {loc}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about"   className="px-4 py-2 text-sm font-medium text-blue-100 hover:text-white transition-colors rounded-lg hover:bg-white/10">About</Link>
            <Link href="/faq"     className="px-4 py-2 text-sm font-medium text-blue-100 hover:text-white transition-colors rounded-lg hover:bg-white/10">FAQs</Link>
            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-blue-100 hover:text-white transition-colors rounded-lg hover:bg-white/10">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-blue-200 hover:text-white transition-colors">Login</Link>
            <Link href="/leagues" className="btn-primary">Register Now</Link>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-blue-700 bg-lasn-blue px-4 py-4 space-y-1">
          <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider px-3 py-1">Sports</p>
          {SPORTS.map(s => (
            <Link key={s.slug} href={`/sports/${s.slug}`} onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm text-blue-100 hover:bg-white/10 hover:text-white rounded-lg transition-colors">
              {s.name}
            </Link>
          ))}
          <div className="border-t border-blue-700 my-2" />
          <Link href="/about"   onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-blue-100 hover:bg-white/10 hover:text-white rounded-lg">About</Link>
          <Link href="/faq"     onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-blue-100 hover:bg-white/10 hover:text-white rounded-lg">FAQs</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-blue-100 hover:bg-white/10 hover:text-white rounded-lg">Contact</Link>
          <div className="border-t border-blue-700 my-2" />
          <Link href="/leagues" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center">Register Now</Link>
        </div>
      )}
    </header>
  )
}
