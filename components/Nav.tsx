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
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            {/* Uses the logo from lasn.dev — swap for your own file once in repo */}
            <img
              src="https://lasn.dev/_next/image?url=%2Flasn-logo.png&w=384&q=75"
              alt="LA Sports Net"
              className="h-10 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                if (e.currentTarget.nextSibling) {
                  (e.currentTarget.nextSibling as HTMLElement).style.display = 'flex'
                }
              }}
            />
            {/* Fallback text logo */}
            <div className="hidden flex-col leading-none">
              <span className="text-[#2E3492] font-black text-lg tracking-tight">LASPORTSNET</span>
              <span className="text-gray-400 text-[9px] tracking-widest uppercase">A Smarter Way to Play</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <div className="relative"
              onMouseEnter={() => setSportsOpen(true)}
              onMouseLeave={() => setSportsOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#EF4A23] transition-colors uppercase tracking-wide">
                Sports
                <svg className={`w-3.5 h-3.5 transition-transform ${sportsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {sportsOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50">
                  {SPORTS.map(s => (
                    <Link key={s.slug} href={`/sports/${s.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#EF4A23] transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative"
              onMouseEnter={() => setLocOpen(true)}
              onMouseLeave={() => setLocOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#EF4A23] transition-colors uppercase tracking-wide">
                Locations
                <svg className={`w-3.5 h-3.5 transition-transform ${locOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {locOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50">
                  {LOCATIONS.map(loc => (
                    <Link key={loc} href={`/locations/${loc.toLowerCase().replace(/ /g,'-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#EF4A23] transition-colors">
                      {loc}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about"   className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#EF4A23] transition-colors uppercase tracking-wide">About</Link>
            <Link href="/faq"     className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#EF4A23] transition-colors uppercase tracking-wide">FAQs</Link>
            <Link href="/contact" className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#EF4A23] transition-colors uppercase tracking-wide">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/leagues"
              className="bg-[#EF4A23] hover:bg-[#C7391A] text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-colors">
              Register Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 py-1">Sports</p>
          {SPORTS.map(s => (
            <Link key={s.slug} href={`/sports/${s.slug}`} onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#EF4A23] rounded-lg transition-colors">
              {s.name}
            </Link>
          ))}
          <div className="border-t border-gray-100 my-2" />
          <Link href="/about"   onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#EF4A23] rounded-lg">About</Link>
          <Link href="/faq"     onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#EF4A23] rounded-lg">FAQs</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#EF4A23] rounded-lg">Contact</Link>
          <div className="border-t border-gray-100 my-2" />
          <Link href="/leagues" onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-[#EF4A23] hover:bg-[#C7391A] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">
            Register Now
          </Link>
        </div>
      )}
    </header>
  )
}
