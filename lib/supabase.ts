import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type League = {
  id: string
  name: string
  sport: string
  day: string
  venue: string
  location: string
  neighborhood: string
  start_time: string
  fee: number
  price_per_player: number
  status: 'open' | 'full' | 'waitlist' | 'closed'
  max_teams: number
  team_count: number
  league_code: string
  season: string
  description: string
  created_at: string
}
