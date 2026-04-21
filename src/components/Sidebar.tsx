import { X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Sidebar({ isOpen, onClose, currentPage, onNavigate }: SidebarProps) {
  const menuItems = [
    { id: 'home', label: 'Accueil', icon: '🏠' },
    { id: 'programme', label: 'Programme', icon: '📅' },
    { id: 'ateliers', label: 'Ateliers', icon: '🎓' },
    { id: 'arts-sic-culture', label: 'Arts Sic Culture', icon: '🎨' },
    { id: 'inclusion-vssh', label: 'Inclusion et lutte contre les VSSH', icon: '🤝' },
    { id: 'preparer-visite', label: 'Préparer sa venue', icon: '🗺️' },
    { id: 'contact', label: 'Contact', icon: '✉️' },
    { id: 'comite-scientifique', label: 'Comité scientifique', icon: '👥' },
  ];

  const handleNavigate = (pageId: string) => {
    onNavigate(pageId);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent, pageId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavigate(pageId);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Sidebar */}
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-[#354878] via-[#2C67A1] to-[#354878] text-white z-50 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
          >
            <div className="p-6 h-full flex flex-col">
              {/* Header avec bouton fermer */}
              <div className="flex items-center justify-between mb-8">
                <motion.h2 
                  className="text-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Menu
                </motion.h2>
                <motion.button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#354878]"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Fermer le menu"
                >
                  <X size={28} aria-hidden="true" />
                </motion.button>
              </div>
              
              {/* Navigation */}
              <nav className="flex-1 space-y-2" role="navigation" aria-label="Navigation du menu latéral">
                {menuItems.map((item, index) => {
                  const isActive = currentPage === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      onKeyDown={(e) => handleKeyDown(e, item.id)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between group ${
                        isActive 
                          ? 'bg-white text-[#354878] shadow-lg'
                          : 'hover:bg-white/10 text-white'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                        <span className="text-base">{item.label}</span>
                      </div>
                      <ChevronRight 
                        size={20} 
                        className={`transition-transform ${
                          isActive ? 'text-[#B9177B]' : 'text-white/50 group-hover:text-white'
                        }`}
                        aria-hidden="true"
                      />
                    </motion.button>
                  );
                })}
              </nav>

              {/* Footer du menu */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6 border-t border-white/20"
              >
                <p className="text-white/70 text-sm text-center">
                  Les Doctorales 2026
                  <br />
                  <span className="text-white/90">8, 9 et 10 juin</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}