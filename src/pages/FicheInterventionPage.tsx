import { ArrowLeft, Calendar, MapPin, User, Download, Share2 } from 'lucide-react';
import { eventsData } from '../data/events';
import { doctorants } from '../data/doctorants';

interface FicheInterventionPageProps {
  onNavigate: (page: string, params?: any) => void;
  interventionId: number;
}

export default function FicheInterventionPage({ onNavigate, interventionId }: FicheInterventionPageProps) {
  const intervention = eventsData.find(e => e.id === interventionId) || eventsData[0];
  
  // Get the associated doctorant if there is one
  const associatedDoctorant = intervention.doctorantId 
    ? doctorants.find(d => d.id === intervention.doctorantId)
    : null;

  const addToCalendar = () => {
    console.log('Ajouter au calendrier:', intervention);
  };

  return (
    <div className="px-6 lg:px-12 py-8 lg:py-12">
      {/* Back Button */}
      <button
        onClick={() => onNavigate('agenda')}
        className="flex items-center gap-2 text-[#354878] hover:text-[#2C67A1] mb-8 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Retour à l'agenda</span>
      </button>

      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[#354878] text-white px-3 py-1 rounded-full text-sm">
              {intervention.activityType}
            </span>
            {intervention.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#2C67A1] text-white px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-[#354878] mb-6">{intervention.title}</h1>

          {/* Meta Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3">
              <Calendar className="text-[#354878] mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-medium text-[#354878]">{intervention.date}</p>
                <p className="text-gray-600">{intervention.time}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="text-[#354878] mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-gray-700">{intervention.location}</p>
              </div>
            </div>
          </div>

          {/* Presenter */}
          {associatedDoctorant ? (
            <button 
              onClick={() => onNavigate('fiche-doctorant', { id: associatedDoctorant.id })}
              className="w-full flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-6 hover:bg-gray-100 transition-colors cursor-pointer text-left"
            >
              <img
                src={associatedDoctorant.image}
                alt={associatedDoctorant.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-gray-600">Présenté par</p>
                <p className="font-medium text-[#354878] hover:text-[#6A9ECC] transition-colors">{associatedDoctorant.name}</p>
                <p className="text-sm text-gray-500">{associatedDoctorant.specialization}</p>
              </div>
            </button>
          ) : intervention.presenterImage ? (
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-6">
              <img
                src={intervention.presenterImage}
                alt={intervention.presenter}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-gray-600">Présenté par</p>
                <p className="font-medium text-[#354878]">{intervention.presenter}</p>
              </div>
            </div>
          ) : null}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={addToCalendar}
              className="bg-[#354878] text-white px-6 py-3 rounded-lg hover:bg-[#2C67A1] transition-colors flex items-center gap-2"
            >
              <Calendar size={20} />
              <span className="font-[Montserrat]">Ajouter à mon calendrier</span>
            </button>
            <button className="border border-[#354878] text-[#354878] px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Share2 size={20} />
              <span>Partager</span>
            </button>
          </div>
        </div>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-[#354878] mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">{intervention.description}</p>
        </section>

        {/* Objectives */}
        {intervention.objectives && intervention.objectives.length > 0 && (
          <section className="mb-10">
            <h2 className="text-[#354878] mb-4">Objectifs</h2>
            <ul className="space-y-2">
              {intervention.objectives.map((obj, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#354878] mt-1">•</span>
                  <span className="text-gray-700">{obj}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Program */}
        {intervention.program && intervention.program.length > 0 && (
          <section className="mb-10">
            <h2 className="text-[#354878] mb-4">Programme</h2>
            <div className="space-y-3">
              {intervention.program.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-[#354878] whitespace-nowrap">{item.time}</span>
                  <span className="text-gray-700">{item.content}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}