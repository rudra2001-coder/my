import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

let supabase = null

if (supabaseUrl && supabaseAnonKey && supabaseUrl !== 'https://your-project.supabase.co') {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export { supabase }
