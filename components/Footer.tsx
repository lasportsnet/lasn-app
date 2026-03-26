import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-lasn-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-display font-bold text-xl text-white tracking-tight">LASPORTSNET</span>
              <p className="text-blue-300 text-xs tracking-widest uppercase mt-1">A Smarter Way to Play</p>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              The largest adult social sports organization in Los Angeles. 10,000+ players, 70+ leagues per season.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://facebook.com/lasportsnet" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-white transition-colors text-sm">Facebook</a>
              <a href="https://instagram.com/lasportsnet" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-white transition-colors text-sm">Instagram</a>
            </div>
          </div>

          {/* Sports */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Sports</h3>
            <ul className="space-y-2">
              {['Soccer','Softball','Volleyball','Flag Football','Basketball','Kickball','Cornhole','Pickleball','Bowling','Running'].map(s => (
                <li key={s}>
                  <Link href={`/sports/${s.toLowerCase().replace(' ','-')}`}
                    className="text-sm text-blue-300 hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { label: 'About',            href: '/about'     },
                { label: 'Corporate Events', href: '/corporate' },
                { label: 'Contact',          href: '/contact'   },
                { label: 'FAQs',             href: '/faq'       },
                { label: 'LASN Cup',         href: '/cup'       },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-blue-300 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li><a href="mailto:info@lasportsnet.com" className="text-sm text-blue-300 hover:text-white transition-colors">info@lasportsnet.com</a></li>
              <li><a href="tel:+13106997021" className="text-sm text-blue-300 hover:text-white transition-colors">(310) 699-7021</a></li>
            </ul>
            <div className="mt-6">
              <Link href="/leagues" className="btn-primary">Register Now</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-blue-400">© 2026 LA Sports Net. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-blue-400 hover:text-blue-200 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="text-xs text-blue-400 hover:text-blue-200 transition-colors">Terms of Service</Link>
            <Link href="/refunds" className="text-xs text-blue-400 hover:text-blue-200 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
