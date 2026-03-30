import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

const SPORTS = [
  { name: 'Soccer',        slug: 'soccer',        desc: 'The beautiful game, LA style. Coed teams, all skill levels, and post-game hangs at the bar.' },
  { name: 'Softball',      slug: 'softball',      desc: 'Classic slow-pitch coed softball. Grab your crew, swing for the fences, and hit the bar after.' },
  { name: 'Volleyball',    slug: 'volleyball',     desc: 'Outdoor 6v6 coed volleyball on grass. Rotating positions, competitive spirit, social vibes.' },
  { name: 'Flag Football', slug: 'flag-football',  desc: 'Fast-paced coed flag football. No tackling, all touchdowns, and plenty of trick plays.' },
  { name: 'Basketball',    slug: 'basketball',     desc: 'Competitive 5v5 coed basketball with organized refs, stat tracking, and real standings.' },
  { name: 'Kickball',      slug: 'kickball',       desc: 'Playground rules, adult fun. The sport that brings everyone together and requires zero athletic ability.' },
  { name: 'Cornhole',      slug: 'cornhole',       desc: 'Toss bags, talk trash, drink beers. The ultimate social sport for any skill level.' },
  { name: 'Pickleball',    slug: 'pickleball',     desc: 'The fastest-growing sport in America. Competitive doubles play with rotating partners and standings.' },
  { name: 'Bowling',       slug: 'bowling',        desc: 'League bowling with a social twist. Teams, themes, and a bar right there. What more do you need?' },
  { name: 'Running',       slug: 'running',        desc: 'Group runs through LA neighborhoods with social stops along the way. Not a race, it is a vibe.' },
  { name: 'Dodgeball',     slug: 'dodgeball',      desc: 'High-energy dodgeball in a gym setting. Quick rounds, big laughs, and zero mercy.' },
  { name: 'Tennis',        slug: 'tennis',         desc: 'Competitive doubles and singles play. Organized matches, skill-based divisions, and post-match drinks.' },
]

const OPEN_LEAGUES = [
  { sport:'Softball',      name:'Valley Softball (Monday)',           day:'Mondays',   time:'7:00 PM',  venue:'Van Nuys Sherman Oaks Park', neighborhood:'Valley',       fee:94,  code:'SPR26-SB-V01',  status:'open'  },
  { sport:'Soccer',        name:'Hollywood Soccer (Monday)',          day:'Mondays',   time:'7:00 PM',  venue:'Bernstein High School',      neighborhood:'Hollywood',    fee:113, code:'SPR26-SC-H01',  status:'open'  },
  { sport:'Softball',      name:'West LA Softball (Monday)',          day:'Mondays',   time:'7:00 PM',  venue:'Cheviot Hills Rec Center',   neighborhood:'Westside',     fee:89,  code:'SPR26-SB-W01',  status:'open'  },
  { sport:'Running',       name:'Santa Monica Run Club (Monday)',     day:'Mondays',   time:'6:30 PM',  venue:"Brennan's Pub",              neighborhood:'Santa Monica', fee:79,  code:'SPR26-RN-SM01', status:'open'  },
  { sport:'Pickleball',    name:'Santa Monica Pickleball (Monday)',   day:'Mondays',   time:'6:30 PM',  venue:'Santa Monica College',       neighborhood:'Santa Monica', fee:99,  code:'SPR26-PB-SM01', status:'open'  },
  { sport:'Softball',      name:'Valley Softball (Sunday)',           day:'Sundays',   time:'6:00 PM',  venue:'Sepulveda Basin Sports Complex', neighborhood:'Valley',   fee:89,  code:'SPRING-2026-SOFTBALL-SEPULVEDA-01', status:'open'  },
]

const STATS = [
  { val:'10,000+', label:'Players'            },
  { val:'70+',     label:'Leagues per Season' },
  { val:'10+',     label:'Sports'             },
  { val:'15+',     label:'Neighborhoods'      },
]

const TESTIMONIALS = [
  { quote:'Joined as a free agent and now I have a whole crew of friends I play with every week. Best decision I made this year.',              name:'Sarah M.',   area:'West LA'      },
  { quote:'The leagues are well organized, the refs are solid, and the post-game hangouts are always a good time. Highly recommend.',           name:'Marcus T.',  area:'Valley'       },
  { quote:"I was nervous to sign up alone, but the free agent system made it so easy to get placed on a team. Now I play three sports.",        name:'Jessica R.', area:'Santa Monica' },
]

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage:`url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1920&q=80')`}}
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-[#EF4A23] text-xs font-bold uppercase tracking-widest mb-3">
            A Smarter Way to Play
          </p>
          <div className="w-12 h-0.5 bg-[#EF4A23] mx-auto mb-8" />

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Find your<br />
            <span style={{color:'#EF4A23'}}>Team.</span>
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of players across 10+ sports, 70+ leagues, and neighborhoods all over LA. Find your league, meet your team, get on the field.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/leagues"
              className="bg-[#EF4A23] hover:bg-[#C7391A] text-white font-bold px-8 py-4 rounded-lg text-base transition-colors">
              Register Now
            </Link>
            <Link href="/leagues"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-lg text-base transition-all">
              Browse Sports
            </Link>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80"
              alt="Coed softball team at bat during a sunset game"
              className="rounded-2xl w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80"
              alt="Players diving for a volleyball on a beach court"
              className="rounded-2xl w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&q=80"
              alt="Flag football quarterback throwing a pass on a grass field"
              className="rounded-2xl w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* SPORTS GRID */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#EF4A23] text-xs font-bold uppercase tracking-widest mb-2">Choose Your Sport</p>
            <h2 className="font-display text-4xl font-bold text-[#1A1D3B]">10+ Sports Across LA.</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SPORTS.map(s => (
              <Link key={s.slug} href={`/sports/${s.slug}`}
                className="group bg-white hover:bg-[#2E3492] rounded-2xl p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border border-gray-100 hover:border-[#2E3492]">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-[#EF4A23] group-hover:bg-white/20 group-hover:text-white mb-3 transition-colors">{s.name}</span>
                <h3 className="font-display font-semibold text-[#1A1D3B] group-hover:text-white text-base mb-1.5 transition-colors">{s.name}</h3>
                <p className="text-xs text-gray-500 group-hover:text-blue-200 leading-relaxed transition-colors line-clamp-2">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN LEAGUES */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#EF4A23] text-xs font-bold uppercase tracking-widest mb-2">Now Registering</p>
            <h2 className="font-display text-4xl font-bold text-[#1A1D3B] mb-3">Open Leagues.</h2>
            <p className="text-gray-500 text-lg">Spots fill fast. Grab yours before the season kicks off.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OPEN_LEAGUES.map((l, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-5">
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-[#EF4A23]">{l.sport}</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">Open</span>
                </div>
                <h3 className="font-display font-semibold text-[#1A1D3B] text-base mb-1">{l.name}</h3>
                <p className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-4">{l.code}</p>
                <div className="space-y-1.5 mb-5">
                  <div className="flex items-center gap-2 text-sm text-gray-600"><span>📅</span><span>{l.day} at {l.time}</span></div>
                  <div className="flex items-center gap-2 text-sm text-gray-600"><span>📍</span><span>{l.venue}, {l.neighborhood}</span></div>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#1A1D3B]"><span>💰</span><span>${l.fee}/player</span></div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="flex-1 text-center border-2 border-[#2E3492] text-[#2E3492] hover:bg-[#2E3492] hover:text-white text-sm font-semibold py-2.5 rounded-xl transition-all">
                    Details
                  </button>
                  <Link href="/leagues"
                    className="flex-1 text-center bg-[#EF4A23] hover:bg-[#C7391A] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-8">
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&q=80"
                alt="Group of friends in sports jerseys cheering at a bar after a game"
                className="rounded-2xl w-64 h-40 object-cover"
              />
            </div>
            <Link href="/leagues"
              className="inline-flex items-center gap-2 bg-[#EF4A23] hover:bg-[#C7391A] text-white font-bold px-10 py-4 rounded-xl transition-colors text-base">
              View All Leagues
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="text-4xl font-display font-bold text-[#1A1D3B] mb-1">{s.val}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[#EF4A23] text-xs font-bold uppercase tracking-widest mb-2">What Players Say</p>
            <h2 className="font-display text-4xl font-bold text-[#1A1D3B]">Join the Community.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2E3492] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1D3B] text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.area}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-3">
              <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&q=80" alt="Teams group photo on a soccer field at golden hour" className="rounded-2xl w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80" alt="Players mingling at a post-game social event" className="rounded-2xl w-full h-48 object-cover mt-6" />
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80" alt="A cornhole tournament with players tossing bags" className="rounded-2xl w-full h-48 object-cover -mt-6" />
              <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=80" alt="Players celebrating after a game" className="rounded-2xl w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage:`url('https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1920&q=80')`}}
        />
        <div className="absolute inset-0 bg-[#1A1D3B]/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-5xl font-bold mb-6">Ready to Play?</h2>
          <p className="text-gray-300 text-xl mb-10 max-w-xl mx-auto">
            Find a league near you, sign up as a free agent or bring your crew. Season spots fill fast.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/leagues"
              className="bg-[#EF4A23] hover:bg-[#C7391A] text-white font-bold px-10 py-4 rounded-xl transition-colors text-base">
              Register Now
            </Link>
            <Link href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1A1D3B] font-bold px-10 py-4 rounded-xl transition-all text-base">
              Corporate Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </>
  )
}
