import React from 'react';

interface ArtsSicCulturePageProps {
  onNavigate: (page: string) => void;
}

export default function ArtsSicCulturePage({ onNavigate }: ArtsSicCulturePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#AD947E] to-[#B9177B] text-white py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Arts·SIC·Culture</h1>
          <p className="text-xl lg:text-2xl font-light opacity-95">
            Quand art, culture et sciences de l'information et de la communication se rencontrent
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#FEFAF5] rounded-2xl p-6 md:p-8 shadow-sm border-l-8 border-[#B9177B]">
            <p className="text-gray-700 leading-relaxed text-lg">
              <span className="font-semibold text-[#B9177B]">Arts·SIC·Culture</span> – Depuis 2019, ce programme de la SFSIC prend vie lors des
              <strong> Doctorales</strong> et <strong>Congrès</strong> pour tisser des convergences entre création artistique et recherches en Sciences
              de l’Information et de la Communication. À travers un programme artistique co-organisé avec les laboratoires hôtes,
              ces rencontres encouragent les regards croisés entre chercheur·es et artistes, afin de mettre en culture et en médiation
              les SIC. Elles participent pleinement aux interactions entre science et société, portées par le Campus Condorcet.
            </p>
          </div>
        </div>
      </section>

      {/* Programme principal */}
      <section className="py-12 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-[#AD947E] font-semibold">Programme culturel</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#354878] mt-2">Doctorales 2026 – Médiations & créations</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">8–10 juin 2026 — Campus Condorcet (Centre des colloques, Humathèque, Bâtiment recherche Sud)</p>
          </div>

          {/* Expositions */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#B9177B] rounded-full flex items-center justify-center text-white text-sm">🖼️</div>
              <h3 className="text-2xl font-semibold text-[#354878]">Expositions & enquêtes visuelles</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Nawel Gabsi */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <span className="bg-[#E9E5E0] text-[#4B3B2C] text-xs font-semibold px-2.5 py-1 rounded-full">Exposition</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full flex items-center gap-1">📍 Centre colloques (RDC)</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">« Rendre compte d’un terrain aux urgences pédiatriques par le dessin »</h4>
                  <p className="text-sm text-[#B9177B] font-medium mt-1">Nawel GABSI – doctorante MICA</p>
                  <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-500">
                    <span>📅 8–10 juin 2026</span>
                    <span>🕒 Médiation : 09/06 à 11h</span>
                  </div>
                  <p className="text-gray-600 mt-4 leading-relaxed text-sm">
                    Dix portraits d’enfants issus d’une recherche-projet à l’hôpital. L’exposition montre le potentiel du dessin pour capter le sensible
                    des rencontres (humeurs, gestes, tons) tout en préservant l’anonymat. Trois types de dessins : explications graphiques, portraits
                    et visualisations du terrain.
                  </p>
                </div>
              </div>
              {/* Dorothée Oster */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <span className="bg-[#E9E5E0] text-[#4B3B2C] text-xs font-semibold px-2.5 py-1 rounded-full">Exposition</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full flex items-center gap-1">📍 Centre colloques (RDC)</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">« Strates, fragments, infra-ordinaire »</h4>
                  <p className="text-sm text-[#B9177B] font-medium mt-1">Dorothée OSTER – doctorante GRESEC, Université Grenoble-Alpes</p>
                  <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-500">
                    <span>📅 8–10 juin</span>
                    <span>🕒 Médiation : 08/06 à 17h30</span>
                  </div>
                  <p className="text-gray-600 mt-4 leading-relaxed text-sm">
                    Six affiches lacérées et recomposées issues d’une recherche-création sur les dispositifs de créativité participative dans les collectivités.
                    Superpositions, dégradations, arrachages transforment des supports éphémères en archives fragmentaires, reconfigurant le sens politique et culturel.
                  </p>
                </div>
              </div>
              {/* Enthéa Malfondet */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <span className="bg-[#E9E5E0] text-[#4B3B2C] text-xs font-semibold px-2.5 py-1 rounded-full">Exposition</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full flex items-center gap-1">📍 Centre colloques (RDC)</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">« Portraits photographiques : enquêter par la création collective »</h4>
                  <p className="text-sm text-[#B9177B] font-medium mt-1">Enthéa MALFONDET – doctorante GRIPIC, Celsa-Sorbonne Université</p>
                  <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-500">
                    <span>📅 8–10 juin</span>
                    <span>🕒 Médiation : 08/06 à 17h30</span>
                  </div>
                  <p className="text-gray-600 mt-4 leading-relaxed text-sm">
                    14 productions photographiques autour de la ménopause, menstruations et stigmatisations liées à l’âge et au genre.
                    L’œuvre témoigne de la relation d’intimité entre chercheur et terrain, et de la création comme médiation sensible.
                  </p>
                </div>
              </div>
              {/* Master USPN */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <span className="bg-[#E9E5E0] text-[#4B3B2C] text-xs font-semibold px-2.5 py-1 rounded-full">Exposition collective</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full flex items-center gap-1">📍 Humathèque - Forum</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">« Le Campus Condorcet et son environnement : dynamiques locales et scientifiques »</h4>
                  <p className="text-sm text-[#B9177B] font-medium mt-1">Étudiants M1/M2 Communication & RH – USPN (46 étudiant·es)</p>
                  <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-500">
                    <span>📅 8–10 juin</span>
                    <span>🕒 Médiation : 08/06 à 18h45</span>
                  </div>
                  <p className="text-gray-600 mt-4 leading-relaxed text-sm">
                    Kakémono + 12 affiches A0 : histoire du campus, architecture, gouvernance, impact dans le parcours doctoral, Humathèque, ancrage territorial.
                    Enquête documentaire, entretiens et photographies. Une valorisation du Campus auprès des 250 participant·es des Doctorales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dispositifs & installations */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#AD947E] rounded-full flex items-center justify-center text-white text-sm">🎛️</div>
              <h3 className="text-2xl font-semibold text-[#354878]">Dispositifs immersifs & interactifs</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Manuela Anghelescu */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <span className="bg-[#E9E5E0] text-[#4B3B2C] text-xs font-semibold px-2.5 py-1 rounded-full">Dispositif fixe</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full flex items-center gap-1">📍 Foyer – Centre des colloques</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Visibilités différentielles et production discursive de la ville-dispositif</h4>
                  <p className="text-sm text-[#B9177B] font-medium">Manuela ANGHELESCU – doctorante, Université de Timișoara (Roumanie)</p>
                  <div className="text-xs text-gray-500 mt-1">📅 Présence 8–9 juin 2026 · 🗣️ Médiation 09/06 à 11h</div>
                  <p className="text-gray-600 mt-3 text-sm">
                    Un tunnel de tissu obscur de 4m² qui restitue une enquête qualitative sur les médiations culturelles dans la ville.
                    L’installation matérialise les régimes de visibilité et stratifications discursives, inspirée du concept foucaldien de dispositif.
                  </p>
                </div>
              </div>
              {/* Giorgia Arbuti */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <span className="bg-[#E9E5E0] text-[#4B3B2C] text-xs font-semibold px-2.5 py-1 rounded-full">Installation participative & IA</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full flex items-center gap-1">📍 Humathèque - Forum</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">fan_tact.stick.ai – co-création de stickers générés par IA</h4>
                  <p className="text-sm text-[#B9177B] font-medium">Giorgia ARBUTI – doctorante LLSETI (USMB / Università degli Studi di Torino)</p>
                  <div className="text-xs text-gray-500 mt-1">📅 8–10 juin · 🕘 Médiation : 10/06 à 9h</div>
                  <p className="text-gray-600 mt-3 text-sm">
                    Via QR code, le public rédige un prompt → IA générative text-to-image (recherche dédiée) → image s’affiche en temps réel sur écran géant.
                    L’installation interroge les tactiques créatives au sein des plateformes génératives et produit un corpus de recherche (prompts, paramètres, images).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Table ronde */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#354878] rounded-full flex items-center justify-center text-white text-sm">🎤</div>
              <h3 className="text-2xl font-semibold text-[#354878]">Conférence / Table ronde</h3>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow max-w-4xl mx-auto">
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <span className="bg-[#E9E5E0] text-[#4B3B2C] text-xs font-semibold px-2.5 py-1 rounded-full">Table ronde</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full flex items-center gap-1">📍 Amphi 250 – Centre des colloques</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mt-2">Recherche et médias en résistance <span className="text-sm font-normal text-gray-400">(titre provisoire)</span></h4>
                <p className="text-[#B9177B] font-medium mt-1">Animation : Olivier KOCH</p>
                <div className="flex flex-wrap gap-2 my-3 text-sm text-gray-600">
                  <span>📅 09 juin 2026</span>
                  <span>⏰ 13h45 – 15h30</span>
                </div>
                <p className="text-gray-700">Face aux remises en cause de légitimité dans l’espace public, chercheurs et journalistes croisent leurs postures. Avec des expert·es et journalistes :</p>
                <div className="flex flex-wrap gap-2 mt-3 text-sm font-medium text-[#354878] bg-gray-50 p-3 rounded-lg">
                  <span>Jeanne Baurin-Monini (IRSEM)</span> • <span>Stéphane Foucart (Le Monde)</span> • <span>Sarra Grira (Orient XXI)</span> • <span>François Jost (Sorbonne Nouvelle)</span> • <span>Ellen Salvi (Mediapart)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ateliers */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#AD947E] rounded-full flex items-center justify-center text-white text-sm">✍️</div>
              <h3 className="text-2xl font-semibold text-[#354878]">Ateliers de médiation & recherche-création</h3>
            </div>
            <div className="space-y-12">
              {/* 09/06 */}
              <div>
                <div className="bg-[#F2EFEB] p-3 rounded-lg inline-block mb-4 text-sm font-semibold text-[#354878]">📆 Mardi 09 juin • 9h00 – 10h30</div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <span className="bg-[#E9E5E0] text-[#4B3B2C] text-xs font-semibold px-2.5 py-1 rounded-full">Atelier corporel & somatique</span>
                      <h4 className="text-xl font-bold text-gray-800 mt-2">(In)corporer notre recherche – Médiation de la recherche en SIC</h4>
                      <p className="text-sm text-[#B9177B] font-medium">Sonia NIKITIN – doctorante ELICO, Université Lumière Lyon 2</p>
                      <p className="text-xs text-gray-500 mt-1">🧘 Expérimentation corporelle (échauffement, mouvement, yeux fermés, écriture/dessin) • <span className="font-semibold">Max 10 participant·es</span></p>
                      <p className="text-gray-600 text-sm mt-3">Approche somatique de sa propre recherche (concepts, théories, problématiques) inspirée des pratiques de danse contemporaine et de médiation culturelle.</p>
                      <div className="mt-3 text-xs text-gray-400">📍 Bâtiment Recherche Sud</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <span className="bg-[#E9E5E0] text-[#4B3B2C] text-xs font-semibold px-2.5 py-1 rounded-full">Techno-performance & IA générative</span>
                      <h4 className="text-xl font-bold text-gray-800 mt-2">Usages artistiques In-Disciplinaires de l’IA</h4>
                      <p className="text-sm text-[#B9177B] font-medium">Diana ROSETTE LUCIANO – doctorante LLSETI, USMB</p>
                      <p className="text-xs text-gray-500 mt-1">🎭 Performance « Manifeste artificiel, Naissance de l’IA » – dialogue avec Eleazar (ChatGPT) • <span className="font-semibold">Max 20 participant·es</span></p>
                      <p className="text-gray-600 text-sm mt-3">Recherche-création explorant interactions entre artistes performers et IA générative, questionnant requêtes, langage et détournements.</p>
                      <div className="mt-3 text-xs text-gray-400">📍 Bâtiment Recherche Sud</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 10/06 */}
              <div>
                <div className="bg-[#F2EFEB] p-3 rounded-lg inline-block mb-4 text-sm font-semibold text-[#354878]">📆 Mercredi 10 juin • 11h00 – 12h30</div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <span className="bg-[#E9E5E0] text-[#4B3B2C] text-xs font-semibold px-2.5 py-1 rounded-full">Atelier bande dessinée & vulgarisation</span>
                      <h4 className="text-xl font-bold text-gray-800 mt-2">BD de la thèse – Raconter sa recherche en cases</h4>
                      <p className="text-sm text-[#B9177B] font-medium">Valériane LOISON (ATER SIC) & Pascal GÉNOT (docteur SIC, auteur BD)</p>
                      <p className="text-xs text-gray-500 mt-1">✏️ Concevoir une planche de BD • <span className="font-semibold">10–12 participant·es</span></p>
                      <p className="text-gray-600 text-sm mt-3">Apprendre à vulgariser, structurer un récit scientifique, développer des compétences en mise en récit créative.</p>
                      <div className="mt-3 text-xs text-gray-400">📍 Bâtiment Recherche Sud</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <span className="bg-[#E9E5E0] text-[#4B3B2C] text-xs font-semibold px-2.5 py-1 rounded-full">Jeu de rôle narratif & écologie</span>
                      <h4 className="text-xl font-bold text-gray-800 mt-2">KAMA – Jeu de rôle narratif « futurs de la nature en milieu urbain »</h4>
                      <p className="text-sm text-[#B9177B] font-medium">Geoffrey LAVIGNE – doctorant CESCO / Cerlis (MNHN / CNRS)</p>
                      <p className="text-xs text-gray-500 mt-1">🎲 Fiction collaborative pour imaginer des formes de vie • <span className="font-semibold">Max 20 participant·es</span></p>
                      <p className="text-gray-600 text-sm mt-3">KAMA-MUTA interroge le rôle de la fiction dans l’élaboration d’alternatives socio-écologiques pour la biodiversité urbaine.</p>
                      <div className="mt-3 text-xs text-gray-400">📍 Bâtiment Recherche Sud</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-amber-50/60 border border-amber-200 rounded-xl p-4 text-sm text-gray-700 flex flex-wrap items-center justify-between gap-2">
              <span>⚠️ Ateliers sur inscription (places limitées) – renseignez-vous sur place ou au bureau d’accueil des Doctorales.</span>
              <span className="text-xs bg-white px-2 py-1 rounded-full shadow-sm">🎟️ Capacités : 10 à 20 participant·es selon atelier</span>
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>✨ Programme complet Arts·SIC·Culture – Doctorales SFSIC 2026 co-organisées par le LabSIC (Campus Condorcet).<br />
            Entrée libre pour les participant·es inscrit·es aux Doctorales. Médiations et rencontres avec les artistes-chercheur·ses aux horaires indiqués.</p>
          </div>
        </div>
      </section>

      {/* Navigation buttons */}
      <section className="py-12 px-6 lg:px-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-[#AD947E] text-white rounded-lg hover:bg-[#B9177B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#AD947E] focus:ring-offset-2 font-medium shadow-sm"
            >
              Nous contacter
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="px-8 py-3 border-2 border-[#AD947E] text-[#AD947E] rounded-lg hover:bg-[#AD947E] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#AD947E] focus:ring-offset-2 font-medium"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-12 px-6 lg:px-12 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-center">
            <p className="text-xl italic text-gray-700 mb-4">
              « L'art et la culture sont au cœur des sciences de l'information et de la communication.
              Ils nous permettent d'explorer de nouvelles formes d'expression et de transmission des savoirs. »
            </p>
            <footer className="text-gray-500">— Doctorales SFSIC 2026 · Arts·SIC·Culture</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}