import { Calendar, Clock, MapPin, Users, Award, Coffee, Utensils, Presentation, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import svgPaths from '../imports/svg-dytsfjg5e8';

interface ProgrammePageProps {
  onNavigate: (page: string) => void;
}

export default function ProgrammePage({ onNavigate }: ProgrammePageProps) {
  const [selectedDay, setSelectedDay] = useState<'lundi' | 'mardi' | 'mercredi'>('lundi');
  const [expandedSessions, setExpandedSessions] = useState<string[]>([]);

  const toggleSession = (sessionId: string) => {
    setExpandedSessions(prev =>
      prev.includes(sessionId)
        ? prev.filter(id => id !== sessionId)
        : [...prev, sessionId]
    );
  };

  const days = [
    { id: 'lundi', label: 'Lundi', date: '8 juin 2026', subtitle: 'Accueil & Ouverture' },
    { id: 'mardi', label: 'Mardi', date: '9 juin 2026', subtitle: 'Ateliers & Communications' },
    { id: 'mercredi', label: 'Mercredi', date: '10 juin 2026', subtitle: 'Ateliers & Clôture' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="py-20 px-6 lg:px-32"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgb(53, 72, 120) 0%, rgb(57, 78, 126) 7.1429%, rgb(60, 84, 132) 14.286%, rgb(64, 90, 137) 21.429%, rgb(67, 96, 143) 28.571%, rgb(71, 102, 149) 35.714%, rgb(75, 108, 155) 42.857%, rgb(79, 114, 161) 50%, rgb(82, 120, 167) 57.143%, rgb(86, 126, 173) 64.286%, rgb(90, 132, 179) 71.429%, rgb(94, 139, 185) 78.571%, rgb(98, 145, 192) 85.714%, rgb(102, 152, 198) 92.857%, rgb(106, 158, 204) 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <div className="w-20 h-20">
              <svg className="w-full h-full" fill="none" viewBox="0 0 64 64">
                <path d="M21.3333 5.33333V16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                <path d="M42.6667 5.33333V16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                <path d={svgPaths.p194adf80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                <path d="M8 26.6667H56" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                <path d="M21.3333 37.3333H21.36" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                <path d="M32 37.3333H32.0267" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                <path d="M42.6667 37.3333H42.6933" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                <path d="M21.3333 48H21.36" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                <path d="M32 48H32.0267" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                <path d="M42.6667 48H42.6933" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
              </svg>
            </div>
          </motion.div>

          <motion.h1 
            className="text-white mb-8 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Programme
          </motion.h1>

          <motion.p 
            className="text-white text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Trois journées riches en échanges, ateliers et rencontres scientifiques
          </motion.p>
        </div>
      </section>

      {/* Vue d'ensemble - 3 jours */}
      <section className="py-16 px-6 lg:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {days.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setSelectedDay(item.id as 'lundi' | 'mardi' | 'mercredi')}
                className={`border-2 rounded-2xl p-8 text-left transition-all ${
                  selectedDay === item.id
                    ? 'border-[#354878] bg-gradient-to-br from-[#6A9ECC]/10 to-[#B9177B]/10 shadow-lg'
                    : 'border-[#6A9ECC]/30 hover:border-[#6A9ECC] hover:shadow-md'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 40 40">
                      <path d="M13.3333 3.33333V10" stroke={selectedDay === item.id ? '#354878' : '#6A9ECC'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                      <path d="M26.6667 3.33333V10" stroke={selectedDay === item.id ? '#354878' : '#6A9ECC'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                      <path d={svgPaths.p36a93880} stroke={selectedDay === item.id ? '#354878' : '#6A9ECC'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                      <path d="M5 16.6667H35" stroke={selectedDay === item.id ? '#354878' : '#6A9ECC'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-[#354878] text-center mb-3 tracking-tight">
                  {item.label}
                </h3>

                <p className="text-xl font-semibold text-[#364153] text-center mb-3 leading-relaxed">
                  {item.date}
                </p>

                <p className="text-base text-[#6A9ECC] text-center font-medium leading-relaxed">
                  {item.subtitle}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Programme détaillé par jour */}
      <section className="py-16 px-6 lg:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {selectedDay === 'lundi' && (
              <LundiProgramme key="lundi" toggleSession={toggleSession} expandedSessions={expandedSessions} onNavigate={onNavigate} />
            )}
            {selectedDay === 'mardi' && (
              <MardiProgramme key="mardi" toggleSession={toggleSession} expandedSessions={expandedSessions} onNavigate={onNavigate} />
            )}
            {selectedDay === 'mercredi' && (
              <MercrediProgramme key="mercredi" toggleSession={toggleSession} expandedSessions={expandedSessions} onNavigate={onNavigate} />
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-16 px-6 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#354878] text-center mb-14 tracking-tight">
            Informations pratiques
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <InfoCard
              icon={<MapPin className="text-white" size={32} />}
              title="Lieu"
              content="Campus Condorcet, 8 cours des Humanités, 93322 Aubervilliers CEDEX"
              gradient="from-[#6A9ECC] to-[#354878]"
            />

            <InfoCard
              icon={<Users className="text-white" size={32} />}
              title="Public"
              content="Doctorant·e·s et enseignant·e·s-chercheur·euse·s en Sciences de l'Information et de la Communication"
              gradient="from-[#B9177B] to-[#AD947E]"
            />

            <InfoCard
              icon={<Award className="text-white" size={32} />}
              title="Chiffres clés"
              content="118 communications, 5 sessions parallèles, 7 salles, 40 binômes de modération"
              gradient="from-[#354878] to-[#6A9ECC]"
            />

            <InfoCard
              icon={<GraduationCap className="text-white" size={32} />}
              title="Ateliers"
              content="Fabriques méthodologiques, insertion professionnelle, et visites d'expositions Arts Sic Culture"
              gradient="from-[#AD947E] to-[#B9177B]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Composant InfoCard
function InfoCard({ icon, title, content, gradient }: { icon: React.ReactNode; title: string; content: string; gradient: string }) {
  return (
    <motion.div 
      className="bg-white border-2 border-[#6A9ECC]/30 rounded-2xl p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, borderColor: 'rgb(106, 158, 204)', boxShadow: '0 10px 30px rgba(106, 158, 204, 0.15)' }}
    >
      <div className="flex items-start gap-5">
        <div 
          className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${gradient}`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#354878] mb-4 tracking-tight">{title}</h3>
          <p className="text-[#364153] leading-relaxed text-lg">{content}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Programme Lundi
function LundiProgramme({ toggleSession, expandedSessions, onNavigate }: { toggleSession: (id: string) => void; expandedSessions: string[]; onNavigate: (page: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-[#354878] mb-8">Lundi 8 juin 2026</h2>

      {/* Ouverture */}
      <TimeSlot
        time="14h00"
        title="Ouverture - Séance plénière"
        icon={<Presentation size={24} />}
        color="bg-[#354878]"
      >
        <p className="text-[#364153]">
          Discours de bienvenue, discours officiels et présentation du programme des Doctorales 2026
        </p>
      </TimeSlot>

      {/* Conférence */}
      <TimeSlot
        time="14h30"
        title="Conférence dialoguée"
        icon={<GraduationCap size={24} />}
        color="bg-[#6A9ECC]"
      >
        <p className="text-[#364153]">
          Échanges avec des expert·e·s du domaine des Sciences de l'Information et de la Communication
        </p>
      </TimeSlot>

      {/* Pause */}
      <TimeSlot
        time="15h30"
        title="Pause"
        icon={<Coffee size={20} />}
        color="bg-[#AD947E]"
        compact
      />

      {/* Session 1 */}
      <SessionBlock
        id="session-1"
        time="15h45 - 17h15"
        title="Session 1 - Communications doctorales"
        subtitle="6 salles thématiques en parallèle"
        isExpanded={expandedSessions.includes('session-1')}
        onToggle={() => toggleSession('session-1')}
        color="bg-gradient-to-r from-[#354878] to-[#6A9ECC]"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <ThemeCard
            room="Salle 1"
            theme="Environnement, discours et controverses publiques"
            moderators="Nathalie Boucher-Petrovic & Julien Péquignot"
            presentations={[
              "Évolution du discours et controverses environnementales : géothermie en Alsace - Jérôme Arnaud (CREM)",
              "Changements climatiques dans les émissions TV de débats (2017-2025) - Margaux Siché (GRESEC)",
              "Recomposition du répertoire médiatique des écologistes : activisme muséal - Lucille Lamache (GRIPIC)"
            ]}
          />
          
          <ThemeCard
            room="Salle 2"
            theme="Datafication de la santé et Expérience Patient"
            moderators="Geneviève Vidal & Sabine Bosler"
            presentations={[
              "Nouvelle écologie de la donnée en santé (CoachApnéea) - David Devaux (CIMEOS)",
              "Plateformisation et datafication de la santé - Natacha Ernwein (LABSIC)",
              "Voix des enfants en pédiatrie : recueil expérience patient - Nawel Gabsi-Bernard (MICA)"
            ]}
          />

          <ThemeCard
            room="Salle 3"
            theme="Genre, Identité et Représentations"
            moderators="Hélène Breda & Fanny Georges"
            presentations={[
              "Modèles de masculinité dans les représentations fictionnelles - Charlie Fabre (ELICO)",
              "Deuil et capitalisation émotionnelle sur les réseaux professionnels - Delphine Moreau-Plachy (Centre Max Weber)",
              "Perception des candidats LGBTQ dans la téléréalité - Théo Courty (CREM)"
            ]}
          />

          <ThemeCard
            room="Salle 4"
            theme="Pratiques journalistiques et traitement médiatique"
            moderators="Asmaa Azizi & Valérie Croissant"
            presentations={[
              "Traitement médiatique des caricatures de Mahomet après Charlie Hebdo - Antoine Janon (MICA)",
              "Images violentes et engagement militant : Sea Shepherd - Léa Nevers (CIMEOS)",
              "Liberté d'expression et conflictualité : affaire Guillaume Meurice - Adélie Laruncet (GRIPIC)"
            ]}
          />

          <ThemeCard
            room="Salle 5"
            theme="Représentations médiatiques, genre et conflits"
            moderators="Maria Adib Doss & Johanne Samè"
            presentations={[
              "Dynamiques genrées de la sécurité des reportères en zone de conflit - Klervi Le collen (LABSIC)",
              "Représentations médiatiques des civils dans la guerre à Gaza - Lise Dabrowski (CARISM)",
              "Cheffes de cuisine dans la presse française (2007-2024) - Estérelle PAYANY (CIMEOS)"
            ]}
          />

          <ThemeCard
            room="Salle 6"
            theme="Éducation, Apprentissage et Numérique"
            moderators="Vincent Brulois & Axelle Martin"
            presentations={[
              "Pratiques d'usage numériques des étudiant·e·s - Emma Jeanjacques (LERASS)",
              "HistoAR : réalité augmentée pour l'apprentissage de l'Histoire - Xavier Nédélec (ELLIAD)",
              "Usages du numérique à l'université de Mayotte - Ayad Said (SICLAB)"
            ]}
          />
        </div>
      </SessionBlock>

      {/* Pause */}
      <TimeSlot
        time="17h15"
        title="Pause"
        icon={<Coffee size={20} />}
        color="bg-[#AD947E]"
        compact
      />

      {/* Session 2 */}
      <SessionBlock
        id="session-2"
        time="17h30 - 19h00"
        title="Session 2 - Communications doctorales"
        subtitle="7 salles thématiques + Visites commentées d'expositions ASC"
        isExpanded={expandedSessions.includes('session-2')}
        onToggle={() => toggleSession('session-2')}
        color="bg-gradient-to-r from-[#6A9ECC] to-[#B9177B]"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <ThemeCard
            room="Salle 1"
            theme="Patrimoine, Musées et Mémoires"
            moderators="Oriane Deseilligny & Emilie Bouillaguet"
            presentations={[
              "Autorité des industries du numérique dans le champ patrimonial - Allison Guiraud (Centre Norbert Elias)",
              "Restructurations de musées à l'épreuve de l'attractivité - Rosalie Pouget (LERASS)",
              "Traces numériques : réseaux sociaux et IAG recomposent le passé réunionnais - Laurène Tetu (LCF)"
            ]}
          />

          <ThemeCard
            room="Salle 2"
            theme="Musique et Espaces de Légitimation"
            moderators="Alix Bénistant & Aurélie Chêne"
            presentations={[
              "Du stream à la scène : reconnaissance du rap marocain - Inès Oudadesse (LABSIC)",
              "Diffusion des chants mourides sur Youtube - Noellyne Diakhite (MICA)",
              "Écrire la musique dans la presse musicale alternative - Léa Mouthon (ELICO)"
            ]}
          />

          <ThemeCard
            room="Salle 3"
            theme="Intelligence Artificielle et Créativité Tactique"
            moderators="Vincent Bullich & Roger Bautier"
            presentations={[
              "Émotions dans les conversations humain-machine - Joséphine Christmann (LERASS)",
              "Tactiques des personnes ordinaires à l'ère de l'IA générative - Giorgia Arbuti (LLSETI)",
              "Usages des IAG dans les rédactions françaises - Refka Payssan (CEMTI)"
            ]}
          />

          <ThemeCard
            room="Salle 4"
            theme="Communication, santé et alimentation"
            moderators="Yanita Andonova & Sarah Cordonnier"
            presentations={[
              "Le supermarché comme dispositif sémiotique du vin - Celia Banos (GRIPIC)",
              "Adolescents face aux discours alimentaires sur les réseaux sociaux - Léa Lopes (CIMEOS)",
              "Salle de consommation à moindre risque : du dispositif au problème public - Maya Mazzacane (GRIPIC)"
            ]}
          />

          <ThemeCard
            room="Salle 5"
            theme="Journalisme local et représentations"
            moderators="Asmaa Azizi & Valérie Croissant"
            presentations={[
              "Effets de la désertification informationnelle en France - Nicolas Faucon (Communication et société)",
              "Fabrique journalistique des Outre-mer à la TV nationale - Laureline Pinjon (LCF)",
              "Pratiques journalistiques lors des élections thaïlandaises 2023 - Alexandra Colombier (Umr IDEES)"
            ]}
          />

          <ThemeCard
            room="Salle 6"
            theme="Droit, Inclusion et Accès à l'Information"
            moderators="Nathalie Boucher-Petrovic & Vincent Liquète"
            presentations={[
              "Approche communicationnelle de l'accès au(x) droit(s) - Léna Boukhelifa (CEDITEC)",
              "Inclusion et exclusion des personnes autistes dans les médias - Adèle Hollebecque (MICA)",
              "L'information contre le non-recours aux droits sociaux - Yekta Akhbarifar (GRESEC)"
            ]}
          />

          <ThemeCard
            room="Salle 7"
            theme="Méthodes et objets scientifiques émergents"
            moderators="Geneviève Vidal & Sabine Bosler"
            presentations={[
              "Enquête ethnographique sur les minorités sexuelles en Côte d'Ivoire - Elom Kolor (GRESEC)",
              "Penser le jeu comme un mode de lecture - Julie Blanchard (LERASS)",
              "Pratiques de science ouverte comme objet d'étude - Ioanna Faïta (ELICO)"
            ]}
          />
        </div>
      </SessionBlock>

      {/* Cocktail */}
      <TimeSlot
        time="19h00"
        title="Cocktail d'accueil"
        icon={<Utensils size={24} />}
        color="bg-[#B9177B]"
      >
        <p className="text-[#364153]">
          Moment convivial avec exposition et atelier Arts Sic Culture (ASC)
        </p>
      </TimeSlot>
    </motion.div>
  );
}

// Programme Mardi
function MardiProgramme({ toggleSession, expandedSessions, onNavigate }: { toggleSession: (id: string) => void; expandedSessions: string[]; onNavigate: (page: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-[#354878] mb-8">Mardi 9 juin 2026</h2>

      {/* Accueil */}
      <TimeSlot
        time="8h30"
        title="Accueil des participant·e·s"
        icon={<Users size={24} />}
        color="bg-[#6A9ECC]"
        compact
      />

      {/* Ateliers matin */}
      <TimeSlot
        time="9h00 - 10h30"
        title="Ateliers Fabriques méthodologiques"
        icon={<GraduationCap size={24} />}
        color="bg-[#354878]"
      >
        <p className="text-[#364153]">
          Ateliers pratiques sur les méthodes de recherche en SIC
        </p>
        <button 
          onClick={() => onNavigate('ateliers')}
          className="mt-3 text-[#6A9ECC] hover:text-[#354878] font-semibold underline"
        >
          Découvrir les ateliers →
        </button>
      </TimeSlot>

      {/* Pause */}
      <TimeSlot
        time="10h30"
        title="Pause"
        icon={<Coffee size={20} />}
        color="bg-[#AD947E]"
        compact
      />

      {/* Session 3 */}
      <SessionBlock
        id="session-3"
        time="11h00 - 12h30"
        title="Session 3 - Communications doctorales"
        subtitle="7 salles thématiques + Visites commentées d'expositions ASC"
        isExpanded={expandedSessions.includes('session-3')}
        onToggle={() => toggleSession('session-3')}
        color="bg-gradient-to-r from-[#B9177B] to-[#AD947E]"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <ThemeCard
            room="Salle 1"
            theme="Terrains Sensibles"
            moderators="Geneviève Vidal & Allan Deneuville"
            presentations={[
              "Observer l'illégal : immersion ethnographique à l'ère numérique - Camille Roucher (CREM)",
              "Conséquences du discours de haine en ligne sur les minorités - Sinem BOYRAZ (IMSICC)",
              "Développer l'empathie par la vidéo 360° en formation - Léa Degeuse (IMS)"
            ]}
          />

          <ThemeCard
            room="Salle 2"
            theme="Médiatisation des Crises"
            moderators="Amaia Errecart & Julie Brusq"
            presentations={[
              "Récit médiatique du Covid-19 par France Télévisions - Joa Neves (IRCAV)",
              "Temporalité de la crise écologique dans les jeux vidéo - Bastien Patout (CEMTI)",
              "Vulnérabilité informationnelle face aux algorithmes à Madagascar - Anny Maria Rondroavalona (GERIICO)"
            ]}
          />

          <ThemeCard
            room="Salle 3"
            theme="Santé et Éthique du Care"
            moderators="Emmanuelle Savignac & Virginie Sonet"
            presentations={[
              "Logiques de care dans les pratiques de recherche-création - Enthea Malfondet (GRIPIC)",
              "Appropriations de l'information de santé sur les médias sociaux - Justine Andrieux (ELICO)",
              "Dire la fragilité pour retarder la mort - Clara Scotto d'Apollonia (GRIPIC)"
            ]}
          />

          <ThemeCard
            room="Salle 4"
            theme="Agentivité et Contribution sur les Plateformes"
            moderators="Abdelfettah Benchenna & Quentin Mazel"
            presentations={[
              "Agentivité des utilisateurs face à la quantification (Babelio) - Juliette Parmentier (RESIC)",
              "Productions de fans pensées comme biens communs - Aurore Deramond (LISST)",
              "Dispositifs de streaming et dynamiques affectives - Sophie Kiang (GRIPIC)"
            ]}
          />

          <ThemeCard
            room="Salle 5"
            theme="Communication Organisationnelle et Management"
            moderators="Ivan Chupin & Marcela Patrascu"
            presentations={[
              "Espaces flexibles de travail : tensions discours/pratiques - Virginie Vivien (CIMEOS)",
              "Construction de sens et sociomatérialité de la pratique stratégique - Elyane Jourdenais-Lemaire (UCL)",
              "Identité commune dans une communauté de pratique - Aymée Nakasato (INSYTE-DICEN IdF)"
            ]}
          />

          <ThemeCard
            room="Salle 6"
            theme="Médiatisation, identité et émotions"
            moderators="Oriane Deseilligny & Laurie Schmitt"
            presentations={[
              "Influenceurs makeup et médiation des normes esthétiques - Julien Fauqueux Albanese (SICLAB)",
              "Tisser l'effacement dans les traces LGBTQIA+ sur Instagram - Dylan Fluzin (DICEN IdF)",
              "Refus scolaire anxieux dans l'espace public des Hauts-de-France - Célia Delcroix (GERIICO)"
            ]}
          />

          <ThemeCard
            room="Salle 7"
            theme="IA et pratiques professionnelles"
            moderators="Jacob Matthews & Vincent Bullich"
            presentations={[
              "Effets des IA génératives sur la transformation numérique - Ibrahim Jaloud Lailaba Maiga (CREM)",
              "Écosystème des hyper-trucages : cartographie - Sacha Lebrun (GERIICO)",
              "Accès au terrain en contexte d'innovation (IA) - Ariane Ayedoun (ELICO)"
            ]}
          />
        </div>
      </SessionBlock>

      {/* Repas */}
      <TimeSlot
        time="12h30 - 14h00"
        title="Pause déjeuner"
        icon={<Utensils size={24} />}
        color="bg-[#AD947E]"
        compact
      />

      {/* Table-Ronde ASC */}
      <TimeSlot
        time="14h00 - 15h30"
        title="Table-Ronde Arts Sic Culture (ASC)"
        icon={<Presentation size={24} />}
        color="bg-[#B9177B]"
      >
        <p className="text-[#364153]">
          Échanges autour des pratiques artistiques et culturelles en Sciences de l'Information et de la Communication
        </p>
        <button 
          onClick={() => onNavigate('arts-sic-culture')}
          className="mt-3 text-[#B9177B] hover:text-[#354878] font-semibold underline"
        >
          En savoir plus sur Arts Sic Culture →
        </button>
      </TimeSlot>

      {/* Pause */}
      <TimeSlot
        time="15h30"
        title="Pause"
        icon={<Coffee size={20} />}
        color="bg-[#AD947E]"
        compact
      />

      {/* Ateliers après-midi */}
      <TimeSlot
        time="15h45 - 17h15"
        title="Ateliers Insertion professionnelle"
        icon={<Award size={24} />}
        color="bg-[#354878]"
      >
        <p className="text-[#364153]">
          Ateliers dédiés à l'insertion professionnelle des doctorant·e·s
        </p>
        <button 
          onClick={() => onNavigate('ateliers')}
          className="mt-3 text-[#6A9ECC] hover:text-[#354878] font-semibold underline"
        >
          Voir les ateliers →
        </button>
      </TimeSlot>

      {/* Pause */}
      <TimeSlot
        time="17h15"
        title="Pause"
        icon={<Coffee size={20} />}
        color="bg-[#AD947E]"
        compact
      />

      {/* Séance plénière */}
      <TimeSlot
        time="17h45 - 18h45"
        title="Séance plénière"
        icon={<Users size={24} />}
        color="bg-[#354878]"
      >
        <div className="text-[#364153] space-y-2">
          <p className="font-semibold">Rencontre SFSIC CNU CPDIRSIC</p>
          <p>Assemblée Générale de la SFSIC</p>
        </div>
      </TimeSlot>

      {/* Soirée festive */}
      <TimeSlot
        time="19h00"
        title="Soirée festive"
        icon={<Utensils size={24} />}
        color="bg-[#B9177B]"
      >
        <p className="text-[#364153]">
          Moment convivial et festif pour clôturer cette journée riche en échanges
        </p>
      </TimeSlot>
    </motion.div>
  );
}

// Programme Mercredi
function MercrediProgramme({ toggleSession, expandedSessions, onNavigate }: { toggleSession: (id: string) => void; expandedSessions: string[]; onNavigate: (page: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-[#354878] mb-8">Mercredi 10 juin 2026</h2>

      {/* Accueil */}
      <TimeSlot
        time="8h30"
        title="Accueil des participant·e·s"
        icon={<Users size={24} />}
        color="bg-[#6A9ECC]"
        compact
      />

      {/* Session 4 */}
      <SessionBlock
        id="session-4"
        time="9h00 - 10h30"
        title="Session 4 - Communications doctorales"
        subtitle="7 salles thématiques + Visites commentées d'expositions ASC"
        isExpanded={expandedSessions.includes('session-4')}
        onToggle={() => toggleSession('session-4')}
        color="bg-gradient-to-r from-[#354878] to-[#6A9ECC]"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <ThemeCard
            room="Salle 1"
            theme="Savoirs, Expertise et Contre-récits Écologiques"
            moderators="Pascal Bué & Fanny Bougenies"
            presentations={[
              "Géobiologie dans la controverse éolien terrestre - Aurélie Deganello (Centre Norbert Elias)",
              "Information environnementale dans les médias scolaires - Florie Delacroix (LERASS)",
              "Écologie dans les médias d'extrême droite sur YouTube - Anatole Grimaldi (CREM)"
            ]}
          />

          <ThemeCard
            room="Salle 2"
            theme="Industries Culturelles et Mutations"
            moderators="Benoit Berthou & Laurie Schmitt"
            presentations={[
              "Professionnels de l'édition culinaire face au numérique - Amélie Collot (CIMEOS)",
              "Enjeux de la conservation industrielle du cinéma numérique - Elena Tsouri (RIRRA21)",
              "Méthodes de séduction dans la BD franco-belge - Marine Delliaux (GERIICO)"
            ]}
          />

          <ThemeCard
            room="Salle 3"
            theme="Espaces Numériques et participation"
            moderators="Abdelfettah Benchenna & Fanny Georges"
            presentations={[
              "Évaluer l'évaluation : participation culturelle et scientifique - Lucie Verdeil (ELICO)",
              "Forum participatif de proches de détenus - Arthur Lacour (DICEN IdF)",
              "Littératies pluriverselles et création partagée - Sonia Nikitin (ELICO)"
            ]}
          />

          <ThemeCard
            room="Salle 4"
            theme="Action Publique et Participation Citoyenne"
            moderators="Johan Boittiaux & Julie Brusq"
            presentations={[
              "Parole des agents au service de l'action publique - Dorothée Oster (GRESEC)",
              "Parole citoyenne et dispositifs audiovisuels - Stéphanie Parravano (PREFICS)",
              "Médiatisation des projets de mobilité : transport par câble Grenoble - Kokoroko Dramane Ouattara (GRESEC)"
            ]}
          />

          <ThemeCard
            room="Salle 5"
            theme="Marque, Luxe et stratégies de communication"
            moderators="Vincent Brulois & Marcela Patrascu"
            presentations={[
              "Faire l'expérience d'une marque : design et expérience - Cécile Buzy-Cazaux (CIMEOS)",
              "Du luxe au superluxe en parfumerie : analyse sémiotique - Juliette Foussard (MICA)",
              "Reconfigurer la prescription vinicole sur les RSN - Jeanne Peixian Qiao (GERIICO)"
            ]}
          />

          <ThemeCard
            room="Salle 6"
            theme="Pratiques numériques, pédagogie et savoirs"
            moderators="Mikaël Gléonnec & Vincent Liquète"
            presentations={[
              "Hypermediated university: littératie numérique - Elizabeth Castro Solís (LLSETI)",
              "Expériences informationnelles : lycéens France/Chine - Runsen Cao (MICA)",
              "Coach conversationnel en simulation stratégique - Garance Calmettes (IMSIC)"
            ]}
          />

          <ThemeCard
            room="Salle 7"
            theme="Contenus médiatiques et violences"
            moderators="Marie-Eva Lesaunier & Virginie Sonet"
            presentations={[
              "Violences de genre dans le cinéma : retours réflexifs - Léa Marié (CEMTI)",
              "Représentations de la psychiatrie au cinéma - Julia Pataillot (Centre Norbert Elias)",
              "Jeux vidéo et violences sexistes : la presse vidéoludique - Flavie Falais (CEREGE)"
            ]}
          />
        </div>
      </SessionBlock>

      {/* Pause */}
      <TimeSlot
        time="10h30"
        title="Pause"
        icon={<Coffee size={20} />}
        color="bg-[#AD947E]"
        compact
      />

      {/* Ateliers */}
      <TimeSlot
        time="11h00 - 12h30"
        title="Ateliers Fabriques méthodologiques / Insertion professionnelle"
        icon={<GraduationCap size={24} />}
        color="bg-[#354878]"
      >
        <p className="text-[#364153]">
          Dernière session d'ateliers pratiques pour les doctorant·e·s
        </p>
      </TimeSlot>

      {/* Repas */}
      <TimeSlot
        time="12h30 - 14h00"
        title="Pause déjeuner"
        icon={<Utensils size={24} />}
        color="bg-[#AD947E]"
        compact
      />

      {/* Session 5 */}
      <SessionBlock
        id="session-5"
        time="14h00 - 15h30"
        title="Session 5 - Communications doctorales"
        subtitle="7 salles thématiques + Visites commentées d'expositions ASC"
        isExpanded={expandedSessions.includes('session-5')}
        onToggle={() => toggleSession('session-5')}
        color="bg-gradient-to-r from-[#6A9ECC] to-[#B9177B]"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <ThemeCard
            room="Salle 1"
            theme="Pratiques culturelles et communication"
            moderators="Johan Boittiaux & Emilie Bouillaguet"
            presentations={[
              "Pratique plastique sur images médiatiques et éducation - Luce Lelevé (CREM)",
              "Penser la représentation en composite : grammaire des théâtres - Tiphaine Charrondière-Cornil (ELICO)",
              "Exposer des momies égyptiennes : parole aux visiteurs - Laure Antunes (Centre Norbert Elias)"
            ]}
          />

          <ThemeCard
            room="Salle 2"
            theme="Genre, média et communication"
            moderators="Hélène Breda & Johanne Samè"
            presentations={[
              "Cadrage médiatique des marches féministes au Mexique - Jeanne Mosnier (LERASS)",
              "Marche comme pratique informationnelle sensible des femmes - Graziella Commisso (MICA)",
              "Inscription politico-médiatique du mouvement anti-genre - Daniela González Carrión (CEMTI)"
            ]}
          />

          <ThemeCard
            room="Salle 3"
            theme="Faire avec la communication"
            moderators="Amaia Errecart & Sarah Cordonnier"
            presentations={[
              "Opérationnaliser l'approche par compétences en alternance - Asmaa Henni (DICEN IdF)",
              "Écologiser le Bassin minier : discours territoriaux - Juliette Chaussier (GERIICO)",
              "Medium, genres de discours et modalité - Anna Colli (MODYCO)"
            ]}
          />

          <ThemeCard
            room="Salle 4"
            theme="Communication et finance"
            moderators="Jacob Matthews & Quentin Mazel"
            presentations={[
              "Mythes technologiques dans le secteur des cryptomonnaies - Timothy Bourbotte (LABSIC)",
              "Temporalités numériques de gestion financière - Estelle Chana (IMSIC)",
              "Analyser l'IAG dans le secteur bancaire - Lynda Abjean (LABSIC)"
            ]}
          />

          <ThemeCard
            room="Salle 5"
            theme="Crises internationales et médiatisation"
            moderators="Alix Bénistant & Zhao Alexandre Huang"
            presentations={[
              "DeepState dans la couverture médiatique ukrainienne - Léo-Paul Barthélémy (CREM)",
              "Immigration clandestine dans le cinéma documentaire - Ata Messan Koffi (MICA)",
              "Diplomatie publique numérique en temps de guerre (Russie/Ukraine) - Yuliya Matvyeyeva (DICEN IdF)"
            ]}
          />

          <ThemeCard
            room="Salle 6"
            theme="Médiatisation des questions scientifiques et environnementales"
            moderators="Yanita Andonova & n"
            presentations={[
              "Pathologisation de l'éco-anxiété dans la presse française - Diane Garinat (GRIPIC)",
              "Négociation du paradigme One Health à Lyon - Céline Di Benedetto (ELICO)",
              "Radios et podcasts natifs : médiations scientifiques - Anouck Delfino (GRIPIC)"
            ]}
          />

          <ThemeCard
            room="Salle 7"
            theme="Communication et enjeux culturels"
            moderators="Roger Bautier & Nicolas Pélissier"
            presentations={[
              "Construire la coopération culturelle : intermédiation - Lina Allia (ELICO)",
              "Fabrique de la non-reconnaissance dans la télé-réalité - Rachel Fabre (LABSIC)",
              "Droits culturels et établissements d'enseignement artistiques - Cécile Richard (ELICO)"
            ]}
          />
        </div>
      </SessionBlock>

      {/* Pause */}
      <TimeSlot
        time="15h30"
        title="Pause"
        icon={<Coffee size={20} />}
        color="bg-[#AD947E]"
        compact
      />

      {/* Conclusion */}
      <TimeSlot
        time="16h00"
        title="Conclusion & Annonce du prochain Congrès SFSIC"
        icon={<Award size={24} />}
        color="bg-[#354878]"
      >
        <p className="text-[#364153]">
          Clôture officielle des Doctorales 2026 et perspectives pour le prochain congrès de la SFSIC
        </p>
      </TimeSlot>

      {/* Visite optionnelle */}
      <TimeSlot
        time="17h00 - 18h00"
        title="Visite des studios de production (optionnelle)"
        icon={<Presentation size={24} />}
        color="bg-[#6A9ECC]"
      >
        <p className="text-[#364153]">
          Découverte des studios de production du Campus Condorcet
        </p>
      </TimeSlot>
    </motion.div>
  );
}

// Composant TimeSlot
function TimeSlot({ time, title, icon, color, children, compact = false }: { time: string; title: string; icon: React.ReactNode; color: string; children?: React.ReactNode; compact?: boolean }) {
  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div className={`${color} text-white w-24 h-24 rounded-2xl flex flex-col items-center justify-center shadow-lg`}>
            <div className="mb-2">{icon}</div>
            <span className="text-sm font-bold leading-tight text-center px-2">{time}</span>
          </div>
        </div>
        <div className={`flex-1 bg-white rounded-2xl ${compact ? 'p-5' : 'p-7'} shadow-sm border-2 border-gray-100 hover:border-[#6A9ECC]/40 transition-colors`}>
          <h3 className="text-xl font-bold text-[#354878] mb-3 leading-tight tracking-tight">{title}</h3>
          <div className="text-base text-[#364153] leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Composant SessionBlock
function SessionBlock({ id, time, title, subtitle, isExpanded, onToggle, color, children }: { id: string; time: string; title: string; subtitle: string; isExpanded: boolean; onToggle: () => void; color: string; children: React.ReactNode }) {
  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left focus:outline-none focus:ring-4 focus:ring-[#6A9ECC]/30 rounded-2xl transition-all"
        aria-expanded={isExpanded}
        aria-label={`${isExpanded ? 'Réduire' : 'Développer'} ${title}`}
      >
        <div className={`${color} text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all flex items-center justify-between`}>
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <Clock size={28} className="flex-shrink-0" />
              <span className="text-lg font-bold tracking-wide">{time}</span>
            </div>
            <h3 className="text-2xl font-extrabold mb-2 leading-tight tracking-tight">{title}</h3>
            <p className="text-base opacity-95 font-medium leading-relaxed">{subtitle}</p>
          </div>
          <div className="flex-shrink-0 ml-6">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              {isExpanded ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-white rounded-b-2xl p-8 shadow-md border-2 border-t-0 border-gray-100 mt-1">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Composant ThemeCard
function ThemeCard({ room, theme, moderators, presentations }: { room: string; theme: string; moderators: string; presentations: string[] }) {
  return (
    <div className="bg-gradient-to-br from-[#6A9ECC]/5 to-[#B9177B]/5 border-2 border-[#6A9ECC]/20 rounded-2xl p-6 hover:border-[#6A9ECC]/40 hover:shadow-md transition-all">
      <div className="flex items-start gap-3 mb-4">
        <div className="bg-[#354878] text-white px-4 py-1.5 rounded-full text-sm font-bold flex-shrink-0 shadow-sm">
          {room}
        </div>
      </div>
      <h4 className="text-lg font-bold text-[#354878] mb-4 leading-tight tracking-tight">{theme}</h4>
      <div className="text-sm text-[#6A9ECC] mb-4 flex items-start gap-2">
        <Users size={16} className="flex-shrink-0 mt-0.5" />
        <p className="italic font-medium leading-relaxed">{moderators}</p>
      </div>
      <ul className="space-y-3">
        {presentations.map((pres, idx) => (
          <li key={idx} className="text-base text-[#364153] pl-4 border-l-3 border-l-[3px] border-[#6A9ECC]/40 leading-relaxed hover:border-[#6A9ECC] transition-colors">
            {pres}
          </li>
        ))}
      </ul>
    </div>
  );
}