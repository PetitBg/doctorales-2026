import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, BookOpen, Mail, Shield } from 'lucide-react';
import { doctorants as allDoctorants } from '../data/doctorants';
import { eventsData } from '../data/events';

interface HomePageProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = eventsData.slice(0, 3);

  // Sélectionner les 3 premiers doctorants pour mobile, 6 pour desktop
  const doctorantsMobile = allDoctorants.slice(0, 3).map(d => ({
    id: d.id,
    name: d.name,
    domain: d.domain,
    image: d.image
  }));
  
  const doctorantsDesktop = allDoctorants.slice(0, 6).map(d => ({
    id: d.id,
    name: d.name,
    domain: d.domain,
    image: d.image
  }));

  // Slides pour le carrousel du header
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1758270704587-43339a801396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Les Doctorales 2026 : l\'évènement des jeunes chercheur·euse·s',
      alt: 'Doctorant·e·s en conférence'
    },
    {
      image: 'https://images.unsplash.com/photo-1732437334226-e96e72272bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGNvbGxhYm9yYXRpb24lMjBkaXNjdXNzaW9ufGVufDF8fHx8MTc2NDkyNDU5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Échanges, partages et valorisation de vos recherches',
      alt: 'Chercheur·euse·s en discussion'
    },
    {
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Rencontrez la communauté scientifique en SIC',
      alt: 'Présentation scientifique'
    }
  ];

  // Auto-rotation du carrousel toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 py-8 lg:py-16">
        <div className="relative w-full max-w-full mx-auto h-80 lg:h-[600px] rounded-lg overflow-hidden">
          {/* Background Image */}
          <img 
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].alt}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
          
          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-white text-3xl lg:text-5xl xl:text-6xl mb-6 lg:mb-8 max-w-4xl mx-auto drop-shadow-2xl leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            
            {/* Badges Date et Lieu */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2 bg-[#354878]/90 backdrop-blur-sm px-5 py-3 rounded-full">
                <Calendar size={20} className="text-white" />
                <span className="text-white">8, 9 et 10 juin 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-[#354878]/90 backdrop-blur-sm px-5 py-3 rounded-full">
                <MapPin size={20} className="text-white" />
                <span className="text-white">Campus Condorcet, Aubervilliers</span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 lg:left-8 transform -translate-y-1/2 bg-white/90 p-2 lg:p-3 rounded-full hover:bg-white transition-all shadow-lg z-10"
            aria-label="Slide précédent"
          >
            <ChevronLeft size={24} className="text-[#354878]" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 lg:right-8 transform -translate-y-1/2 bg-white/90 p-2 lg:p-3 rounded-full hover:bg-white transition-all shadow-lg z-10"
            aria-label="Slide suivant"
          >
            <ChevronRight size={24} className="text-[#354878]" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-6 lg:px-12 py-8 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            {/* Text Content */}
            <div className="flex-1 flex flex-col">
              <h2 className="text-[#354878] mb-6">
                Un espace d'échanges et de rencontres pour les jeunes chercheur·euse·s en SIC
              </h2>
              <p className="text-[#61646b] text-base lg:text-lg mb-8 leading-relaxed">
                Les Doctorales de la SFSIC rassemblent doctorant·e·s autour de communications, posters et médiations créatives valorisant leurs recherches. L'événement favorise des échanges bienveillants avec des chercheur·euse·s expérimenté·e·s et met l'accent sur les enjeux écologiques, l'inclusion et la lutte contre les VSS. Plusieurs ateliers accompagnent les participant·e·s dans la méthodologie, la valorisation de leurs compétences, l'usage de l'IA et la diffusion alternative de la recherche. Une programmation Arts·SIC·Culture complète les rencontres en explorant des formes artistiques de médiation scientifique.
              </p>
              
              {/* Image (mobile only) */}
              <div className="lg:hidden flex-shrink-0 w-full max-w-sm mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNvbmZlcmVuY2UlMjBzdHVkZW50c3xlbnwxfHx8fDE3NjQ5MjQ4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Étudiants en discussion"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="text-center">
                <button 
                  onClick={() => onNavigate('about')}
                  className="bg-[#2C67A1] text-white px-8 py-3 text-lg rounded-md hover:bg-[#354878] transition-colors shadow-lg hover:shadow-xl inline-block"
                >
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Image (desktop only) */}
            <div className="hidden lg:block flex-shrink-0 w-64">
              <img 
                src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNvbmZlcmVuY2UlMjBzdHVkZW50c3xlbnwxfHx8fDE3NjQ5MjQ4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Étudiants en discussion"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-6 lg:px-12 py-8 lg:py-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* General Contact Card */}
          <div className="bg-gradient-to-br from-[#354878] to-[#6A9ECC] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Mail size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-2">Contact</h3>
                <p className="text-white/90 text-sm mb-4">
                  Pour toute question concernant les Doctorales, n'hésitez pas à nous contacter.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-[#354878] px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                >
                  Nous contacter
                </button>
              </div>
            </div>
          </div>

          {/* VSS Contact Card */}
          <div className="bg-gradient-to-br from-[#B9177B] to-[#D63A9D] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Shield size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-2">Comité contre les VSS</h3>
                <p className="text-white/90 text-sm mb-4">
                  Que vous soyez victime ou témoins, nous sommes là pour vous accompagner.
                </p>
                <a
                  href="mailto:vhss@doctorales-sfsic.fr"
                  className="bg-white text-[#B9177B] px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm inline-block"
                >
                  Contacter la cellule
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda - Mini événements */}
      <section className="px-6 lg:px-12 py-8 lg:py-12 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#354878]">Prochains temps forts</h2>
          <button 
            onClick={() => onNavigate('agenda')}
            className="text-[#6A9ECC] hover:text-[#354878] underline transition-colors text-sm lg:text-base"
          >
            Voir l'agenda complet
          </button>
        </div>
        
        <div className="space-y-4">
          {events.slice(0, 2).map((event, index) => {
            // Définir les jours de la semaine
            const eventDay = event.date.includes('8 juin') ? 'lundi' : 
                           event.date.includes('9 juin') ? 'mardi' : 
                           event.date.includes('10 juin') ? 'mercredi' : '';
            
            return (
              <div 
                key={event.id} 
                className="bg-[#f5f5f5] rounded-lg p-5 lg:p-6 hover:shadow-md transition-shadow cursor-pointer flex gap-4"
                onClick={() => onNavigate('fiche-intervention', { id: event.id })}
              >
                {/* Time */}
                <div className="flex-shrink-0">
                  <div className="text-[#6A9ECC] text-center">
                    <div className="text-3xl lg:text-4xl">{event.time.split(':')[0]}:{event.time.split(':')[1].split(' ')[0]}</div>
                    {eventDay && <div className="text-sm text-[#61646b] mt-1 capitalize">{eventDay}</div>}
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <h3 className="text-[#19191b] mb-2">{event.title}</h3>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#61646b] text-sm flex items-center gap-1">
                      <MapPin size={14} className="text-[#6A9ECC]" />
                      {event.location}
                    </p>
                    <p className="text-[#61646b] text-sm">{event.presenter}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Resources Banner */}
      <section className="px-6 lg:px-12 py-6 lg:py-8 bg-gradient-to-r from-[#354878] to-[#6A9ECC]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <BookOpen size={32} className="text-white flex-shrink-0" />
              <div>
                <h3 className="text-white mb-1">Bibliothèque de ressources</h3>
                <p className="text-white/90 text-sm">Accédez aux supports, présentations et documents des Doctorales</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('ressources')}
              className="bg-white text-[#354878] px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors shadow-md whitespace-nowrap"
            >
              Découvrir
            </button>
          </div>
        </div>
      </section>

      {/* Les doctorants Section */}
      <section id="doctorants" className="px-6 lg:px-12 py-8 lg:py-16 bg-gray-50">
        <div className="flex justify-between items-center mb-6 lg:mb-8">
          <h2 className="text-[#354878]">Les doctorant·e·s</h2>
          <button 
            onClick={() => onNavigate('doctorants')}
            className="text-[#354878] hover:text-[#6A9ECC] underline transition-colors"
          >
            Voir tous·tes
          </button>
        </div>
        
        {/* Mobile: 3 doctorants */}
        <div className="lg:hidden grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {doctorantsMobile.map((doctorant) => (
            <div 
              key={doctorant.id} 
              className="text-center cursor-pointer"
              onClick={() => onNavigate('fiche-doctorant', { id: doctorant.id })}
            >
              <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-[#afb1b6] hover:border-[#6A9ECC] transition-colors">
                <img 
                  src={doctorant.image} 
                  alt={doctorant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[#354878] text-xs">{doctorant.name}</p>
            </div>
          ))}
        </div>
        
        {/* Desktop: 6 doctorants en 1 ligne */}
        <div className="hidden lg:grid grid-cols-6 gap-8">
          {doctorantsDesktop.map((doctorant) => (
            <div 
              key={doctorant.id} 
              className="text-center cursor-pointer"
              onClick={() => onNavigate('fiche-doctorant', { id: doctorant.id })}
            >
              <div className="w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden border-2 border-[#afb1b6] hover:border-[#6A9ECC] transition-colors">
                <img 
                  src={doctorant.image} 
                  alt={doctorant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[#354878] text-sm">{doctorant.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Les événements Section */}
      <section id="evenements" className="px-6 lg:px-12 py-8 lg:py-16 bg-white">
        <div className="flex justify-between items-center mb-6 lg:mb-8">
          <h2 className="text-[#354878]">Les événements</h2>
          <button 
            onClick={() => onNavigate('agenda')}
            className="text-[#354878] hover:text-[#6A9ECC] underline transition-colors"
          >
            Voir l'agenda
          </button>
        </div>
        
        {/* Mobile View - Carousel */}
        <div className="lg:hidden relative">
          {/* Event Card */}
          <div 
            className="bg-gray-100 rounded-lg overflow-hidden mb-4 cursor-pointer"
            onClick={() => onNavigate('fiche-intervention', { id: events[currentEventIndex].id })}
          >
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-[#354878] text-white px-3 py-1 rounded-full text-sm">
                  {events[currentEventIndex].activityType}
                </div>
              </div>
              <h3 className="text-[#354878] mb-2">{events[currentEventIndex].title}</h3>
              <p className="text-sm text-gray-600 mb-3">{events[currentEventIndex].presenter}</p>
              <div className="flex items-center gap-2 text-sm text-[#354878]">
                <Calendar size={16} />
                <span>{events[currentEventIndex].date}</span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between">
            <button 
              onClick={prevEvent}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeft size={24} className="text-[#354878]" />
            </button>
            
            <div className="flex gap-2">
              {events.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentEventIndex ? 'bg-[#354878]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextEvent}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronRight size={24} className="text-[#354878]" />
            </button>
          </div>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
              onClick={() => onNavigate('fiche-intervention', { id: event.id })}
            >
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-[#354878] text-white px-3 py-1 rounded-full text-sm">
                    {event.activityType}
                  </div>
                </div>
                <h3 className="text-[#354878] mb-3">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{event.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <p className="text-[#354878]">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}