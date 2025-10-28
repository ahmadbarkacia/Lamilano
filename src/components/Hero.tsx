import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 sm:block hidden"
        style={{
          backgroundImage: 'url(/backHero.png?auto=compress&cs=tinysrgb&w=1920)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>
      <div
        className="absolute inset-0  bg-cover sm:bg-contain   bg-center bg-no-repeat transition-transform duration-100 "
        style={{
          backgroundImage: 'url(/La_Milano_Cover.png?auto=compress&cs=tinysrgb&w=1920)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-estate-navy/10 via-estate-navy/10 to-estate-navy/10"></div>
      </div>

      <div className={`relative z-10 h-full flex flex-col items-center justify-center text-center px-4 ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="animate-slide-up">
          {/* <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
            <br />
            <span className="text-gradient">{t('hero.subtitle')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-estate-light mb-12 max-w-2xl mx-auto">
            {t('hero.description')}
          </p> */}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset + 250;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="group relative px-8 py-4 bg-estate-navy text-white font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 gold-shadow hover:shadow-2xl"
          >
            <span className="relative z-10">{t('hero.bookConsultation')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('properties');
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset + 50;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            {t('hero.viewProperties')}
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
    </section>
  );
}
