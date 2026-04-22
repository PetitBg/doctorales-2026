import { Lightbulb, Clock, Users, Calendar, Mail, UserCheck, X, Check, Info, AlertCircle } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

// ─── Types ────────────────────────────────────────────────────────────────────

interface AteliersPageProps {
  onNavigate: (page: string, params?: unknown) => void;
}

interface Atelier {
  id: string;
  code: string;
  titre: string;
  animateur: string;
  description: string;
  jauge: number;
  jour: 'lundi' | 'mardi' | 'mercredi';
  date: string;
  horaire: string;
  tag?: string;
}

interface FormData {
  nom: string;
  prenom: string;
  email: string;
}

interface UserRegistrations {
  lundi: string | null;
  mardi: string | null;
  mercredi: string | null;
}

interface Message {
  type: 'success' | 'error';
  text: string;
}

// ─── Données ──────────────────────────────────────────────────────────────────

const ateliers: Atelier[] = [
  // ── LUNDI 9 juin – 9h à 10h30 ──────────────────────────────────────────────
  {
    id: '1A', code: 'Atelier 1A', jour: 'lundi', date: '9 juin', horaire: '9h - 10h30',
    titre: "(In)corporer notre recherche - Médiation de la recherche en SIC",
    animateur: "Sonia Nikitin, Doctorante en sciences de l'information et de la communication, ELICO, Université Lumière Lyon 2",
    description: "L'atelier « (in)corporer notre recherche » consiste à expérimenter une relation corporelle, somatique, à sa propre recherche. L'atelier se compose des temps suivants : échauffement corporel, exploration en mouvement, documentation par l'écrit ou le dessin et partage collectif.",
    jauge: 10, tag: 'ASC',
  },
  {
    id: '2A', code: 'Atelier 2A', jour: 'lundi', date: '9 juin', horaire: '9h - 10h30',
    titre: 'Techno-performance "Usages artistiques In-Disciplinaires de l\'IA"',
    animateur: 'Diana Rosette Luciano, Doctorante, LLSETI, USMB',
    description: "Cet atelier se propose de présenter et mettre en discussion une technoperformance, projet artistique et méthodologique inscrit dans la recherche-création doctorale. Cette recherche analyse les interactions entre des artistes performers et un système d'IA générative.",
    jauge: 20, tag: 'ASC',
  },
  {
    id: '3A', code: 'Atelier 3A', jour: 'lundi', date: '9 juin', horaire: '9h - 10h30',
    titre: 'Créer une communauté de doctorant·e·s en ligne : la plateforme M@iautic',
    animateur: 'Alexandra Salou (IMSIC) et Claire Noy (Lerass)',
    description: "Découvrez M@ieutic, une plateforme pensée avec et pour les doctorant·es, pour échanger, collaborer et faire circuler les données autrement.",
    jauge: 40,
  },
  {
    id: '4A', code: 'Atelier 4A', jour: 'lundi', date: '9 juin', horaire: '9h - 10h30',
    titre: 'Rédiger des articles scientifiques pour les primo-rédact·eur·rice·s',
    animateur: 'Fanny Bougenies & Julies Bruscq (Commission Formation SFSIC)',
    description: "Cet atelier a pour objectif de vous familiariser avec les processus de publication d'articles scientifiques, requis pour votre dossier de qualification.",
    jauge: 15,
  },
  {
    id: '5A', code: 'Atelier 5A', jour: 'lundi', date: '9 juin', horaire: '9h - 10h30',
    titre: "Répondre à des offres d'emploi quand on est jeune docteur·e (hors poste d'enseignant·e-chercheur·euse)",
    animateur: 'Fanny Bougenies, Julie Brusq, Julien Péquignot, Laurie Schmitt, Virginie Sonet + Valérie Croissant',
    description: "Cet atelier est consacré à la valorisation des acquis professionnels au cours de la thèse.",
    jauge: 15,
  },
  {
    id: '6A', code: 'Atelier 6A', jour: 'lundi', date: '9 juin', horaire: '9h - 10h30',
    titre: 'Constituer son dossier de qualification aux fonctions de maître·sse de conférence',
    animateur: 'Julien Péquignot + Aurélie + Johanne + Fanny G.',
    description: "Cet atelier pratique en lien avec le CNU a pour but d'optimiser la constitution de son dossier de qualification et sa rédaction.",
    jauge: 15,
  },
  {
    id: '7A', code: 'Atelier 7A', jour: 'lundi', date: '9 juin', horaire: '9h - 10h30',
    titre: 'Participer à la campagne MCF synchronisée : comprendre une fiche de poste, adapter son dossier et préparer son audition',
    animateur: 'Virginie Sonet & Laurie Schmitt',
    description: "Cet atelier propose un temps de travail concret consacré à la campagne synchronisée de recrutement des maîtres de conférences.",
    jauge: 15,
  },
  // ── LUNDI 9 juin – 15h45 à 17h15 ───────────────────────────────────────────
  {
    id: 'TABLE_RONDE', code: 'Table ronde', jour: 'lundi', date: '9 juin', horaire: '15h45 - 17h15',
    titre: "Violences et harcèlement sexistes et sexuels dans l'ESR : enjeux, pratiques et responsabilités",
    animateur: "Une chercheuse en SHS spécialisée dans les VHSS, une représentante d'association, Giuseppina Sapio, Sara Lespagnandelle",
    description: "La table ronde s'adressera tant aux jeunes chercheur·euses qu'aux titulaires. Elle se déroulera en plusieurs temps, qui permettront de croiser les expertises sur les différents aspects et enjeux des violences sexistes et sexuelles dans le monde universitaire.",
    jauge: 40,
  },
  {
    id: '1B', code: 'Atelier 1B', jour: 'lundi', date: '9 juin', horaire: '15h45 - 17h15',
    titre: "Auto-organisation en recherche doctorale : comment concilier ambition collective et réalités individuelles ?",
    animateur: 'Nodra MOUTAROU, Aliénor PETIOT, Marie TREMBLAY (LabSIC, USPN)',
    description: "L'organisation d'événements scientifiques par et pour les jeunes chercheurs·euses non-titulaires apparaît comme une manière de dépasser l'isolement doctoral.",
    jauge: 15,
  },
  {
    id: '2B', code: 'Atelier 2B', jour: 'lundi', date: '9 juin', horaire: '15h45 - 17h15',
    titre: 'Constituer son dossier de qualification aux fonctions de maître·sse de conférence',
    animateur: 'Julien Péquignot + Aurélie + Johanne + Fanny G.',
    description: "Cet atelier pratique en lien avec le CNU a pour but d'optimiser la constitution de son dossier de qualification et sa rédaction.",
    jauge: 15,
  },
  {
    id: '3B', code: 'Atelier 3B', jour: 'lundi', date: '9 juin', horaire: '15h45 - 17h15',
    titre: 'Participer à la campagne MCF synchronisée',
    animateur: 'Virginie Sonet & Laurie Schmitt',
    description: "Cet atelier propose un temps de travail concret consacré à la campagne synchronisée de recrutement des maîtres de conférences.",
    jauge: 15,
  },
  {
    id: '4B', code: 'Atelier 4B', jour: 'lundi', date: '9 juin', horaire: '15h45 - 17h15',
    titre: 'La méthode ethnographique en SIC',
    animateur: 'Johanne Samè et Allan Deneuville',
    description: "Comment pratiquer la méthode ethnographique en sciences de l'information et de la communication ? Cet atelier propose d'explorer les dimensions concrètes et réflexives de l'enquête ethnographique.",
    jauge: 20,
  },
  {
    id: '5B', code: 'Atelier 5B', jour: 'lundi', date: '9 juin', horaire: '15h45 - 17h15',
    titre: "Répondre à des offres d'emploi quand on est jeune docteur·e (hors poste d'enseignant·e-chercheur·euse)",
    animateur: 'Fanny Bougenies, Julie Brusq, Julien Péquignot, Laurie Schmitt, Virginie Sonet + Valérie Croissant',
    description: "Valorisation des acquis professionnels au cours de la thèse et accompagnement dans les candidatures hors fonction d'enseignant·e-chercheur·euse.",
    jauge: 15,
  },
  // ── MARDI 10 juin – 11h à 12h30 ─────────────────────────────────────────────
  {
    id: '1C', code: 'Atelier 1C', jour: 'mardi', date: '10 juin', horaire: '11h - 12h30',
    titre: 'Atelier BD de la thèse',
    animateur: 'Valériane Loison & Pascal Génot',
    description: "L'objectif de cet atelier est d'amener chaque doctorant·e à concevoir une planche de bande dessinée mettant en lumière un aspect central de sa thèse.",
    jauge: 10, tag: 'ASC',
  },
  {
    id: '2C', code: 'Atelier 2C', jour: 'mardi', date: '10 juin', horaire: '11h - 12h30',
    titre: 'Jeu de rôle narratif "Kama"',
    animateur: 'Geoffrey Lavigne, doctorant (CESCO et Cerlis)',
    description: "L'atelier KAMA-MUTA est un jeu de rôle narratif conçu dans le cadre d'un projet de recherche-création portant sur les futurs de la nature en milieu urbain.",
    jauge: 20, tag: 'ASC',
  },
  {
    id: '3C', code: 'Atelier 3C', jour: 'mardi', date: '10 juin', horaire: '11h - 12h30',
    titre: 'Publication en anglais dans des revues internationales de premier plan',
    animateur: 'Commission RI, Zhao Alexandre Huang',
    description: "Cet atelier méthodologique propose une introduction structurée aux stratégies de publication dans les revues anglophones à fort impact.",
    jauge: 20,
  },
  {
    id: '4C', code: 'Atelier 4C', jour: 'mardi', date: '10 juin', horaire: '11h - 12h30',
    titre: 'Méthode ethnographique en SIC',
    animateur: 'Johanne Samè et Allan Deneuville',
    description: "Explorer les dimensions concrètes et réflexives de l'enquête ethnographique : écrire et décrire son terrain, mobiliser différents supports.",
    jauge: 20,
  },
  {
    id: '5C', code: 'Atelier 5C', jour: 'mardi', date: '10 juin', horaire: '11h - 12h30',
    titre: 'Rédiger des articles scientifiques pour les primo-rédact·eur·rice·s',
    animateur: 'Fanny Bougenies & Julies Bruscq (Commission Formation SFSIC)',
    description: "Familiarisation avec les processus de publication d'articles scientifiques, requis pour votre dossier de qualification.",
    jauge: 15,
  },
  {
    id: '6C', code: 'Atelier 6C', jour: 'mardi', date: '10 juin', horaire: '11h - 12h30',
    titre: "Répondre à des offres d'emploi quand on est jeune docteur·e",
    animateur: 'Fanny Bougenies, Julie Brusq, Julien Péquignot, Laurie Schmitt, Virginie Sonet + Valérie Croissant',
    description: "Valorisation des compétences liées au doctorat pour des postes hors enseignement-recherche.",
    jauge: 15,
  },
  {
    id: '7C', code: 'Atelier 7C', jour: 'mardi', date: '10 juin', horaire: '11h - 12h30',
    titre: 'Constituer son dossier de qualification aux fonctions de maître·sse de conférence',
    animateur: 'Julien Péquignot + Johanne + Aurélie + Fanny G.',
    description: "Optimiser la constitution de son dossier de qualification et sa rédaction en lien avec le CNU.",
    jauge: 15,
  },
];

// ─── Helpers API ───────────────────────────────────────────────────────────────

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-7e04106c/ateliers`;
const AUTH_HEADERS = { Authorization: `Bearer ${publicAnonKey}` };

async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, { headers: AUTH_HEADERS });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Erreur réseau' }));
    throw new Error(err.error ?? 'Erreur réseau');
  }
  return res.json() as Promise<T>;
}

async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...AUTH_HEADERS },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({ error: 'Erreur réseau' }));
  if (!res.ok) throw new Error(data.error ?? 'Erreur réseau');
  return data as T;
}

async function apiDelete<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'DELETE',
    headers: AUTH_HEADERS,
  });
  const data = await res.json().catch(() => ({ error: 'Erreur réseau' }));
  if (!res.ok) throw new Error(data.error ?? 'Erreur réseau');
  return data as T;
}

// ─── Constantes ───────────────────────────────────────────────────────────────

const JOURS = ['lundi', 'mardi', 'mercredi'] as const;
type Jour = typeof JOURS[number];

const JOUR_LABELS: Record<Jour, string> = {
  lundi:    'Lundi 9 juin',
  mardi:    'Mardi 10 juin',
  mercredi: 'Mercredi 11 juin',
};

const JOUR_COLORS: Record<Jour, { bg: string; border: string; text: string; badge: string }> = {
  lundi:    { bg: 'from-[#354878] to-[#6A9ECC]', border: 'border-[#354878]', text: 'text-[#354878]', badge: 'bg-[#354878]' },
  mardi:    { bg: 'from-[#B9177B] to-[#AD947E]', border: 'border-[#B9177B]', text: 'text-[#B9177B]', badge: 'bg-[#B9177B]' },
  mercredi: { bg: 'from-[#6A9ECC] to-[#354878]', border: 'border-[#6A9ECC]', text: 'text-[#6A9ECC]', badge: 'bg-[#6A9ECC]' },
};

const INITIAL_FORM: FormData = { nom: '', prenom: '', email: '' };

// ─── Composants utilitaires ────────────────────────────────────────────────────

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span className={`${color} text-white px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap`}>
      {label}
    </span>
  );
}

function OccupancyBar({ inscrits, jauge }: { inscrits: number; jauge: number }) {
  const placesRestantes = jauge - inscrits;
  const complet = placesRestantes <= 0;
  const pct = Math.min((inscrits / jauge) * 100, 100);
  const barColor = complet ? 'bg-red-500' : placesRestantes <= 5 ? 'bg-orange-500' : 'bg-green-500';
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-600">Places</span>
        <span className={`font-bold ${complet ? 'text-red-600' : 'text-green-600'}`}>
          {placesRestantes} / {jauge}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div className={`h-3 rounded-full transition-all ${barColor}`} style={{ width: `${pct}%` }} />
      </div>
    </>
  );
}

// ─── Popup alerte ──────────────────────────────────────────────────────────────

function AlertPopup({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true">
      <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full">
        <div className="flex items-start gap-4 mb-4">
          <AlertCircle size={32} className="text-red-500 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#354878] mb-2">Attention</h3>
            <p className="text-gray-700">{message}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Fermer">
            <X size={24} />
          </button>
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="px-6 py-2 bg-[#354878] text-white rounded-lg hover:bg-[#6A9ECC] transition-colors font-medium">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Popup détails ─────────────────────────────────────────────────────────────

function DetailsPopup({
  atelier, placesRestantes, complet, onClose, onInscription,
}: {
  atelier: Atelier; placesRestantes: number; complet: boolean;
  onClose: () => void; onInscription: () => void;
}) {
  const colors = JOUR_COLORS[atelier.jour];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-3 flex-wrap">
            <Badge label={atelier.code} color={colors.badge} />
            {atelier.tag && <Badge label={atelier.tag} color="bg-[#B9177B]" />}
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors ml-4" aria-label="Fermer">
            <X size={28} />
          </button>
        </div>
        <h2 className={`text-2xl font-bold ${colors.text} mb-4`}>{atelier.titre}</h2>
        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Calendar size={20} className="text-[#B9177B]" />
            <div>
              <p className="text-xs text-gray-600">Date</p>
              <p className={`font-semibold ${colors.text}`}>{JOUR_LABELS[atelier.jour]}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-[#B9177B]" />
            <div>
              <p className="text-xs text-gray-600">Horaire</p>
              <p className={`font-semibold ${colors.text}`}>{atelier.horaire}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <Users size={20} className="text-[#B9177B]" />
            <div>
              <p className="text-xs text-gray-600">Places disponibles</p>
              <p className={`font-semibold ${colors.text}`}>{placesRestantes} / {atelier.jauge}</p>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className={`text-lg font-bold ${colors.text} mb-2`}>Animation</h3>
          <p className="text-gray-700">{atelier.animateur}</p>
        </div>
        <div className="mb-6">
          <h3 className={`text-lg font-bold ${colors.text} mb-2`}>Description</h3>
          <p className="text-gray-700 leading-relaxed">{atelier.description}</p>
        </div>
        <div className="flex gap-3">
          {!complet && (
            <button onClick={onInscription} className="flex-1 py-3 px-6 bg-[#B9177B] text-white rounded-lg hover:bg-[#AD947E] transition-colors font-medium">
              S'inscrire à cet atelier
            </button>
          )}
          <button onClick={onClose} className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-[#6A9ECC] hover:text-[#6A9ECC] transition-colors font-medium">
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Formulaire d'inscription ──────────────────────────────────────────────────

function InscriptionForm({
  formData, loading, onFieldChange, onConfirm, onCancel,
}: {
  formData: FormData; loading: boolean;
  onFieldChange: (field: keyof FormData, value: string) => void;
  onConfirm: () => void; onCancel: () => void;
}) {
  return (
    <div className="space-y-3">
      <button onClick={onCancel} className="w-full flex items-center justify-center gap-2 py-2 text-gray-600 hover:text-gray-800 text-sm">
        <X size={16} /> Annuler
      </button>
      <input type="text" placeholder="Nom" value={formData.nom}
        onChange={(e) => onFieldChange('nom', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6A9ECC]" />
      <input type="text" placeholder="Prénom" value={formData.prenom}
        onChange={(e) => onFieldChange('prenom', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6A9ECC]" />
      <input type="email" placeholder="E-mail" value={formData.email}
        onChange={(e) => onFieldChange('email', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6A9ECC]" />
      <button onClick={onConfirm} disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-[#B9177B] text-white rounded-lg hover:bg-[#AD947E] transition-colors disabled:opacity-50 font-medium">
        <Check size={16} />
        {loading ? 'Envoi…' : 'Confirmer'}
      </button>
    </div>
  );
}

// ─── Carte atelier ─────────────────────────────────────────────────────────────

function AtelierCard({
  atelier, stats, selectedAtelier, formData, loading,
  onSelect, onCancel, onFieldChange, onConfirm, onDetails, dejaInscritCeJour,
}: {
  atelier: Atelier; stats: Record<string, number>;
  selectedAtelier: string | null; formData: FormData; loading: boolean;
  onSelect: (id: string) => void; onCancel: () => void;
  onFieldChange: (field: keyof FormData, value: string) => void;
  onConfirm: (id: string) => void; onDetails: (atelier: Atelier) => void;
  dejaInscritCeJour: boolean;
}) {
  const inscrits = stats[atelier.id] ?? 0;
  const placesRestantes = atelier.jauge - inscrits;
  const complet = placesRestantes <= 0;
  const isOpen = selectedAtelier === atelier.id;
  const colors = JOUR_COLORS[atelier.jour];

  return (
    <div className={`bg-white border-2 rounded-xl p-6 transition-all ${isOpen ? colors.border : 'border-gray-200 hover:border-gray-300'}`}>
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        {/* Infos */}
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-3 flex-wrap">
            <Badge label={atelier.code} color={colors.badge} />
            {atelier.tag && <Badge label={atelier.tag} color="bg-[#B9177B]" />}
          </div>
          <h4 className={`text-lg font-bold ${colors.text} mb-2`}>{atelier.titre}</h4>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Animation :</strong> {atelier.animateur}
          </p>
          <p className="text-gray-700 leading-relaxed text-sm line-clamp-2">{atelier.description}</p>
          <button onClick={() => onDetails(atelier)}
            className="mt-2 flex items-center gap-1 text-[#6A9ECC] hover:text-[#354878] transition-colors text-sm font-medium">
            <Info size={14} /> Plus d'informations
          </button>
        </div>

        {/* Panneau latéral */}
        <div className="lg:w-56 flex-shrink-0">
          <div className="bg-gray-50 rounded-lg p-4">
            <OccupancyBar inscrits={inscrits} jauge={atelier.jauge} />
            {complet ? (
              <div className="text-center py-2 px-4 bg-red-100 text-red-700 rounded-lg text-sm font-medium">
                Complet
              </div>
            ) : dejaInscritCeJour && !isOpen ? (
              <div className="text-center py-2 px-4 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium border border-amber-200">
                Déjà inscrit·e ce jour
              </div>
            ) : isOpen ? (
              <InscriptionForm
                formData={formData} loading={loading}
                onFieldChange={onFieldChange}
                onConfirm={() => onConfirm(atelier.id)}
                onCancel={onCancel}
              />
            ) : (
              <button onClick={() => onSelect(atelier.id)}
                className={`w-full py-2 px-4 ${colors.badge} text-white rounded-lg hover:opacity-80 transition-opacity font-medium`}>
                S'inscrire
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page principale ───────────────────────────────────────────────────────────

export default function AteliersPage({ onNavigate }: AteliersPageProps) {
  const [stats, setStats] = useState<Record<string, number>>({});
  const [selectedAtelier, setSelectedAtelier] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [checkEmail, setCheckEmail] = useState('');
  const [userRegistrations, setUserRegistrations] = useState<UserRegistrations | null>(null);
  const [unregisterLoading, setUnregisterLoading] = useState<Jour | null>(null);
  const [message, setMessage] = useState<Message | null>(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [detailsAtelier, setDetailsAtelier] = useState<Atelier | null>(null);
  const [activeJour, setActiveJour] = useState<Jour>('lundi');

  const fetchStats = useCallback(async () => {
    try {
      const data = await apiGet<{ stats: Record<string, number> }>('/stats');
      setStats(data.stats ?? {});
    } catch { /* silencieux */ }
  }, []);

  useEffect(() => { fetchStats(); }, [fetchStats]);

  const handleCheckRegistration = async () => {
    if (!checkEmail.trim()) return;
    try {
      const data = await apiGet<{ registrations: UserRegistrations }>(`/user-all/${encodeURIComponent(checkEmail)}`);
      setUserRegistrations(data.registrations);
    } catch {
      setUserRegistrations({ lundi: null, mardi: null, mercredi: null });
    }
  };

  const handleUnregister = async (jour: Jour) => {
    if (!checkEmail) return;
    setUnregisterLoading(jour);
    setMessage(null);
    try {
      const data = await apiDelete<{ message: string }>(`/unregister-jour/${encodeURIComponent(checkEmail)}/${jour}`);
      setMessage({ type: 'success', text: data.message });
      await handleCheckRegistration();
      fetchStats();
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : 'Erreur lors de la désinscription' });
    } finally {
      setUnregisterLoading(null);
    }
  };

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = async (atelierId: string) => {
    if (!formData.nom.trim() || !formData.prenom.trim() || !formData.email.trim()) {
      setAlertMessage('Veuillez remplir tous les champs');
      return;
    }
    const atelier = ateliers.find((a) => a.id === atelierId);
    if (!atelier) { setAlertMessage('Atelier non trouvé'); return; }

    setLoading(true);
    setMessage(null);
    try {
      const data = await apiPost<{ message: string }>('/register', {
        atelierId, jauge: atelier.jauge, jour: atelier.jour, ...formData,
      });
      setMessage({ type: 'success', text: data.message });
      setFormData(INITIAL_FORM);
      setSelectedAtelier(null);
      fetchStats();
    } catch (err) {
      setAlertMessage(err instanceof Error ? err.message : "Une erreur est survenue lors de l'inscription");
    } finally {
      setLoading(false);
    }
  };

  // Grouper par jour puis par créneau
  const ateliersParJour = JOURS.reduce<Record<Jour, Record<string, Atelier[]>>>((acc, jour) => {
    const ateliersJour = ateliers.filter((a) => a.jour === jour);
    acc[jour] = ateliersJour.reduce<Record<string, Atelier[]>>((slots, a) => {
      (slots[a.horaire] ??= []).push(a);
      return slots;
    }, {});
    return acc;
  }, { lundi: {}, mardi: {}, mercredi: {} });

  const joursDisponibles = JOURS.filter((j) => Object.keys(ateliersParJour[j]).length > 0);

  const getPlacesRestantes = (id: string, jauge: number) => jauge - (stats[id] ?? 0);
  const isComplet = (id: string, jauge: number) => getPlacesRestantes(id, jauge) <= 0;

  return (
    <div className="min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#B9177B] to-[#AD947E] px-6 lg:px-12 py-12 lg:py-16 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Lightbulb size={64} className="text-white" />
          </div>
          <h1 className="text-white mb-6">Ateliers thématiques</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            "Fabriques méthodologiques" / "Insertion professionnelle"
          </p>
          <p className="text-lg text-white/80 mt-4">
            9 et 10 juin 2026 • <strong>1 atelier par jour</strong> par participant·e
          </p>
        </div>
      </section>

      {/* ── Vérifier inscription ──────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-8 bg-gradient-to-r from-[#6A9ECC]/10 to-[#354878]/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-[#354878] text-xl font-bold mb-4 flex items-center gap-2">
              <UserCheck size={24} />
              Vérifier mes inscriptions
            </h3>
            <div className="flex gap-3">
              <input type="email" placeholder="Votre adresse e-mail" value={checkEmail}
                onChange={(e) => setCheckEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCheckRegistration()}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9ECC]" />
              <button onClick={handleCheckRegistration}
                className="px-6 py-2 bg-[#354878] text-white rounded-lg hover:bg-[#6A9ECC] transition-colors">
                Vérifier
              </button>
            </div>

            {userRegistrations && (
              <div className="mt-4 space-y-3">
                {joursDisponibles.map((jour) => {
                  const atelierId = userRegistrations[jour];
                  const colors = JOUR_COLORS[jour];
                  return (
                    <div key={jour} className={`p-4 rounded-lg border ${atelierId ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`font-bold text-sm ${colors.text}`}>{JOUR_LABELS[jour]}</p>
                          {atelierId
                            ? <p className="text-green-800 font-medium mt-1">✓ Inscrit·e : {atelierId}</p>
                            : <p className="text-gray-500 text-sm mt-1">Aucune inscription</p>
                          }
                        </div>
                        {atelierId && (
                          <button onClick={() => handleUnregister(jour)} disabled={unregisterLoading === jour}
                            className="text-sm text-red-600 hover:text-red-800 underline disabled:opacity-50">
                            {unregisterLoading === jour ? 'Désinscription…' : 'Se désinscrire'}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Message global ────────────────────────────────────────────────── */}
      {message && (
        <div className="px-6 lg:px-12 py-4">
          <div role="status" className={`max-w-4xl mx-auto p-4 rounded-lg ${message.type === 'success' ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
            {message.text}
          </div>
        </div>
      )}

      {/* ── Programme avec onglets ────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 pt-10 pb-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#354878] mb-6 text-center">Programme des ateliers</h2>

          {/* Onglets jours */}
          <div className="flex gap-2 border-b-2 border-gray-100 mb-8 overflow-x-auto">
            {joursDisponibles.map((jour) => {
              const colors = JOUR_COLORS[jour];
              const isActive = activeJour === jour;
              return (
                <button key={jour} onClick={() => setActiveJour(jour)}
                  className={`px-6 py-3 font-bold text-sm rounded-t-xl transition-all whitespace-nowrap border-b-4 ${
                    isActive
                      ? `${colors.badge} text-white border-transparent`
                      : 'text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-200'
                  }`}>
                  {JOUR_LABELS[jour]}
                </button>
              );
            })}
          </div>

          {/* Contenu du jour actif */}
          {joursDisponibles.map((jour) => {
            if (jour !== activeJour) return null;
            const colors = JOUR_COLORS[jour];
            const slots = ateliersParJour[jour];

            return (
              <div key={jour}>
                {/* Bannière du jour */}
                <div className={`bg-gradient-to-r ${colors.bg} rounded-xl p-4 mb-8 flex items-center gap-3`}>
                  <Calendar size={24} className="text-white" />
                  <div>
                    <p className="text-white font-bold text-lg">{JOUR_LABELS[jour]}</p>
                    <p className="text-white/80 text-sm">
                      Inscription possible à <strong>1 atelier</strong> ce jour
                    </p>
                  </div>
                </div>

                {/* Créneaux horaires */}
                {Object.entries(slots).map(([horaire, ateliersSlot]) => (
                  <div key={horaire} className="mb-10">
                    {/* Séparateur créneau */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${colors.badge} text-white font-bold text-sm`}>
                        <Clock size={16} />
                        {horaire}
                      </div>
                      <div className="flex-1 h-px bg-gray-200" />
                      <span className="text-gray-400 text-sm">{ateliersSlot.length} atelier{ateliersSlot.length > 1 ? 's' : ''}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {ateliersSlot.map((atelier) => (
                        <AtelierCard
                          key={atelier.id}
                          atelier={atelier}
                          stats={stats}
                          selectedAtelier={selectedAtelier}
                          formData={formData}
                          loading={loading}
                          dejaInscritCeJour={
                            userRegistrations !== null &&
                            userRegistrations[jour] !== null &&
                            userRegistrations[jour] !== atelier.id
                          }
                          onSelect={(id) => { setSelectedAtelier(id); setFormData(INITIAL_FORM); }}
                          onCancel={() => setSelectedAtelier(null)}
                          onFieldChange={handleFieldChange}
                          onConfirm={handleRegister}
                          onDetails={setDetailsAtelier}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Informations importantes ──────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-12 bg-gradient-to-r from-[#B9177B]/5 to-[#AD947E]/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-[#354878] text-2xl font-bold mb-6">⚠️ Informations importantes</h3>
            <ul className="space-y-3 text-gray-700">
              {[
                <span>Vous pouvez vous inscrire à <strong>UN atelier par jour</strong></span>,
                'Les places sont limitées (entre 10 et 40 participant·e·s selon les ateliers)',
                'Les inscriptions se font sur le principe du premier·e arrivé·e, premier·e servi·e',
                'Vous pouvez vous désinscrire si vous avez un empêchement',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#B9177B] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-[#6A9ECC] to-[#354878] p-4 rounded-full">
              <Mail size={32} className="text-white" />
            </div>
          </div>
          <h3 className="text-[#354878] mb-2">Questions ?</h3>
          <button onClick={() => onNavigate('contact')}
            className="text-[#6A9ECC] hover:text-[#354878] underline transition-colors text-lg">
            Contactez-nous
          </button>
        </div>
      </section>

      {/* ── Popups ────────────────────────────────────────────────────────── */}
      {alertMessage && <AlertPopup message={alertMessage} onClose={() => setAlertMessage('')} />}

      {detailsAtelier && (
        <DetailsPopup
          atelier={detailsAtelier}
          placesRestantes={getPlacesRestantes(detailsAtelier.id, detailsAtelier.jauge)}
          complet={isComplet(detailsAtelier.id, detailsAtelier.jauge)}
          onClose={() => setDetailsAtelier(null)}
          onInscription={() => {
            setDetailsAtelier(null);
            setSelectedAtelier(detailsAtelier.id);
            setFormData(INITIAL_FORM);
          }}
        />
      )}
    </div>
  );
}