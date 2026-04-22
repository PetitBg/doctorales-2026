import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!
const RESEND_FROM = Deno.env.get('RESEND_FROM') ?? 'onboarding@resend.dev'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
}

// ─── Helpers email ─────────────────────────────────────────────────────────────

async function sendEmail(to: string, subject: string, html: string) {
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to,
      subject,
      html,
    }),
  })
}

function emailInscription(nom: string, prenom: string, atelierId: string, jour: string, horaire: string) {
  return `
    <div style="font-family: 'Montserrat', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
      <div style="background: linear-gradient(135deg, #B9177B, #AD947E); padding: 40px; text-align: center; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Inscription confirmée ✅</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">Journées Doctorales SFSIC 2026</p>
      </div>
      
      <div style="padding: 40px; background: #f9f9f9;">
        <p style="color: #354878; font-size: 18px;">Bonjour <strong>${prenom} ${nom}</strong>,</p>
        <p style="color: #555; line-height: 1.6;">Votre inscription a bien été enregistrée. Voici le récapitulatif :</p>
        
        <div style="background: white; border-radius: 12px; padding: 24px; margin: 24px 0; border-left: 4px solid #B9177B;">
          <p style="margin: 0 0 12px; color: #354878;"><strong>📋 Atelier :</strong> ${atelierId}</p>
          <p style="margin: 0 0 12px; color: #354878;"><strong>📅 Jour :</strong> ${jour}</p>
          <p style="margin: 0; color: #354878;"><strong>🕐 Horaire :</strong> ${horaire}</p>
        </div>

        <p style="color: #555; line-height: 1.6;">
          Pour vous désinscrire ou vérifier vos inscriptions, rendez-vous sur le site et utilisez la section "Vérifier mes inscriptions".
        </p>

        <p style="color: #888; font-size: 13px; margin-top: 32px;">
          Cet email a été envoyé automatiquement, merci de ne pas y répondre.
        </p>
      </div>

      <div style="background: #354878; padding: 20px; text-align: center; border-radius: 0 0 12px 12px;">
        <p style="color: rgba(255,255,255,0.7); margin: 0; font-size: 13px;">Journées Doctorales SFSIC 2026</p>
      </div>
    </div>
  `
}

function emailDesinscription(nom: string, prenom: string, atelierId: string, jour: string) {
  return `
    <div style="font-family: 'Montserrat', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
      <div style="background: linear-gradient(135deg, #354878, #6A9ECC); padding: 40px; text-align: center; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Désinscription confirmée</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">Journées Doctorales SFSIC 2026</p>
      </div>
      
      <div style="padding: 40px; background: #f9f9f9;">
        <p style="color: #354878; font-size: 18px;">Bonjour <strong>${prenom} ${nom}</strong>,</p>
        <p style="color: #555; line-height: 1.6;">Votre désinscription a bien été prise en compte :</p>
        
        <div style="background: white; border-radius: 12px; padding: 24px; margin: 24px 0; border-left: 4px solid #6A9ECC;">
          <p style="margin: 0 0 12px; color: #354878;"><strong>📋 Atelier :</strong> ${atelierId}</p>
          <p style="margin: 0; color: #354878;"><strong>📅 Jour :</strong> ${jour}</p>
        </div>

        <p style="color: #555; line-height: 1.6;">
          Vous pouvez vous réinscrire à tout moment sur le site si vous le souhaitez.
        </p>

        <p style="color: #888; font-size: 13px; margin-top: 32px;">
          Cet email a été envoyé automatiquement, merci de ne pas y répondre.
        </p>
      </div>

      <div style="background: #354878; padding: 20px; text-align: center; border-radius: 0 0 12px 12px;">
        <p style="color: rgba(255,255,255,0.7); margin: 0; font-size: 13px;">Journées Doctorales SFSIC 2026</p>
      </div>
    </div>
  `
}

function emailRappel(nom: string, prenom: string, atelierId: string, jour: string, horaire: string) {
  return `
    <div style="font-family: 'Montserrat', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
      <div style="background: linear-gradient(135deg, #B9177B, #354878); padding: 40px; text-align: center; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">🔔 Rappel — Atelier demain !</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">Journées Doctorales SFSIC 2026</p>
      </div>
      
      <div style="padding: 40px; background: #f9f9f9;">
        <p style="color: #354878; font-size: 18px;">Bonjour <strong>${prenom} ${nom}</strong>,</p>
        <p style="color: #555; line-height: 1.6;">
          Nous vous rappelons que vous êtes inscrit·e à un atelier <strong>demain</strong> :
        </p>
        
        <div style="background: white; border-radius: 12px; padding: 24px; margin: 24px 0; border-left: 4px solid #B9177B;">
          <p style="margin: 0 0 12px; color: #354878;"><strong>📋 Atelier :</strong> ${atelierId}</p>
          <p style="margin: 0 0 12px; color: #354878;"><strong>📅 Jour :</strong> ${jour}</p>
          <p style="margin: 0; color: #354878;"><strong>🕐 Horaire :</strong> ${horaire}</p>
        </div>

        <p style="color: #555; line-height: 1.6;">
          À demain ! N'hésitez pas à arriver quelques minutes en avance.
        </p>

        <p style="color: #888; font-size: 13px; margin-top: 32px;">
          Cet email a été envoyé automatiquement, merci de ne pas y répondre.
        </p>
      </div>

      <div style="background: #354878; padding: 20px; text-align: center; border-radius: 0 0 12px 12px;">
        <p style="color: rgba(255,255,255,0.7); margin: 0; font-size: 13px;">Journées Doctorales SFSIC 2026</p>
      </div>
    </div>
  `
}

// ─── Données ateliers (pour les emails) ───────────────────────────────────────
// Les ateliers initialement prévus le lundi 8 juin passent au mardi 9 juin
// Les ateliers initialement prévus le mardi 10 juin passent au mercredi 10 juin
const ATELIERS_INFO: Record<string, { horaire: string; jour: string }> = {
  // Anciens ateliers du lundi 8 juin → deviennent mardi 9 juin
  '1A': { jour: 'Mardi 9 juin', horaire: '9h - 10h30' },
  '2A': { jour: 'Mardi 9 juin', horaire: '9h - 10h30' },
  '3A': { jour: 'Mardi 9 juin', horaire: '9h - 10h30' },
  '4A': { jour: 'Mardi 9 juin', horaire: '9h - 10h30' },
  '5A': { jour: 'Mardi 9 juin', horaire: '9h - 10h30' },
  '6A': { jour: 'Mardi 9 juin', horaire: '9h - 10h30' },
  '7A': { jour: 'Mardi 9 juin', horaire: '9h - 10h30' },
  'TABLE_RONDE': { jour: 'Mardi 9 juin', horaire: '15h45 - 17h15' },
  '1B': { jour: 'Mardi 9 juin', horaire: '15h45 - 17h15' },
  '2B': { jour: 'Mardi 9 juin', horaire: '15h45 - 17h15' },
  '3B': { jour: 'Mardi 9 juin', horaire: '15h45 - 17h15' },
  '4B': { jour: 'Mardi 9 juin', horaire: '15h45 - 17h15' },
  '5B': { jour: 'Mardi 9 juin', horaire: '15h45 - 17h15' },
  // Anciens ateliers du mardi 10 juin → deviennent mercredi 10 juin
  '1C': { jour: 'Mercredi 10 juin', horaire: '11h - 12h30' },
  '2C': { jour: 'Mercredi 10 juin', horaire: '11h - 12h30' },
  '3C': { jour: 'Mercredi 10 juin', horaire: '11h - 12h30' },
  '4C': { jour: 'Mercredi 10 juin', horaire: '11h - 12h30' },
  '5C': { jour: 'Mercredi 10 juin', horaire: '11h - 12h30' },
  '6C': { jour: 'Mercredi 10 juin', horaire: '11h - 12h30' },
  '7C': { jour: 'Mercredi 10 juin', horaire: '11h - 12h30' },
}

// ─── Serveur ───────────────────────────────────────────────────────────────────

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

  // GET /user-all/:email
  if (req.method === 'GET' && path.startsWith('/user-all/')) {
    const email = decodeURIComponent(path.replace('/user-all/', ''))
    const { data } = await supabase
      .from('ateliers_inscriptions')
      .select('atelier_id, jour')
      .eq('email', email)

    const registrations: Record<string, string | null> = {
      lundi: null, mardi: null, mercredi: null,
    }
    for (const row of data ?? []) {
      if (row.jour) registrations[row.jour] = row.atelier_id
    }
    return Response.json({ registrations }, { headers: corsHeaders })
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
    const { atelierId, jauge, jour, nom, prenom, email } = body

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

    if (jour) {
      const { data: existingJour } = await supabase
        .from('ateliers_inscriptions')
        .select('atelier_id')
        .eq('email', email)
        .eq('jour', jour)
        .maybeSingle()

      if (existingJour) {
        return Response.json(
          { error: `Vous êtes déjà inscrit·e à un atelier ce jour (${existingJour.atelier_id})` },
          { status: 400, headers: corsHeaders }
        )
      }
    }

    const { error } = await supabase
      .from('ateliers_inscriptions')
      .insert({ atelier_id: atelierId, jour: jour ?? null, nom, prenom, email })

    if (error) {
      return Response.json({ error: error.message }, { status: 400, headers: corsHeaders })
    }

    // Envoyer email de confirmation
    const info = ATELIERS_INFO[atelierId]
    if (info) {
      await sendEmail(
        email,
        `✅ Inscription confirmée — Atelier ${atelierId}`,
        emailInscription(nom, prenom, atelierId, info.jour, info.horaire)
      )
    }

    return Response.json({ message: 'Inscription confirmée ! Un email de confirmation vous a été envoyé.' }, { headers: corsHeaders })
  }

  // DELETE /unregister-jour/:email/:jour
  if (req.method === 'DELETE' && path.startsWith('/unregister-jour/')) {
    const parts = path.replace('/unregister-jour/', '').split('/')
    const email = decodeURIComponent(parts[0])
    const jour = parts[1]

    // Récupérer les infos avant suppression
    const { data: inscription } = await supabase
      .from('ateliers_inscriptions')
      .select('atelier_id, nom, prenom')
      .eq('email', email)
      .eq('jour', jour)
      .maybeSingle()

    const { error } = await supabase
      .from('ateliers_inscriptions')
      .delete()
      .eq('email', email)
      .eq('jour', jour)

    if (error) {
      return Response.json({ error: error.message }, { status: 400, headers: corsHeaders })
    }

    // Envoyer email de désinscription avec les dates mises à jour
    if (inscription) {
      // Mapping des jours pour les emails : lundi n'est plus utilisé, mardi devient mercredi 10 juin ? Non, on suit la logique :
      // Les inscriptions existantes en base peuvent avoir 'lundi', 'mardi', 'mercredi' comme valeurs du champ jour.
      // Après modification, les ateliers sont désormais les mardi 9 juin (ex-lundi) et mercredi 10 juin (ex-mardi).
      // On adapte l'affichage dans l'email.
      let jourLabel = ''
      if (jour === 'lundi') jourLabel = 'Mardi 9 juin'
      else if (jour === 'mardi') jourLabel = 'Mercredi 10 juin'
      else if (jour === 'mercredi') jourLabel = 'Mercredi 10 juin'
      else jourLabel = jour
      await sendEmail(
        email,
        `Désinscription confirmée — Atelier ${inscription.atelier_id}`,
        emailDesinscription(inscription.nom, inscription.prenom, inscription.atelier_id, jourLabel)
      )
    }

    return Response.json({ message: 'Désinscription effectuée. Un email de confirmation vous a été envoyé.' }, { headers: corsHeaders })
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

  // POST /send-rappels — à appeler la veille des ateliers
  if (req.method === 'POST' && path === '/send-rappels') {
    const body = await req.json()
    const { jour } = body

    const { data: inscriptions } = await supabase
      .from('ateliers_inscriptions')
      .select('*')
      .eq('jour', jour)

    let count = 0
    for (const inscription of inscriptions ?? []) {
      const info = ATELIERS_INFO[inscription.atelier_id]
      if (info) {
        await sendEmail(
          inscription.email,
          `🔔 Rappel — Votre atelier demain : ${inscription.atelier_id}`,
          emailRappel(inscription.nom, inscription.prenom, inscription.atelier_id, info.jour, info.horaire)
        )
        count++
      }
    }

    return Response.json({ message: `${count} rappel(s) envoyé(s)` }, { headers: corsHeaders })
  }

  return Response.json({ error: 'Route inconnue' }, { status: 404, headers: corsHeaders })
})