import { ArrowLeft, Mail, Linkedin, Globe } from 'lucide-react';
import { doctorants } from '../data/doctorants';
import { eventsData } from '../data/events';

interface FicheDoctorantPageProps {
  onNavigate: (page: string, params?: any) => void;
  doctorantId: number;
}

export default function FicheDoctorantPage({ onNavigate, doctorantId }: FicheDoctorantPageProps) {
  // Get the doctorant data from the imported data
  const doctorant = doctorants.find(d => d.id === doctorantId) || doctorants[0];

  // Get events associated with this doctorant
  const associatedEvents = eventsData.filter(event => event.doctorantId === doctorantId);

  return (
    <div className="px-6 lg:px-12 py-8 lg:py-12">
      {/* Back Button */}
      <button
        onClick={() => onNavigate('doctorants')}
        className="flex items-center gap-2 text-[#354878] hover:text-[#2C67A1] mb-8 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Retour à la liste</span>
      </button>

      <div className="max-w-4xl">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Photo */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <img
              src={doctorant.image}
              alt={doctorant.name}
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-[#354878] mb-4">{doctorant.name}</h1>
            
            <div className="space-y-3 text-gray-700">
              <div>
                <span className="font-medium text-[#354878]">Domaine:</span> {doctorant.domain}
              </div>
              <div>
                <span className="font-medium text-[#354878]">Spécialisation:</span> {doctorant.specialization}
              </div>
              {doctorant.university && (
                <div>
                  <span className="font-medium text-[#354878]">Université:</span> {doctorant.university}
                </div>
              )}
              {doctorant.status && (
                <div>
                  <span className="font-medium text-[#354878]">Statut:</span> {doctorant.status}
                </div>
              )}
              {doctorant.year && (
                <div>
                  <span className="font-medium text-[#354878]">Année:</span> {doctorant.year}
                </div>
              )}
              <div>
                <span className="font-medium text-[#354878]">Directeur de thèse:</span> {doctorant.director}
              </div>
              <div>
                <span className="font-medium text-[#354878]">Laboratoire:</span> {doctorant.laboratory}
              </div>
            </div>

            {/* Contact */}
            <div className="mt-6 flex gap-4">
              {doctorant.email && (
                <a
                  href={`mailto:${doctorant.email}`}
                  className="p-2 bg-[#2C67A1] text-white rounded-full hover:bg-[#354878] transition-colors"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
              )}
              {doctorant.linkedin && (
                <a
                  href={doctorant.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#2C67A1] text-white rounded-full hover:bg-[#354878] transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {doctorant.website && (
                <a
                  href={doctorant.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#2C67A1] text-white rounded-full hover:bg-[#354878] transition-colors"
                  title="Site web"
                >
                  <Globe size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Biography */}
        <section className="mb-10">
          <h2 className="text-[#354878] mb-4">Biographie</h2>
          <p className="text-gray-700 leading-relaxed">{doctorant.bio}</p>
        </section>

        {/* Communication présentée */}
        {doctorant.presentations && doctorant.presentations.length > 0 && (
          <section className="mb-10">
            <h2 className="text-[#354878] mb-4">Communication présentée aux Doctorales</h2>
            <div className="bg-[#354878]/5 border-l-4 border-[#354878] p-6 rounded-r-lg">
              <h3 className="text-[#354878] mb-3">{doctorant.presentations[0].title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {doctorant.presentations[0].event}
              </p>
              <p className="text-sm text-gray-600">
                {doctorant.presentations[0].date}
              </p>
            </div>
          </section>
        )}

        {/* Événements associés aux Doctorales 2026 */}
        {associatedEvents.length > 0 && (
          <section className="mb-10">
            <h2 className="text-[#354878] mb-4">
              {associatedEvents.length > 1 ? 'Interventions aux Doctorales 2026' : 'Intervention aux Doctorales 2026'}
            </h2>
            <div className="space-y-4">
              {associatedEvents.map((event) => (
                <button 
                  key={event.id}
                  onClick={() => onNavigate('fiche-intervention', { id: event.id })}
                  className="w-full text-left bg-[#6A9ECC]/10 border-l-4 border-[#6A9ECC] p-6 rounded-r-lg hover:bg-[#6A9ECC]/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-[#354878] flex-1">{event.title}</h3>
                    <span className="text-sm text-white bg-[#6A9ECC] px-3 py-1 rounded-full whitespace-nowrap">
                      {event.activityType}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Date :</span> {event.date}
                    </p>
                    <p>
                      <span className="font-medium">Horaire :</span> {event.time}
                    </p>
                    <p>
                      <span className="font-medium">Lieu :</span> {event.location}
                    </p>
                  </div>
                  <p className="text-gray-700 mt-3 line-clamp-2">{event.description}</p>
                  <div className="mt-4 text-[#354878] hover:text-[#6A9ECC] transition-colors flex items-center gap-2">
                    <span className="underline">Voir les détails</span>
                    <span>→</span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Thesis Title */}
        {doctorant.thesisTitle && (
          <section className="mb-10">
            <h2 className="text-[#354878] mb-4">Titre de la thèse</h2>
            <p className="text-gray-700 italic text-lg">{doctorant.thesisTitle}</p>
          </section>
        )}

        {/* Research Question */}
        {doctorant.researchQuestion && (
          <section className="mb-10">
            <h2 className="text-[#354878] mb-4">Question de recherche</h2>
            <p className="text-gray-700 leading-relaxed">{doctorant.researchQuestion}</p>
          </section>
        )}

        {/* Methodology */}
        {doctorant.methodology && (
          <section className="mb-10">
            <h2 className="text-[#354878] mb-4">Méthodologie</h2>
            <p className="text-gray-700 leading-relaxed">{doctorant.methodology}</p>
          </section>
        )}

        {/* Research Themes */}
        <section className="mb-10">
          <h2 className="text-[#354878] mb-4">Thématiques de recherche</h2>
          <div className="flex flex-wrap gap-3">
            {doctorant.researchTopics.map((theme, index) => (
              <span
                key={index}
                className="bg-[#354878] text-white px-4 py-2 rounded-full text-sm"
              >
                {theme}
              </span>
            ))}
          </div>
        </section>

        {/* Keywords */}
        <section className="mb-10">
          <h2 className="text-[#354878] mb-4">Mots-clés</h2>
          <div className="flex flex-wrap gap-2">
            {doctorant.keywords.map((keyword, index) => (
              <span
                key={index}
                className="bg-[#2C67A1] text-white px-3 py-1.5 rounded text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </section>

        {/* Responsibilities */}
        {doctorant.responsibilities && (
          <section className="mb-10">
            <h2 className="text-[#354878] mb-4">Responsabilités</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{doctorant.responsibilities}</p>
          </section>
        )}

        {/* Teaching */}
        {doctorant.teaching && (
          <section className="mb-10">
            <h2 className="text-[#354878] mb-4">Enseignement</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{doctorant.teaching}</p>
          </section>
        )}

        {/* Formation */}
        {doctorant.formation && (
          <section className="mb-10">
            <h2 className="text-[#354878] mb-4">Formation</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{doctorant.formation}</p>
          </section>
        )}

        {/* Publications */}
        {doctorant.publications && doctorant.publications.length > 0 && (
          <section className="mb-10">
            <h2 className="text-[#354878] mb-4">Publications</h2>
            <div className="space-y-4">
              {doctorant.publications.map((pub, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-[#354878] mb-2">{pub.title}</h3>
                  <p className="text-sm text-gray-600">
                    {pub.journal} - {pub.year}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}