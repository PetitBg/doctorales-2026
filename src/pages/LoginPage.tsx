import { useState } from 'react';
import { Lock, Mail } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: string) => void;
  onLogin: () => void;
}

export default function LoginPage({ onNavigate, onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Simulate login
    onLogin();
    onNavigate('profil');
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-[#354878] mb-4">Connexion</h1>
          <p className="text-gray-600">
            Accédez à votre espace personnel
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878]"
                  placeholder="votre.email@exemple.fr"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354878]"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#354878] border-gray-300 rounded focus:ring-[#354878]"
                />
                <span className="ml-2 text-gray-700">Se souvenir de moi</span>
              </label>
              <a href="#" className="text-[#354878] hover:text-[#2C67A1]">
                Mot de passe oublié ?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#354878] text-white py-3 rounded-lg hover:bg-[#2C67A1] transition-colors"
            >
              Se connecter
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Pas encore de compte ?{' '}
            <a href="#" className="text-[#354878] hover:text-[#2C67A1] font-medium">
              S'inscrire
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('home')}
            className="text-[#354878] hover:text-[#2C67A1] underline"
          >
            ← Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}
