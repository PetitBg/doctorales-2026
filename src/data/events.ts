export interface Event {
  id: number;
  time: string;
  location: string;
  title: string;
  presenter: string;
  description: string;
  tags: string[];
  activityType: string;
  hasSupport: boolean;
  date: string;
  presenterImage?: string;
  objectives?: string[];
  targetAudience?: string;
  requirements?: string;
  program?: Array<{
    time: string;
    content: string;
  }>;
  doctorantId?: number; // ID du doctorant associé à cet événement
}

export const eventsData: Event[] = [
  {
    id: 1,
    time: '14:00',
    location: 'Hall d\'accueil',
    title: 'Accueil des participant·e·s',
    presenter: 'Équipe organisatrice',
    description: 'Accueil et enregistrement des doctorant·e·s participant·e·s. Remise des badges et du programme détaillé.',
    tags: ['Accueil'],
    activityType: 'Accueil',
    hasSupport: false,
    date: '8 juin 2026',
    targetAudience: 'Tou·te·s les doctorant·e·s',
    requirements: 'Aucun'
  },
  {
    id: 2,
    time: '09:30',
    location: 'Grand Amphi',
    title: 'La qualification aux fonctions de MCF par la 71ème section du CNU',
    presenter: 'Chercheur·euse·s membres de la 71ème section du CNU',
    description: 'Avec la participation de chercheur·euse·s membres de la 71ème section du CNU, on traitera de la qualification aux fonctions de maître·sse·s de conférences, ainsi que des attendus pour la constitution d\'un·e doctorant·e visant la qualification.',
    tags: ['Insertion professionnelle', 'Qualification', 'MCF'],
    activityType: 'Séance plénière',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Comprendre le processus de qualification aux fonctions de MCF',
      'Identifier les attendus de la 71ème section du CNU',
      'Préparer efficacement son dossier de qualification'
    ],
    targetAudience: 'Doctorant·e·s en Sciences de l\'Information et de la Communication en fin de thèse',
    requirements: 'Être en 2ème ou 3ème année de thèse',
    program: [
      { time: '09:30 - 10:00', content: 'Introduction : Le rôle et le fonctionnement de la 71ème section' },
      { time: '10:00 - 11:00', content: 'Les critères de qualification et la constitution du dossier' },
      { time: '11:00 - 11:15', content: 'Pause' },
      { time: '11:15 - 12:00', content: 'Questions-réponses avec les membres du CNU' }
    ]
  },
  {
    id: 3,
    time: '14:00',
    location: 'Salle A1',
    title: 'La valorisation des compétences professionnelles',
    presenter: 'Commission Formation de la SFSIC',
    description: 'Un atelier sera consacré à la valorisation des acquis professionnels au cours de la thèse. Les entreprises ont besoin de mieux connaître les compétences des jeunes docteur·es en SIC. Le livret des jeunes docteur·es, élaboré par la Commission Formation de la SFSIC, enrichira la discussion. L\'entraînement organisé lors de cette session a pour objectif de permettre aux doctorant.e.s de mieux cerner les points forts de leur trajectoire scientifique qui sont de surcroît susceptibles d\'intéresser des entreprises, des services publics, des associations…',
    tags: ['Insertion professionnelle', 'Compétences', 'Carrière'],
    activityType: 'Atelier',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Identifier ses compétences transférables acquises durant la thèse',
      'Apprendre à valoriser son parcours doctoral auprès d\'employeurs',
      'Découvrir le livret des jeunes docteur·es de la SFSIC'
    ],
    targetAudience: 'Tous les doctorants en SIC',
    requirements: 'Apporter son CV',
    program: [
      { time: '14:00 - 14:30', content: 'Présentation du livret des jeunes docteur·es' },
      { time: '14:30 - 15:30', content: 'Atelier pratique : identifier ses compétences' },
      { time: '15:30 - 15:45', content: 'Pause' },
      { time: '15:45 - 16:30', content: 'Exercice de pitch professionnel' }
    ]
  },
  {
    id: 4,
    time: '16:00',
    location: 'Salle B2',
    title: 'La promotion ou visibilisation alternative de sa recherche',
    presenter: 'Intervenants experts',
    description: 'Plusieurs moyens permettent aux doctorant.e.s de mettre en visibilité leurs recherches au sein de la communauté scientifique. Au-delà de la participation à des journées d\'études, des colloques, de la publication de textes scientifiques, un atelier ouvrira la réflexion sur de possibles moyens alternatifs, qu\'il s\'agisse de l\'exposition, du format vidéo, de la performance, etc. – toutes formes encore émergentes susceptibles de donner un écho à un travail de recherche.',
    tags: ['Communication scientifique', 'Médiation', 'Valorisation'],
    activityType: 'Atelier',
    hasSupport: false,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Explorer les formats alternatifs de diffusion scientifique',
      'Découvrir des exemples concrets de valorisation créative',
      'Développer sa stratégie de communication scientifique'
    ],
    targetAudience: 'Tous les doctorants',
    requirements: 'Apporter des exemples de sa recherche (visuels, données, etc.)',
    program: [
      { time: '16:00 - 16:30', content: 'Panorama des formats alternatifs : vidéo, podcast, exposition' },
      { time: '16:30 - 17:00', content: 'Retours d\'expérience de doctorants' },
      { time: '17:00 - 17:30', content: 'Atelier créatif : imaginer son format de valorisation' }
    ]
  },
  {
    id: 5,
    time: '09:00',
    location: 'Salle C1',
    title: 'La fabrique méthodologique de sa recherche',
    presenter: 'Chercheurs d\'expérience en SIC',
    description: 'Plusieurs interventions donneront à voir la diversité des méthodes mises en œuvre en SIC et faciliteront le dialogue entre les doctorant.e.s et des chercheurs d\'expérience ayant mis en œuvre des méthodes quantitatives, qualitatives et singulières.',
    tags: ['Méthodologie', 'Recherche', 'Méthodes'],
    activityType: 'Atelier',
    hasSupport: true,
    date: '10 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Découvrir la diversité méthodologique en SIC',
      'Échanger avec des chercheurs expérimentés sur leurs choix méthodologiques',
      'Affiner sa propre démarche méthodologique'
    ],
    targetAudience: 'Doctorants en phase de construction méthodologique',
    requirements: 'Avoir une première idée de son terrain de recherche',
    program: [
      { time: '09:00 - 09:45', content: 'Présentation : Les méthodes quantitatives en SIC' },
      { time: '09:45 - 10:30', content: 'Présentation : Les méthodes qualitatives en SIC' },
      { time: '10:30 - 10:45', content: 'Pause' },
      { time: '10:45 - 11:30', content: 'Table ronde : articulation et triangulation méthodologique' }
    ]
  },
  {
    id: 6,
    time: '11:00',
    location: 'Salle A2',
    title: 'L\'IA en SIC et pour les SIC',
    presenter: 'Experts en IA et recherche',
    description: 'Un atelier sera consacré à des récits d\'expériences et des restitutions d\'expérimentations prenant appui sur des outils d\'IA(g). Comment intégrer l\'IA dans le recueil et l\'analyse de données ? Comment convoquer l\'IA dans des situations de communication et de valorisation scientifique en respectant les règles d\'éthique ? Quelle incidence des IA sur les métiers de la recherche en SIC et SHS plus largement ?',
    tags: ['IA', 'Intelligence artificielle', 'Éthique', 'Méthodologie'],
    activityType: 'Atelier',
    hasSupport: true,
    date: '10 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Comprendre les usages de l\'IA en recherche en SIC',
      'Identifier les questions éthiques liées à l\'utilisation de l\'IA',
      'Expérimenter des outils d\'IA pour la recherche'
    ],
    targetAudience: 'Tous les doctorants',
    requirements: 'Apporter son ordinateur portable',
    program: [
      { time: '11:00 - 11:30', content: 'Introduction : L\'IA générative et ses applications en recherche' },
      { time: '11:30 - 12:15', content: 'Retours d\'expérience : usage de l\'IA dans l\'analyse de données' },
      { time: '12:15 - 13:00', content: 'Discussion : enjeux éthiques et épistémologiques' }
    ],
    doctorantId: 3 // Lynda Abjean - Communication des organisations et IA
  },
  {
    id: 7,
    time: '14:00',
    location: 'Salle B1',
    title: 'Communication internationale',
    presenter: 'Chercheurs internationaux',
    description: 'Atelier dédié aux stratégies de communication et de publication scientifique à l\'international. Conseils pour participer à des conférences internationales et publier dans des revues de rang A.',
    tags: ['International', 'Publication', 'Communication'],
    activityType: 'Atelier',
    hasSupport: false,
    date: '10 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Développer une stratégie de publication internationale',
      'Préparer une communication en anglais',
      'Identifier les bonnes conférences et revues internationales'
    ],
    targetAudience: 'Doctorants souhaitant internationaliser leur parcours',
    requirements: 'Niveau d\'anglais intermédiaire minimum',
    program: [
      { time: '14:00 - 14:45', content: 'Les revues internationales en SIC' },
      { time: '14:45 - 15:30', content: 'Rédiger un abstract en anglais' },
      { time: '15:30 - 16:00', content: 'Financement et mobilité internationale' }
    ]
  },
  {
    id: 8,
    time: '14:00',
    location: 'Salle C2',
    title: 'Gestion du stress et risques psychosociaux pendant la thèse',
    presenter: 'Psychologues spécialisés',
    description: 'Atelier de sensibilisation et d\'accompagnement pour mieux gérer le stress et prévenir les risques psychosociaux durant le parcours doctoral.',
    tags: ['Bien-être', 'Santé', 'Accompagnement'],
    activityType: 'Atelier',
    hasSupport: false,
    date: '10 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Identifier les sources de stress pendant la thèse',
      'Découvrir des techniques de gestion du stress',
      'Connaître les ressources d\'accompagnement disponibles'
    ],
    targetAudience: 'Tous les doctorants',
    requirements: 'Aucun',
    program: [
      { time: '14:00 - 14:30', content: 'Les risques psychosociaux en doctorat' },
      { time: '14:30 - 15:15', content: 'Atelier pratique : techniques de relaxation et gestion du temps' },
      { time: '15:15 - 16:00', content: 'Ressources et dispositifs d\'accompagnement' }
    ],
    doctorantId: 2 // Timothy Bourbotte - Communication et numérique en santé mentale
  },
  {
    id: 9,
    time: '16:00',
    location: 'Salle A3',
    title: 'Les terrains sensibles de recherche',
    presenter: 'Chercheurs experts en terrains sensibles',
    description: 'Discussion sur les enjeux éthiques et méthodologiques liés aux terrains sensibles de recherche en SIC.',
    tags: ['Éthique', 'Terrains sensibles', 'Méthodologie'],
    activityType: 'Atelier',
    hasSupport: false,
    date: '10 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Comprendre ce qu\'est un terrain sensible',
      'Identifier les précautions éthiques et méthodologiques',
      'Partager des retours d\'expérience'
    ],
    targetAudience: 'Doctorants travaillant ou envisageant de travailler sur des terrains sensibles',
    requirements: 'Avoir réfléchi aux dimensions sensibles de son terrain',
    program: [
      { time: '16:00 - 16:30', content: 'Définition et typologies des terrains sensibles' },
      { time: '16:30 - 17:15', content: 'Retours d\'expérience de chercheurs' },
      { time: '17:15 - 17:45', content: 'Discussion collective et partage de pratiques' }
    ]
  },
  {
    id: 10,
    time: '17:30',
    location: 'Grand Amphi',
    title: 'Clôture des Doctorales 2026',
    presenter: 'Comité d\'organisation',
    description: 'Séance de clôture avec remerciements, bilan des trois journées et perspectives pour les prochaines Doctorales.',
    tags: ['Clôture'],
    activityType: 'Séance plénière',
    hasSupport: false,
    date: '10 juin 2026',
    targetAudience: 'Tous les participants',
    requirements: 'Aucun'
  },
  // Communications doctorales - Sessions parallèles 9 juin 2026
  // Salle 1 : Journalisme, médias et informations
  {
    id: 11,
    time: '14:00',
    location: 'Salle 1 : Journalisme, médias et informations',
    title: 'Une « libéralisation sous surveillance » : logiques économiques et enjeux de pouvoir dans la filière audiovisuelle en Côte d\'Ivoire',
    presenter: 'Mahaman Ouattara',
    description: 'Cette communication analyse les dynamiques de libéralisation du secteur audiovisuel ivoirien, en mettant en lumière les tensions entre logiques économiques et mécanismes de contrôle étatique.',
    tags: ['Journalisme', 'Médias', 'Afrique', 'Économie politique'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Analyser les processus de libéralisation du secteur audiovisuel',
      'Identifier les logiques économiques et politiques',
      'Comprendre les enjeux de pouvoir dans les médias africains'
    ],
    targetAudience: 'Chercheurs en médias, économie politique de la communication',
    requirements: 'Université Grenoble-Alpes, Gresec'
  },
  {
    id: 12,
    time: '14:30',
    location: 'Salle 1 : Journalisme, médias et informations',
    title: 'Le journaliste politique sur Twitter et Twitch : des modalités d\'engagement différentes auprès des publics',
    presenter: 'Nina Barbaroux-Pagonis',
    description: 'Cette recherche explore comment les journalistes politiques s\'engagent avec leurs publics sur Twitter et Twitch, révélant des pratiques professionnelles diversifiées.',
    tags: ['Journalisme', 'Réseaux sociaux', 'Politique', 'Engagement'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Comparer les pratiques journalistiques sur différentes plateformes',
      'Analyser les modalités d\'engagement avec les publics',
      'Identifier les transformations du journalisme politique numérique'
    ],
    targetAudience: 'Chercheurs en journalisme et médias sociaux',
    requirements: 'Aix-Marseille Université – Université de Toulon, Imsic'
  },
  {
    id: 13,
    time: '15:00',
    location: 'Salle 1 : Journalisme, médias et informations',
    title: 'Être journaliste au Burkina Faso (2016-2023). Comment le risque redéfinit le rapport au métier, les identités professionnelles et les pratiques',
    presenter: 'Jean-Pierre Sawadogo',
    description: 'Dans un contexte de crise au Burkina Faso, cette recherche examine comment l\'exposition au risque transforme l\'identité professionnelle des journalistes.',
    tags: ['Journalisme', 'Afrique', 'Risques', 'Identité professionnelle'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Comprendre l\'impact du risque sur la profession journalistique',
      'Analyser les transformations identitaires',
      'Documenter le journalisme en contexte de crise'
    ],
    targetAudience: 'Chercheurs en journalisme et sociologie des professions',
    requirements: 'Université Libre de Bruxelles, Resic – Lapij'
  },
  // Salle 2 : Méthodes et circulations sensibles
  {
    id: 14,
    time: '14:00',
    location: 'Salle 2 : Méthodes et circulations sensibles',
    title: 'La posture épistémologique du chercheur en terrain politique : le cas d\'une observation d\'un dispositif de participation citoyenne à La Réunion',
    presenter: 'Anne-Laure Daica',
    description: 'Cette communication interroge la posture épistémologique du chercheur en terrain politique à travers l\'observation d\'un dispositif de participation citoyenne.',
    tags: ['Méthodologie', 'Épistémologie', 'Participation citoyenne'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Réfléchir à la posture du chercheur en terrain politique',
      'Analyser les enjeux de l\'observation participante',
      'Développer une approche réflexive'
    ],
    targetAudience: 'Chercheurs en méthodologie et communication politique',
    requirements: 'Université de La Réunion, LCF'
  },
  {
    id: 15,
    time: '14:30',
    location: 'Salle 2 : Méthodes et circulations sensibles',
    title: 'La posture de recherche en sciences de l\'information et de la communication : place des savoirs militants et académiques',
    presenter: 'Marie Muhlmeyer',
    description: 'Cette recherche questionne l\'articulation entre savoirs militants et savoirs académiques dans la posture du chercheur en SIC.',
    tags: ['Méthodologie', 'Épistémologie', 'Militantisme', 'Savoirs'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Analyser la place des savoirs militants en recherche',
      'Réfléchir aux postures de recherche en SIC',
      'Questionner engagement et objectivité'
    ],
    targetAudience: 'Chercheurs en épistémologie et méthodologie',
    requirements: 'Université Lumière Lyon 2, Elico'
  },
  {
    id: 16,
    time: '15:00',
    location: 'Salle 2 : Méthodes et circulations sensibles',
    title: 'Les représentations des migrations en Guinée : investir un terrain de recherche au carrefour des sensibilités',
    presenter: 'Aboubacar Somah Bokoum',
    description: 'Cette communication présente les défis méthodologiques d\'une recherche sur les représentations des migrations en Guinée, terrain sensible aux multiples enjeux.',
    tags: ['Migration', 'Représentations', 'Terrain sensible', 'Afrique'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Analyser les représentations des migrations',
      'Identifier les enjeux éthiques des terrains sensibles',
      'Réfléchir aux méthodologies adaptées'
    ],
    targetAudience: 'Chercheurs en migrations et terrains sensibles',
    requirements: 'Université Lumière Lyon 2, Elico'
  },
  // Salle 3 : Corps et savoirs en mouvement
  {
    id: 17,
    time: '14:00',
    location: 'Salle 3 : Corps et savoirs en mouvement',
    title: 'Considérer une expérience sonore de la ville depuis un jardin partagé',
    presenter: 'Louis Champalle',
    description: 'Cette recherche explore l\'expérience sonore urbaine à travers le prisme d\'un jardin partagé, analysant comment les sons de la ville sont perçus dans cet espace.',
    tags: ['Sonore', 'Urbanité', 'Jardin', 'Expérience sensible'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Explorer l\'expérience sonore en contexte urbain',
      'Analyser les jardins partagés comme espaces sensibles',
      'Développer une méthodologie d\'enquête sonore'
    ],
    targetAudience: 'Chercheurs en communication sensible et urbanisme',
    requirements: 'Université Lumière Lyon 2, Elico'
  },
  {
    id: 18,
    time: '14:30',
    location: 'Salle 3 : Corps et savoirs en mouvement',
    title: 'Nuages dans l\'art : des paysages de rêveries aux arènes d\'expression d\'enjeux socio-écosystémiques',
    presenter: 'Charlotte Mariel',
    description: 'Cette communication analyse la représentation des nuages dans l\'art, de leur dimension poétique à leur fonction d\'expression des préoccupations environnementales.',
    tags: ['Art', 'Écologie', 'Représentations', 'Environnement'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Analyser les représentations des nuages dans l\'art',
      'Comprendre l\'évolution des significations environnementales',
      'Relier esthétique et enjeux écologiques'
    ],
    targetAudience: 'Chercheurs en arts et communication environnementale',
    requirements: 'Université Gustave Eiffel, Lisaa'
  },
  {
    id: 19,
    time: '15:00',
    location: 'Salle 3 : Corps et savoirs en mouvement',
    title: 'Les relations (des)enchantées entre humains et animaux dits de compagnie. Enquête de terrain auprès de fabriques d\'animaux dits de compagnie',
    presenter: 'Coline Reille',
    description: 'Cette recherche documente les relations complexes entre humains et animaux de compagnie à travers une enquête dans les élevages, révélant les tensions entre affection et marchandisation.',
    tags: ['Animaux', 'Relations', 'Éthique', 'Marchandisation'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Analyser les relations humains-animaux',
      'Documenter les pratiques d\'élevage',
      'Questionner la marchandisation du vivant'
    ],
    targetAudience: 'Chercheurs en communication et études animales',
    requirements: 'Sorbonne Université, Gripic'
  },
  // Salle 4 : Peupler le numérique
  {
    id: 20,
    time: '14:00',
    location: 'Salle 4 : Peupler le numérique',
    title: 'TIC et réseaux de santé : une approche info-communicationnelle de l\'informatisation des hôpitaux en Côte d\'Ivoire',
    presenter: 'Lucie Sopoude Yoga',
    description: 'Cette recherche analyse les processus d\'informatisation des hôpitaux ivoiriens sous l\'angle info-communicationnel, révélant les enjeux organisationnels et humains.',
    tags: ['TIC', 'Santé', 'Informatisation', 'Afrique'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Analyser l\'informatisation des systèmes de santé',
      'Comprendre les enjeux communicationnels des TIC',
      'Identifier les défis de l\'adoption technologique'
    ],
    targetAudience: 'Chercheurs en TIC et communication de santé',
    requirements: 'Université de Bourgogne, Ciméos'
  },
  {
    id: 21,
    time: '14:30',
    location: 'Salle 4 : Peupler le numérique',
    title: 'Étudier l\'implication de Google, Meta et Twitter dans la lutte contre le terrorisme : enjeux et stratégies',
    presenter: 'Marguerite Borelli',
    description: 'Cette communication examine les stratégies des grandes plateformes numériques pour lutter contre les contenus terroristes, analysant les enjeux de régulation et de liberté d\'expression.',
    tags: ['Plateformes', 'Terrorisme', 'Régulation', 'Modération'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Analyser les politiques de modération des plateformes',
      'Comprendre les enjeux de la lutte antiterroriste en ligne',
      'Questionner la responsabilité des plateformes'
    ],
    targetAudience: 'Chercheurs en plateformes numériques et régulation',
    requirements: 'Université Paris-Panthéon-Assas, Carism'
  },
  {
    id: 22,
    time: '15:00',
    location: 'Salle 4 : Peupler le numérique',
    title: 'Une approche communicationnelle de l\'IA dans le secteur bancaire : premiers résultats',
    presenter: 'Lynda Abjean',
    description: 'Cette recherche explore l\'intégration de l\'IA dans le secteur bancaire sous un angle communicationnel, analysant les transformations des relations clients et de la communication organisationnelle.',
    tags: ['IA', 'Banque', 'Communication organisationnelle', 'Innovation'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Analyser l\'usage de l\'IA dans la communication bancaire',
      'Comprendre les transformations organisationnelles',
      'Identifier les enjeux relationnels'
    ],
    targetAudience: 'Chercheurs en communication organisationnelle et IA',
    requirements: 'Université Sorbonne Paris Nord, Labsic',
    doctorantId: 3 // Lynda Abjean - Communication des organisations et IA
  },
  // Salle 5 : Médiations
  {
    id: 23,
    time: '14:00',
    location: 'Salle 5 : Médiations',
    title: 'La carte de jeu, entre médiation territoriale et médiation ludique. Analyse du jeu vidéo Dordogne',
    presenter: 'Lucas Friche',
    description: 'Cette communication analyse la carte du jeu vidéo Dordogne comme dispositif de médiation à double fonction : outil ludique et représentation territoriale.',
    tags: ['Jeu vidéo', 'Médiation', 'Territoire', 'Carte'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Analyser la carte comme dispositif de médiation',
      'Comprendre l\'articulation ludique et territoriale',
      'Explorer les représentations spatiales'
    ],
    targetAudience: 'Chercheurs en jeu vidéo et médiation',
    requirements: 'Université de Lorraine – Université de Liège, Crem – Liège Game Lab'
  },
  {
    id: 24,
    time: '14:30',
    location: 'Salle 5 : Médiations',
    title: 'Les serious games numériques comme outils pédagogiques : pratiques informationnelles des acteurs et dynamiques du terrain',
    presenter: 'Mamoudou Ndiaye',
    description: 'Cette recherche examine l\'utilisation des serious games dans les contextes pédagogiques, analysant les pratiques informationnelles et les dynamiques d\'appropriation.',
    tags: ['Serious games', 'Pédagogie', 'Pratiques informationnelles'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Analyser les usages pédagogiques des serious games',
      'Comprendre les pratiques informationnelles',
      'Identifier les facteurs de réussite'
    ],
    targetAudience: 'Chercheurs en pédagogie et jeu vidéo',
    requirements: 'Le Mans Université',
    doctorantId: 4 // Catherine Aymé - Ressources éducatives et numérique
  },
  {
    id: 25,
    time: '15:00',
    location: 'Salle 5 : Médiations',
    title: 'Le curateur qui n\'en a cure : l\'expérience muséale ambivalente dans le jeu multijoueurs en ligne Occupy White Walls',
    presenter: 'Noé Vaccari',
    description: 'Cette communication explore l\'expérience muséale dans le jeu Occupy White Walls où les joueurs créent des galeries virtuelles, analysant les tensions entre curation et ludique.',
    tags: ['Jeu vidéo', 'Musée', 'Curation', 'Médiation culturelle'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Analyser l\'expérience muséale virtuelle',
      'Comprendre les pratiques de curation ludique',
      'Questionner les frontières entre jeu et culture'
    ],
    targetAudience: 'Chercheurs en jeu vidéo et muséologie',
    requirements: 'Université Lumière Lyon 2, Elico'
  },
  // Salle 6 : Circulation des savoirs scientifiques et de santé
  {
    id: 26,
    time: '14:00',
    location: 'Salle 6 : Circulation des savoirs scientifiques et de santé',
    title: 'Des humanités et des blogs, une cartographie du web pour modéliser l\'environnement des carnets hypothèses estampillés « humanités numériques »',
    presenter: 'Andreas Verner',
    description: 'Cette recherche propose une cartographie du web des carnets Hypothèses dédiés aux humanités numériques, analysant les réseaux et pratiques de communication scientifique.',
    tags: ['Humanités numériques', 'Blogs', 'Cartographie'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Cartographier les carnets Hypothèses',
      'Analyser les réseaux de communication scientifique',
      'Comprendre les pratiques de blogging académique'
    ],
    targetAudience: 'Chercheurs en humanités numériques',
    requirements: 'Paris-Nanterre, Dicen-IDF'
  },
  {
    id: 27,
    time: '14:30',
    location: 'Salle 6 : Circulation des savoirs scientifiques et de santé',
    title: 'La science ouverte comme approche pour endiguer la science invisible en Afrique : cas de l\'université de Lomé (Togo)',
    presenter: 'Innocent Azilan',
    description: 'Cette communication examine comment la science ouverte peut rendre visible la production scientifique africaine, s\'appuyant sur le cas de l\'université de Lomé.',
    tags: ['Science ouverte', 'Afrique', 'Visibilité', 'Accessibilité'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Analyser les enjeux de la science ouverte en Afrique',
      'Comprendre les obstacles à la visibilité scientifique',
      'Identifier des solutions d\'accessibilité'
    ],
    targetAudience: 'Chercheurs en science ouverte',
    requirements: 'Aix-Marseille Université – Université de Toulon, Imsic – Université de Lomé, Ceroce'
  },
  {
    id: 28,
    time: '15:00',
    location: 'Salle 6 : Circulation des savoirs scientifiques et de santé',
    title: 'Classification des contextes de citation : exploration des relations sémantiques des citations à l\'ère de la prolifération de la production scientifique',
    presenter: 'Yutong Fei',
    description: 'Cette recherche propose une classification des contextes de citation pour mieux comprendre les relations sémantiques entre publications face à la croissance de la production scientifique.',
    tags: ['Citation', 'Sémantique', 'Bibliométrie', 'Classification'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Proposer une méthode de classification des citations',
      'Analyser les relations sémantiques',
      'Contribuer aux études bibliométriques'
    ],
    targetAudience: 'Chercheurs en bibliométrie et sciences de l\'information',
    requirements: 'Université Claude Bernard Lyon I, Elico'
  },
  // Salle 7 : Structures, régulations et organisations
  {
    id: 29,
    time: '14:00',
    location: 'Salle 7 : Structures, régulations et organisations',
    title: 'Enquête immersive d\'une communauté épistémique hybride nationale au service de l\'innovation à la sécurité civile',
    presenter: 'Aymée Nakasato',
    description: 'Cette recherche analyse une communauté épistémique hybride dédiée à l\'innovation en sécurité civile, explorant les dynamiques de collaboration et de production de savoirs.',
    tags: ['Communauté épistémique', 'Innovation', 'Sécurité civile'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Analyser les communautés épistémiques hybrides',
      'Comprendre les processus d\'innovation collaborative',
      'Explorer les enjeux de la sécurité civile'
    ],
    targetAudience: 'Chercheurs en innovation et organisations',
    requirements: 'Université de technologie de Troyes, Dicen-IDF'
  },
  {
    id: 30,
    time: '14:30',
    location: 'Salle 7 : Structures, régulations et organisations',
    title: 'Évaluer la « diversité » : observation participante d\'un outil de mesure au sein du régulateur de l\'audiovisuel français',
    presenter: 'Céline Charrier',
    description: 'Cette communication présente une observation des dispositifs de mesure de la diversité à l\'Arcom, questionnant les enjeux méthodologiques et politiques de la quantification.',
    tags: ['Diversité', 'Régulation', 'Audiovisuel', 'Mesure'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Analyser les outils de mesure de la diversité',
      'Questionner la quantification de concepts sociaux',
      'Comprendre le rôle des régulateurs'
    ],
    targetAudience: 'Chercheurs en régulation et médias',
    requirements: 'Université Paris 8 Vincennes - Saint-Denis, Cemti'
  },
  {
    id: 31,
    time: '15:00',
    location: 'Salle 7 : Structures, régulations et organisations',
    title: 'Création et institutionnalisation du Conseil de Déontologie Journalistique et de Médiation (CDJM). Stratégies et enjeux de la création d\'un mécanisme d\'autorégulation des médias en France.',
    presenter: 'Baptiste Bataille',
    description: 'Cette recherche retrace la création du CDJM, mécanisme d\'autorégulation des médias français, analysant les stratégies des acteurs et les enjeux de légitimation.',
    tags: ['Autorégulation', 'Journalisme', 'Déontologie', 'Médiation'],
    activityType: 'Communication',
    hasSupport: true,
    date: '9 juin 2026',
    presenterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    objectives: [
      'Analyser la création d\'une instance d\'autorégulation',
      'Comprendre les enjeux déontologiques du journalisme',
      'Explorer les processus d\'institutionnalisation'
    ],
    targetAudience: 'Chercheurs en journalisme et déontologie',
    requirements: 'Université Paris-Panthéon-Assas, Carism'
  }
];