import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--dark)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img src="https://mocha-cdn.com/019649ea-53a4-7b81-9ca5-c59009f651ac/logo-approuvé.png" alt="Ocean Security Logo" className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold">OCEAN SECURITY</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              {t('services.subtitle')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 underline underline-offset-8 decoration-[var(--primary)]">{t('contact.info_title')}</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">{t('nav.home')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('nav.services')}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">{t('nav.team')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 underline underline-offset-8 decoration-[var(--primary)]">{t('nav.services')}</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('services.items.extinguishers.title')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('services.items.alarms.title')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('services.items.suppression.title')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('services.items.maintenance.title')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('services.items.ppe.title')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('services.items.training.title')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 underline underline-offset-8 decoration-[var(--primary)]">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li>El Ain Road KM 04 3000 Sfax, Tunisia</li>
              <li>contact@oceansecurity.tn</li>
              <li>+216 28 85 85 55</li>
              <li className="text-[var(--primary)] font-bold">{t('footer.emergency')}: +216 29 30 88 50</li>
              <li>{t('contact.hours_desc')}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs tracking-widest uppercase gap-4">
          <p>&copy; {currentYear} Ocean Security. {t('footer.rights')}</p>
          <p className="font-bold border-l-0 md:border-l md:pl-4 border-white/10">{t('footer.dev_by')}</p>
        </div>
      </div>
    </footer>
  );
}
