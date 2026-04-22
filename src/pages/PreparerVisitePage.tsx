import { MapPin, Train, Bus, Car, Utensils, Hotel, Info, ExternalLink } from 'lucide-react';
import campusImg from '../assets/026_DB11817.jpg';

interface PreparerVisitePageProps {
  onNavigate: (page: string) => void;
}

export default function PreparerVisitePage({ onNavigate }: PreparerVisitePageProps) {
  return (
    <div className="min-h-screen">

      {/* ── Hero avec photo campus ─────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={campusImg}
          alt="Vue du Campus Condorcet à Aubervilliers, espace piétonnier animé entouré de bâtiments modernes et d'arbres"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#43333F]/90 via-[#43333F]/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-12 pb-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#F03289] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              <MapPin size={16} aria-hidden="true" />
              Aubervilliers, Seine-Saint-Denis
            </div>
            <h1 className="text-white mb-3">Préparer sa visite</h1>
            <p className="text-white/85 text-lg max-w-2xl">
              Campus Condorcet · 8, cours des Humanités · 93322 Aubervilliers CEDEX
            </p>
          </div>
        </div>
      </section>

      {/* ── Localisation ──────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#283489] mb-6">Localisation</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              title="Carte du Campus Condorcet à Aubervilliers"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.3600,48.9100,2.3800,48.9250&layer=mapnik&marker=48.9174,2.3694"
              className="w-full h-80 border-0"
              loading="lazy"
              aria-label="Carte OpenStreetMap du Campus Condorcet"
            />
            <div className="bg-[#283489] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="text-white">
                <p className="font-bold">Campus Condorcet</p>
                <p className="text-white/80 text-sm">8, cours des Humanités — 93322 Aubervilliers CEDEX</p>
              </div>
              <a
                href="https://maps.google.com/?q=Campus+Condorcet+Aubervilliers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F03289] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#F21C00] transition-colors no-underline min-h-[44px]"
                aria-label="Ouvrir dans Google Maps (nouvel onglet)"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comment venir ─────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-12 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#283489] mb-8">Comment venir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <article className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#283489] text-white rounded-xl" aria-hidden="true">
                  <Train size={24} />
                </div>
                <h3 className="text-[#283489]">En train</h3>
              </div>
              <p className="text-gray-700 mb-3 font-medium">Gares les plus proches :</p>
              <ul className="space-y-2 text-sm text-gray-700" role="list">
                <li>
                  <strong>Gare du Nord</strong>
                  <span className="block text-gray-500">25 min via RER B</span>
                </li>
                <li>
                  <strong>Gare Saint-Lazare</strong>
                  <span className="block text-gray-500">20 min via ligne 12</span>
                </li>
              </ul>
            </article>

            <article className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#F03289] text-white rounded-xl" aria-hidden="true">
                  <Bus size={24} />
                </div>
                <h3 className="text-[#283489]">Transports en commun</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700" role="list">
                <li>
                  <strong>Métro ligne 12</strong>
                  <span className="block text-gray-500">Station Front Populaire</span>
                </li>
                <li>
                  <strong>RER B</strong>
                  <span className="block text-gray-500">La Plaine – Stade de France</span>
                </li>
                <li>
                  <strong>Bus</strong>
                  <span className="block text-gray-500">139, 153, 239, 302, 512</span>
                </li>
              </ul>
            </article>

            <article className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#F21C00] text-white rounded-xl" aria-hidden="true">
                  <Car size={24} />
                </div>
                <h3 className="text-[#283489]">En voiture</h3>
              </div>
              <p className="text-gray-700 mb-2 font-medium">Parking visiteur·euses disponible</p>
              <p className="text-sm text-gray-600">
                Gratuit pour les participant·e·s aux Doctorales sur présentation de la confirmation d'inscription.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* ── Informations pratiques ────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#283489] mb-8">Informations pratiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <article className="bg-[#f5f5f5] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Utensils className="text-[#F03289]" size={24} aria-hidden="true" />
                <h3 className="text-[#283489]">Restauration</h3>
              </div>
              <ul className="space-y-2 text-gray-700" role="list">
                {[
                  'Restaurant universitaire sur place',
                  'Cafétéria ouverte de 8h à 18h',
                  'Plusieurs restaurants à proximité',
                  'Distributeurs automatiques disponibles',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#F03289] font-bold mt-0.5" aria-hidden="true">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="bg-[#f5f5f5] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Hotel className="text-[#F03289]" size={24} aria-hidden="true" />
                <h3 className="text-[#283489]">Hébergement</h3>
              </div>
              <ul className="space-y-2 text-gray-700" role="list">
                {[
                  'Hôtel Ibis — 500 m (tarif préférentiel)',
                  'Résidence étudiante (séjours courts)',
                  'Plusieurs hôtels dans un rayon de 2 km',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#F03289] font-bold mt-0.5" aria-hidden="true">•</span>
                    {item}
                  </li>
                ))}
                <li className="flex items-start gap-2">
                  <span className="text-[#F03289] font-bold mt-0.5" aria-hidden="true">•</span>
                  <span>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="text-[#283489] underline hover:text-[#F03289] transition-colors font-medium"
                      style={{ minHeight: 'auto' }}
                    >
                      Contactez-nous
                    </button>
                    {' '}pour les tarifs partenaires
                  </span>
                </li>
              </ul>
            </article>

          </div>
        </div>
      </section>

      {/* ── À savoir avant votre visite ──────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-12 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-white rounded-2xl p-8 border-l-4 border-[#F03289] shadow-sm"
            role="note"
            aria-label="Informations importantes avant votre visite"
          >
            <div className="flex items-start gap-4">
              <Info className="text-[#F03289] flex-shrink-0 mt-1" size={28} aria-hidden="true" />
              <div>
                <h2 className="text-[#283489] mb-4">À savoir avant votre visite</h2>
                <ul className="space-y-3 text-gray-700" role="list">
                  {[
                    'Inscription obligatoire pour accéder aux événements',
                    "Prévoir une pièce d'identité pour l'accès au campus",
                    'Wi-Fi gratuit disponible sur tout le campus',
                    'Accès PMR (Personnes à Mobilité Réduite) sur l\'ensemble des bâtiments',
                    "En cas de question, contactez l'accueil au 01 23 45 67 89",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#F03289] font-bold mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Plan du campus ────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#283489] mb-6">Plan du campus</h2>
          <div className="bg-gradient-to-r from-[#283489] to-[#F03289] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <p className="font-bold text-xl mb-1">Plan du Campus Condorcet</p>
              <p className="text-white/80">Disponible à l'accueil et en téléchargement</p>
            </div>
            <a
              href="https://www.campus-condorcet.fr/fr/le-campus/plan-du-campus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#283489] px-6 py-3 rounded-xl font-bold hover:bg-[#f5f5f5] transition-colors no-underline min-h-[44px] whitespace-nowrap"
              aria-label="Accéder au plan interactif du Campus Condorcet (nouvel onglet)"
            >
              <ExternalLink size={18} aria-hidden="true" />
              Plan interactif
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}