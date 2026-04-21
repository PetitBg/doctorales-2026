import { useState } from 'react';
import { User, Mail, Phone, Building, BookOpen, Settings, LogOut, Upload } from 'lucide-react';
import { eventsData } from '../data/events';

interface ProfilPageProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export default function ProfilPage({ onNavigate, onLogout }: ProfilPageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Sophie Martin',
    email: 'sophie.martin@universite.fr',
    phone: '+33 6 12 34 56 78',
    university: 'Université Paris-Saclay',
    domain: 'Sciences',
    specialization: 'Intelligence Artificielle et Éthique',
    year: '3ème année',
    bio: 'Doctorante passionnée par les questions d\'éthique dans l\'IA.',
    image: 'https://images.unsplash.com/photo-1726654368732-c1c21cadb4b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHJlc2VhcmNoZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQ5MTQ2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  });

  // Show only Communication events about AI where the user is a participant
  const myEvents = eventsData
    .filter(event => 
      event.activityType === 'Communication' && 
      (event.title.toLowerCase().includes('ia') || 
       event.title.toLowerCase().includes('intelligence artificielle') ||
       event.title.toLowerCase().includes('algorithme'))
    )
    .slice(0, 1) // Show only 1 communication
    .map(event => ({
      id: event.id,
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      status: 'Participant'
    }));

  const handleSave = () => {
    console.log('Profil sauvegardé:', profile);
    setIsEditing(false);
  };

  const handleLogout = () => {
    onLogout();
    onNavigate('home');
  };

  return (
    <div className="px-6 lg:px-12 py-8 lg:py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[#354878]">Mon Profil</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
        >
          <LogOut size={20} />
          <span>Déconnexion</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-gray-200"
                />
                {isEditing && (
                  <button className="absolute bottom-4 right-0 bg-[#2C67A1] text-white p-2 rounded-full hover:bg-[#354878]">
                    <Upload size={16} />
                  </button>
                )}
              </div>
              <h2 className="text-[#354878] mb-1">{profile.name}</h2>
              <p className="text-gray-600">{profile.specialization}</p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-700">
                <Building size={16} className="text-[#354878]" />
                <span>{profile.university}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <BookOpen size={16} className="text-[#354878]" />
                <span>{profile.domain} - {profile.year}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="w-full flex items-center justify-center gap-2 bg-[#354878] text-white py-3 rounded-lg hover:bg-[#2C67A1] transition-colors"
              >
                <Settings size={20} />
                <span>{isEditing ? 'Annuler' : 'Modifier le profil'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Personal Info */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-[#354878] mb-6">Informations personnelles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878]"
                  />
                ) : (
                  <p className="text-gray-700">{profile.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878]"
                  />
                ) : (
                  <p className="text-gray-700">{profile.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878]"
                  />
                ) : (
                  <p className="text-gray-700">{profile.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Université
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.university}
                    onChange={(e) => setProfile({ ...profile, university: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878]"
                  />
                ) : (
                  <p className="text-gray-700">{profile.university}</p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Biographie
              </label>
              {isEditing ? (
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878] resize-none"
                />
              ) : (
                <p className="text-gray-700">{profile.bio}</p>
              )}
            </div>

            {isEditing && (
              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleSave}
                  className="flex-1 bg-[#354878] text-white py-3 rounded-lg hover:bg-[#2C67A1] transition-colors"
                >
                  Enregistrer
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Annuler
                </button>
              </div>
            )}
          </div>

          {/* My Events */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-[#354878] mb-6">Mes événements</h2>
            
            <div className="space-y-4">
              {myEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="text-[#354878] mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.date}</p>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {event.status}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('agenda')}
              className="mt-6 w-full bg-[#2C67A1] text-white py-3 rounded-lg hover:bg-[#354878] transition-colors"
            >
              Voir tous les événements
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-[#354878] mb-6">Actions rapides</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => onNavigate('depot')}
                className="p-4 border-2 border-[#354878] text-[#354878] rounded-lg hover:bg-[#354878] hover:text-white transition-colors"
              >
                Déposer un support
              </button>
              <button
                onClick={() => onNavigate('ressources')}
                className="p-4 border-2 border-[#B9177B] text-[#B9177B] rounded-lg hover:bg-[#B9177B] hover:text-white transition-colors"
              >
                Supprimer un document
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}