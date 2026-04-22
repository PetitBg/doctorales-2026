import { FileText, Shield, Users, AlertCircle } from 'lucide-react';

interface InclusionVSSHPageProps {
  onNavigate: (page: string) => void;
}

export default function InclusionVSSHPage({ onNavigate }: InclusionVSSHPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section - using orange to dark olive gradient */}
      <section className="bg-gradient-to-r from-[#FF7600] to-[#5E5400] text-white py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl mb-4">Inclusion et lutte contre les VSSH</h1>
          <p className="text-xl opacity-90">
            Notre engagement pour un environnement de recherche respectueux et inclusif
          </p>
        </div>
      </section>

      {/* Introduction - using charte accent colors */}
      <section className="py-12 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FF7600]/10 border-l-4 border-[#FF7600] p-6 rounded-r-lg mb-8">
            <p className="text-lg text-gray-700">
              Les Doctorales s'engagent à créer un espace d'échange et de partage bienveillant, 
              respectueux de tou·te·s les participant·e·s. La lutte contre les violences sexistes 
              et sexuelles ainsi que les discriminations est au cœur de nos préoccupations.
            </p>
          </div>
        </div>
      </section>

      {/* Mesures prises par le LabSic - light peach background from charte */}
      <section className="py-12 px-6 lg:px-12 bg-[#FFB89F]/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-[#5E5400] mb-8 text-center">Mesures prises par le LabSic</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <Shield className="text-[#FF7600] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl text-[#5E5400] mb-3">Dispositif de prévention</h3>
                  <p className="text-gray-700">
                    Le LabSic a mis en place un dispositif de prévention et de sensibilisation 
                    aux violences sexistes et sexuelles, incluant des formations et des outils 
                    de signalement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <Users className="text-[#587D4B] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl text-[#5E5400] mb-3">Cellule d'écoute</h3>
                  <p className="text-gray-700">
                    Une cellule d'écoute et d'accompagnement est à disposition des doctorant·e·s 
                    et chercheur·euse·s pour signaler toute situation problématique en toute confidentialité.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <FileText className="text-[#5E5400] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl text-[#5E5400] mb-3">Charte d'engagement</h3>
                  <p className="text-gray-700">
                    Tous les membres du laboratoire adhèrent à une charte d'engagement 
                    pour un environnement de travail inclusif et respectueux.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <AlertCircle className="text-[#FF7600] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl text-[#5E5400] mb-3">Procédures de signalement</h3>
                  <p className="text-gray-700">
                    Des procédures claires de signalement et de traitement des situations 
                    de harcèlement ou de discrimination sont établies et communiquées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charte des Doctorales - using charte gradient and borders */}
      <section className="py-12 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-[#5E5400] mb-8 text-center">Notre charte</h2>
          
          <div className="bg-gradient-to-br from-[#FF7600]/5 to-[#587D4B]/5 p-8 rounded-xl border-2 border-[#FF7600]/30">
            <h3 className="text-2xl text-[#5E5400] mb-6">Charte de bienveillance et d'inclusion</h3>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-[#FF7600] font-bold text-xl">•</span>
                <p>
                  <strong>Respect mutuel :</strong> Nous nous engageons à traiter chaque participant·e 
                  avec dignité et respect, quels que soient son genre, son origine, son orientation sexuelle, 
                  son handicap ou toute autre caractéristique.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-[#FF7600] font-bold text-xl">•</span>
                <p>
                  <strong>Écoute bienveillante :</strong> Les échanges doivent se dérouler dans un climat 
                  d'écoute active et de bienveillance, favorisant la libre expression de tou·te·s.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-[#FF7600] font-bold text-xl">•</span>
                <p>
                  <strong>Tolérance zéro :</strong> Aucune forme de harcèlement, de discrimination ou de 
                  violence (verbale, physique ou psychologique) ne sera tolérée.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-[#FF7600] font-bold text-xl">•</span>
                <p>
                  <strong>Inclusion et accessibilité :</strong> Nous veillons à ce que les Doctorales 
                  soient accessibles à tou·te·s, tant sur le plan physique que dans les contenus proposés.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-[#FF7600] font-bold text-xl">•</span>
                <p>
                  <strong>Soutien et solidarité :</strong> En cas de difficulté, chaque participant·e peut 
                  compter sur le soutien de l'équipe organisatrice et de la communauté.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact et ressources - light peach background */}
      <section className="py-12 px-6 lg:px-12 bg-[#FFB89F]/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-[#5E5400] mb-8 text-center">Besoin d'aide ?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl text-[#5E5400] mb-4">Pendant l'événement</h3>
              <p className="text-gray-700 mb-4">
                Des référent·e·s seront présent·e·s sur place pour vous écouter et vous accompagner.
              </p>
              <p className="text-sm text-gray-600">
                Vous pourrez les identifier grâce à leur badge spécifique.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl text-[#5E5400] mb-4">Nous contacter</h3>
              <p className="text-gray-700 mb-4">
                Pour toute question ou signalement, n'hésitez pas à nous contacter en toute confidentialité.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-2 bg-[#5E5400] text-white rounded-lg hover:bg-[#FF7600] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5E5400] focus:ring-offset-2"
              >
                Contacter l'équipe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ressources externes - using charte central color for background */}
      <section className="py-12 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-[#5E5400] mb-6 text-center">Ressources utiles</h2>
          <div className="bg-[#FFB89F]/20 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#FF7600] mt-1">▸</span>
                <span>Numéro national d'aide aux victimes de violences : <strong>116 006</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF7600] mt-1">▸</span>
                <span>Plateforme de signalement du gouvernement : <a href="https://www.service-public.fr/cmi" target="_blank" rel="noopener noreferrer" className="text-[#5E5400] underline hover:text-[#FF7600]">service-public.fr</a></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF7600] mt-1">▸</span>
                <span>Cellule d'écoute de l'Université Sorbonne Paris Nord : disponible sur demande</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}