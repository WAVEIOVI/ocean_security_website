import { Clock, Mail, MapPin, Phone, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sanitizeInput = (str: string) => {
    return str.replace(/[<>]/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const sanitizedData = {
      ...formData,
      message: sanitizeInput(formData.message),
      name: sanitizeInput(formData.name)
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e979c6b0-9c28-4a12-b874-fe6b12c29f82',
          name: sanitizedData.name,
          email: sanitizedData.email,
          phone: sanitizedData.phone,
          message: sanitizedData.message,
          subject: `Ocean Security: New Message from ${sanitizedData.name}`,
          replyto: sanitizedData.email,
          from_name: sanitizedData.name,
          to_email: 'anishwas51@gmail.com, steoceanssecurite@gmail.com'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(result.message || t('contact.error_title'));
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(t('contact.error_title'));
    }
  };

  return (
    <section id="contact" className="section bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-up">
            <div className="bg-[var(--primary)] text-white rounded-2xl p-8 lg:p-12 h-full shadow-xl">
              <h3 className="text-3xl font-bold mb-8 italic">{t('contact.info_title')}</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-xl p-3 mr-5 backdrop-blur-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t('contact.loc_title')}</h4>
                    <p className="text-white/80 leading-relaxed">El Ain Road KM 04<br />3000 Sfax, Tunisia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 rounded-xl p-3 mr-5 backdrop-blur-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t('contact.email_title')}</h4>
                    <a href="mailto:contact@oceansecurity.tn" className="text-white/80 hover:text-white transition-colors block underline underline-offset-4">contact@oceansecurity.tn</a>
                    <a href="mailto:steoceanssecurite@gmail.com" className="text-white/80 hover:text-white transition-colors block text-sm mt-2 opacity-70">steoceanssecurite@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 rounded-xl p-3 mr-5 backdrop-blur-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t('contact.call_title')}</h4>
                    <p className="text-white font-mono text-xl">+216 28 85 85 55</p>
                    <p className="text-white/70 font-mono">+216 29 30 88 50</p>
                  </div>
                </div>

                <div className="flex items-start border-t border-white/10 pt-8">
                  <div className="bg-white/20 rounded-xl p-3 mr-5 backdrop-blur-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t('contact.hours_title')}</h4>
                    <p className="text-white/80">{t('contact.hours_desc')}</p>
                    <p className="text-[var(--accent)] font-bold mt-1 text-sm tracking-wide">{t('contact.emergency')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 bg-white/10 p-6 rounded-xl border border-white/10">
                <h4 className="font-bold mb-4 flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
                  {t('contact.hotline')}
                </h4>
                <a href="tel:+21628858555" className="text-3xl font-black hover:text-[var(--accent)] transition-colors">+216 28 85 85 55</a>
              </div>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-inner border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-[var(--secondary)] flex items-center">
                {t('contact.form_title')}
                <div className="h-1 w-12 bg-[var(--primary)] ml-4"></div>
              </h3>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl mb-8 flex items-center animate-in zoom-in duration-300">
                  <CheckCircle2 className="mr-4 text-green-500" size={32} />
                  <div>
                    <p className="font-bold text-lg">{t('contact.success_title')}</p>
                    <p className="text-sm opacity-90">{t('contact.success_desc')}</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl mb-8 flex items-center animate-in shake-x duration-300">
                  <AlertCircle className="mr-4 text-red-500" size={32} />
                  <div>
                    <p className="font-bold text-lg">{t('contact.error_title')}</p>
                    <p className="text-sm opacity-90">{errorMessage}</p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-700 uppercase tracking-wider">{t('contact.label_name')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.place_name')}
                      className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all shadow-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-wider">{t('contact.label_email')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.place_email')}
                      className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all shadow-sm"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-gray-700 uppercase tracking-wider">{t('contact.label_phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact.place_phone')}
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-700 uppercase tracking-wider">{t('contact.label_message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={t('contact.place_message')}
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all shadow-sm resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary py-5 rounded-xl shadow-lg shadow-red-900/10 flex items-center justify-center text-lg font-bold disabled:opacity-70 disabled:cursor-not-allowed group transition-all"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={24} className="mr-3 animate-spin" />
                      {t('contact.btn_sending')}
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      {t('contact.btn_send')}
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400 font-medium">
                  {t('contact.privacy')}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
