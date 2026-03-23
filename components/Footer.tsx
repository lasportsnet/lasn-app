import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <span className="text-white font-black text-xl tracking-tight">LASPORTSNET</span>
              <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">A Smarter Way to Play</p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              The largest adult social sports organization in Los Angeles. 10,000+ players, 70+ leagues per season.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://facebook.com/lasportsnet" target="_blank" rel="noreferrer"
                className="text-gray-500 hover:text-white transition-colors text-sm">Facebook</a>
              <a href="https://instagram.com/lasportsnet" target="_blank" rel="noreferrer"
                className="text-gray-500 hover:text-white transition-colors text-sm">Instagram</a>
            </div>
          </div>

          {/* Sports */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Sports</h3>
            <ul className="space-y-2">
              {['Soccer','Softball','Volleyball','Flag Football','Basketball','Kickball','Cornhole','Pickleball','Bowling','Running'].map(s => (
                <li key={s}>
                  <Link href={`/sports/${s.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '/about' },
                { label: 'Corporate Events', href: '/corporate' },
                { label: 'Contact', href: '/contact' },
                { label: 'FAQs', href: '/faq' },
                { label: 'LASN Cup', href: '/cup' },
                { label: 'Golf (LASN Golf)', href: 'https://lasngolf.com' },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@lasportsnet.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors">
                  info@lasportsnet.com
                </a>
              </li>
              <li>
                <a href="tel:+13106997021"
                  className="text-sm text-gray-400 hover:text-white transition-colors">
                  (310) 699-7021
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/leagues"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
                Register Now
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2026 LA Sports Net. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy"  className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms"    className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/refunds"  className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
