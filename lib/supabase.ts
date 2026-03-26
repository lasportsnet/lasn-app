import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co'
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'placeholder'

export const supabase = createClient(url, key)

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
  status: string
  max_teams: number
  team_count: number
  league_code: string
  season: string
  description: string
  created_at: string
}
