import { ExternalLink, Users, Mail } from 'lucide-react';

interface ComiteScientifiquePageProps {
  onNavigate: (page: string) => void;
}

export default function ComiteScientifiquePage({ onNavigate }: ComiteScientifiquePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#354878] to-[#6A9ECC] text-white py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl mb-4">Comité scientifique</h1>
          <p className="text-xl opacity-90">
            Les expert·e·s qui accompagnent et évaluent les travaux des Doctorales 2026
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#6A9ECC]/10 border-l-4 border-[#6A9ECC] p-6 rounded-r-lg mb-8">
            <p className="text-lg text-gray-700">
              Le comité scientifique des Doctorales réunit des chercheur·euse·s reconnu·e·s 
              dans le domaine des Sciences de l'Information et de la Communication. Leur expertise 
              garantit la qualité scientifique de l'événement et l'accompagnement des jeunes chercheur·euse·s.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#354878]">
              <Users className="mx-auto mb-3 text-[#354878]" size={40} />
              <h3 className="text-xl text-[#354878] mb-2">Expert·e·s</h3>
              <p className="text-gray-700 text-sm">
                Des chercheur·euse·s de renom dans le domaine des SIC
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#6A9ECC]">
              <Mail className="mx-auto mb-3 text-[#6A9ECC]" size={40} />
              <h3 className="text-xl text-[#354878] mb-2">Accompagnement</h3>
              <p className="text-gray-700 text-sm">
                Un soutien scientifique pour les doctorant·e·s
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#B9177B]">
              <ExternalLink className="mx-auto mb-3 text-[#B9177B]" size={40} />
              <h3 className="text-xl text-[#354878] mb-2">Évaluation</h3>
              <p className="text-gray-700 text-sm">
                Une évaluation rigoureuse des communications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lien externe vers le site officiel */}
      <section className="py-12 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center border-2 border-[#354878]/20">
            <div className="text-6xl mb-6">👥</div>
            <h2 className="text-3xl text-[#354878] mb-6">Consulter la liste complète</h2>
            <p className="text-lg text-gray-600 mb-8">
              Retrouvez la composition complète du comité scientifique et les biographies 
              des membres sur le site officiel du colloque SFSIC 2026.
            </p>
            
            <a
              href="https://sfsic2026.sciencesconf.org/resource/page/id/2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#354878] text-white rounded-lg hover:bg-[#6A9ECC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#354878] focus:ring-offset-2 text-lg"
            >
              Accéder à la page officielle
              <ExternalLink size={20} />
            </a>
            
            <p className="text-sm text-gray-500 mt-6">
              Le lien s'ouvrira dans un nouvel onglet
            </p>
          </div>
        </div>
      </section>

      {/* Rôle du comité */}
      <section className="py-12 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-[#354878] mb-8 text-center">Rôle du comité scientifique</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#354878]/5 to-[#6A9ECC]/5 p-6 rounded-lg border-l-4 border-[#354878]">
              <h3 className="text-xl text-[#354878] mb-3">📋 Évaluation des propositions</h3>
              <p className="text-gray-700">
                Le comité scientifique évalue les propositions de communication soumises par les doctorant·e·s, 
                en garantissant leur qualité scientifique et leur pertinence thématique.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#6A9ECC]/5 to-[#B9177B]/5 p-6 rounded-lg border-l-4 border-[#6A9ECC]">
              <h3 className="text-xl text-[#354878] mb-3">🎤 Animation des sessions</h3>
              <p className="text-gray-700">
                Les membres du comité animent et modèrent les sessions thématiques, favorisant 
                les échanges constructifs entre les intervenant·e·s et le public.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#B9177B]/5 to-[#AD947E]/5 p-6 rounded-lg border-l-4 border-[#B9177B]">
              <h3 className="text-xl text-[#354878] mb-3">💡 Conseil et orientation</h3>
              <p className="text-gray-700">
                Le comité apporte conseils et orientations aux jeunes chercheur·euse·s, 
                les aidant à affiner leurs travaux et à développer leur démarche scientifique.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#AD947E]/5 to-[#354878]/5 p-6 rounded-lg border-l-4 border-[#AD947E]">
              <h3 className="text-xl text-[#354878] mb-3">🌟 Valorisation des recherches</h3>
              <p className="text-gray-700">
                Le comité contribue à la valorisation des recherches doctorales en SIC et 
                favorise la visibilité des travaux présentés lors des Doctorales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl text-[#354878] mb-6">Questions sur le comité scientifique ?</h2>
          <p className="text-gray-700 mb-6">
            Pour toute question concernant le comité scientifique ou les évaluations, 
            n'hésitez pas à nous contacter.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3 bg-[#354878] text-white rounded-lg hover:bg-[#6A9ECC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#354878] focus:ring-offset-2"
          >
            Nous contacter
          </button>
        </div>
      </section>
    </div>
  );
}
