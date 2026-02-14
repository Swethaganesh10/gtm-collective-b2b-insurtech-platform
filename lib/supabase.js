import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dvsoztxdmdigkdwctkbj.supabase.co'
const supabaseKey = 'sb_publishable_KDPDtw-L2qpSbWkILvrQgg_xwGeXB9x'

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  },
  global: {
    headers: {
      'apikey': supabaseKey
    }
  }
})