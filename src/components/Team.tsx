import { Linkedin, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const team = [
  {
    id: 'ahmed',
    name: 'Ahmed Ben Ali',
    certifications: ['OSHA Certified', 'ISO Compliance Specialist']
  },
  {
    id: 'fatima',
    name: 'Fatima Trabelsi',
    certifications: ['EN Standards Expert', 'Fire Prevention Specialist']
  },
  {
    id: 'youssef',
    name: 'Youssef Maaloul',
    certifications: ['Equipment Installation Certified', 'Maintenance Specialist']
  },
  {
    id: 'leila',
    name: 'Leila Benghazi',
    certifications: ['Customer Service Excellence', 'PPE Customization Specialist']
  }
];

export default function Team() {
  const { t } = useTranslation();

  return (
    <section id="team" className="section bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('team.title')}</h2>
          <p className="section-subtitle">
            {t('team.subtitle')}
          </p>
          <div className="max-w-3xl mx-auto mt-6 mb-10 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 animate-fade-up">
            <h3 className="text-xl font-black text-[var(--primary)] mb-3">{t('team.intro_title')}</h3>
            <p className="text-gray-500 leading-relaxed italic">
              "{t('team.intro_text')}"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.id}
              className={`team-card group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 animate-fade-up stagger-${(index % 4) + 1}`}
            >
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 bg-[var(--primary)] rounded-[2rem] rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-10"></div>
                <div className="absolute inset-0 bg-white rounded-[2rem] border-2 border-gray-100 overflow-hidden flex items-center justify-center z-10 shadow-lg">
                  <div className="text-4xl font-black text-[var(--primary)] group-hover:scale-110 transition-transform duration-500">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-black mb-1 text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">{member.name}</h3>
              <p className="text-[var(--primary)] text-xs font-black uppercase tracking-widest mb-4">Chief Operations</p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.certifications.map((cert, certIndex) => (
                  <span key={certIndex} className="bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-1 rounded-md group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)] transition-colors">
                    {cert}
                  </span>
                ))}
              </div>

              <div className="flex justify-center space-x-4 pt-4 border-t border-gray-50 opacity-40 group-hover:opacity-100 transition-opacity">
                <a href="#" className="text-gray-400 hover:text-[var(--primary)] transition-colors" aria-label="LinkedIn profile"><Linkedin size={18} /></a>
                <a href="#" className="text-gray-400 hover:text-[var(--primary)] transition-colors" aria-label="Email contact"><Mail size={18} /></a>
                <a href="#" className="text-gray-400 hover:text-[var(--primary)] transition-colors" aria-label="Phone contact"><Phone size={18} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
