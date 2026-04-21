import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import LogotypeOfficielUniversiteUSorbonneParisNord2Scaled from '../imports/LogotypeOfficielUniversiteUSorbonneParisNord2Scaled1';
import LogoSfsicJpg from '../imports/LogoSfsicJpg1';
import LogoLabsic300X from '../imports/LogoLabsic300X1351';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#354878] text-white mt-auto" role="contentinfo">
      {/* Main Footer Content */}
      <div className="px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Les Doctorales</h3>
            <p className="text-sm text-gray-200 leading-relaxed mb-4">
              Un espace d'échanges et de rencontres pour les jeunes chercheur·euse·s en SIC.
            </p>
            <p className="text-sm text-gray-200 leading-relaxed">
              Favoriser le dialogue interdisciplinaire et la diffusion des travaux de recherche.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Liens de navigation du pied de page">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <motion.button
                  onClick={() => onNavigate('home')}
                  className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#354878] rounded font-semibold"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Accueil
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => onNavigate('programme')}
                  className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#354878] rounded font-semibold"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Programme
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => onNavigate('ateliers')}
                  className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#354878] rounded font-semibold"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ateliers
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => onNavigate('preparer-visite')}
                  className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#354878] rounded font-semibold"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Préparer sa venue
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#354878] rounded font-semibold"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact
                </motion.button>
              </li>
            </ul>
          </nav>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-200">
                    Campus Condorcet<br />
                    8, cours des Humanités<br />
                    93322 Aubervilliers CEDEX
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} className="flex-shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:contact@lesdoctorales.fr"
                    className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#354878] rounded"
                    aria-label="Envoyer un email à contact@lesdoctorales.fr"
                  >
                    contact@lesdoctorales.fr
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} className="flex-shrink-0" aria-hidden="true" />
                  <a
                    href="tel:+33123456789"
                    className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#354878] rounded"
                    aria-label="Appeler le +33 1 23 45 67 89"
                  >
                    +33 1 23 45 67 89
                  </a>
                </li>
              </ul>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-200 mb-3">
              Restez informé·e·s des prochaines éditions
            </p>
            <form className="flex gap-2" aria-label="Inscription à la newsletter">
              <label htmlFor="newsletter-email" className="sr-only">
                Adresse email pour la newsletter
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Votre email"
                className="flex-1 px-3 py-2 rounded text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6A9ECC]"
                aria-required="true"
              />
              <motion.button 
                type="submit"
                className="bg-[#6A9ECC] hover:bg-[#B9177B] px-4 py-2 rounded text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#354878]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="S'inscrire à la newsletter"
              >
                OK
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Partners Logos Section */}
      <div className="border-t border-white/10">
        <div className="px-12 py-8">
          <h3 className="text-lg font-semibold text-center mb-6">Structures organisatrices</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12" role="list" aria-label="Logos des partenaires">
            {/* Université Sorbonne Paris Nord */}
            <motion.div 
              className="w-40 lg:w-48 h-16 lg:h-20 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              role="listitem"
            >
              <div className="w-full h-full">
                <LogotypeOfficielUniversiteUSorbonneParisNord2Scaled />
              </div>
            </motion.div>
            
            {/* SFSIC */}
            <motion.div 
              className="w-24 lg:w-28 h-16 lg:h-20 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              role="listitem"
            >
              <div className="w-full h-full">
                <LogoSfsicJpg />
              </div>
            </motion.div>
            
            {/* LabSIC */}
            <motion.div 
              className="w-32 lg:w-40 h-16 lg:h-20 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              role="listitem"
            >
              <div className="w-full h-full">
                <LogoLabsic300X />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>
              © {currentYear} Les Doctorales. Tous droits réservés.
            </p>
            <nav className="flex gap-6" aria-label="Liens légaux">
              <motion.button
                onClick={() => onNavigate('about')}
                className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#354878] rounded"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                À propos
              </motion.button>
              <motion.button 
                className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#354878] rounded"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Mentions légales
              </motion.button>
              <motion.button 
                className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#354878] rounded"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Politique de confidentialité
              </motion.button>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}