import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';

interface ReplayPageProps {
  onNavigate: (page: string) => void;
  resourceId: number;
}

export default function ReplayPage({ onNavigate, resourceId }: ReplayPageProps) {
  // Database mock des replays
  const replays = [
    {
      id: 2,
      title: 'Séminaire : Communication digitale et réseaux sociaux',
      author: 'Thomas Dubois',
      year: '2024',
      duration: '1h 30min',
      description: 'Enregistrement complet du séminaire sur les stratégies de communication digitale. Ce séminaire explore les nouvelles dynamiques de communication à l\'ère du numérique, en analysant les pratiques émergentes sur les réseaux sociaux et leur impact sur la société contemporaine.',
      tags: ['SIC', 'Communication', 'Digital'],
      videoUrl: 'https://www.youtube.com/embed/PsBiLT29rN0',
      date: '15 Mars 2024',
      location: 'Amphi B',
      abstract: 'Dans un contexte de transformation numérique profonde, ce séminaire examine les mutations des pratiques communicationnelles. Nous analysons les stratégies d\'engagement sur les plateformes sociales, les enjeux de la viralité, et les nouvelles formes de médiation numérique. Une attention particulière est portée aux implications éthiques et aux questions de gouvernance des données.'
    },
    {
      id: 5,
      title: 'Atelier : Techniques de présentation orale',
      author: 'Marc Durand',
      year: '2024',
      duration: '45min',
      description: 'Workshop sur les meilleures pratiques pour présenter ses travaux de recherche. Cet atelier pratique offre des outils concrets pour améliorer vos compétences en communication orale et captiver votre audience lors de conférences académiques.',
      tags: ['Formation', 'Communication'],
      videoUrl: 'https://www.youtube.com/embed/PsBiLT29rN0',
      date: '22 Février 2024',
      location: 'Salle de conférence A',
      abstract: 'L\'art de présenter efficacement ses travaux de recherche est une compétence essentielle pour tout doctorant. Cet atelier couvre les fondamentaux de la présentation orale : structuration du discours, gestion du stress, utilisation des supports visuels, interaction avec l\'audience, et gestion du temps de parole.'
    }
  ];

  const replay = replays.find(r => r.id === resourceId) || replays[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b border-gray-200 px-6 lg:px-12 py-4">
        <button
          onClick={() => onNavigate('ressources')}
          className="flex items-center gap-2 text-[#354878] hover:text-[#2C67A1] transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Retour aux ressources</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="px-6 lg:px-12 py-8 lg:py-12">
        <div className="max-w-5xl mx-auto">
          {/* Video Player */}
          <div className="bg-black rounded-lg overflow-hidden mb-8 shadow-xl">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={replay.videoUrl}
                title={replay.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>

          {/* Video Info */}
          <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm mb-6">
            <h1 className="text-[#354878] mb-4">
              {replay.title}
            </h1>

            {/* Meta Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2 text-gray-700">
                <User size={18} className="text-[#2C67A1]" />
                <span className="text-sm lg:text-base">{replay.author}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar size={18} className="text-[#2C67A1]" />
                <span className="text-sm lg:text-base">{replay.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Clock size={18} className="text-[#2C67A1]" />
                <span className="text-sm lg:text-base">{replay.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Tag size={18} className="text-[#2C67A1]" />
                <span className="text-sm lg:text-base">{replay.location}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {replay.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#354878] text-white px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-[#354878] mb-3">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                {replay.description}
              </p>
            </div>

            {/* Abstract */}
            <div>
              <h2 className="text-[#354878] mb-3">Résumé</h2>
              <p className="text-gray-700 leading-relaxed">
                {replay.abstract}
              </p>
            </div>
          </div>

          {/* Related Resources */}
          <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm">
            <h2 className="text-[#354878] mb-4">Ressources associées</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-[#2C67A1] rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">PDF</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Support de présentation</p>
                  <p className="text-xs text-gray-600">Diapositives complètes du séminaire</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-[#B9177B] rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">DOC</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Bibliographie</p>
                  <p className="text-xs text-gray-600">Références citées pendant le séminaire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}