import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const LEAGUES = [
  { sport:'Running',       name:'Santa Monica Run Club (Monday)',      day:'Mondays',    time:'6:30 PM',  venue:"Brennan's Pub",                 neighborhood:'Santa Monica', fee:79,  code:'SPR26-RN-SM01', status:'open'     },
  { sport:'Softball',      name:'West LA Softball (Monday)',           day:'Mondays',    time:'7:00 PM',  venue:'Cheviot Hills Rec Center',       neighborhood:'Westside',     fee:99,  code:'SPR26-SB-W01',  status:'open'     },
  { sport:'Pickleball',    name:'Santa Monica Pickleball (Monday)',    day:'Mondays',    time:'6:30 PM',  venue:'Santa Monica College',           neighborhood:'Santa Monica', fee:99,  code:'SPR26-PB-SM01', status:'open'     },
  { sport:'Softball',      name:'Valley Softball (Monday)',            day:'Mondays',    time:'7:00 PM',  venue:'Van Nuys Sherman Oaks Park',     neighborhood:'Valley',       fee:94,  code:'SPR26-SB-V01',  status:'open'     },
  { sport:'Soccer',        name:'Hollywood Soccer (Monday)',           day:'Mondays',    time:'7:00 PM',  venue:'Bernstein High School',          neighborhood:'Hollywood',    fee:94,  code:'SPR26-SC-H01',  status:'open'     },
  { sport:'Volleyball',    name:'Santa Monica Volleyball (Saturday)',  day:'Saturdays',  time:'10:00 AM', venue:'Annenberg Beach House',          neighborhood:'Santa Monica', fee:99,  code:'SPR26-VB-SM01', status:'full'     },
  { sport:'Basketball',    name:'South Bay Basketball (Sunday)',       day:'Sundays',    time:'10:00 AM', venue:'Dee Hardison Sports Center',     neighborhood:'South Bay',    fee:109, code:'SPR26-BK-SB01', status:'open'     },
  { sport:'Flag Football', name:'Valley Flag Football (Sunday)',       day:'Sundays',    time:'10:00 AM', venue:'Sepulveda Basin Sports Complex', neighborhood:'Valley',       fee:89,  code:'SPR26-FF-V01',  status:'open'     },
  { sport:'Volleyball',    name:'Valley Volleyball (Thursday)',        day:'Thursdays',  time:'7:30 PM',  venue:'East Valley High School',        neighborhood:'Valley',       fee:84,  code:'SPR26-VB-V01',  status:'open'     },
  { sport:'Bowling',       name:'Glendale Bowling (Thursday)',         day:'Thursdays',  time:'7:30 PM',  venue:'Back Alley Bowling',             neighborhood:'Glendale',     fee:89,  code:'SPR26-BW-G01',  status:'open'     },
  { sport:'Soccer',        name:'Valley Soccer (Thursday)',            day:'Thursdays',  time:'7:00 PM',  venue:'Whitsett Sports Field',          neighborhood:'Valley',       fee:89,  code:'SPR26-SC-V02',  status:'waitlist' },
  { sport:'Basketball',    name:'Hollywood Basketball (Thursday)',     day:'Thursdays',  time:'7:30 PM',  venue:'Bernstein High School',          neighborhood:'Hollywood',    fee:109, code:'SPR26-BK-H01',  status:'waitlist' },
  { sport:'Kickball',      name:'Valley Kickball (Thursday)',          day:'Thursdays',  time:'7:00 PM',  venue:'Whitsett Sports Field',          neighborhood:'Valley',       fee:84,  code:'SPR26-KB-V01',  status:'open'     },
  { sport:'Volleyball',    name:'Hollywood Volleyball (Tuesday)',      day:'Tuesdays',   time:'7:00 PM',  venue:'Bernstein High School',          neighborhood:'Hollywood',    fee:89,  code:'SPR26-VB-H01',  status:'open'     },
  { sport:'Flag Football', name:'Hollywood Flag Football (Tuesday)',   day:'Tuesdays',   time:'7:00 PM',  venue:'Bernstein High School',          neighborhood:'Hollywood',    fee:89,  code:'SPR26-FF-H01',  status:'open'     },
  { sport:'Kickball',      name:'West LA Kickball (Tuesday)',          day:'Tuesdays',   time:'7:00 PM',  venue:'Stoner Recreation Center',       neighborhood:'Westside',     fee:84,  code:'SPR26-KB-W01',  status:'open'     },
  { sport:'Soccer',        name:'Westside Soccer (Tuesday)',           day:'Tuesdays',   time:'7:00 PM',  venue:'Obama Sports Complex',           neighborhood:'Westside',     fee:99,  code:'SPR26-SC-W01',  status:'full'     },
  { sport:'Cornhole',      name:'Valley Cornhole (Wednesday)',         day:'Wednesdays', time:'7:00 PM',  venue:'The Oaks',                       neighborhood:'Valley',       fee:79,  code:'SPR26-CH-V01',  status:'open'     },
  { sport:'Volleyball',    name:'Westchester Volleyball (Wednesday)',  day:'Wednesdays', time:'7:00 PM',  venue:'Westchester Rec Center',         neighborhood:'Westside',     fee:89,  code:'SPR26-VB-WC01', status:'open'     },
  { sport:'Softball',      name:'Valley Softball (Wednesday)',         day:'Wednesdays', time:'7:00 PM',  venue:'Balboa Recreation Center',       neighborhood:'Valley',       fee:94,  code:'SPR26-SB-V02',  status:'open'     },
  { sport:'Soccer',        name:'Valley Soccer (Wednesday)',           day:'Wednesdays', time:'7:00 PM',  venue:'Sepulveda Basin Sports Complex', neighborhood:'Valley',       fee:89,  code:'SPR26-SC-V01',  status:'open'     },
  { sport:'Softball',      name:'Valley Softball (Thursday)',          day:'Thursdays',  time:'7:00 PM',  venue:'Sepulveda Basin Sports Complex', neighborhood:'Valley',       fee:94,  code:'SPR26-SB-V03',  status:'full'     },
]

export default function LeaguesPage() {
  const openCount = LEAGUES.filter(l => l.status === 'open').length

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-gray-100">

        {/* Header */}
        <div className="bg-lasn-navy text-white py-14 px-4 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-lasn-orange" />
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">Spring 2026</p>
            <h1 className="font-display text-5xl font-bold text-white mb-3">All Leagues.</h1>
            <p className="text-blue-300 text-lg">{LEAGUES.length} leagues this season. {openCount} spots open now.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Filters */}
          <div className="bg-white rounded-2xl border border-lasn-border shadow-sm p-5 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <select className="w-full border border-lasn-border rounded-xl px-4 py-3 text-sm text-lasn-navy bg-gray-50 focus:outline-none focus:border-lasn-blue transition-all">
                <option>All Sports</option>
                {['Soccer','Softball','Volleyball','Flag Football','Basketball','Kickball','Cornhole','Pickleball','Bowling','Running','Dodgeball','Tennis'].map(s=><option key={s}>{s}</option>)}
              </select>
              <select className="w-full border border-lasn-border rounded-xl px-4 py-3 text-sm text-lasn-navy bg-gray-50 focus:outline-none focus:border-lasn-blue transition-all">
                <option>All Neighborhoods</option>
                {['Hollywood','Valley','Westside','Santa Monica','South Bay','Glendale','Pasadena','Alhambra','Downtown LA'].map(n=><option key={n}>{n}</option>)}
              </select>
              <select className="w-full border border-lasn-border rounded-xl px-4 py-3 text-sm text-lasn-navy bg-gray-50 focus:outline-none focus:border-lasn-blue transition-all">
                <option>Any Day</option>
                {['Mondays','Tuesdays','Wednesdays','Thursdays','Fridays','Saturdays','Sundays'].map(d=><option key={d}>{d}</option>)}
              </select>
            </div>
          </div>

          <p className="text-sm text-lasn-cool mb-6">Showing <span className="font-semibold text-lasn-navy">{LEAGUES.length}</span> leagues</p>

          {/* League grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {LEAGUES.map((l, i) => (
              <div key={i} className="bg-white rounded-2xl border border-lasn-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-5">

                <div className="flex items-start justify-between mb-3">
                  <span className="pill-sport">{l.sport}</span>
                  {l.status === 'open'     && <span className="pill-open">Open</span>}
                  {l.status === 'waitlist' && <span className="pill-waitlist">Waitlist</span>}
                  {l.status === 'full'     && <span className="pill-full">Full</span>}
                </div>

                <h3 className="font-display font-semibold text-lasn-navy text-base mb-1 leading-snug">{l.name}</h3>
                <p className="data-mono mb-4">League ID: {l.code}</p>

                <div className="space-y-1.5 mb-5">
                  <div className="flex items-center gap-2 text-sm text-lasn-slate"><span>📅</span><span>{l.day} at {l.time}</span></div>
                  <div className="flex items-center gap-2 text-sm text-lasn-slate"><span>📍</span><span>{l.venue}, {l.neighborhood}</span></div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-lasn-navy"><span>💰</span><span>${l.fee}/player</span></div>
                </div>

                <div className="flex gap-2">
                  <Link href="/contact"
                    className="flex-1 text-center border-2 border-lasn-blue text-lasn-blue hover:bg-lasn-blue hover:text-white text-sm font-semibold py-2.5 rounded-xl transition-all">
                    Details
                  </Link>
                  {l.status !== 'full' && (
                    <Link href="/contact"
                      className="flex-1 text-center bg-lasn-orange hover:bg-lasn-orange-dark text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
                      Register Now
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
