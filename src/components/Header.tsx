import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinkClass = isScrolled
    ? "text-gray-800 hover:text-[var(--primary)] font-medium transition-colors"
    : "text-white hover:text-[var(--accent)] font-medium transition-colors";

  const logoTextClass = isScrolled
    ? "ml-2 text-xl font-bold text-[var(--primary)] transition-colors"
    : "ml-2 text-xl font-bold text-white transition-colors";

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://mocha-cdn.com/019649ea-53a4-7b81-9ca5-c59009f651ac/logo-approuvé.png" alt="Ocean Security Logo" className="h-12 w-12" />
            <span className={logoTextClass}>OCEAN SECURITY</span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className={navLinkClass}>{t('nav.home')}</a>
            <a href="#services" className={navLinkClass}>{t('nav.services')}</a>
            <a href="#about" className={navLinkClass}>{t('nav.about')}</a>
            <a href="#team" className={navLinkClass}>{t('nav.team')}</a>
            <a href="#gallery" className={navLinkClass}>{t('nav.portfolio')}</a>
            <a href="#contact" className={navLinkClass}>{t('nav.contact')}</a>
            <a
              href="https://waveiovi.github.io/ocean_security_platform/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isScrolled ? "text-[var(--primary)]" : "text-[var(--accent)]"} hover:opacity-80 font-bold transition-colors flex items-center`}
            >
              {t('nav.platform')}
              <ChevronDown className="ml-1 -rotate-90" size={16} />
            </a>

            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-3 py-1 rounded-full border ${isScrolled ? 'border-gray-200 text-gray-700' : 'border-white/30 text-white'} hover:bg-white/10 transition-all font-bold text-sm`}
            >
              <Globe size={14} />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
          </div>

          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary">{t('nav.get_quote')}</a>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-2 py-1 rounded-md border ${isScrolled ? 'border-gray-200 text-gray-700' : 'border-white/30 text-white'}`}
            >
              <span className="text-xs font-bold">{i18n.language.toUpperCase()}</span>
            </button>
            <button
              className={`${isScrolled ? "text-gray-800" : "text-white"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-4 animate-fade-up border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-800 hover:text-[var(--primary)] py-2 font-medium border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</a>
            <a href="#services" className="text-gray-800 hover:text-[var(--primary)] py-2 font-medium border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</a>
            <a href="#about" className="text-gray-800 hover:text-[var(--primary)] py-2 font-medium border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a>
            <a href="#team" className="text-gray-800 hover:text-[var(--primary)] py-2 font-medium border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>{t('nav.team')}</a>
            <a href="#gallery" className="text-gray-800 hover:text-[var(--primary)] py-2 font-medium border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>{t('nav.portfolio')}</a>
            <a href="#contact" className="text-gray-800 hover:text-[var(--primary)] py-2 font-medium border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a>
            <a
              href="https://waveiovi.github.io/ocean_security_platform/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] py-2 font-bold border-b border-gray-50 flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.platform')}
              <ChevronDown className="-rotate-90" size={16} />
            </a>
            <a href="#contact" className="btn-primary inline-block text-center mt-4" onClick={() => setIsMenuOpen(false)}>{t('nav.get_quote')}</a>
          </div>
        </div>
      )}
    </header>
  );
}
