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
  date: string;
  horaire: string;
  tag?: string;
}

interface FormData {
  nom: string;
  prenom: string;
  email: string;
}

interface UserRegistration {
  registered: boolean;
  atelierId: string | null;
}

interface Message {
  type: 'success' | 'error';
  text: string;
}

// ─── Données ──────────────────────────────────────────────────────────────────

const ateliers: Atelier[] = [
  // 9 juin – 9h à 10h30
  {
    id: '1A',
    code: 'Atelier 1A',
    titre: "(In)corporer notre recherche - Médiation de la recherche en SIC",
    animateur: "Sonia Nikitin, Doctorante en sciences de l'information et de la communication, ELICO, Université Lumière Lyon 2",
    description: "L'atelier « (in)corporer notre recherche » consiste à expérimenter une relation corporelle, somatique, à sa propre recherche (aux chemins de pensées, à la hiérarchisation de concepts, théories et problématiques). L'atelier se compose des temps suivants : échauffement corporel, exploration en mouvement, documentation par l'écrit ou le dessin et partage collectif.",
    jauge: 10,
    date: '9 juin',
    horaire: '9h - 10h30',
    tag: 'ASC',
  },
  {
    id: '2A',
    code: 'Atelier 2A',
    titre: 'Techno-performance "Usages artistiques In-Disciplinaires de l\'IA"',
    animateur: 'Diana Rosette Luciano, Doctorante, Langages, Littératures, Sociétés. Études Transfrontalières et Internationales (LLSETI), USMB',
    description: "Cet atelier se propose de présenter et mettre en discussion une technoperformance, projet artistique et méthodologique inscrit dans la recherche-création doctorale. Cette recherche analyse les interactions entre des artistes performers et un système d'IA générative.",
    jauge: 20,
    date: '9 juin',
    horaire: '9h - 10h30',
    tag: 'ASC',
  },
  {
    id: '3A',
    code: 'Atelier 3A',
    titre: 'Créer une communauté de doctorant·e·s en ligne : la plateforme M@iautic',
    animateur: 'Alexandra Salou (IMSIC) et Claire Noy (Lerass)',
    description: "Découvrez M@ieutic, une plateforme pensée avec et pour les doctorant·es, pour échanger, collaborer et faire circuler les données autrement. Lors de cet atelier de présentation, vous pourrez explorer ses espaces (forum, méthodologie, concepts, détente), comprendre son fonctionnement et surtout y contribuer activement.",
    jauge: 40,
    date: '9 juin',
    horaire: '9h - 10h30',
  },
  {
    id: '4A',
    code: 'Atelier 4A',
    titre: 'Rédiger des articles scientifiques pour les primo-rédact·eur·rice·s',
    animateur: 'Fanny Bougenies & Julies Bruscq (Commission Formation SFSIC)',
    description: "Cet atelier a pour objectif de vous familiariser avec les processus de publication d'articles scientifiques, requis pour votre dossier de qualification. Présentation des enjeux de la publication, de l'écosystème médiatique, des normes académiques et des standards propres à certaines revues.",
    jauge: 15,
    date: '9 juin',
    horaire: '9h - 10h30',
  },
  {
    id: '5A',
    code: 'Atelier 5A',
    titre: 'Répondre à des offres d\'emploi quand on est jeune docteur·e (hors poste d\'enseignant·e-chercheur·euse)',
    animateur: 'Fanny Bougenies, Julie Brusq, Julien Péquignot, Laurie Schmitt, Virginie Sonet + Valérie Croissant',
    description: "Cet atelier est consacré à la valorisation des acquis professionnels au cours de la thèse. Cette session a pour objectif de permettre aux doctorantes et doctorants de mieux cerner les points forts de leur trajectoire scientifique susceptibles d'intéresser des entreprises, des services publics, des associations.",
    jauge: 15,
    date: '9 juin',
    horaire: '9h - 10h30',
  },
  {
    id: '6A',
    code: 'Atelier 6A',
    titre: 'Constituer son dossier de qualification aux fonctions de maître·sse de conférence',
    animateur: 'Julien Péquignot + Aurélie + Johanne + Fanny G.',
    description: "Cet atelier pratique en lien avec le CNU a pour but d'optimiser la constitution de son dossier de qualification et sa rédaction. Au-delà des attendus quantitatifs et qualitatifs exprimés par le CNU, un dossier de qualification doit répondre à un certain nombre d'exigences de structure, de nomenclature et de forme.",
    jauge: 15,
    date: '9 juin',
    horaire: '9h - 10h30',
  },
  {
    id: '7A',
    code: 'Atelier 7A',
    titre: 'Participer à la campagne MCF synchronisée : comprendre une fiche de poste, adapter son dossier et préparer son audition',
    animateur: 'Virginie Sonet & Laurie Schmitt',
    description: "Cet atelier propose un temps de travail concret consacré à la campagne synchronisée de recrutement des maîtres de conférences. Il a pour objectif d'aider les candidat·es à mieux lire et interpréter une fiche de poste, au-delà de sa formulation apparente.",
    jauge: 15,
    date: '9 juin',
    horaire: '9h - 10h30',
  },
  // 9 juin – 15h45 à 17h15
  {
    id: 'TABLE_RONDE',
    code: 'Table ronde',
    titre: "Violences et harcèlement sexistes et sexuels dans l'ESR : enjeux, pratiques et responsabilités",
    animateur: "Une chercheuse en SHS spécialisée dans les VHSS, une représentante d'association, Giuseppina Sapio, Sara Lespagnandelle",
    description: "La table ronde s'adressera tant aux jeunes chercheur·euses qu'aux titulaires, notamment celles et ceux qui encadrent des travaux de recherche. Elle se déroulera en plusieurs temps, qui permettront de croiser les expertises (scientifiques, professionnelles, militantes) sur les différents aspects et enjeux des violences sexistes et sexuelles dans le monde universitaire.",
    jauge: 40,
    date: '9 juin',
    horaire: '15h45 - 17h15',
  },
  {
    id: '1B',
    code: 'Atelier 1B',
    titre: "Auto-organisation en recherche doctorale : comment concilier ambition collective et réalités individuelles ?",
    animateur: 'Nodra MOUTAROU, Aliénor PETIOT, Marie TREMBLAY (LabSIC, USPN)',
    description: "L'organisation d'événements scientifiques par et pour les jeunes chercheurs·euses non-titulaires apparaît comme une manière de dépasser l'isolement doctoral par la création d'espaces de sociabilité et de formation entre pairs.",
    jauge: 15,
    date: '9 juin',
    horaire: '15h45 - 17h15',
  },
  {
    id: '2B',
    code: 'Atelier 2B',
    titre: 'Constituer son dossier de qualification aux fonctions de maître·sse de conférence',
    animateur: 'Julien Péquignot + Aurélie + Johanne + Fanny G.',
    description: "Cet atelier pratique en lien avec le CNU a pour but d'optimiser la constitution de son dossier de qualification et sa rédaction.",
    jauge: 15,
    date: '9 juin',
    horaire: '15h45 - 17h15',
  },
  {
    id: '3B',
    code: 'Atelier 3B',
    titre: 'Participer à la campagne MCF synchronisée',
    animateur: 'Virginie Sonet & Laurie Schmitt',
    description: "Cet atelier propose un temps de travail concret consacré à la campagne synchronisée de recrutement des maîtres de conférences.",
    jauge: 15,
    date: '9 juin',
    horaire: '15h45 - 17h15',
  },
  {
    id: '4B',
    code: 'Atelier 4B',
    titre: 'La méthode ethnographique en SIC',
    animateur: 'Johanne Samè et Allan Deneuville',
    description: "Comment pratiquer la méthode ethnographique en sciences de l'information et de la communication ? Cet atelier propose d'explorer les dimensions concrètes et réflexives de l'enquête ethnographique.",
    jauge: 20,
    date: '9 juin',
    horaire: '15h45 - 17h15',
  },
  {
    id: '5B',
    code: 'Atelier 5B',
    titre: "Répondre à des offres d'emploi quand on est jeune docteur·e (hors poste d'enseignant·e-chercheur·euse)",
    animateur: 'Fanny Bougenies, Julie Brusq, Julien Péquignot, Laurie Schmitt, Virginie Sonet + Valérie Croissant',
    description: "Valorisation des acquis professionnels au cours de la thèse et accompagnement dans les candidatures hors fonction d'enseignant·e-chercheur·euse.",
    jauge: 15,
    date: '9 juin',
    horaire: '15h45 - 17h15',
  },
  // 10 juin – 11h à 12h30
  {
    id: '1C',
    code: 'Atelier 1C',
    titre: 'Atelier BD de la thèse',
    animateur: 'Valériane Loison & Pascal Génot',
    description: "L'objectif de cet atelier est d'amener chaque doctorant·e à concevoir une planche de bande dessinée mettant en lumière un aspect central de sa thèse, tout en valorisant son parcours et son cheminement vers la recherche.",
    jauge: 10,
    date: '10 juin',
    horaire: '11h - 12h30',
    tag: 'ASC',
  },
  {
    id: '2C',
    code: 'Atelier 2C',
    titre: 'Jeu de rôle narratif "Kama"',
    animateur: 'Geoffrey Lavigne, doctorant (CESCO et Cerlis)',
    description: "L'atelier KAMA-MUTA est un jeu de rôle narratif conçu dans le cadre d'un projet de recherche-création portant sur les futurs de la nature en milieu urbain. Il invite à pratiquer et interroger le jeu comme moyen de faire dire et faire imaginer de nouvelles configurations socio-écologiques.",
    jauge: 20,
    date: '10 juin',
    horaire: '11h - 12h30',
    tag: 'ASC',
  },
  {
    id: '3C',
    code: 'Atelier 3C',
    titre: 'Publication en anglais dans des revues internationales de premier plan',
    animateur: 'Commission RI, Zhao Alexandre Huang',
    description: "Cet atelier méthodologique propose une introduction structurée aux stratégies de publication dans les revues anglophones à fort impact, notamment en abordant le choix du sujet, le ciblage des revues, la rédaction et le processus de soumission.",
    jauge: 20,
    date: '10 juin',
    horaire: '11h - 12h30',
  },
  {
    id: '4C',
    code: 'Atelier 4C',
    titre: 'Méthode ethnographique en SIC',
    animateur: 'Johanne Samè et Allan Deneuville',
    description: "Explorer les dimensions concrètes et réflexives de l'enquête ethnographique : écrire et décrire son terrain, mobiliser différents supports (photo-ethnographie, dispositifs audiovisuels, carnet de terrain).",
    jauge: 20,
    date: '10 juin',
    horaire: '11h - 12h30',
  },
  {
    id: '5C',
    code: 'Atelier 5C',
    titre: 'Rédiger des articles scientifiques pour les primo-rédact·eur·rice·s',
    animateur: 'Fanny Bougenies & Julies Bruscq (Commission Formation SFSIC)',
    description: "Familiarisation avec les processus de publication d'articles scientifiques, requis pour votre dossier de qualification.",
    jauge: 15,
    date: '10 juin',
    horaire: '11h - 12h30',
  },
  {
    id: '6C',
    code: 'Atelier 6C',
    titre: "Répondre à des offres d'emploi quand on est jeune docteur·e",
    animateur: 'Fanny Bougenies, Julie Brusq, Julien Péquignot, Laurie Schmitt, Virginie Sonet + Valérie Croissant',
    description: "Valorisation des compétences liées au doctorat pour des postes hors enseignement-recherche.",
    jauge: 15,
    date: '10 juin',
    horaire: '11h - 12h30',
  },
  {
    id: '7C',
    code: 'Atelier 7C',
    titre: 'Constituer son dossier de qualification aux fonctions de maître·sse de conférence',
    animateur: 'Julien Péquignot + Johanne + Aurélie + Fanny G.',
    description: "Optimiser la constitution de son dossier de qualification et sa rédaction en lien avec le CNU.",
    jauge: 15,
    date: '10 juin',
    horaire: '11h - 12h30',
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

// ─── Composants utilitaires ────────────────────────────────────────────────────

function Badge({ label, color }: { label: string; color: 'navy' | 'pink' }) {
  const cls =
    color === 'navy'
      ? 'bg-[#354878] text-white'
      : 'bg-[#B9177B] text-white';
  return (
    <span className={`${cls} px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap`}>
      {label}
    </span>
  );
}

function OccupancyBar({
  inscrits,
  jauge,
  complet,
  placesRestantes,
}: {
  inscrits: number;
  jauge: number;
  complet: boolean;
  placesRestantes: number;
}) {
  const pct = Math.min((inscrits / jauge) * 100, 100);
  const barColor = complet
    ? 'bg-red-500'
    : placesRestantes <= 5
    ? 'bg-orange-500'
    : 'bg-green-500';

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-600">Places</span>
        <span className={`font-bold ${complet ? 'text-red-600' : 'text-green-600'}`}>
          {placesRestantes} / {jauge}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div
          className={`h-3 rounded-full transition-all ${barColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </>
  );
}

// ─── Popup alerte ──────────────────────────────────────────────────────────────

function AlertPopup({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="alert-title"
    >
      <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full">
        <div className="flex items-start gap-4 mb-4">
          <AlertCircle size={32} className="text-red-500 flex-shrink-0" />
          <div className="flex-1">
            <h3 id="alert-title" className="text-lg font-bold text-[#354878] mb-2">
              Attention
            </h3>
            <p className="text-gray-700">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fermer"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#354878] text-white rounded-lg hover:bg-[#6A9ECC] transition-colors font-medium"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Popup détails atelier ─────────────────────────────────────────────────────

function DetailsPopup({
  atelier,
  placesRestantes,
  complet,
  onClose,
  onInscription,
}: {
  atelier: Atelier;
  placesRestantes: number;
  complet: boolean;
  onClose: () => void;
  onInscription: () => void;
}) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="details-title"
    >
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-3 flex-wrap">
            <Badge label={atelier.code} color="navy" />
            {atelier.tag && <Badge label={atelier.tag} color="pink" />}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors ml-4"
            aria-label="Fermer"
          >
            <X size={28} />
          </button>
        </div>

        <h2 id="details-title" className="text-2xl font-bold text-[#354878] mb-4">
          {atelier.titre}
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gradient-to-r from-[#6A9ECC]/10 to-[#354878]/10 rounded-lg">
          <div className="flex items-center gap-2">
            <Calendar size={20} className="text-[#B9177B]" />
            <div>
              <p className="text-xs text-gray-600">Date</p>
              <p className="font-semibold text-[#354878]">{atelier.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-[#B9177B]" />
            <div>
              <p className="text-xs text-gray-600">Horaire</p>
              <p className="font-semibold text-[#354878]">{atelier.horaire}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <Users size={20} className="text-[#B9177B]" />
            <div>
              <p className="text-xs text-gray-600">Places disponibles</p>
              <p className="font-semibold text-[#354878]">
                {placesRestantes} / {atelier.jauge}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#354878] mb-2">Animation</h3>
          <p className="text-gray-700">{atelier.animateur}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#354878] mb-2">Description</h3>
          <p className="text-gray-700 leading-relaxed">{atelier.description}</p>
        </div>

        <div className="flex gap-3">
          {!complet && (
            <button
              onClick={onInscription}
              className="flex-1 py-3 px-6 bg-[#B9177B] text-white rounded-lg hover:bg-[#AD947E] transition-colors font-medium"
            >
              S'inscrire à cet atelier
            </button>
          )}
          <button
            onClick={onClose}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-[#6A9ECC] hover:text-[#6A9ECC] transition-colors font-medium"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Formulaire d'inscription inline ──────────────────────────────────────────

function InscriptionForm({
  formData,
  loading,
  onFieldChange,
  onConfirm,
  onCancel,
}: {
  formData: FormData;
  loading: boolean;
  onFieldChange: (field: keyof FormData, value: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="space-y-3">
      <button
        onClick={onCancel}
        className="w-full flex items-center justify-center gap-2 py-2 text-gray-600 hover:text-gray-800 text-sm"
      >
        <X size={16} />
        Annuler
      </button>

      <input
        type="text"
        placeholder="Nom"
        value={formData.nom}
        onChange={(e) => onFieldChange('nom', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6A9ECC]"
      />
      <input
        type="text"
        placeholder="Prénom"
        value={formData.prenom}
        onChange={(e) => onFieldChange('prenom', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6A9ECC]"
      />
      <input
        type="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={(e) => onFieldChange('email', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6A9ECC]"
      />

      <button
        onClick={onConfirm}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-[#B9177B] text-white rounded-lg hover:bg-[#AD947E] transition-colors disabled:opacity-50 font-medium"
      >
        <Check size={16} />
        {loading ? 'Envoi…' : 'Confirmer'}
      </button>
    </div>
  );
}

// ─── Carte atelier ─────────────────────────────────────────────────────────────

function AtelierCard({
  atelier,
  stats,
  selectedAtelier,
  formData,
  loading,
  onSelect,
  onCancel,
  onFieldChange,
  onConfirm,
  onDetails,
}: {
  atelier: Atelier;
  stats: Record<string, number>;
  selectedAtelier: string | null;
  formData: FormData;
  loading: boolean;
  onSelect: (id: string) => void;
  onCancel: () => void;
  onFieldChange: (field: keyof FormData, value: string) => void;
  onConfirm: (id: string) => void;
  onDetails: (atelier: Atelier) => void;
}) {
  const inscrits = stats[atelier.id] ?? 0;
  const placesRestantes = atelier.jauge - inscrits;
  const complet = placesRestantes <= 0;
  const isOpen = selectedAtelier === atelier.id;

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#6A9ECC] transition-all">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
        {/* Infos */}
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-3 flex-wrap">
            <Badge label={atelier.code} color="navy" />
            {atelier.tag && <Badge label={atelier.tag} color="pink" />}
          </div>
          <h4 className="text-xl font-bold text-[#354878] mb-2">{atelier.titre}</h4>
          <p className="text-sm text-gray-600 mb-3">
            <strong>Animation :</strong> {atelier.animateur}
          </p>
          <p className="text-gray-700 leading-relaxed line-clamp-3">{atelier.description}</p>
          <button
            onClick={() => onDetails(atelier)}
            className="mt-3 flex items-center gap-2 text-[#6A9ECC] hover:text-[#354878] transition-colors text-sm font-medium"
          >
            <Info size={16} />
            Plus d'informations
          </button>
        </div>

        {/* Panneau latéral */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-gradient-to-br from-[#6A9ECC]/10 to-[#354878]/10 rounded-lg p-4">
            <OccupancyBar
              inscrits={inscrits}
              jauge={atelier.jauge}
              complet={complet}
              placesRestantes={placesRestantes}
            />

            {complet ? (
              <div className="text-center py-2 px-4 bg-red-100 text-red-700 rounded-lg text-sm font-medium">
                Complet
              </div>
            ) : isOpen ? (
              <InscriptionForm
                formData={formData}
                loading={loading}
                onFieldChange={onFieldChange}
                onConfirm={() => onConfirm(atelier.id)}
                onCancel={onCancel}
              />
            ) : (
              <button
                onClick={() => onSelect(atelier.id)}
                className="w-full py-2 px-4 bg-[#354878] text-white rounded-lg hover:bg-[#6A9ECC] transition-colors font-medium"
              >
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

const INITIAL_FORM: FormData = { nom: '', prenom: '', email: '' };

export default function AteliersPage({ onNavigate }: AteliersPageProps) {
  const [stats, setStats] = useState<Record<string, number>>({});
  const [selectedAtelier, setSelectedAtelier] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);

  // Vérification inscription
  const [checkEmail, setCheckEmail] = useState('');
  const [userRegistration, setUserRegistration] = useState<UserRegistration | null>(null);
  const [unregisterLoading, setUnregisterLoading] = useState(false);

  // Feedback
  const [message, setMessage] = useState<Message | null>(null);
  const [alertMessage, setAlertMessage] = useState('');

  // Popups
  const [detailsAtelier, setDetailsAtelier] = useState<Atelier | null>(null);

  // ── Fetching ────────────────────────────────────────────────────────────────

  const fetchStats = useCallback(async () => {
    try {
      const data = await apiGet<{ stats: Record<string, number> }>('/stats');
      setStats(data.stats ?? {});
    } catch {
      // silencieux : les stats s'afficheront à 0
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  // ── Vérification inscription ─────────────────────────────────────────────────

  const handleCheckRegistration = async () => {
    if (!checkEmail.trim()) return;
    try {
      const data = await apiGet<UserRegistration>(`/user/${encodeURIComponent(checkEmail)}`);
      setUserRegistration(data);
    } catch {
      setUserRegistration({ registered: false, atelierId: null });
    }
  };

  // ── Désinscription ───────────────────────────────────────────────────────────

  const handleUnregister = async () => {
    if (!checkEmail) return;
    setUnregisterLoading(true);
    setMessage(null);
    try {
      const data = await apiDelete<{ message: string }>(`/unregister/${encodeURIComponent(checkEmail)}`);
      setMessage({ type: 'success', text: data.message });
      setCheckEmail('');
      setUserRegistration(null);
      fetchStats();
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : 'Erreur lors de la désinscription' });
    } finally {
      setUnregisterLoading(false);
    }
  };

  // ── Inscription ──────────────────────────────────────────────────────────────

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = async (atelierId: string) => {
    if (!formData.nom.trim() || !formData.prenom.trim() || !formData.email.trim()) {
      setAlertMessage('Veuillez remplir tous les champs');
      return;
    }

    const atelier = ateliers.find((a) => a.id === atelierId);
    if (!atelier) {
      setAlertMessage('Atelier non trouvé');
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const data = await apiPost<{ message: string }>('/register', {
        atelierId,
        jauge: atelier.jauge,
        ...formData,
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

  // ── Données groupées ─────────────────────────────────────────────────────────

  const ateliersBySlot = ateliers.reduce<Record<string, Atelier[]>>((acc, atelier) => {
    const key = `${atelier.date} - ${atelier.horaire}`;
    (acc[key] ??= []).push(atelier);
    return acc;
  }, {});

  const getPlacesRestantes = (id: string, jauge: number) => jauge - (stats[id] ?? 0);
  const isComplet = (id: string, jauge: number) => getPlacesRestantes(id, jauge) <= 0;

  // ── Rendu ────────────────────────────────────────────────────────────────────

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
            9 et 10 juin 2026 • Inscription limitée à UN seul atelier par participant·e
          </p>
        </div>
      </section>

      {/* ── Vérifier inscription ──────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-8 bg-gradient-to-r from-[#6A9ECC]/10 to-[#354878]/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-[#354878] text-xl font-bold mb-4 flex items-center gap-2">
              <UserCheck size={24} />
              Vérifier mon inscription
            </h3>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                value={checkEmail}
                onChange={(e) => setCheckEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCheckRegistration()}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9ECC]"
              />
              <button
                onClick={handleCheckRegistration}
                className="px-6 py-2 bg-[#354878] text-white rounded-lg hover:bg-[#6A9ECC] transition-colors"
              >
                Vérifier
              </button>
            </div>

            {userRegistration && (
              <div
                className={`mt-4 p-4 rounded-lg ${
                  userRegistration.registered
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                {userRegistration.registered ? (
                  <>
                    <p className="text-green-800 font-medium mb-2">
                      ✓ Vous êtes inscrit·e à l'atelier : {userRegistration.atelierId}
                    </p>
                    <button
                      onClick={handleUnregister}
                      disabled={unregisterLoading}
                      className="text-sm text-red-600 hover:text-red-800 underline disabled:opacity-50"
                    >
                      {unregisterLoading ? 'Désinscription…' : 'Se désinscrire'}
                    </button>
                  </>
                ) : (
                  <p className="text-gray-700">Aucune inscription trouvée pour cet e-mail</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Message global ────────────────────────────────────────────────── */}
      {message && (
        <div className="px-6 lg:px-12 py-4">
          <div
            role="status"
            className={`max-w-4xl mx-auto p-4 rounded-lg ${
              message.type === 'success'
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}
          >
            {message.text}
          </div>
        </div>
      )}

      {/* ── Liste des ateliers ────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#354878] mb-8 text-center">Programme des ateliers</h2>

          {Object.entries(ateliersBySlot).map(([slot, ateliersInSlot]) => (
            <div key={slot} className="mb-12">
              <h3 className="text-2xl font-bold text-[#B9177B] mb-6 pb-3 border-b-2 border-[#B9177B]/20">
                {slot}
              </h3>

              <div className="grid grid-cols-1 gap-6">
                {ateliersInSlot.map((atelier) => (
                  <AtelierCard
                    key={atelier.id}
                    atelier={atelier}
                    stats={stats}
                    selectedAtelier={selectedAtelier}
                    formData={formData}
                    loading={loading}
                    onSelect={(id) => {
                      setSelectedAtelier(id);
                      setFormData(INITIAL_FORM);
                    }}
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
      </section>

      {/* ── Informations importantes ──────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-12 bg-gradient-to-r from-[#B9177B]/5 to-[#AD947E]/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-[#354878] text-2xl font-bold mb-6">⚠️ Informations importantes</h3>
            <ul className="space-y-3 text-gray-700">
              {[
                <span>Vous ne pouvez vous inscrire qu'à <strong>UN SEUL atelier</strong></span>,
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
          <button
            onClick={() => onNavigate('contact')}
            className="text-[#6A9ECC] hover:text-[#354878] underline transition-colors text-lg"
          >
            Contactez-nous
          </button>
        </div>
      </section>

      {/* ── Popups ────────────────────────────────────────────────────────── */}
      {alertMessage && (
        <AlertPopup message={alertMessage} onClose={() => setAlertMessage('')} />
      )}

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