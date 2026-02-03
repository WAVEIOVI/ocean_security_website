import { useTranslation } from 'react-i18next';

const partners = [
  { id: 1, logo: 'assest/image/clients/client 05.png' },
  { id: 2, logo: 'assest/image/clients/client 099.png' },
  { id: 3, logo: 'assest/image/clients/dongfeng.png' },
  { id: 4, logo: 'assest/image/clients/logo SODEPS.png' },
  { id: 5, logo: 'assest/image/clients/logo diari.png' },
  { id: 6, logo: 'assest/image/clients/logo eni.png' },
  { id: 7, logo: 'assest/image/clients/logo l\'epi d\'or.png' },
  { id: 8, logo: 'assest/image/clients/logo pergemine.png' },
  { id: 9, logo: 'assest/image/clients/logo teletec.png' },
  { id: 10, logo: 'assest/image/clients/logo total safety.png' },
  { id: 11, logo: 'assest/image/clients/Untitled-1.png' },
];

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="section bg-gray-50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-sm font-black tracking-[0.3em] uppercase text-[var(--primary)] mb-4">{t('partners.badge')}</h2>
          <h3 className="text-3xl md:text-5xl font-black text-[var(--secondary)] mb-6">{t('partners.title')}</h3>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            "{t('partners.text')}"
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0.5 bg-gray-200 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="bg-white group p-4 md:p-6 flex items-center justify-center transition-all duration-500 hover:z-10 relative"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={partner.logo}
                alt="Partner logo"
                className="max-h-20 md:max-h-24 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 p-2"
              />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-[var(--primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}

          {/* Last square for CTA */}
          <div className="bg-[var(--primary)] group p-4 md:p-6 flex flex-col items-center justify-center text-center transition-all duration-500 hover:brightness-110 cursor-pointer">
            <p className="text-white font-black text-sm uppercase tracking-tight mb-2">{t('partners.cta_brand')}</p>
            <a href="#contact" className="text-[var(--accent)] text-xs font-bold underline underline-offset-4">{t('partners.cta_link')}</a>
          </div>
        </div>

        <div className="mt-16 relative flex justify-center">
          <div className="flex items-center space-x-12 opacity-30 animate-float">
            <div className="h-px w-24 md:w-64 bg-gradient-to-r from-transparent to-gray-400"></div>
            <div className="text-gray-400 font-black text-xs uppercase tracking-widest">{t('partners.footer')}</div>
            <div className="h-px w-24 md:w-64 bg-gradient-to-l from-transparent to-gray-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
