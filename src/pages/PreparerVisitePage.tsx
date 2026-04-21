import { MapPin, Train, Bus, Car, Utensils, Hotel, Info } from 'lucide-react';

interface PreparerVisitePageProps {
  onNavigate: (page: string) => void;
}

export default function PreparerVisitePage({ onNavigate }: PreparerVisitePageProps) {
  return (
    <div className="px-6 lg:px-12 py-8 lg:py-12">
      <h1 className="text-[#354878] mb-8 lg:mb-12 text-center lg:text-left">
        Préparer sa visite
      </h1>

      {/* Map Section */}
      <section className="mb-12">
        <h2 className="text-[#354878] mb-6">Localisation</h2>
        <div className="bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center relative">
          <img 
            src="https://images.unsplash.com/photo-1719342399567-4b31027198b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0ODQzNTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Campus universitaire"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <MapPin className="text-[#354878] mx-auto mb-2" size={32} />
              <p className="font-medium text-[#354878]">Campus Condorcet</p>
              <p className="text-sm text-gray-600">8, cours des Humanités</p>
              <p className="text-sm text-gray-600">93322 Aubervilliers CEDEX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="mb-12">
        <h2 className="text-[#354878] mb-6">Comment venir ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* En train */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#354878] text-white rounded-full">
                <Train size={24} />
              </div>
              <h3 className="text-[#354878]">En train</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Gares les plus proches :
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Gare du Nord</strong> : 25 minutes via RER B</li>
              <li>• <strong>Gare Saint-Lazare</strong> : 20 minutes via ligne 12</li>
            </ul>
          </div>

          {/* En métro/bus */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#2C67A1] text-white rounded-full">
                <Bus size={24} />
              </div>
              <h3 className="text-[#354878]">En transport en commun</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Métro 12</strong> : station Front Populaire</li>
              <li>• <strong>RER B</strong> : station La Plaine - Stade de France</li>
              <li>• <strong>Bus</strong> : 139, 153, 239, 302, 512</li>
            </ul>
          </div>

          {/* En voiture */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#B9177B] text-white rounded-full">
                <Car size={24} />
              </div>
              <h3 className="text-[#354878]">En voiture</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Parking visiteurs disponible
            </p>
            <p className="text-sm text-gray-600">
              Gratuit pour les participant·e·s aux doctorales (sur présentation de la confirmation)
            </p>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="mb-12">
        <h2 className="text-[#354878] mb-6">Informations pratiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Restaurants */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Utensils className="text-[#354878]" size={24} />
              <h3 className="text-[#354878]">Restauration</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Restaurant universitaire sur place</li>
              <li>• Cafétéria ouverte de 8h à 18h</li>
              <li>• Plusieurs restaurants à proximité</li>
              <li>• Distributeurs automatiques disponibles</li>
            </ul>
          </div>

          {/* Accommodation */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Hotel className="text-[#354878]" size={24} />
              <h3 className="text-[#354878]">Hébergement</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Hôtel Ibis - 500m (tarif préférentiel)</li>
              <li>• Résidence étudiante (séjours courts)</li>
              <li>• Plusieurs hôtels dans un rayon de 2km</li>
              <li>• Contactez-nous pour les tarifs partenaires</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section>
        <div className="bg-blue-50 border-l-4 border-[#354878] rounded-lg p-6">
          <div className="flex items-start gap-4">
            <Info className="text-[#354878] flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-[#354878] mb-3">À savoir avant votre visite</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Inscription obligatoire pour accéder aux événements</li>
                <li>• Prévoir une pièce d'identité pour l'accès au campus</li>
                <li>• WiFi gratuit disponible sur tout le campus</li>
                <li>• Accès PMR sur l'ensemble des bâtiments</li>
                <li>• En cas de question, contactez l'accueil au 01 23 45 67 89</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Plan du campus */}
      <section className="mt-12">
        <h2 className="text-[#354878] mb-6">Plan du campus</h2>
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-600 mb-4">Plan du campus disponible à l'accueil</p>
          <button className="bg-[#2C67A1] text-white px-6 py-3 rounded-lg hover:bg-[#354878] transition-colors">
            Accéder au plan interactif
          </button>
        </div>
      </section>
    </div>
  );
}