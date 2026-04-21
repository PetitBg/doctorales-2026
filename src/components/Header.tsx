import { Menu } from 'lucide-react';
import { motion } from 'motion/react';
import logoLesDoctorales from 'figma:asset/fa1f8a6e96292be95ac7e39476cd11d22651da9d.png';

interface HeaderProps {
  onMenuClick: () => void;
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export default function Header({ onMenuClick, onNavigate, currentPage }: HeaderProps) {
  const menuItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'programme', label: 'Programme' },
    { id: 'ateliers', label: 'Ateliers' },
    { id: 'arts-sic-culture', label: 'Arts Sic Culture' },
    { id: 'inclusion-vssh', label: 'Inclusion & VSSH' },
    { id: 'preparer-visite', label: 'Préparer sa venue' },
    { id: 'contact', label: 'Contact' },
    { id: 'comite-scientifique', label: 'Comité scientifique' },
  ];

  return (
    <header className="sticky top-0 bg-white z-30 border-b border-gray-200" role="banner">
      <div className="flex items-center justify-between pl-12 pr-10 py-4">
        {/* Mobile: Menu Burger */}
        <motion.button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-[#6A9ECC]/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#354878] focus:ring-offset-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Ouvrir le menu de navigation"
          aria-expanded="false"
        >
          <Menu size={24} className="text-[#354878]" aria-hidden="true" />
        </motion.button>
        
        {/* Logo */}
        <motion.button 
          onClick={() => onNavigate('home')} 
          className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#354878] focus:ring-offset-2 rounded"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Retour à l'accueil"
        >
          <img src={logoLesDoctorales} alt="Les Doctorales - Page d'accueil" className="h-12" />
        </motion.button>
        
        {/* Desktop: Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Navigation principale">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3 py-2 rounded-[10px] text-sm font-medium transition-all ${
                currentPage === item.id
                  ? 'text-white bg-[#354878]'
                  : 'text-[#354878] hover:bg-[#6A9ECC]/10'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              aria-current={currentPage === item.id ? 'page' : undefined}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Mobile: Spacer pour équilibrer */}
        <div className="lg:hidden w-10" aria-hidden="true"></div>
      </div>
    </header>
  );
}