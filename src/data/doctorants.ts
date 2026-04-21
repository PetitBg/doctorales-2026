export interface Doctorant {
  id: number;
  name: string;
  domain: string;
  specialization: string;
  university?: string;
  email: string;
  linkedin?: string;
  website?: string;
  researchTopics: string[];
  keywords: string[];
  image: string;
  year?: string;
  director: string;
  laboratory: string;
  bio: string;
  thesisTitle?: string;
  researchQuestion?: string;
  methodology?: string;
  publications?: Array<{
    title: string;
    journal: string;
    year: string;
  }>;
  presentations?: Array<{
    title: string;
    event: string;
    date: string;
  }>;
  responsibilities?: string;
  formation?: string;
  teaching?: string;
  status?: string;
}

export const doctorants: Doctorant[] = [
  {
    id: 1,
    name: 'Joséphine Desfougères',
    domain: 'Lettres & Sciences Humaines',
    specialization: 'Étude des industries créatives en Afrique subsaharienne',
    university: 'Université Sorbonne Paris Nord',
    email: 'josephine.desfougeres@univ-paris13.fr',
    director: 'Isabelle Mayaud',
    laboratory: 'LabSIC - Laboratoire des Sciences de l\'Information et de la Communication',
    bio: 'Joséphine Desfougères est doctorante au LabSIC, sous la direction d\'Isabelle Mayaud. Ses travaux portent sur le cinéma et l\'audiovisuel en Afrique subsaharienne. Sa thèse questionne l\'internationalisation du secteur audiovisuel en Afrique à travers l\'implémentation de géants de la SVOD. Elle s\'attache à comprendre comment se recompose un espace cinématographique et audiovisuel subsaharien via l\'arrivée de nouveaux acteurs internationaux.',
    researchTopics: ['Industries créatives', 'Cinéma africain', 'Audiovisuel'],
    keywords: ['cinéma', 'audiovisuel', 'Afrique', 'SVOD', 'industries créatives', 'internationalisation'],
    image: 'https://labsic.univ-spn.fr/wp-content/uploads/2025/07/1724743226976_GTX5DQqd1-1367x1536.jpg',
    publications: [
      {
        title: 'Série TV et Sénégal, des enjeux autour de la création locale',
        journal: 'Revue Française des Sciences de l\'Information et de la Communication',
        year: '2023'
      }
    ],
    presentations: [
      {
        title: 'La série télévisée sénégalaise : un produit culturel à l\'intersection entre ancrage local et ambitions transnationales',
        event: 'Journées d\'étude internationales « Les séries dans le monde »',
        date: '16-17 novembre 2023'
      }
    ]
  },
  {
    id: 2,
    name: 'Timothy Bourbotte',
    domain: 'SIC',
    specialization: 'Communication et numérique en santé mentale',
    email: 'timothy.bourbotte@sorbonne-paris-nord.fr',
    director: 'Stéphane Costantini',
    laboratory: 'LabSIC - Laboratoire des Sciences de l\'Information et de la Communication',
    bio: 'Timothy Bourbotte est doctorant en SIC au LabSIC, sous la direction de Stéphane Costantini. Ses recherches portent sur la communication et le numérique en santé mentale, avec une attention particulière aux discours scientifiques et médiatiques. Il questionne la manière dont le numérique reconfigure les pratiques de santé mentale.',
    researchTopics: ['Santé mentale', 'Communication', 'Numérique'],
    keywords: ['santé mentale', 'communication', 'numérique', 'santé', 'médias', 'discours scientifiques'],
    image: 'https://labsic.univ-spn.fr/wp-content/uploads/2024/10/IMG_5991.jpg'
  },
  {
    id: 3,
    name: 'Lynda Abjean',
    domain: 'SIC',
    specialization: 'Communication des organisations et IA',
    university: 'Université de Nanterre',
    email: 'lynda.abjean@gmail.com',
    director: 'Yanita Andonova',
    laboratory: 'LabSIC - Laboratoire des Sciences de l\'Information et de la Communication',
    status: 'Professeure agrégée affectée à l\'IUT de l\'Université de Nanterre',
    bio: 'Lynda Abjean est doctorante au LabSIC, sous la direction de Yanita Andonova. Elle est également professeure agrégée affectée à l\'IUT de l\'Université de Nanterre. Ses travaux de thèse portent sur la communication des organisations à l\'épreuve des dispositifs socio-techniques et socio-communicationnels d\'IA, à travers le cas du métier de conseiller bancaire. Sa thèse éclaire les transformations organisationnelles en cours dans les métiers de la relation clients, les enjeux, les tensions et les rapports de force en présence.',
    thesisTitle: 'La communication des organisations à l\'épreuve de l\'IA : le cas du métier de conseiller bancaire',
    researchTopics: ['Communication des organisations', 'Intelligence Artificielle', 'Organisations'],
    keywords: ['IA', 'organisations', 'banque', 'relation client', 'communication', 'transformations'],
    image: 'https://labsic.univ-spn.fr/wp-content/uploads/2024/09/photo-Lynda-ABJEAN-1297x1536.jpg',
    publications: [
      {
        title: 'BENEDETTO-MEYER Marie, BOBOC Anca, 2021. Sociologie du numérique au travail',
        journal: 'Communication et organisation',
        year: '2022'
      }
    ],
    presentations: [
      {
        title: 'Une approche communicationnelle de l\'IA dans le secteur bancaire : premiers résultats',
        event: 'Doctorales de la SFSIC',
        date: '6-7 juin 2024'
      },
      {
        title: 'La banque de détail comme terrain d\'étude des récits organisationnels et des pratiques communicationnelles liées à l\'utilisation d\'outils d\'IA',
        event: 'Journée Jeunes Chercheurs en SIC – Gériico – 17ème édition',
        date: '26 mai 2023'
      }
    ],
    teaching: 'Professeure agrégée en économie-gestion, spécialité communication et Ressources Humaines. Enseignante à l\'IUT Techniques de commercialisation de l\'Université paris 10 Nanterre. Bachelor Techniques de commercialisation : expression communication culture, psychologie sociale des organisations, stratégie d\'entreprise. Directrice des études alternance BUT TC 2ème et 3ème année.',
    formation: '2020 – Agrégation interne Economie-Gestion option A (Administration et Ressources Humaines)\n2017 – Certificat d\'aptitude au professorat de l\'enseignement technique\n2013 – Executive MBA Management, Communication & Sociétés. La Sorbonne Paris – Celsa. Mention Bien. Major de promotion.\n2014 – Master 2 Management des Ressources Humaines et Diagnostic Social. La Sorbonne Paris – CELSA. Major de promotion.\n1996 – DESS Négociateur Trilingue en Commerce International, Université d\'Angers. Mention Bien.\n1995 – Maîtrise Langues Étrangères Appliquées aux Affaires, mention Affaires et Commerce. Università di Urbino (Italie). Programme Erasmus.'
  },
  {
    id: 4,
    name: 'Catherine Aymé',
    domain: 'SIC',
    specialization: 'Ressources éducatives et numérique',
    email: 'catherine.ayme@u-paris.fr',
    director: 'Non spécifié',
    laboratory: 'LabSIC - Laboratoire des Sciences de l\'Information et de la Communication',
    status: 'ATER en Sciences de l\'Information et de la Communication, IUT de Paris Rive de Seine, Département informatique',
    bio: 'Catherine Aymé est ATER en Sciences de l\'Information et de la Communication à l\'IUT de Paris Rive de Seine (Département informatique) et doctorante du LabSIC. Ses recherches portent sur les ressources éducatives, le numérique, les interculturalités en éducation et la médiation et transmission des savoirs.',
    researchTopics: ['Éducation', 'Numérique', 'Interculturalité'],
    keywords: ['éducation', 'numérique', 'interculturalité', 'médiation', 'savoirs', 'FLE', 'ressources éducatives'],
    image: 'https://labsic.univ-spn.fr/wp-content/uploads/2024/10/C.AYME-Photo-1545x2048.jpg',
    responsibilities: 'Représentante élue des doctorant.e.s à l\'École Doctorale Érasme de l\'Université Sorbonne Paris Nord – depuis novembre 2023. Secrétaire élue du IARTEM (International Association on Textbooks and Educational Media) depuis juin 2024 et Coordinatrice du groupe de doctorant.e.s depuis avril 2022. Co-responsable de la rubrique « Lectures critiques » de la revue Distances et Médiations des Savoirs – depuis janvier 2022. Co-responsable de la rubrique « Comptes rendus » de la revue Communication & Langages – depuis juin 2024.',
    publications: [
      {
        title: 'Collectif Désir, Transformations pédagogiques et numérique dans l\'enseignement supérieur. Quatre années pour changer les pratiques.',
        journal: 'Distances et médiations des savoirs',
        year: '2024'
      },
      {
        title: 'Simon Collin, Julie Denouël, Nicolas Guichon et Élisabeth Schneider (éd.) (2022). Le numérique en éducation et formation. Approches critiques',
        journal: 'Distances et médiations des savoirs',
        year: '2023'
      },
      {
        title: 'Chrysta Pélissier & Stephen Lédé, L\'Ingénieur pédagogique dans le supérieur',
        journal: 'Distances et médiations des savoirs',
        year: '2022'
      }
    ],
    presentations: [
      {
        title: 'La circulation des ressources de l\'apprentissage du FLE à l\'Université : le cas de l\'Ouzbékistan',
        event: 'Colloque du Didactifen',
        date: '24 mai 2024'
      },
      {
        title: 'Quelles prescriptions des ressources numériques de l\'apprentissage du français dans la société ouzbèke ?',
        event: 'Congrès de la SFSIC',
        date: '15 juin 2023'
      }
    ]
  },
  {
    id: 5,
    name: 'Rachel Fabre',
    domain: 'SIC',
    specialization: 'Télé-réalité et travail de candidat.e',
    email: 'rachel.fabre@univ-paris13.fr',
    director: 'Lucie Alexis et Claire Blandin',
    laboratory: 'LabSIC - Laboratoire des Sciences de l\'Information et de la Communication',
    bio: 'Rachel Fabre est doctorante au LabSIC. Elle réalise sa thèse sous la direction de Lucie Alexis et Claire Blandin. Sa recherche doctorale porte sur le travail de candidat.e de télé-réalité collective. Par le prisme d\'une socio-histoire de la profession de candidat.e, il s\'agit d\'étudier les limites du travail et du salariat, puisque la télé-réalité est la rémunération de la performance de genre, de race, et de classe. On s\'intéressera donc à la façon dont, au fil de l\'évolution du genre « télé-réalité », ces normes sont façonnées, ré-interprétées, et mises à profit par ce travail de soi.',
    thesisTitle: 'Le travail de candidat.e de télé-réalité collective',
    researchTopics: ['Télé-réalité', 'Travail', 'Médias'],
    keywords: ['télé-réalité', 'travail', 'genre', 'médias', 'capitalisme affectif', 'performance'],
    image: 'https://labsic.univ-spn.fr/wp-content/uploads/2024/09/photo-id-carree.jpg',
    presentations: [
      {
        title: 'La performance en travail : les relations amoureuses comme ressource économique et symbolique dans les programmes de télé-réalité de vie collective',
        event: 'Colloque Love is Blind : Amour, médias et cultures populaires de 1950 à aujourd\'hui',
        date: '12-13 février 2024'
      },
      {
        title: 'Les candidat.e.s de télé-réalité de vie collective : un travail émotionnel sur soi et les autres',
        event: 'Journée d\'étude des doctorant•e•s de l\'AFHMT « Travail et émotions »',
        date: '5 avril 2024'
      }
    ]
  },
  {
    id: 6,
    name: 'Paco Garcia',
    domain: 'SIC',
    specialization: 'Socioéconomie des musiques urbaines',
    email: 'Non fourni',
    director: 'Philippe Bouquillion (LabSIC) et Gérôme Guibert (USN, IRMECCEN)',
    laboratory: 'LabSIC - Laboratoire des Sciences de l\'Information et de la Communication',
    status: 'Chargé de cours en sociologie et en économie de la culture. Financement : Contrat doctoral du LabEx ICCA',
    bio: 'Paco Garcia est doctorant sous la direction de Philippe Bouquillion (LabSIC) et Gérôme Guibert (USN, IRMECCEN). Sa thèse, financée dans le cadre d\'un contrat doctoral du LabEx ICCA, porte sur la reconfiguration socioéconomique des « musiques urbaines » depuis la numérisation de l\'industrie phonographique. Chargé de cours en sociologie et en économie de la culture, il a publié Daymolition raconte le rap français (Glénat éditions, 2023), un livre grand public né de ses recherches de terrain.',
    thesisTitle: 'Reconfiguration socioéconomique des « musiques urbaines » depuis la numérisation de l\'industrie phonographique',
    researchTopics: ['Musique', 'Industries culturelles', 'Numérique'],
    keywords: ['rap', 'hip-hop', 'musique', 'numérique', 'industrie musicale', 'plateformes', 'socioéconomie'],
    image: 'https://labsic.univ-spn.fr/wp-content/uploads/2024/11/Capture-decran-2024-11-11-a-13.24.23.png',
    responsibilities: 'Président de l\'Association pour un Colloque Étudiant sur les Musique Populaires (ACEMuP, depuis 2022). Évaluateur des dossiers de candidature à l\'École d\'Affaires Publiques de Sciences Po Paris (depuis 2024). Membre du bureau du Réseau des Jeunes Chercheurs du LabEx ICCA (2020-2022).',
    publications: [
      {
        title: 'L\'indépendance est morte, vive l\'indépendance. Entre contraintes matérielles et enjeux symboliques : Une analyse de l\'évolution de « l\'indépendance » dans le rap en France',
        journal: 'Les Enjeux de l\'Information et de la Communication',
        year: '2021'
      },
      {
        title: 'Daymolition raconte le rap français (livre)',
        journal: 'Glénat Éditions',
        year: '2023'
      }
    ],
    presentations: [
      {
        title: 'De la « plateformisation » de l\'industrie musicale en France : Le cas des « musiques urbaines » sur YouTube',
        event: 'XXIIIème congrès de la SFSIC',
        date: '15 juin 2023'
      },
      {
        title: 'Daymolition, un intermédiaire au cœur du tournant créatif de l\'"urbain musical"',
        event: 'Doctorales de la SFSIC',
        date: '23 juin 2022'
      }
    ]
  },
  {
    id: 7,
    name: 'Lagrane Faye',
    domain: 'SIC',
    specialization: 'Accès à l\'information administrative au Sénégal',
    email: 'lagranefaye@gmail.com',
    director: 'Professeur Dominique Carré',
    laboratory: 'LabSIC - Laboratoire des Sciences de l\'Information et de la Communication',
    bio: 'Lagrane Faye est doctorant au LabSIC sous la direction du Professeur Dominique Carré. Sa thèse se porte sur les conditions d\'accès à l\'information et aux documents administratifs au Sénégal, dans une perspective communicationnelle. Dans cette recherche, l\'administration centrale n\'est pas interrogée, mais plutôt l\'administration locale, c\'est-à-dire celle qui entretient des relations au quotidien avec les habitant-citoyens. L\'objectif est d\'analyser ce qui se joue dans les relations entre les administrés et les administrations au Sénégal.',
    thesisTitle: 'Conditions d\'accès à l\'information et aux documents administratifs au Sénégal',
    researchTopics: ['Administration', 'Communication', 'Sénégal'],
    keywords: ['information', 'administration', 'Sénégal', 'citoyens', 'transparence', 'communication publique'],
    image: 'https://labsic.univ-spn.fr/wp-content/uploads/2025/02/IMG-20230126-WA0000.jpg',
    formation: '2023 – Google Data Analytics Certificat Professionnel\n2019 – Master 2 en communication à l\'Université de Nice Côte d\'Azur. Mémoire : Influence des notes et des avis experts et/ou clients, en ligne, dans le processus d\'achat des consommateurs.\n2017 – Licence professionnelle en sciences de l\'information à l\'EBAD/Université de Dakar.',
    presentations: [
      {
        title: 'L\'accès à l\'information et aux documents administratifs au Sénégal par les citoyens dans les collectivités territoriales',
        event: 'Journée d\'études GERIICO',
        date: '2024'
      }
    ]
  },
  {
    id: 8,
    name: 'Arnaud Jooris',
    domain: 'SIC',
    specialization: 'Transformations de la filière musicale et plateformes numériques',
    email: 'arnaud.jooris@gmail.com',
    director: 'Christine Chevret-Castellani et Philippe Bouquillion',
    laboratory: 'LabSIC - Laboratoire des Sciences de l\'Information et de la Communication',
    bio: 'Arnaud Jooris est doctorant au LabSIC sous la direction de Christine Chevret-Castellani et de Philippe Bouquillion. Ses recherches portent sur les transformations de la filière musicale entraînées par les plateformes de contenus numériques, dans une perspective socio-économique des industries culturelles. Une attention particulière est accordée aux dispositifs de statistiques tel YouTube Analytics et aux enjeux qu\'ils posent en amont, lors de la production musicale.',
    thesisTitle: 'Transformations de la filière musicale par les plateformes de contenus numériques',
    researchQuestion: 'Comment les dispositifs de statistiques accompagnent et accentuent l\'insertion de la musique dans l\'économie créative ?',
    researchTopics: ['Industries culturelles', 'Filière musicale', 'Plateformes numériques', 'YouTube Analytics', 'Économie créative', 'Entrepreneuriat artistique'],
    keywords: ['musique', 'plateformes', 'numérique', 'YouTube', 'statistiques', 'économie créative', 'industries culturelles'],
    image: 'https://labsic.univ-spn.fr/wp-content/uploads/2024/10/Photo.jpg',
    publications: [
      {
        title: 'YouTube et le travail artistique',
        journal: 'Artistes et entrepreneuriat : vers de nouvelles formes d\'organisation dans la musique, Paris, Éditions du CNM',
        year: '2024'
      },
      {
        title: 'Coopérer autour des dispositifs de médiation culturelle numériques au musée : acteurs, ajustements et contenus',
        journal: 'Les Enjeux de l\'Information et de la Communication',
        year: '2024'
      }
    ]
  }
];