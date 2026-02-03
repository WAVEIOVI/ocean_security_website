import { Check, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assest/video/5930437-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="red-overlay opacity-75"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
              <Shield size={16} className="mr-2 text-[var(--accent)]" />
              <span className="text-sm font-medium tracking-wide uppercase">{t('hero.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6">
              {t('hero.title')} <br />
              <span className="text-[var(--primary)]">{t('hero.title_accent')}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary px-8 py-4 text-lg">
                {t('hero.cta_quote')}
              </a>
              <a href="#services" className="px-8 py-4 rounded-md border border-white/30 hover:bg-white/10 transition-all font-semibold flex items-center">
                {t('hero.cta_services')}
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-6 text-sm md:text-base">
              <div className="flex items-center bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/5">
                <Check size={18} className="mr-2 text-[var(--accent)]" />
                <span>{t('hero.feature_1')}</span>
              </div>
              <div className="flex items-center bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/5">
                <Check size={18} className="mr-2 text-[var(--accent)]" />
                <span>{t('hero.feature_2')}</span>
              </div>
              <div className="flex items-center bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/5">
                <Check size={18} className="mr-2 text-[var(--accent)]" />
                <span>{t('hero.feature_3')}</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-[var(--primary)] mb-1">200+</div>
                  <div className="text-xs uppercase tracking-widest text-white/60">{t('hero.stat_clients')}</div>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-[var(--accent)] mb-1">100%</div>
                  <div className="text-xs uppercase tracking-widest text-white/60">{t('hero.stat_compliance')}</div>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-xl bg-[var(--primary)] flex items-center justify-center mr-4 shadow-lg shadow-red-900/20">
                    <span className="font-bold text-xl">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{t('hero.step_1_title')}</h4>
                    <p className="text-sm text-white/60">{t('hero.step_1_desc')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mr-4">
                    <span className="font-bold text-xl">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{t('hero.step_2_title')}</h4>
                    <p className="text-sm text-white/60">{t('hero.step_2_desc')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mr-4">
                    <span className="font-bold text-xl">03</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{t('hero.step_3_title')}</h4>
                    <p className="text-sm text-white/60">{t('hero.step_3_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
