'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { supabase, League } from '@/lib/supabase'

const SPORTS = ['Soccer','Softball','Volleyball','Flag Football','Basketball','Kickball','Cornhole','Pickleball','Bowling','Running','Dodgeball','Tennis']
const NEIGHBORHOODS = ['Alhambra','Downtown LA','Glendale','Hollywood','Pasadena','Santa Monica','South Bay','Valley','West LA','Westside']
const DAYS = ['Mondays','Tuesdays','Wednesdays','Thursdays','Fridays','Saturdays','Sundays']

export default function LeaguesPage() {
  const [leagues, setLeagues]   = useState<League[]>([])
  const [filtered, setFiltered] = useState<League[]>([])
  const [loading, setLoading]   = useState(true)
  const [sport, setSport]       = useState('')
  const [hood, setHood]         = useState('')
  const [day, setDay]           = useState('')
  const [tab, setTab]           = useState<'open'|'earlybird'>('open')

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from('leagues')
        .select('*')
        .eq('season', 'Spring 2026')
        .order('sport', { ascending: true })
      setLeagues(data || [])
      setLoading(false)
    }
    load()
  }, [])

  useEffect(() => {
    let f = leagues
    if (sport) f = f.filter(l => l.sport === sport)
    if (hood)  f = f.filter(l => (l.neighborhood || '').toLowerCase().includes(hood.toLowerCase()))
    if (day)   f = f.filter(l => (l.day || '').toLowerCase().includes(day.toLowerCase().replace('s','')))
    if (tab === 'open') f = f.filter(l => l.status === 'open' || l.status === 'waitlist')
    setFiltered(f)
  }, [leagues, sport, hood, day, tab])

  const statusPill = (status: string) => {
    if (status === 'open')     return <span className="pill-open">Open</span>
    if (status === 'waitlist') return <span className="pill-waitlist">Waitlist</span>
    if (status === 'full')     return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">Full</span>
    return <span className="pill-open">Open</span>
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-gray-50">

        {/* Header */}
        <div className="bg-gray-900 text-white py-14 px-4">
          <div className="max-w-7xl mx-auto">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Spring 2026</p>
            <h1 className="text-5xl font-black mb-3">All Leagues.</h1>
            <p className="text-gray-400 text-lg">{filtered.length} leagues this season. Filter by sport, neighborhood, or day.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Tabs */}
          <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 w-fit mb-8">
            <button onClick={() => setTab('open')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${tab==='open' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              Open Registration
            </button>
            <button onClick={() => setTab('earlybird')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${tab==='earlybird' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              Early Bird
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <select value={sport} onChange={e => setSport(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-red-400 transition-all">
                <option value="">All Sports</option>
                {SPORTS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <select value={hood} onChange={e => setHood(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-red-400 transition-all">
                <option value="">All Neighborhoods</option>
                {NEIGHBORHOODS.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
              <select value={day} onChange={e => setDay(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-red-400 transition-all">
                <option value="">Any Day</option>
                {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            {(sport || hood || day) && (
              <button onClick={() => { setSport(''); setHood(''); setDay('') }}
                className="mt-3 text-sm text-red-600 hover:text-red-700 font-medium">
                Clear filters
              </button>
            )}
          </div>

          {/* Count */}
          <p className="text-sm text-gray-500 mb-6">
            Showing <span className="font-semibold text-gray-900">{filtered.length}</span> leagues
          </p>

          {/* League grid */}
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="w-10 h-10 border-4 border-red-200 border-t-red-600 rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-4xl mb-4">🏟️</p>
              <p className="text-lg font-semibold text-gray-600">No leagues match your filters</p>
              <p className="text-sm mt-2">Try adjusting your sport, neighborhood, or day selection</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map(l => (
                <div key={l.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <span className="pill-sport">{l.sport}</span>
                      {statusPill(l.status)}
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-1 leading-snug">{l.name}</h3>
                    <p className="text-xs text-gray-400 font-mono mb-4">{l.league_code}</p>
                    <div className="space-y-1.5 mb-5">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-base">📅</span>
                        <span>{l.day} at {l.start_time?.substring(0,5)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-base">📍</span>
                        <span>{l.venue}, {l.neighborhood}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                        <span className="text-base">💰</span>
                        <span>${l.fee || l.price_per_player}/player</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/leagues/${l.id}`}
                        className="flex-1 text-center border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-semibold py-2.5 rounded-xl transition-colors">
                        Details
                      </Link>
                      {l.status !== 'full' && (
                        <Link href={`/leagues/${l.id}/register`}
                          className="flex-1 text-center bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
                          Register Now
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
