# LA Sports Net — New Platform

The next generation of lasportsnet.com. Built with Next.js 14, Supabase, and Tailwind CSS.

## Tech Stack
- **Next.js 14** — React framework with App Router
- **Supabase** — Database and authentication
- **Tailwind CSS** — Styling
- **Vercel** — Hosting and deployment

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables — copy `.env.local` and fill in your Supabase keys.

3. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure
```
app/
  page.tsx          — Homepage
  leagues/
    page.tsx        — All leagues with filters
    [id]/page.tsx   — League detail + registration flow
  sports/
    [slug]/page.tsx — Sport landing pages
components/
  Nav.tsx           — Navigation
  Footer.tsx        — Footer
lib/
  supabase.ts       — Database client
```

## Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```
