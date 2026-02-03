import { useState } from 'react';
import { X, Maximize2, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Portfolio() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedItem, setSelectedItem] = useState<any>(null);

    const categories = ['All', 'Equipment', 'Installation', 'Service', 'Training'];

    const portfolioItems = [
        {
            id: 1,
            type: 'image',
            url: 'assest/image/A_LEAD_C469_PS55_B47I0008.webp',
            title: 'Advanced Fire Protection',
            category: 'Equipment',
            description: 'Industrial grade fire suppression systems installation.'
        },
        {
            id: 2,
            type: 'image',
            url: 'assest/image/shutterstock_1817376860-scaled.jpg',
            title: 'Safety Infrastructure',
            category: 'Installation',
            description: 'Complete building safety infrastructure deployment.'
        },
        {
            id: 3,
            type: 'image',
            url: 'assest/image/unnamed (1).jpg',
            title: 'Professional Service',
            category: 'Service',
            description: 'Expert safety inspection and maintenance.'
        },
        {
            id: 4,
            type: 'image',
            url: 'assest/image/workwear-yeni.jpg',
            title: 'PPE Workforce',
            category: 'Equipment',
            description: 'High-performance personal protective equipment.'
        },
        {
            id: 5,
            type: 'video',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            thumbnail: 'assest/image/unnamed.jpg',
            title: 'Team Training',
            category: 'Training',
            description: 'On-site safety protocols and training workshop.'
        },
        {
            id: 6,
            type: 'image',
            url: 'assest/image/Investing in high quality safety boots_header.webp',
            title: 'Certified Footwear',
            category: 'Equipment',
            description: 'Specialized industrial safety boots.'
        }
    ];

    const filteredItems = activeCategory === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    return (
        <section id="gallery" className="section bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="animate-slide-right">
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary)] mb-4">
                            {t('portfolio.title')} <span className="text-[var(--primary)]">{t('portfolio.title_accent')}</span>
                        </h2>
                        <p className="text-gray-500 max-w-md">
                            {t('portfolio.subtitle')}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 animate-fade-up stagger-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${activeCategory === cat
                                        ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-lg shadow-red-900/20 scale-105'
                                        : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300'
                                    }`}
                            >
                                {t(`portfolio.cat_${cat.toLowerCase().slice(0, 5)}`)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="group relative animate-fade-up aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl cursor-pointer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => setSelectedItem(item)}
                        >
                            <img
                                src={item.type === 'video' ? item.thumbnail : item.url}
                                alt={item.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                <span className="text-[var(--accent)] text-xs font-black tracking-[0.2em] uppercase mb-2">{t(`portfolio.cat_${item.category.toLowerCase().slice(0, 5)}`)}</span>
                                <h3 className="text-white text-2xl font-black mb-2">{item.title}</h3>
                                <p className="text-white/60 text-sm mb-6 line-clamp-2">{item.description}</p>

                                <div className="flex items-center text-white text-sm font-bold">
                                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3 backdrop-blur-md">
                                        {item.type === 'video' ? <Play size={16} className="fill-current" /> : <Maximize2 size={16} />}
                                    </div>
                                    {item.type === 'video' ? t('portfolio.view_video') : t('portfolio.view_image')}
                                </div>
                            </div>

                            {item.type === 'video' && (
                                <div className="absolute top-6 right-6 h-12 w-12 bg-[var(--primary)] rounded-2xl flex items-center justify-center text-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Play size={20} className="fill-current" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedItem && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 p-4 md:p-10 animate-in fade-in duration-500 backdrop-blur-xl">
                    <button
                        className="absolute top-8 right-8 text-white hover:text-[var(--primary)] transition-colors p-3 bg-white/5 rounded-2xl border border-white/10"
                        onClick={() => setSelectedItem(null)}
                    >
                        <X size={24} />
                    </button>

                    <div className="w-full max-w-6xl flex flex-col items-center">
                        <div className="w-full aspect-video md:aspect-[21/9] bg-black rounded-[2rem] overflow-hidden shadow-2xl shadow-red-900/10">
                            {selectedItem.type === 'video' ? (
                                <iframe
                                    src={selectedItem.url}
                                    title={selectedItem.title}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <img
                                    src={selectedItem.url}
                                    alt={selectedItem.title}
                                    className="w-full h-full object-cover md:object-contain"
                                />
                            )}
                        </div>

                        <div className="mt-8 text-center animate-fade-up">
                            <span className="text-[var(--accent)] font-black tracking-widest uppercase text-xs mb-3 block">{t(`portfolio.cat_${selectedItem.category.toLowerCase().slice(0, 5)}`)}</span>
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">{selectedItem.title}</h3>
                            <p className="text-white/40 max-w-2xl mx-auto">{selectedItem.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
