import { Calendar, MapPin, Users, Lightbulb, Award, BookOpen, Microscope, Palette, GraduationCap, CheckCircle, Clock } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const ateliers = [
    {
      icon: <Lightbulb size={32} />,
      title: "La promotion ou visibilisation alternative de sa recherche",
      description: "Exposition, format vidéo, performance... Découvrez des moyens alternatifs de mettre en visibilité vos recherches au-delà des publications académiques classiques.",
      color: "#6A9ECC"
    },
    {
      icon: <Microscope size={32} />,
      title: "La fabrique méthodologique de sa recherche",
      description: "Dialogue avec des chercheur·euse·s d'expérience sur la diversité des méthodes mises en œuvre en SIC : quantitatives, qualitatives et singulières.",
      color: "#354878"
    },
    {
      icon: <BookOpen size={32} />,
      title: "L'IA en SIC et pour les SIC",
      description: "Comment intégrer l'IA dans le recueil et l'analyse de données tout en respectant les règles d'éthique ? Retours d'expériences et expérimentations.",
      color: "#B9177B"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1758270704113-9fb2ac81788f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzZW1pbmFyfGVufDF8fHx8MTc2NDg1MTAwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Conférence académique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#354878]/70"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-end px-6 lg:px-12 pb-8 lg:pb-12">
          <div className="max-w-2xl">
            <div className="bg-[#354878]/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl">
              <h1 className="text-white mb-4 drop-shadow-2xl">Doctorales SFSIC 2026</h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-6 drop-shadow-lg">
                Appel à communications, posters & contributions créatives
              </p>
              <div className="flex flex-wrap gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-[#6A9ECC]" />
                  <span>8-10 juin 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-[#6A9ECC]" />
                  <span>Campus Condorcet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations essentielles - Section sticky */}
      <section className="sticky top-0 z-20 bg-white shadow-md border-b-2 border-[#6A9ECC]/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Dates */}
            <div className="flex items-center gap-3 bg-[#6A9ECC]/10 rounded-lg p-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#6A9ECC] rounded-full flex items-center justify-center">
                <Calendar size={24} className="text-white" />
              </div>
              <div>
                <p className="text-[#61646b] text-xs">Dates de l'événement</p>
                <p className="text-[#354878]">8, 9 et 10 juin 2026</p>
              </div>
            </div>

            {/* Lieu */}
            <div className="flex items-center gap-3 bg-[#B9177B]/10 rounded-lg p-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#B9177B] rounded-full flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <p className="text-[#61646b] text-xs">Lieu</p>
                <p className="text-[#354878]">Campus Condorcet</p>
                <p className="text-[#61646b] text-xs">Aubervilliers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section avec image */}
      <section className="px-6 lg:px-12 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#6A9ECC]/10 px-4 py-2 rounded-full mb-6">
                <span className="text-[#354878]">Organisé par la SFSIC & le LabSIC</span>
              </div>
              <h2 className="text-[#354878] mb-6">Un événement majeur pour les jeunes chercheur·euse·s en SIC</h2>
              <p className="text-[#61646b] text-lg leading-relaxed mb-6">
                Les 8, 9 et 10 juin 2026, la Société française des sciences de l'information et de la communication organise ses Doctorales en collaboration avec le <span className="text-[#354878]">Laboratoire des sciences de l'information et de la communication (LabSIC)</span> de l'Université Sorbonne Paris Nord.
              </p>
              <p className="text-[#61646b] leading-relaxed">
                Trois jours d'échanges et de rencontres pour valoriser vos recherches, approfondir vos réflexions et enrichir votre parcours doctoral.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#6A9ECC]/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#B9177B]/20 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1761250246894-ee2314939662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGRpc2N1c3Npb24lMjBtZWV0aW5nfGVufDF8fHx8MTc2NDkyNTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Doctorants en discussion"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Un temps d'échanges précieux - Cards visuelles */}
      <section className="px-6 lg:px-12 py-12 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#354878] mb-4">Un temps d'échanges précieux</h2>
            <p className="text-[#61646b] text-lg max-w-3xl mx-auto">
              Pour les doctorantes et doctorants en sciences de l'information et de la communication
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Diversité des thèmes */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="bg-[#6A9ECC] p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Users size={32} />
                  </div>
                  <h3 className="text-white">Diversité des thèmes et des approches</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#61646b] leading-relaxed">
                  Tou·te·s les sujets et toutes les thématiques du champ disciplinaire peuvent faire l'objet d'une proposition. L'objectif : favoriser des échanges et débats bienveillants avec des chercheur·euse·s expérimenté·e·s afin de nourrir et approfondir les recherches doctorales.
                </p>
              </div>
            </div>

            {/* Focus scientifique */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="bg-[#B9177B] p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Microscope size={32} />
                  </div>
                  <h3 className="text-white">Focus scientifique du LabSIC</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#61646b] leading-relaxed mb-4">
                  Attention particulière portée aux recherches qui investissent :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#6A9ECC] flex-shrink-0 mt-1" />
                    <span className="text-[#61646b]">Les <span className="text-[#354878]">enjeux écologiques</span> et la désinformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#6A9ECC] flex-shrink-0 mt-1" />
                    <span className="text-[#61646b]">L'<span className="text-[#354878]">inclusion et les VHSS</span> dans les organisations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S'insérer dans le monde professionnel */}
      <section className="px-6 lg:px-12 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1653933606308-26e3aade9bb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcHJvZmVzc29yJTIwcmV0cmFpbmluZyxlbnwxfHx8fDE3NjQ4NTcwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professeur universitaire enseignant"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-[#354878]/10 px-4 py-2 rounded-full mb-6">
                <GraduationCap size={20} className="text-[#354878]" />
                <span className="text-[#354878]">Insertion professionnelle</span>
              </div>
              <h2 className="text-[#354878] mb-6">S'insérer dans le monde professionnel avec un doctorat en SIC</h2>
              <p className="text-[#61646b] mb-8 leading-relaxed">
                L'enjeu de l'insertion professionnelle sera abordé en séance plénière et en ateliers avec l'intervention de représentant.e.s des principales instances de la discipline.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#B9177B]/10 rounded-full flex items-center justify-center">
                    <Award size={24} className="text-[#B9177B]" />
                  </div>
                  <div>
                    <h3 className="text-[#354878] mb-2">Séance plénière : Qualification MCF</h3>
                    <p className="text-[#61646b] text-sm leading-relaxed">
                      Avec la participation de chercheurs membres de la 71ème section du CNU sur la qualification aux fonctions de maître·sse de conférences.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#6A9ECC]/10 rounded-full flex items-center justify-center">
                    <Lightbulb size={24} className="text-[#6A9ECC]" />
                  </div>
                  <div>
                    <h3 className="text-[#354878] mb-2">Atelier : Valorisation des compétences</h3>
                    <p className="text-[#61646b] text-sm leading-relaxed">
                      Valorisation des acquis professionnels au cours de la thèse et identification des compétences transférables vers les entreprises, services publics et associations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accompagnements - Cartes modernes */}
      <section className="px-6 lg:px-12 py-12 lg:py-20 bg-[#354878]/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#354878] mb-4">Accompagnements de la recherche doctorale</h2>
            <p className="text-[#61646b] text-lg">
              Des ateliers dédiés pour enrichir votre parcours doctoral
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {ateliers.map((atelier, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 duration-300"
              >
                <div 
                  className="p-8 text-white flex items-center justify-center"
                  style={{ backgroundColor: atelier.color }}
                >
                  {atelier.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-[#354878] mb-4">{atelier.title}</h3>
                  <p className="text-[#61646b] text-sm leading-relaxed">
                    {atelier.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#61646b] text-sm italic bg-white/50 backdrop-blur-sm rounded-lg p-4 inline-block">
              D'autres ateliers : communication internationale, gestion du stress, publication académique, terrains sensibles...
            </p>
          </div>
        </div>
      </section>

      {/* Arts • SIC • Culture - Section créative avec image */}
      <section className="relative px-6 lg:px-12 py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1760280825762-501279acee48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBjdWx0dXJlJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzY0ODU2ODYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Arts et culture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#B9177B]/95"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center gap-3 mb-6">
                <Palette size={40} className="text-white" />
                <h2 className="text-white">Les rencontres Arts • SIC • Culture</h2>
              </div>
              <p className="text-white text-lg leading-relaxed mb-6">
                Insérée depuis 2019 dans les congrès et les doctorales de la SFSIC, <span className="font-semibold">Arts•SIC•Culture</span> est une programmation culturelle articulée aux préoccupations de la recherche en sciences de l'information et de la communication.
              </p>
              <p className="text-white/90 leading-relaxed">
                Elle invite la communauté de recherche à discuter ses savoirs, expériences et représentations par la médiation artistique : performances, spectacles, expositions, jeux… Une approche qui contribue aux réflexions sur les modalités de la médiation scientifique et sur la valorisation de la recherche au-delà de la sphère académique.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-white mb-6">Formats créatifs acceptés</h3>
              <ul className="space-y-3">
                {['Installations artistiques', 'Expositions photographiques', 'Créations audio-visuelles', 'Performances', 'Jeux interactifs', 'Objets artistiques'].map((format, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{format}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Politique d'inclusion */}
      <section className="px-6 lg:px-12 py-12 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#6A9ECC]/10 to-[#354878]/10 rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#6A9ECC] to-[#354878] rounded-2xl flex items-center justify-center">
                <Users size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-[#354878] mb-2">Politique d'inclusion et de lutte contre les VSS</h2>
                <p className="text-[#61646b]">Un engagement fort pour un environnement respectueux et bienveillant</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#6A9ECC] flex-shrink-0 mt-1" />
                  <p className="text-[#61646b] leading-relaxed">
                    Attention soutenue à l'<span className="text-[#354878]">inclusion (numérique, physique, scientifique…)</span> pour tou·te·s les participant·e·s
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#6A9ECC] flex-shrink-0 mt-1" />
                  <p className="text-[#61646b] leading-relaxed">
                    Non-anonymat des évaluations et relecture vigilante des commentaires
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#B9177B] flex-shrink-0 mt-1" />
                  <p className="text-[#61646b] leading-relaxed">
                    Dispositifs de <span className="text-[#354878]">lutte contre les VSS</span> : outils d'information, numéro dédié
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#B9177B] flex-shrink-0 mt-1" />
                  <p className="text-[#61646b] leading-relaxed">
                    Politique de modération des sessions et respect des personnes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}