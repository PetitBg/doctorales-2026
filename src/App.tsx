import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProgrammePage from './pages/ProgrammePage';
import AteliersPage from './pages/AteliersPage';
import ArtsSicCulturePage from './pages/ArtsSicCulturePage';
import InclusionVSSHPage from './pages/InclusionVSSHPage';
import ComiteScientifiquePage from './pages/ComiteScientifiquePage';
import DoctorantsPage from './pages/DoctorantsPage';
import FicheDoctorantPage from './pages/FicheDoctorantPage';
import AgendaPage from './pages/AgendaPage';
import FicheInterventionPage from './pages/FicheInterventionPage';
import PreparerVisitePage from './pages/PreparerVisitePage';
import RessourcesPage from './pages/RessourcesPage';
import ReplayPage from './pages/ReplayPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import ProfilPage from './pages/ProfilPage';
import DepotPage from './pages/DepotPage';
import AdminPage from './pages/AdminPage';


type PageId = 'home' | 'programme' | 'ateliers' | 'arts-sic-culture' | 'inclusion-vssh' | 
              'comite-scientifique' | 'doctorants' | 'fiche-doctorant' | 'agenda' | 'fiche-intervention' | 
              'preparer-visite' | 'ressources' | 'replay' | 'contact' | 'about' | 'login' | 'profil' | 'depot' | 'admin';

interface PageParams {
  id?: number;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [pageParams, setPageParams] = useState<PageParams>({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Définir la langue du document
  useEffect(() => {
    document.documentElement.lang = 'fr';
  }, []);

  useEffect(() => {
  const handleHashChange = () => {
    if (window.location.hash === '#admin') {
      setCurrentPage('admin');
    }
  };

  // Vérifier au chargement initial
  if (window.location.hash === '#admin') {
    setCurrentPage('admin');
  }

  window.addEventListener('hashchange', handleHashChange);
  return () => window.removeEventListener('hashchange', handleHashChange);
}, []);
  
  

  const handleNavigate = (page: string, params?: PageParams) => {
  if (page !== 'admin') {
    window.location.hash = '';
  }
  setCurrentPage(page as PageId);
  setPageParams(params || {});
  window.scrollTo(0, 0);
};

  const handleProfileClick = () => {
    if (isLoggedIn) {
      handleNavigate('profil');
    } else {
      handleNavigate('login');
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      
      case 'programme':
        return <ProgrammePage onNavigate={handleNavigate} />;
      
      case 'ateliers':
        return <AteliersPage onNavigate={handleNavigate} />;
      
      case 'arts-sic-culture':
        return <ArtsSicCulturePage onNavigate={handleNavigate} />;
      
      case 'inclusion-vssh':
        return <InclusionVSSHPage onNavigate={handleNavigate} />;
      
      case 'comite-scientifique':
        return <ComiteScientifiquePage onNavigate={handleNavigate} />;
      
      case 'doctorants':
        return <DoctorantsPage onNavigate={handleNavigate} />;
      
      case 'fiche-doctorant':
        return <FicheDoctorantPage onNavigate={handleNavigate} doctorantId={pageParams.id || 1} />;
      
      case 'agenda':
        return <AgendaPage onNavigate={handleNavigate} />;
      
      case 'fiche-intervention':
        return <FicheInterventionPage onNavigate={handleNavigate} interventionId={pageParams.id || 1} />;
      
      case 'preparer-visite':
        return <PreparerVisitePage onNavigate={handleNavigate} />;
      
      case 'ressources':
        return <RessourcesPage onNavigate={handleNavigate} />;
      
      case 'replay':
        return <ReplayPage onNavigate={handleNavigate} resourceId={pageParams.id || 2} />;
      
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      
      case 'login':
        return <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
      
      case 'profil':
        return <ProfilPage onNavigate={handleNavigate} onLogout={handleLogout} />;
      
      case 'depot':
        return <DepotPage onNavigate={handleNavigate} />;

        case 'admin':
         return <AdminPage />;
      
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#354878] focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Aller au contenu principal
      </a>

      {/* Sidebar Menu */}
      <Sidebar 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto min-h-screen bg-white shadow-lg">
        {/* Header */}
        <Header 
          onMenuClick={() => setIsMenuOpen(true)}
          onNavigate={handleNavigate}
          currentPage={currentPage}
        />

        {/* Page Content */}
        <main id="main-content">
          {renderPage()}
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}