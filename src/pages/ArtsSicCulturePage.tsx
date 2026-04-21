interface ArtsSicCulturePageProps {
  onNavigate: (page: string) => void;
}

export default function ArtsSicCulturePage({ onNavigate }: ArtsSicCulturePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#AD947E] to-[#B9177B] text-white py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl mb-4">Arts Sic Culture</h1>
          <p className="text-xl opacity-90">
            Quand art, culture et sciences de l'information et de la communication se rencontrent
          </p>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12 border-2 border-[#AD947E]/20">
            <div className="text-6xl mb-6">🎨</div>
            <h2 className="text-3xl text-[#354878] mb-6">Contenu à venir</h2>
            <p className="text-lg text-gray-600 mb-8">
              Un programme culturel riche sera proposé lors des Doctorales 2026. <br />
              Découvrez prochainement les événements artistiques et culturels qui ponctueront ces trois jours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-3 bg-[#AD947E] text-white rounded-lg hover:bg-[#B9177B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#AD947E] focus:ring-offset-2"
              >
                Nous contacter
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="px-8 py-3 border-2 border-[#AD947E] text-[#AD947E] rounded-lg hover:bg-[#AD947E] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#AD947E] focus:ring-offset-2"
              >
                Retour à l'accueil
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="bg-gray-50 py-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl text-[#354878] mb-8 text-center">Un dialogue entre art et recherche</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4 text-center">🎭</div>
              <h4 className="text-lg font-semibold text-[#354878] mb-3 text-center">Performances</h4>
              <p className="text-sm text-gray-600 text-center">
                Des performances artistiques mêlant créativité et réflexion scientifique
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4 text-center">🖼️</div>
              <h4 className="text-lg font-semibold text-[#354878] mb-3 text-center">Expositions</h4>
              <p className="text-sm text-gray-600 text-center">
                Des expositions qui questionnent les pratiques communicationnelles contemporaines
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4 text-center">🎵</div>
              <h4 className="text-lg font-semibold text-[#354878] mb-3 text-center">Événements culturels</h4>
              <p className="text-sm text-gray-600 text-center">
                Des moments de convivialité pour découvrir et échanger autrement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-center">
            <p className="text-xl italic text-gray-700 mb-4">
              « L'art et la culture sont au cœur des sciences de l'information et de la communication. 
              Ils nous permettent d'explorer de nouvelles formes d'expression et de transmission des savoirs. »
            </p>
            <footer className="text-gray-500">
              — Les Doctorales 2026
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
