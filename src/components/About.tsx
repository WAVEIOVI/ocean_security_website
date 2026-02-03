import { Award, Building, Clock, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <div className="inline-flex items-center bg-[var(--primary)]/10 rounded-full px-4 py-2 mb-6">
              <Award size={16} className="mr-2 text-[var(--primary)]" />
              <span className="text-sm font-medium text-[var(--primary)] uppercase tracking-wider">{t('about.badge')}</span>
            </div>
            <h2 className="section-title text-left mb-6">{t('about.title')}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {t('about.text_1')}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t('about.text_2')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col group">
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-[var(--primary)]/10 transition-colors mr-3 text-[var(--primary)]">
                    <Users size={20} />
                  </div>
                  <h4 className="font-black text-[var(--secondary)]">{t('about.feature_team')}</h4>
                </div>
                <p className="text-sm text-gray-500">{t('about.feature_team_desc')}</p>
              </div>

              <div className="flex flex-col group">
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-[var(--primary)]/10 transition-colors mr-3 text-[var(--primary)]">
                    <Building size={20} />
                  </div>
                  <h4 className="font-black text-[var(--secondary)]">{t('about.feature_leader')}</h4>
                </div>
                <p className="text-sm text-gray-500">{t('about.feature_leader_desc')}</p>
              </div>

              <div className="flex flex-col group">
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-[var(--primary)]/10 transition-colors mr-3 text-[var(--primary)]">
                    <Clock size={20} />
                  </div>
                  <h4 className="font-black text-[var(--secondary)]">{t('about.feature_response')}</h4>
                </div>
                <p className="text-sm text-gray-500">{t('about.feature_response_desc')}</p>
              </div>

              <div className="flex flex-col group">
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-[var(--primary)]/10 transition-colors mr-3 text-[var(--primary)]">
                    <Award size={20} />
                  </div>
                  <h4 className="font-black text-[var(--secondary)]">{t('about.feature_certified')}</h4>
                </div>
                <p className="text-sm text-gray-500">{t('about.feature_certified_desc')}</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-[600px] border border-gray-100 animate-fade-up">
            {/* Background Video for Core Values */}
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              >
                <source src="/assest/video/14743014_1920_1080_30fps.mp4" type="video/mp4" />
              </video>
              <div className="red-overlay opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80"></div>
            </div>

            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center text-white p-8 md:p-12">
                <div className="inline-block p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-6 border border-white/20">
                  <h3 className="text-3xl font-black tracking-tighter uppercase italic">{t('about.values_title')}</h3>
                </div>

                <p className="text-xl mb-8 font-medium leading-relaxed max-w-md mx-auto text-white/90">
                  {t('about.values_desc')}
                </p>

                <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-10 border border-white/10 shadow-xl">
                  <p className="text-2xl font-black text-[var(--accent)] italic mb-2">"{t('about.mission')}"</p>
                  <p className="text-sm text-white/60 font-mono">{t('about.mission_sub')}</p>
                </div>

                <div className="flex justify-center flex-wrap gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-black text-white mb-1">7+</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/60">{t('about.stat_exp')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-black text-[var(--accent)] mb-1">200+</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/60">{t('about.stat_clients')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-black text-white mb-1">100%</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/60">{t('about.stat_commitment')}</div>
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
