import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const url = new URL(req.url)
  const path = url.pathname.split('/ateliers')[1] ?? ''

  // GET /stats
  if (req.method === 'GET' && path === '/stats') {
    const { data } = await supabase
      .from('ateliers_inscriptions')
      .select('atelier_id')

    const stats: Record<string, number> = {}
    for (const row of data ?? []) {
      stats[row.atelier_id] = (stats[row.atelier_id] ?? 0) + 1
    }
    return Response.json({ stats }, { headers: corsHeaders })
  }

  // GET /admin/list
  if (req.method === 'GET' && path === '/admin/list') {
    const { data, error } = await supabase
      .from('ateliers_inscriptions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      return Response.json({ error: error.message }, { status: 400, headers: corsHeaders })
    }
    return Response.json({ inscriptions: data }, { headers: corsHeaders })
  }

  // GET /user/:email
  if (req.method === 'GET' && path.startsWith('/user/')) {
    const email = decodeURIComponent(path.replace('/user/', ''))
    const { data } = await supabase
      .from('ateliers_inscriptions')
      .select('atelier_id')
      .eq('email', email)
      .maybeSingle()

    return Response.json({
      registered: !!data,
      atelierId: data?.atelier_id ?? null,
    }, { headers: corsHeaders })
  }

  // POST /register
  if (req.method === 'POST' && path === '/register') {
    const body = await req.json()
    const { atelierId, jauge, nom, prenom, email } = body

    const { count } = await supabase
      .from('ateliers_inscriptions')
      .select('*', { count: 'exact', head: true })
      .eq('atelier_id', atelierId)

    if ((count ?? 0) >= jauge) {
      return Response.json(
        { error: 'Cet atelier est complet' },
        { status: 400, headers: corsHeaders }
      )
    }

    const { error } = await supabase
      .from('ateliers_inscriptions')
      .insert({ atelier_id: atelierId, nom, prenom, email })

    if (error) {
      const msg = error.code === '23505'
        ? 'Vous êtes déjà inscrit·e à un atelier'
        : error.message
      return Response.json({ error: msg }, { status: 400, headers: corsHeaders })
    }

    return Response.json({ message: 'Inscription confirmée !' }, { headers: corsHeaders })
  }

  // DELETE /unregister/:email
  if (req.method === 'DELETE' && path.startsWith('/unregister/')) {
    const email = decodeURIComponent(path.replace('/unregister/', ''))
    const { error } = await supabase
      .from('ateliers_inscriptions')
      .delete()
      .eq('email', email)

    if (error) {
      return Response.json({ error: error.message }, { status: 400, headers: corsHeaders })
    }
    return Response.json({ message: 'Désinscription effectuée' }, { headers: corsHeaders })
  }

  return Response.json({ error: 'Route inconnue' }, { status: 404, headers: corsHeaders })
})