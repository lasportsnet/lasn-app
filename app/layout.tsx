import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LA Sports Net | Adult Sports Leagues in Los Angeles',
  description: 'The largest adult social sports organization in Los Angeles. Soccer, softball, volleyball, basketball, flag football, kickball, cornhole, pickleball, bowling, running and more.',
  keywords: 'adult sports leagues Los Angeles, LA sports, recreational leagues LA, coed sports LA',
  openGraph: {
    title: 'LA Sports Net | Adult Sports Leagues in Los Angeles',
    description: 'Join thousands of players across 10+ sports and 70+ leagues all over LA.',
    url: 'https://www.lasportsnet.com',
    siteName: 'LA Sports Net',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body className="font-body antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
