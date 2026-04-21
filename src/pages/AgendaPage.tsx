import { useState } from 'react';
import { SlidersHorizontal, Calendar as CalendarIcon, X, MapPin, FileText } from 'lucide-react';
import { eventsData } from '../data/events';
import { doctorants } from '../data/doctorants';
import ScrollToTop from '../components/ScrollToTop';

interface AgendaPageProps {
  onNavigate: (page: string, params?: any) => void;
}

interface Event {
  id: number;
  time: string;
  location: string;
  title: string;
  presenter: string;
  description: string;
  tags: string[];
  activityType: string;
  hasSupport: boolean;
  doctorantId?: number;
}

interface DayGroup {
  day: string;
  date: string;
  events: Event[];
}

export default function AgendaPage({ onNavigate }: AgendaPageProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedActivityTypes, setSelectedActivityTypes] = useState<string[]>([]);
  const [supportFilter, setSupportFilter] = useState<'all' | 'with' | 'without'>('all');

  // Définition des grandes catégories thématiques
  const thematicCategories = [
    {
      name: 'Méthodologie & Épistémologie',
      tags: ['Méthodologie', 'Recherche', 'Méthodes', 'Épistémologie', 'Terrains sensibles', 'Éthique', 'Participation citoyenne', 'Militantisme', 'Savoirs']
    },
    {
      name: 'Insertion professionnelle',
      tags: ['Insertion professionnelle', 'Qualification', 'MCF', 'Compétences', 'Carrière']
    },
    {
      name: 'Valorisation & Communication',
      tags: ['Communication scientifique', 'Médiation', 'Valorisation', 'International', 'Publication', 'Communication']
    },
    {
      name: 'Numérique & Technologies',
      tags: ['IA', 'Intelligence artificielle', 'TIC', 'Plateformes', 'Terrorisme', 'Régulation', 'Modération', 'Serious games', 'Pédagogie', 'Pratiques informationnelles', 'Jeu vidéo', 'Informatisation', 'Banque', 'Communication organisationnelle', 'Innovation']
    },
    {
      name: 'Journalisme & Médias',
      tags: ['Journalisme', 'Médias', 'Réseaux sociaux', 'Politique', 'Engagement', 'Afrique', 'Économie politique', 'Risques', 'Identité professionnelle']
    },
    {
      name: 'Bien-être & Accompagnement',
      tags: ['Bien-être', 'Santé', 'Accompagnement']
    }
  ];

  // Programme des Journées Doctorales 2026
  const programData: DayGroup[] = [
    {
      day: 'Lundi 8 juin 2026',
      date: '8 juin',
      events: eventsData.filter(e => e.date === '8 juin 2026')
    },
    {
      day: 'Mardi 9 juin 2026',
      date: '9 juin',
      events: eventsData.filter(e => e.date === '9 juin 2026')
    },
    {
      day: 'Mercredi 10 juin 2026',
      date: '10 juin',
      events: eventsData.filter(e => e.date === '10 juin 2026')
    }
  ];

  // Extract all unique activity types
  const allActivityTypes = Array.from(
    new Set(programData.flatMap(group => group.events.map(event => event.activityType)))
  );

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  // Toggle activity type selection
  const toggleActivityType = (activityType: string) => {
    setSelectedActivityTypes(prev => 
      prev.includes(activityType) ? prev.filter(t => t !== activityType) : [...prev, activityType]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedActivityTypes([]);
    setSupportFilter('all');
  };

  // Filter events
  const filterEvents = (events: Event[]) => {
    if (selectedCategories.length === 0 && selectedActivityTypes.length === 0 && supportFilter === 'all') return events;
    return events.filter(event => 
      (selectedCategories.length === 0 || selectedCategories.some(category => thematicCategories.find(c => c.name === category)?.tags.some(tag => event.tags.includes(tag)))) &&
      (selectedActivityTypes.length === 0 || selectedActivityTypes.includes(event.activityType)) &&
      (supportFilter === 'all' || (supportFilter === 'with' && event.hasSupport) || (supportFilter === 'without' && !event.hasSupport))
    );
  };

  // Apply filters to program data
  const filteredProgramData = programData.map(group => ({
    ...group,
    events: filterEvents(group.events)
  })).filter(group => group.events.length > 0);

  const addAllToCalendar = () => {
    console.log('Ajouter tout le programme au calendrier');
  };

  return (
    <div className="px-6 lg:px-12 py-8 lg:py-12">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[#354878] mb-4">
          Programme des Journées Doctorales 2026
        </h1>
        
        {/* Date Range */}
        <div className="flex items-center gap-2 text-gray-700 mb-6">
          <CalendarIcon size={18} className="text-[#354878]" />
          <span>8, 9 et 10 juin 2026 • Campus Condorcet, Aubervilliers</span>
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-end">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-[#354878] hover:text-[#2C67A1] transition-colors"
          >
            <span className="text-sm underline">Filtrer par thématique</span>
            <SlidersHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-gray-50 rounded-lg p-4 lg:p-6 mb-8 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[#354878]">Filtres</h3>
            <button
              onClick={() => setShowFilters(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Categories Filter */}
          <div className="mb-4">
            <h4 className="text-sm text-gray-700 mb-2">Thématiques</h4>
            <div className="flex flex-wrap gap-2">
              {thematicCategories.map(category => (
                <button
                  key={category.name}
                  onClick={() => toggleCategory(category.name)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    selectedCategories.includes(category.name)
                      ? 'bg-[#354878] text-white'
                      : 'bg-white text-[#354878] border border-[#354878] hover:bg-[#354878] hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Activity Types Filter */}
          <div className="mb-4">
            <h4 className="text-sm text-gray-700 mb-2">Type d'activité</h4>
            <div className="flex flex-wrap gap-2">
              {allActivityTypes.map(activityType => (
                <button
                  key={activityType}
                  onClick={() => toggleActivityType(activityType)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    selectedActivityTypes.includes(activityType)
                      ? 'bg-[#2C67A1] text-white'
                      : 'bg-white text-[#2C67A1] border border-[#2C67A1] hover:bg-[#2C67A1] hover:text-white'
                  }`}
                >
                  {activityType}
                </button>
              ))}
            </div>
          </div>

          {/* Support Availability Filter */}
          <div className="mb-4">
            <h4 className="text-sm text-gray-700 mb-2">Disponibilité de support</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSupportFilter('all')}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  supportFilter === 'all'
                    ? 'bg-[#B9177B] text-white'
                    : 'bg-white text-[#B9177B] border border-[#B9177B] hover:bg-[#B9177B] hover:text-white'
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => setSupportFilter('with')}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  supportFilter === 'with'
                    ? 'bg-[#B9177B] text-white'
                    : 'bg-white text-[#B9177B] border border-[#B9177B] hover:bg-[#B9177B] hover:text-white'
                }`}
              >
                Avec support
              </button>
              <button
                onClick={() => setSupportFilter('without')}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  supportFilter === 'without'
                    ? 'bg-[#B9177B] text-white'
                    : 'bg-white text-[#B9177B] border border-[#B9177B] hover:bg-[#B9177B] hover:text-white'
                }`}
              >
                Sans support
              </button>
            </div>
          </div>

          {(selectedCategories.length > 0 || selectedActivityTypes.length > 0 || supportFilter !== 'all') && (
            <button
              onClick={clearFilters}
              className="text-sm text-[#354878] hover:text-[#2C67A1] underline mt-2"
            >
              Réinitialiser tous les filtres
            </button>
          )}
        </div>
      )}

      {/* Events List */}
      <div className="space-y-8">
        {filteredProgramData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">
              Aucun événement ne correspond à vos critères.
            </p>
            <button
              onClick={clearFilters}
              className="bg-[#354878] text-white px-6 py-2 rounded-lg hover:bg-[#2C67A1] transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          filteredProgramData.map((dayGroup, index) => (
            <div key={index}>
              {/* Day Header */}
              <h2 className="text-[#354878] mb-4">{dayGroup.day}</h2>
              
              {/* Events for this day */}
              <div className="space-y-4">
                {dayGroup.events.map((event) => {
                  // Get the associated doctorant if there is one
                  const associatedDoctorant = (event as any).doctorantId 
                    ? doctorants.find(d => d.id === (event as any).doctorantId)
                    : null;
                  
                  return (
                  <div 
                    key={event.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-4">
                      {/* Time */}
                      <div className="flex-shrink-0 w-14 text-[#354878] font-medium">
                        {event.time}
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        {/* Title and Activity Type Badge */}
                        <div className="flex items-start justify-between gap-2">
                          <h3 
                            className="text-[#354878] flex-1 cursor-pointer hover:text-[#2C67A1]"
                            onClick={() => onNavigate('fiche-intervention', { id: event.id })}
                          >
                            {event.title}
                          </h3>
                          <div className="flex gap-2 flex-shrink-0">
                            <span className="bg-[#6A9ECC] text-white px-2 py-1 rounded text-xs">
                              {event.activityType}
                            </span>
                            {event.hasSupport && (
                              <span className="bg-[#B9177B] text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                                <FileText size={12} />
                                Support
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Presenter with photo if doctorant */}
                        {associatedDoctorant ? (
                          <button
                            onClick={() => onNavigate('fiche-doctorant', { id: associatedDoctorant.id })}
                            className="flex items-center gap-2 text-left hover:bg-gray-50 p-2 rounded-lg transition-colors -ml-2"
                          >
                            <img
                              src={associatedDoctorant.image}
                              alt={associatedDoctorant.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <div className="text-sm">
                              <p className="text-[#354878] font-medium hover:text-[#6A9ECC] transition-colors">
                                {associatedDoctorant.name}
                              </p>
                            </div>
                          </button>
                        ) : (
                          <p className="text-sm text-[#354878]">
                            {event.presenter}
                          </p>
                        )}

                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {event.description}
                        </p>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-sm text-[#354878]">
                          <MapPin size={14} className="text-[#6A9ECC]" />
                          <span>{event.location}</span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {event.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-[#354878] text-white px-3 py-1 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Add to Calendar Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log('Ajouter événement au calendrier:', event.id);
                          }}
                          className="mt-2 bg-[#2C67A1] text-white py-1.5 px-3 rounded-lg hover:bg-[#354878] transition-colors flex items-center justify-center gap-1.5 text-xs"
                        >
                          <CalendarIcon size={14} />
                          Ajouter à mon calendrier
                        </button>
                      </div>
                    </div>
                  </div>
                );
                })}
              </div>
            </div>
          ))
        )}
      </div>
      <ScrollToTop />
    </div>
  );
}