import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const SPORTS = [
  { name: 'Soccer',        slug: 'soccer',       emoji: '⚽', desc: '10 games. Full stats. Post-game socials.'         },
  { name: 'Softball',      slug: 'softball',      emoji: '🥎', desc: 'Slow-pitch coed. Swing for the fences.'           },
  { name: 'Volleyball',    slug: 'volleyball',    emoji: '🏐', desc: 'Indoor and beach. All skill levels.'              },
  { name: 'Flag Football', slug: 'flag-football', emoji: '🏈', desc: 'No tackling. All touchdowns. Plenty of trash talk.'},
  { name: 'Basketball',    slug: 'basketball',    emoji: '🏀', desc: '5v5 coed. Refs. Stats. Real standings.'           },
  { name: 'Kickball',      slug: 'kickball',      emoji: '🦵', desc: 'Playground rules. Zero athletic ability required.' },
  { name: 'Cornhole',      slug: 'cornhole',      emoji: '🎯', desc: 'Toss bags. Talk trash. Drink beers.'              },
  { name: 'Pickleball',    slug: 'pickleball',    emoji: '🏓', desc: "Fastest-growing sport in America. Join the wave." },
  { name: 'Bowling',       slug: 'bowling',       emoji: '🎳', desc: 'League bowling. A bar right there.'               },
  { name: 'Running',       slug: 'running',       emoji: '🏃', desc: 'Group runs. Social stops. Not a race.'            },
  { name: 'Dodgeball',     slug: 'dodgeball',     emoji: '🔴', desc: 'Quick rounds. Big laughs. Zero mercy.'            },
  { name: 'Tennis',        slug: 'tennis',        emoji: '🎾', desc: 'Skill-based divisions. Post-match drinks.'         },
]

const OPEN_LEAGUES = [
  { sport: 'Running',       name: 'Santa Monica Run Club',  day: 'Mondays',  time: '6:30 PM',  venue: "Brennan's Pub",             neighborhood: 'Santa Monica', fee: 79,  code: 'SPR26-RN-SM01', status: 'open'  },
  { sport: 'Softball',      name: 'West LA Softball',       day: 'Mondays',  time: '7:00 PM',  venue: 'Cheviot Hills Rec Center',   neighborhood: 'Westside',     fee: 99,  code: 'SPR26-SB-W01',  status: 'open'  },
  { sport: 'Pickleball',    name: 'Santa Monica Pickleball',day: 'Mondays',  time: '6:30 PM',  venue: 'Santa Monica College',       neighborhood: 'Santa Monica', fee: 99,  code: 'SPR26-PB-SM01', status: 'open'  },
  { sport: 'Soccer',        name: 'Hollywood Soccer',       day: 'Mondays',  time: '7:00 PM',  venue: 'Bernstein High School',      neighborhood: 'Hollywood',    fee: 94,  code: 'SPR26-SC-H01',  status: 'open'  },
  { sport: 'Basketball',    name: 'South Bay Basketball',   day: 'Sundays',  time: '10:00 AM', venue: 'Dee Hardison Sports Center', neighborhood: 'South Bay',    fee: 109, code: 'SPR26-BK-SB01', status: 'open'  },
  { sport: 'Flag Football', name: 'Valley Flag Football',   day: 'Sundays',  time: '10:00 AM', venue: 'Sepulveda Basin Sports Complex', neighborhood: 'Valley',  fee: 89,  code: 'SPR26-FF-V01',  status: 'open'  },
]

const STATS = [
  { val: '10,000+', label: 'Players'           },
  { val: '70+',     label: 'Leagues per Season' },
  { val: '12+',     label: 'Sports'             },
  { val: '15+',     label: 'Neighborhoods'      },
]

const TESTIMONIALS = [
  { quote: 'Joined as a free agent and now I have a whole crew of friends I play with every week. Best decision I made this year.', name: 'Sarah M.',    area: 'West LA'      },
  { quote: 'The leagues are well organized, the refs are solid, and the post-game hangouts are always a good time. Highly recommend.', name: 'Marcus T.', area: 'Valley'       },
  { quote: 'I was nervous to sign up alone, but the free agent system made it so easy. Now I play three sports.',                      name: 'Jessica R.', area: 'Santa Monica' },
]

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative bg-lasn-navy text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 20% 50%, #EF4A23 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2E3492 0%, transparent 40%)'}} />
        {/* Orange top accent line — brand signature */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-lasn-orange" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <p className="overline mb-4" style={{color:'#93c5fd'}}>Now Registering — Spring 2026</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-6 tracking-tight text-white">
              Find Your<br/>
              <span style={{color:'#EF4A23'}}>League.</span>
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed mb-10 max-w-xl">
              12 sports. 70+ leagues. Neighborhoods all over LA.<br/>
              Find your team. Get on the field.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/leagues" className="btn-primary text-base px-8 py-4">Register Now</Link>
              <Link href="/leagues" className="btn-ghost text-base px-8 py-4">Browse Leagues</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────── */}
      <section className="bg-lasn-blue text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="text-4xl font-display font-bold mb-1">{s.val}</div>
                <div className="text-blue-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN LEAGUES ───────────────────────────────────── */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="overline mb-2">Now Registering</p>
            <h2 className="font-display text-4xl font-bold text-lasn-navy mb-3">Open Leagues.</h2>
            <p className="text-lasn-cool text-lg">Spots fill fast. Grab yours before the season kicks off.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OPEN_LEAGUES.map((l, i) => (
              <div key={i} className="bg-white rounded-2xl border border-lasn-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-5">

                {/* Sport tag + status */}
                <div className="flex items-start justify-between mb-3">
                  <span className="pill-sport">{l.sport}</span>
                  <span className="pill-open">Open</span>
                </div>

                {/* Name */}
                <h3 className="font-display font-semibold text-lasn-navy text-base mb-1">{l.name}</h3>

                {/* Data line — monospace, brand signature */}
                <p className="data-mono mb-4">League ID: {l.code}</p>

                {/* Details */}
                <div className="space-y-1.5 mb-5">
                  <div className="flex items-center gap-2 text-sm text-lasn-slate"><span>📅</span><span>{l.day} at {l.time}</span></div>
                  <div className="flex items-center gap-2 text-sm text-lasn-slate"><span>📍</span><span>{l.venue}, {l.neighborhood}</span></div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-lasn-navy"><span>💰</span><span>${l.fee}/player</span></div>
                </div>

                {/* CTAs */}
                <div className="flex gap-2">
                  <Link href="/leagues" className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold border-2 border-lasn-blue text-lasn-blue hover:bg-lasn-blue hover:text-white transition-all">
                    Join as Free Agent
                  </Link>
                  <Link href="/leagues" className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold bg-lasn-orange hover:bg-lasn-orange-dark text-white transition-all">
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/leagues" className="btn-primary text-base px-10 py-4">View All Leagues</Link>
          </div>
        </div>
      </section>

      {/* ── SPORTS GRID ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="overline mb-2">Choose Your Sport</p>
            <h2 className="font-display text-4xl font-bold text-lasn-navy mb-3">12 Sports Across LA.</h2>
            <p className="text-lasn-cool text-lg">Whatever you are into, we have a league for it.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SPORTS.map(s => (
              <Link key={s.slug} href={`/sports/${s.slug}`}
                className="group bg-gray-50 hover:bg-lasn-blue rounded-2xl p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-lasn-blue">
                <div className="text-3xl mb-3">{s.emoji}</div>
                <h3 className="font-display font-semibold text-lasn-navy group-hover:text-white text-sm mb-1.5 transition-colors">{s.name}</h3>
                <p className="text-xs text-lasn-cool group-hover:text-blue-200 leading-relaxed transition-colors">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────── */}
      <section className="py-20 bg-lasn-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">How It Works</p>
            <h2 className="font-display text-4xl font-bold text-white mb-3">Three steps. One great season.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step:'01', title:'Find Your League.',  desc:'Filter by sport, neighborhood, and day. The right league is out there.' },
              { step:'02', title:'Register Your Way.', desc:'Free agent, full team, or substitute. You pick how you want to play.'   },
              { step:'03', title:'Get on the Field.',  desc:'Show up. Play hard. Stick around after. That is where it gets good.'   },
            ].map(s => (
              <div key={s.step}>
                <div className="text-8xl font-display font-bold text-lasn-blue leading-none mb-4 select-none opacity-60">{s.step}</div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-blue-300 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────── */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="overline mb-2">Community</p>
            <h2 className="font-display text-4xl font-bold text-lasn-navy">What Players Say.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-lasn-border">
                <div className="text-5xl text-lasn-orange font-bold leading-none mb-4 select-none opacity-40">"</div>
                <p className="text-lasn-slate leading-relaxed mb-6 text-sm">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-lasn-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-lasn-navy text-sm">{t.name}</div>
                    <div className="text-lasn-cool text-xs">{t.area}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-lasn-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-5xl font-bold mb-6">Ready to Play?</h2>
          <p className="text-orange-100 text-xl mb-10 max-w-xl mx-auto">
            Find a league near you. Sign up as a free agent or bring your whole crew.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/leagues" className="bg-white text-lasn-orange hover:bg-gray-100 font-bold px-10 py-4 rounded-xl transition-colors text-base font-display">
              Register Now
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-lasn-orange font-bold px-10 py-4 rounded-xl transition-all text-base font-display">
              Corporate Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
