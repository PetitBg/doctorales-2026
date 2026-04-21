import { useState } from 'react';
import { FileText, Video, BookOpen, Download, Search, Image, Presentation, Sparkles } from 'lucide-react';

interface RessourcesPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function RessourcesPage({ onNavigate }: RessourcesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'Toutes', icon: BookOpen },
    { id: 'posters', label: 'Posters', icon: Image },
    { id: 'communications', label: 'Communications', icon: Presentation },
    { id: 'mediations', label: 'Médiations créatives', icon: Sparkles },
    { id: 'theses', label: 'Thèses', icon: FileText },
    { id: 'replays', label: 'Replays', icon: Video },
    { id: 'documents', label: 'Documents', icon: Download }
  ];

  const resources = [
    {
      id: 1,
      title: 'Intelligence artificielle et éthique : perspectives contemporaines',
      author: 'Sophie Martin',
      category: 'theses',
      year: '2024',
      type: 'Thèse',
      description: 'Une exploration approfondie des enjeux éthiques posés par l\'IA moderne.',
      tags: ['IA', 'Éthique', 'Sciences']
    },
    {
      id: 2,
      title: 'Séminaire : Communication digitale et réseaux sociaux',
      author: 'Thomas Dubois',
      category: 'replays',
      year: '2024',
      type: 'Replay vidéo',
      duration: '1h 30min',
      description: 'Enregistrement complet du séminaire sur les stratégies de communication digitale.',
      tags: ['SIC', 'Communication', 'Digital']
    },
    {
      id: 3,
      title: 'Guide du doctorat en SIC',
      author: 'Commission des Doctorales',
      category: 'documents',
      year: '2024',
      type: 'PDF',
      description: 'Guide complet pour accompagner les doctorant·e·s dans leur parcours de recherche.',
      tags: ['Méthodologie', 'Formation']
    },
    {
      id: 4,
      title: 'Littérature comparée : nouvelles approches',
      author: 'Claire Lefevre',
      category: 'theses',
      year: '2023',
      type: 'Thèse',
      description: 'Analyse des nouvelles méthodologies en littérature comparée.',
      tags: ['Lettres', 'Littérature']
    },
    {
      id: 5,
      title: 'Atelier : Techniques de présentation orale',
      author: 'Marc Durand',
      category: 'replays',
      year: '2024',
      type: 'Replay vidéo',
      duration: '45min',
      description: 'Workshop sur les meilleures pratiques pour présenter ses travaux de recherche.',
      tags: ['Formation', 'Communication']
    },
    {
      id: 6,
      title: 'Templates pour posters scientifiques',
      author: 'Commission VSS',
      category: 'documents',
      year: '2024',
      type: 'ZIP',
      description: 'Collection de modèles PowerPoint et Illustrator pour créer des posters scientifiques.',
      tags: ['Outils', 'Présentation']
    },
    {
      id: 7,
      title: 'Industries créatives en Afrique subsaharienne : approches visuelles',
      author: 'Joséphine Desfougères',
      category: 'posters',
      year: '2024',
      type: 'Poster',
      description: 'Poster présentant les résultats d\'une recherche sur le cinéma et l\'audiovisuel en Afrique subsaharienne avec une approche visuelle innovante.',
      tags: ['Cinéma', 'Afrique', 'Industries créatives']
    },
    {
      id: 8,
      title: 'La communication des organisations à l\'ère numérique',
      author: 'Marie Laurent',
      category: 'posters',
      year: '2024',
      type: 'Poster',
      description: 'Visualisation de données sur les stratégies de communication des organisations dans le contexte digital.',
      tags: ['Communication', 'Digital', 'Organisations']
    },
    {
      id: 9,
      title: 'Méthodologie qualitative en SIC : retours d\'expérience',
      author: 'Alexandre Rousseau',
      category: 'communications',
      year: '2024',
      type: 'Communication orale',
      duration: '20min',
      description: 'Communication présentant les défis et opportunités de la recherche qualitative en Sciences de l\'Information et de la Communication.',
      tags: ['Méthodologie', 'SIC', 'Recherche qualitative']
    },
    {
      id: 10,
      title: 'L\'intelligence artificielle générative dans la recherche en SHS',
      author: 'Lucas Bernard',
      category: 'communications',
      year: '2024',
      type: 'Communication orale',
      duration: '25min',
      description: 'Présentation des usages et limites de l\'IA générative dans le cadre de la recherche en Sciences Humaines et Sociales.',
      tags: ['IA', 'SHS', 'Méthodologie']
    },
    {
      id: 11,
      title: 'Éthique et terrains sensibles en recherche',
      author: 'Émilie Moreau',
      category: 'communications',
      year: '2024',
      type: 'Communication orale',
      duration: '20min',
      description: 'Communication sur les enjeux éthiques de la recherche sur des terrains sensibles et les précautions méthodologiques.',
      tags: ['Éthique', 'Méthodologie', 'Terrains sensibles']
    },
    {
      id: 12,
      title: 'Performance : "Données en mouvement"',
      author: 'Camille Petit',
      category: 'mediations',
      year: '2024',
      type: 'Performance artistique',
      duration: '15min',
      description: 'Performance corporelle et visuelle mettant en scène les données de recherche sur la mobilité urbaine et les flux migratoires.',
      tags: ['Performance', 'Données', 'Art']
    },
    {
      id: 13,
      title: 'Exposition photo : "Visages du doctorat"',
      author: 'Sarah Leroy',
      category: 'mediations',
      year: '2024',
      type: 'Exposition',
      description: 'Série photographique documentant le quotidien et les émotions des doctorants à travers un parcours visuel immersif.',
      tags: ['Photographie', 'Doctorat', 'Exposition']
    },
    {
      id: 14,
      title: 'Court-métrage : "Les mots de la thèse"',
      author: 'Thomas Garcia',
      category: 'mediations',
      year: '2024',
      type: 'Vidéo créative',
      duration: '8min',
      description: 'Court-métrage documentaire explorant la relation entre les doctorants et leur objet de recherche à travers des portraits croisés.',
      tags: ['Vidéo', 'Documentaire', 'Recherche']
    },
    {
      id: 15,
      title: 'Podcast : "Voix de la recherche en SIC"',
      author: 'Nina Fontaine',
      category: 'mediations',
      year: '2024',
      type: 'Podcast',
      duration: '30min',
      description: 'Série de podcasts donnant la parole aux doctorants en SIC pour partager leur parcours et leurs découvertes de manière accessible.',
      tags: ['Podcast', 'SIC', 'Vulgarisation']
    },
    {
      id: 16,
      title: 'Installation interactive : "Le réseau des savoirs"',
      author: 'Pierre Dubois',
      category: 'mediations',
      year: '2024',
      type: 'Installation',
      description: 'Installation numérique interactive permettant d\'explorer visuellement les liens entre différents domaines de recherche en SIC.',
      tags: ['Installation', 'Interactif', 'Numérique']
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="px-6 lg:px-12 py-8 lg:py-12">
      <h1 className="text-[#354878] mb-8 lg:mb-12 text-center lg:text-left">
        Ressources
      </h1>

      {/* Search */}
      <div className="mb-8">
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher une ressource..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878]"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-3 rounded-lg transition-colors flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-[#354878] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Icon size={18} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => {
              if (resource.category === 'replays') {
                onNavigate('replay', { id: resource.id });
              } else {
                console.log('Download resource:', resource.id);
              }
            }}
          >
            {/* Type Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#354878] text-white px-3 py-1 rounded-full text-sm">
                {resource.type}
              </span>
              {resource.duration && (
                <span className="text-sm text-gray-600">{resource.duration}</span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-[#354878] mb-2 line-clamp-2">
              {resource.title}
            </h3>

            {/* Author & Year */}
            <p className="text-sm text-gray-600 mb-3">
              {resource.author} • {resource.year}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-4 line-clamp-3">
              {resource.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {resource.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <button className="w-full bg-[#2C67A1] text-white py-2 rounded-lg hover:bg-[#354878] transition-colors flex items-center justify-center gap-2">
              {resource.category === 'replays' ? (
                <>
                  <Video size={16} />
                  <span>Voir le replay</span>
                </>
              ) : (
                <>
                  <Download size={16} />
                  <span>Télécharger</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Aucune ressource trouvée pour votre recherche.
        </div>
      )}
    </div>
  );
}