'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { supabase, League } from '@/lib/supabase'

type RegistrationOption = 'join' | 'create' | 'freeagent' | 'sub' | null

export default function LeagueDetailPage({ params }: { params: { id: string } }) {
  const [league, setLeague] = useState<League | null>(null)
  const [loading, setLoading] = useState(true)
  const [regOption, setRegOption] = useState<RegistrationOption>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [step, setStep] = useState(1)

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from('leagues')
        .select('*')
        .eq('id', params.id)
        .single()
      setLeague(data)
      setLoading(false)
    }
    load()
  }, [params.id])

  const openReg = () => { setModalOpen(true); setStep(1); setRegOption(null) }
  const closeModal = () => { setModalOpen(false); setStep(1); setRegOption(null) }

  if (loading) return (
    <>
      <Nav />
      <div className="flex items-center justify-center min-h-96">
        <div className="w-10 h-10 border-4 border-red-200 border-t-red-600 rounded-full animate-spin" />
      </div>
    </>
  )

  if (!league) return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">League not found</h1>
        <Link href="/leagues" className="btn-primary">Browse All Leagues</Link>
      </div>
      <Footer />
    </>
  )

  const regOptions = [
    { key: 'join',      title: 'Join a Team',              desc: 'Pick an existing team to join.' },
    { key: 'create',    title: 'Create a Team',            desc: 'Start a new team and invite friends.' },
    { key: 'freeagent', title: 'Free Agent',               desc: 'We will place you on a team.' },
    { key: 'sub',       title: 'Register as Substitute',   desc: '$10/game, max 3 per season. Play without a full commitment.' },
  ]

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-gray-50">

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-500">
            <Link href="/leagues" className="hover:text-red-600 transition-colors">Leagues</Link>
            <span>/</span>
            <Link href={`/sports/${(league.sport||'').toLowerCase().replace(' ','-')}`} className="hover:text-red-600 transition-colors">{league.sport}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{league.name}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="pill-sport">{league.sport}</span>
                <span className="pill-open capitalize">{league.status}</span>
              </div>
              <h1 className="text-4xl font-black text-gray-900 mb-2">{league.name}</h1>
              <p className="text-gray-400 font-mono text-sm mb-6">{league.league_code}</p>

              {league.description && (
                <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
                  <h2 className="font-bold text-gray-900 mb-3">About This League</h2>
                  <p className="text-gray-600 leading-relaxed">{league.description}</p>
                </div>
              )}

              {/* League Details */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
                <h2 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider text-gray-500">League Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Day', val: league.day },
                    { label: 'Time', val: league.start_time?.substring(0,5) },
                    { label: 'Team Size', val: '10 players' },
                    { label: 'Max Teams', val: league.max_teams ? `${league.max_teams} teams` : '—' },
                    { label: 'Division', val: 'Coed' },
                    { label: 'Season', val: league.season },
                  ].map(item => (
                    <div key={item.label}>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-gray-900 font-medium">{item.val || '—'}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-bold text-gray-900 mb-2">Availability</h2>
                <p className="text-gray-600 text-sm">
                  {league.status === 'open'
                    ? `Spots available. Register as a free agent or create a team.`
                    : league.status === 'waitlist'
                    ? 'This league is currently on the waitlist. You can still register and you will be notified if a spot opens.'
                    : 'This league is currently full.'}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-20">
                <div className="text-3xl font-black text-gray-900 mb-1">
                  ${league.fee || league.price_per_player}
                  <span className="text-base font-normal text-gray-400">/player</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">Full season registration</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="text-lg">📅</span>
                    <span>{league.day} at {league.start_time?.substring(0,5)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="text-lg">📍</span>
                    <div>
                      <div>{league.venue}</div>
                      <div className="text-gray-400">{league.neighborhood}</div>
                    </div>
                  </div>
                </div>

                {league.status !== 'full' ? (
                  <button onClick={openReg}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-colors text-base">
                    Register Now
                  </button>
                ) : (
                  <button className="w-full bg-gray-100 text-gray-500 font-bold py-3.5 rounded-xl cursor-not-allowed" disabled>
                    League Full
                  </button>
                )}

                <p className="text-xs text-gray-400 text-center mt-3">
                  Questions? <Link href="/contact" className="text-red-600 hover:underline">Contact us</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* REGISTRATION MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={e => { if(e.target === e.currentTarget) closeModal() }}>
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">

            {/* Progress bar */}
            <div className="flex gap-1.5 p-4 bg-gray-50 border-b border-gray-100">
              {[1,2,3,4].map(s => (
                <div key={s} className={`flex-1 h-1.5 rounded-full transition-all ${s <= step ? 'bg-red-500' : 'bg-gray-200'}`} />
              ))}
              <button onClick={closeModal} className="ml-2 text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="p-6">
              {/* Step 1: Team Selection */}
              {step === 1 && (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Team Selection</h2>
                  <p className="text-gray-500 text-sm mb-6">How would you like to play?</p>
                  <div className="space-y-3 mb-6">
                    {regOptions.map(opt => (
                      <button key={opt.key}
                        onClick={() => setRegOption(opt.key as RegistrationOption)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all ${regOption === opt.key ? 'border-red-600 bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        <div className="font-semibold text-gray-900 text-sm">{opt.title}</div>
                        <div className="text-gray-500 text-sm mt-0.5">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <button onClick={closeModal} className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">Back</button>
                    <button disabled={!regOption}
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 bg-red-600 hover:bg-red-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold rounded-xl text-sm transition-all">
                      Continue
                    </button>
                  </div>
                </>
              )}

              {/* Step 2: Player Info */}
              {step === 2 && (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Your Information</h2>
                  <p className="text-gray-500 text-sm mb-6">Tell us a bit about yourself</p>
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">First Name</label>
                        <input type="text" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-red-400 transition-colors" placeholder="Jane" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Last Name</label>
                        <input type="text" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-red-400 transition-colors" placeholder="Smith" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Email</label>
                      <input type="email" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-red-400 transition-colors" placeholder="jane@example.com" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Phone</label>
                      <input type="tel" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-red-400 transition-colors" placeholder="(310) 555-0100" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Shirt Number</label>
                      <input type="number" min="0" max="99" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-red-400 transition-colors" placeholder="e.g. 23" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button onClick={() => setStep(1)} className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">Back</button>
                    <button onClick={() => setStep(3)} className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl text-sm transition-all">Continue</button>
                  </div>
                </>
              )}

              {/* Step 3: Summary */}
              {step === 3 && (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Order Summary</h2>
                  <p className="text-gray-500 text-sm mb-6">Review your registration</p>
                  <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">League</span>
                      <span className="font-semibold text-gray-900">{league.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Registration Type</span>
                      <span className="font-semibold text-gray-900 capitalize">{regOption === 'freeagent' ? 'Free Agent' : regOption === 'sub' ? 'Substitute' : regOption}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Day &amp; Time</span>
                      <span className="font-semibold text-gray-900">{league.day}, {league.start_time?.substring(0,5)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between">
                      <span className="font-bold text-gray-900">Total</span>
                      <span className="font-black text-gray-900 text-lg">
                        ${regOption === 'sub' ? '10' : (league.fee || league.price_per_player)}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button onClick={() => setStep(2)} className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">Back</button>
                    <button onClick={() => setStep(4)} className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl text-sm transition-all">Proceed to Payment</button>
                  </div>
                </>
              )}

              {/* Step 4: Payment placeholder */}
              {step === 4 && (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Payment</h2>
                  <p className="text-gray-500 text-sm mb-6">Secure payment powered by Stripe</p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 text-sm text-yellow-800">
                    <strong>Coming Soon —</strong> Payment processing will be available once Stripe is connected. For now, please contact us at info@lasportsnet.com to complete your registration.
                  </div>
                  <div className="flex justify-between">
                    <button onClick={() => setStep(3)} className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">Back</button>
                    <Link href="/contact" className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl text-sm transition-all">
                      Contact Us to Register
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
