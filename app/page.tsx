import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const SPORTS = [
  { name: 'Soccer',        slug: 'soccer',       emoji: '⚽', desc: 'The beautiful game, LA style. Coed teams, all skill levels, post-game hangs.' },
  { name: 'Softball',      slug: 'softball',      emoji: '🥎', desc: 'Classic slow-pitch coed softball. Grab your crew and swing for the fences.' },
  { name: 'Volleyball',    slug: 'volleyball',    emoji: '🏐', desc: 'Indoor and beach 6v6 coed. Competitive spirit, social vibes.' },
  { name: 'Flag Football', slug: 'flag-football', emoji: '🏈', desc: 'Fast-paced coed flag football. No tackling, all touchdowns.' },
  { name: 'Basketball',    slug: 'basketball',    emoji: '🏀', desc: 'Competitive 5v5 coed with organized refs and real standings.' },
  { name: 'Kickball',      slug: 'kickball',      emoji: '🦵', desc: 'Playground rules, adult fun. Zero athletic ability required.' },
  { name: 'Cornhole',      slug: 'cornhole',      emoji: '🎯', desc: 'Toss bags, talk trash, drink beers. The ultimate social sport.' },
  { name: 'Pickleball',    slug: 'pickleball',    emoji: '🏓', desc: "America's fastest-growing sport. Competitive doubles play." },
  { name: 'Bowling',       slug: 'bowling',       emoji: '🎳', desc: 'League bowling with a social twist. A bar right there.' },
  { name: 'Running',       slug: 'running',       emoji: '🏃', desc: 'Group runs through LA with social stops along the way.' },
  { name: 'Dodgeball',     slug: 'dodgeball',     emoji: '🔴', desc: 'High-energy gym dodgeball. Quick rounds, big laughs.' },
  { name: 'Tennis',        slug: 'tennis',        emoji: '🎾', desc: 'Competitive doubles and singles. Skill-based divisions.' },
]

const OPEN_LEAGUES = [
  { sport: 'Running',       name: 'Santa Monica Run Club',       day: 'Mondays',  time: '6:30 PM',  venue: "Brennan's Pub",             neighborhood: 'Santa Monica', fee: 79  },
  { sport: 'Softball',      name: 'West LA Softball',            day: 'Mondays',  time: '7:00 PM',  venue: 'Cheviot Hills Rec Center',   neighborhood: 'West LA',      fee: 99  },
  { sport: 'Pickleball',    name: 'Santa Monica Pickleball',     day: 'Mondays',  time: '6:30 PM',  venue: 'Santa Monica College',       neighborhood: 'Santa Monica', fee: 99  },
  { sport: 'Soccer',        name: 'Hollywood Soccer',            day: 'Mondays',  time: '7:00 PM',  venue: 'Bernstein High School',      neighborhood: 'Hollywood',    fee: 94  },
  { sport: 'Basketball',    name: 'South Bay Basketball',        day: 'Sundays',  time: '10:00 AM', venue: 'Dee Hardison Sports Center', neighborhood: 'South Bay',    fee: 109 },
  { sport: 'Flag Football', name: 'Valley Flag Football',        day: 'Sundays',  time: '10:00 AM', venue: 'Sepulveda Basin Sports Complex', neighborhood: 'Valley',  fee: 89  },
]

const STATS = [
  { val: '10,000+', label: 'Players' },
  { val: '70+',     label: 'Leagues per Season' },
  { val: '12+',     label: 'Sports' },
  { val: '15+',     label: 'Neighborhoods' },
]

const TESTIMONIALS = [
  { quote: 'Joined as a free agent and now I have a whole crew of friends I play with every week. Best decision I made this year.', name: 'Sarah M.',    area: 'West LA'      },
  { quote: 'The leagues are well organized, the refs are solid, and the post-game hangouts are always a good time. Highly recommend.', name: 'Marcus T.', area: 'Valley'       },
  { quote: 'I was nervous to sign up alone, but the free agent system made it so easy to get placed on a team. Now I play three sports.', name: 'Jessica R.', area: 'Santa Monica' },
]

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative bg-gray-900 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-red-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wider uppercase">
              Now Registering - Spring 2026
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-6 tracking-tight">
              Find Your<br/>
              <span className="text-red-500">League.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              Join thousands of players across 12 sports, 70 leagues, and neighborhoods all over LA.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/leagues" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all text-base">
                Register Now
              </Link>
              <Link href="/leagues" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all text-base">
                Browse Sports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="text-4xl font-black mb-1">{s.val}</div>
                <div className="text-red-200 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN LEAGUES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Now Registering</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Open Leagues</h2>
            <p className="text-gray-500 text-lg">Spots fill fast. Grab yours before the season kicks off.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OPEN_LEAGUES.map((l, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-5">
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700">{l.sport}</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">Open</span>
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-4">{l.name}</h3>
                <div className="space-y-1.5 mb-5 text-sm text-gray-600">
                  <div className="flex items-center gap-2"><span>📅</span><span>{l.day} at {l.time}</span></div>
                  <div className="flex items-center gap-2"><span>📍</span><span>{l.venue}, {l.neighborhood}</span></div>
                  <div className="flex items-center gap-2 font-bold text-gray-900"><span>💰</span><span>${l.fee}/player</span></div>
                </div>
                <Link href="/leagues" className="w-full block text-center bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
                  Register Now
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/leagues" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-lg transition-all text-base">
              View All Leagues
            </Link>
          </div>
        </div>
      </section>

      {/* SPORTS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4">12 Sports Across LA</h2>
            <p className="text-gray-500 text-lg">Whatever you are into, we have a league for it.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SPORTS.map(s => (
              <Link key={s.slug} href={`/sports/${s.slug}`}
                className="group bg-gray-50 hover:bg-red-600 rounded-2xl p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <div className="text-3xl mb-3">{s.emoji}</div>
                <h3 className="font-bold text-gray-900 group-hover:text-white text-sm mb-1.5 transition-colors">{s.name}</h3>
                <p className="text-xs text-gray-500 group-hover:text-red-100 leading-relaxed transition-colors line-clamp-2">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg">From sign-up to game day in three easy steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Find Your League',  desc: 'Search by sport, neighborhood, and day. Filter to find the perfect fit for your schedule.' },
              { step: '02', title: 'Register Your Way', desc: 'Join as a free agent, create a team, join an existing one, or sign up as a substitute.' },
              { step: '03', title: 'Get on the Field',  desc: 'Show up, play hard, and stick around for the post-game hangout. That is where the real fun is.' },
            ].map(s => (
              <div key={s.step}>
                <div className="text-8xl font-black text-gray-800 leading-none mb-4 select-none">{s.step}</div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4">What Players Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8">
                <div className="text-5xl text-red-200 font-black leading-none mb-4 select-none">"</div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.area}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black mb-6">Ready to Play?</h2>
          <p className="text-red-100 text-xl mb-10 max-w-xl mx-auto">
            Find a league near you. Sign up as a free agent or bring your whole crew. Season spots fill fast.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/leagues" className="bg-white text-red-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-xl transition-colors text-base">
              Register Now
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-10 py-4 rounded-xl transition-all text-base">
              Corporate Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
