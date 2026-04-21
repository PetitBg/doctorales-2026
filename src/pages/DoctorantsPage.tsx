import { useState } from 'react';
import { Tag, SlidersHorizontal, X } from 'lucide-react';
import { doctorants } from '../data/doctorants';
import ScrollToTop from '../components/ScrollToTop';

interface DoctorantsPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function DoctorantsPage({ onNavigate }: DoctorantsPageProps) {
  const [selectedResearchTopics, setSelectedResearchTopics] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Extract all unique research topics
  const allResearchTopics = Array.from(
    new Set(doctorants.flatMap(doc => doc.researchTopics))
  ).sort();

  // Toggle research topic selection
  const toggleResearchTopic = (topic: string) => {
    setSelectedResearchTopics(prev => 
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  // Clear filters
  const clearFilters = () => {
    setSelectedResearchTopics([]);
  };

  // Filter doctorants
  const filteredDoctorants = doctorants.filter(doc => {
    // Filter by research topics
    const matchesResearchTopics = selectedResearchTopics.length === 0 || 
      selectedResearchTopics.some(topic => doc.researchTopics.includes(topic));
    
    return matchesResearchTopics;
  });

  return (
    <div className="px-6 lg:px-12 py-8 lg:py-12">
      <h1 className="text-[#354878] mb-8 lg:mb-12 text-center lg:text-left">
        Les doctorant·e·s
      </h1>

      {/* Filter Button */}
      <div className="mb-8 flex justify-end">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-[#354878] hover:text-[#6A9ECC] transition-colors"
        >
          <span className="underline">
            Filtrer {selectedResearchTopics.length > 0 && `(${selectedResearchTopics.length})`}
          </span>
          <SlidersHorizontal size={20} />
        </button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-6 mb-8">
          {/* Active Filters */}
          {selectedResearchTopics.length > 0 && (
            <div className="pb-4 border-b border-gray-300">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[#354878]">Filtres actifs ({selectedResearchTopics.length})</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  <X size={16} />
                  Réinitialiser les filtres
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedResearchTopics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => toggleResearchTopic(topic)}
                    className="bg-[#2C67A1] text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-2 hover:bg-[#354878] transition-colors"
                  >
                    {topic}
                    <X size={14} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Research Topics Filter */}
          <div>
            <h3 className="text-[#354878] mb-3 flex items-center gap-2">
              <Tag size={18} />
              Thématiques de recherche
            </h3>
            <div className="flex flex-wrap gap-3">
              {allResearchTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => toggleResearchTopic(topic)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedResearchTopics.includes(topic)
                      ? 'bg-[#2C67A1] text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-[#354878] hover:text-[#354878]'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Doctorants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctorants.map((doctorant) => (
          <div
            key={doctorant.id}
            onClick={() => onNavigate('fiche-doctorant', { id: doctorant.id })}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={doctorant.image}
                alt={doctorant.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="text-[#354878] mb-2">{doctorant.name}</h3>
              <div className="space-y-2 text-sm text-[#354878] mb-3">
                <p><span className="font-medium">Spécialisation:</span> {doctorant.specialization}</p>
                {doctorant.university && (
                  <p><span className="font-medium">Université:</span> {doctorant.university}</p>
                )}
              </div>
              
              {/* Research Topics Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {doctorant.researchTopics.slice(0, 1).map((topic, index) => (
                  <span
                    key={index}
                    className="bg-[#6A9ECC] text-white px-2 py-1 rounded text-xs"
                  >
                    {topic}
                  </span>
                ))}
                {doctorant.researchTopics.length > 1 && (
                  <span className="bg-[#AD947E] text-white px-2 py-1 rounded text-xs">
                    +{doctorant.researchTopics.length - 1}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDoctorants.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Aucun doctorant trouvé pour votre recherche.
        </div>
      )}
      <ScrollToTop />
    </div>
  );
}