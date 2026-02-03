import { Bell, GraduationCap, HardHat, Paintbrush, Shield, ShieldCheck, Star, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 'extinguishers',
      icon: <Shield size={40} className="mb-4" />
    },
    {
      id: 'alarms',
      icon: <Bell size={40} className="mb-4" />
    },
    {
      id: 'suppression',
      icon: <Star size={40} className="mb-4" />
    },
    {
      id: 'maintenance',
      icon: <Wrench size={40} className="mb-4" />
    },
    {
      id: 'ppe',
      icon: <HardHat size={40} className="mb-4" />
    },
    {
      id: 'training',
      icon: <GraduationCap size={40} className="mb-4" />
    },
    {
      id: 'customization',
      icon: <Paintbrush size={40} className="mb-4" />
    },
    {
      id: 'specialized',
      icon: <ShieldCheck size={40} className="mb-4" />
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">
            {t('services.subtitle')}
          </p>
          <p className="text-center text-lg font-black text-[var(--accent)] italic">
            "{t('services.motto')}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card group hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 animate-fade-up stagger-${(index % 4) + 1}`}
            >
              <div className="relative mb-6">
                <div className="text-[var(--primary)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {service.icon}
                </div>
                <div className="absolute -top-4 -right-4 h-12 w-12 rounded-2xl bg-[var(--primary)]/5 opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-black mb-3 text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">{t(`services.items.${service.id}.title`)}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{t(`services.items.${service.id}.desc`)}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-100 p-8 rounded-3xl shadow-inner border border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
            <h3 className="text-2xl md:text-3xl font-black text-[var(--secondary)] text-center md:text-left">{t('services.banner_title')}</h3>
            <div className="bg-[var(--accent)] text-black px-6 py-3 rounded-2xl text-sm font-black tracking-tight transform -rotate-1 shadow-lg">
              "{t('services.banner_quote')}"
            </div>
          </div>
          <p className="text-gray-500 mb-8 leading-relaxed text-lg italic">
            {t('services.banner_text_1')}
          </p>
          <div className="text-center">
            <a href="#contact" className="btn-primary inline-flex items-center group px-10">
              {t('services.banner_cta')}
              <div className="ml-3 h-2 w-2 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
