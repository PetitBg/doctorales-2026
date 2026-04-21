import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Votre message a été envoyé avec succès !');
  };

  return (
    <div className="px-6 lg:px-12 py-8 lg:py-12">
      <h1 className="text-[#354878] mb-8 lg:mb-12 text-center lg:text-left">
        Contact & Commission VSS
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
        {/* Contact Form */}
        <div>
          <h2 className="text-[#354878] mb-6">Nous contacter</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878]"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878]"
                placeholder="votre.email@exemple.fr"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Sujet *
              </label>
              <select
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878]"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="inscription">Inscription aux événements</option>
                <option value="vss">Question Commission VSS</option>
                <option value="info">Demande d'information</option>
                <option value="support">Support technique</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878] resize-none"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#354878] text-white py-3 rounded-lg hover:bg-[#2C67A1] transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              <span>Envoyer le message</span>
            </button>
          </form>
        </div>

        {/* Contact Info & VSS */}
        <div className="space-y-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-[#354878] mb-6">Informations de contact</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Mail className="text-[#354878] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium text-[#354878] mb-1">Email</p>
                  <a href="mailto:contact@lesdoctorales.fr" className="text-gray-700 hover:text-[#2C67A1]">
                    contact@lesdoctorales.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Phone className="text-[#354878] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium text-[#354878] mb-1">Téléphone</p>
                  <a href="tel:+33123456789" className="text-gray-700 hover:text-[#2C67A1]">
                    +33 1 23 45 67 89
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Lundi - Vendredi : 9h - 17h</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <MapPin className="text-[#354878] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium text-[#354878] mb-1">Adresse</p>
                  <p className="text-gray-700">
                    Campus Condorcet<br />
                    Place du Front Populaire<br />
                    93322 Aubervilliers, France
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* VSS Commission */}
          <div className="bg-[#B9177B] text-white p-6 rounded-lg">
            <h2 className="mb-4">Comité contre les VSS</h2>
            <p className="mb-4">
              Que vous soyez victime ou témoins, nous sommes là pour vous accompagner.
            </p>
            <div className="space-y-3 text-sm">
              <p>
                <strong>Email dédié :</strong><br />
                <a href="mailto:vss@sfsic.fr" className="hover:text-white/80">
                  vss@sfsic.fr
                </a>
              </p>
              <p>
                <strong>Écoute confidentielle</strong><br />
                Nous sommes disponibles pour vous accompagner<br />
                dans le respect de votre confidentialité
              </p>
            </div>
            <button className="mt-6 w-full bg-white text-[#B9177B] py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Nous contacter
            </button>
          </div>

          {/* Page VSS Link */}
          <div className="border border-gray-300 p-6 rounded-lg">
            <h3 className="text-[#354878] mb-3">Page dédiée VSS</h3>
            <p className="text-gray-700 mb-4">
              Découvrez toutes les ressources et services proposés par le Comité contre les VSS.
            </p>
            <button 
              onClick={() => console.log('Navigate to VSS page')}
              className="text-[#354878] hover:text-[#2C67A1] underline"
            >
              Accéder à la page VSS →
            </button>
          </div>
        </div>
      </div>

      {/* Comités d'organisation */}
      <div className="mt-16 max-w-6xl">
        <h2 className="text-[#354878] mb-8 text-center">Comité d'organisation des Doctorales de la SFSIC 2026</h2>
        
        <div className="space-y-8">
          {/* Commission 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
            <h3 className="text-[#354878] mb-4">1/ Commission Logistique et Accueil</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="font-medium text-gray-700 mb-2">Membres</p>
                <ul className="text-gray-600 space-y-1">
                  <li>Bastien Louessard</li>
                  <li>Marie-Eva Lesaunier</li>
                  <li>Maria Doss</li>
                  <li>Etienne Hien</li>
                  <li>Joséphine Desfougères</li>
                  <li>Marie Tremblay (comité VSS)</li>
                  <li>Aliénor Petiot (comité VSS)</li>
                  <li>Alexie Geers (comité VSS)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Missions</p>
                <p className="text-gray-600">
                  Accueil, point d'information, badges, goodies, réservation salles, équipement informatique, espaces de loisir, hébergement, restauration, prévention des VSS et risques psychosociaux
                </p>
              </div>
            </div>
          </div>

          {/* Commission 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
            <h3 className="text-[#354878] mb-4">2/ Commission Scientifique</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="font-medium text-gray-700 mb-2">Membres</p>
                <ul className="text-gray-600 space-y-1">
                  <li>Emmanuelle Savignac</li>
                  <li>Hélène Breda (comité VSS)</li>
                  <li>Mikaël Gléonnec</li>
                  <li>Bastien Louessard</li>
                  <li>Jacob Matthews</li>
                  <li>Rachel Fabre (comité VSS)</li>
                  <li>Ivan Chupin</li>
                  <li>Geneviève Vidal</li>
                  <li>Roger Bautier</li>
                  <li>Vincent Brulois</li>
                  <li>Pascal Bué</li>
                  <li>Inès Oudadesse</li>
                  <li>Nathalie Boucher-Petrovic</li>
                  <li>Benjamin Barbier</li>
                  <li>Abdelfettah Benchenna</li>
                  <li>Amaia Errecart</li>
                  <li>Asmaa Azizi</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Missions</p>
                <p className="text-gray-600">
                  Rédaction de l'AAC, évaluations doubles aveugles, posters (centralisation, impression, affichage), élaboration programme, modération ateliers, suivi des intervenant·e·s, éthique de la recherche, ouverture scientifique du colloque.
                </p>
              </div>
            </div>
          </div>

          {/* Commission 3 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
            <h3 className="text-[#354878] mb-4">3/ Commission Culture</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="font-medium text-gray-700 mb-2">Membres</p>
                <ul className="text-gray-600 space-y-1">
                  <li>Alix Bénistant</li>
                  <li>Johan Boittiaux</li>
                  <li>Olivier Koch</li>
                  <li>Lynda Abjean</li>
                  <li>Maria Doss</li>
                  <li>Aymée Nakasato</li>
                  <li>Ambre Rabin</li>
                  <li>Sam Famil Rouhani</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Missions</p>
                <p className="text-gray-600">
                  Programmation culturelle, recherche de partenaires médiation culturelle, valorisation, atelier sur les risques psychosociaux et thématiques du LabSIC. Lien avec Arts Sic Culture. Événements ponctuels : accueil, animation soirée 1 (projection ou concert ou débat avec journalistes) et animation dîner. Événements continus (1 expo avec M CRH)
                </p>
              </div>
            </div>
          </div>

          {/* Commission 4 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
            <h3 className="text-[#354878] mb-4">4/ Commission Communication</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="font-medium text-gray-700 mb-2">Membres</p>
                <ul className="text-gray-600 space-y-1">
                  <li>Pascal Bué</li>
                  <li>Valentin Blondiau</li>
                  <li>Timothy Bourbotte</li>
                  <li>Estrella Rojas</li>
                  <li>Jacob Matthews</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Missions</p>
                <p className="text-gray-600">
                  Plan de communication, coordination réalisation visuels et supports graphiques, captation vidéo/photos, publications en ligne
                </p>
              </div>
            </div>
          </div>

          {/* Commission 5 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
            <h3 className="text-[#354878] mb-4">5/ Commission Finances et Partenariats</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="font-medium text-gray-700 mb-2">Membres</p>
                <ul className="text-gray-600 space-y-1">
                  <li>Benoît Berthou</li>
                  <li>Oriane Deseilligny</li>
                  <li>Lynda Abjean</li>
                  <li>Natacha Ernwein</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Missions</p>
                <p className="text-gray-600">
                  Élaboration et suivi du budget prévisionnel, recherche de co-financements (CR, MSH PN, GIS, Plaine commune, etc.), suivi des conventions de partenariat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}