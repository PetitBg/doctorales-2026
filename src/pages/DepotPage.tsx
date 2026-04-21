import { useState } from 'react';
import { Upload, File, X, CheckCircle } from 'lucide-react';
import { eventsData } from '../data/events';

interface DepotPageProps {
  onNavigate: (page: string) => void;
}

export default function DepotPage({ onNavigate }: DepotPageProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    tags: '',
    associatedEvents: [] as number[]
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showEventsList, setShowEventsList] = useState(false);

  // Filter only Communication events (where participants present their work)
  const communicationEvents = eventsData.filter(event => event.activityType === 'Communication');

  // Group events by date for better organization
  const eventsByDate = communicationEvents.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {} as Record<string, typeof communicationEvents>);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleEventToggle = (eventId: number) => {
    setFormData(prev => ({
      ...prev,
      associatedEvents: prev.associatedEvents.includes(eventId)
        ? prev.associatedEvents.filter(id => id !== eventId)
        : [...prev.associatedEvents, eventId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dépôt:', { ...formData, file: selectedFile });
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedFile(null);
      setFormData({ title: '', category: '', description: '', tags: '', associatedEvents: [] });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="px-6 lg:px-12 py-8 lg:py-12 min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={48} />
          </div>
          <h2 className="text-[#354878] mb-4">Dépôt réussi !</h2>
          <p className="text-gray-700 mb-8">
            Votre document a été soumis avec succès. Il sera examiné par notre équipe avant publication.
          </p>
          <button
            onClick={() => onNavigate('profil')}
            className="bg-[#354878] text-white px-6 py-3 rounded-lg hover:bg-[#2C67A1] transition-colors"
          >
            Retour au profil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 lg:px-12 py-8 lg:py-12">
      <h1 className="text-[#354878] mb-8 lg:mb-12 text-center lg:text-left">
        Déposer un support
      </h1>

      <div className="max-w-3xl mx-auto">
        {/* Info Banner */}
        <div className="bg-blue-50 border-l-4 border-[#354878] p-6 rounded-lg mb-8">
          <h3 className="text-[#354878] mb-2">À propos du dépôt</h3>
          <p className="text-gray-700 text-sm">
            Vous pouvez déposer vos présentations, posters, articles ou tout autre support lié à vos 
            travaux de recherche. Tous les dépôts sont vérifiés avant publication pour garantir la 
            qualité de notre bibliothèque de ressources.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-8">
          {/* Title */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Titre du document *
            </label>
            <input
              type="text"
              id="title"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878]"
              placeholder="Ex: Présentation sur l'intelligence artificielle"
            />
          </div>

          {/* Category */}
          <div className="mb-6">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Catégorie *
            </label>
            <select
              id="category"
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878]"
            >
              <option value="">Sélectionnez une catégorie</option>
              <option value="presentation">Présentation</option>
              <option value="poster">Poster</option>
              <option value="article">Article</option>
              <option value="these">Thèse</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              required
              rows={5}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878] resize-none"
              placeholder="Décrivez brièvement votre document..."
            />
          </div>

          {/* Tags */}
          <div className="mb-6">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
              Mots-clés
            </label>
            <input
              type="text"
              id="tags"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878]"
              placeholder="Séparez les mots-clés par des virgules (ex: IA, éthique, recherche)"
            />
          </div>

          {/* Associated Events */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Propositions de l'agenda associées
            </label>
            <p className="text-xs text-gray-600 mb-3">
              Sélectionnez les événements auxquels ce support est lié
            </p>
            
            <div className="border border-gray-300 rounded-lg p-4 max-h-96 overflow-y-auto">
              {Object.keys(eventsByDate).sort().map(date => (
                <div key={date} className="mb-4 last:mb-0">
                  <h4 className="text-sm text-[#354878] mb-2">{date}</h4>
                  <div className="space-y-2 ml-2">
                    {eventsByDate[date].map(event => (
                      <label
                        key={event.id}
                        className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.associatedEvents.includes(event.id)}
                          onChange={() => handleEventToggle(event.id)}
                          className="mt-1 h-4 w-4 text-[#354878] border-gray-300 rounded focus:ring-[#354878]"
                        />
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{event.title}</p>
                          <p className="text-xs text-gray-500">
                            {event.time} • {event.location} • {event.activityType}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {formData.associatedEvents.length > 0 && (
              <div className="mt-3 flex items-center gap-2 text-sm text-[#354878]">
                <CheckCircle size={16} />
                <span>{formData.associatedEvents.length} événement(s) sélectionné(s)</span>
              </div>
            )}
          </div>

          {/* File Upload */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fichier *
            </label>
            
            {!selectedFile ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#354878] transition-colors cursor-pointer">
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.ppt,.pptx,.doc,.docx,.zip"
                  required
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                  <p className="text-gray-700 mb-2">
                    Cliquez pour sélectionner un fichier
                  </p>
                  <p className="text-sm text-gray-500">
                    PDF, PowerPoint, Word ou ZIP (max 50MB)
                  </p>
                </label>
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <File className="text-[#354878]" size={24} />
                  <div>
                    <p className="text-gray-700">{selectedFile.name}</p>
                    <p className="text-sm text-gray-500">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="text-red-600 hover:text-red-700 p-2"
                >
                  <X size={20} />
                </button>
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-[#354878] text-white py-3 rounded-lg hover:bg-[#2C67A1] transition-colors flex items-center justify-center gap-2"
            >
              <Upload size={20} />
              <span>Déposer le document</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('profil')}
              className="px-6 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Annuler
            </button>
          </div>
        </form>

        {/* Guidelines */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-[#354878] mb-4">Consignes de dépôt</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Les documents doivent être liés à vos travaux de recherche</li>
            <li>• Assurez-vous d'avoir les droits de publication</li>
            <li>• Utilisez des noms de fichiers explicites</li>
            <li>• Taille maximale : 50 MB par fichier</li>
            <li>• Les documents sont examinés sous 48h avant publication</li>
          </ul>
        </div>
      </div>
    </div>
  );
}