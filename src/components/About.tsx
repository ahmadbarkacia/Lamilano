import { Award, Users, TrendingUp, Shield } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';
import hasImg from 'hasImg.png';

export default function About() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const { t, isRTL } = useLanguage();

  const stats = [
    { icon: Award, value: t('about.stats.values.experience'), label: t('about.stats.experience') },
    { icon: Users, value: t('about.stats.values.clients'), label: t('about.stats.clients') },
    { icon: TrendingUp, value: t('about.stats.values.sales'), label: t('about.stats.sales') },
    { icon: Shield, value: t('about.stats.values.satisfaction'), label: t('about.stats.satisfaction') },
  ];

  return (
    <section ref={ref} className={`py-24 bg-estate-light ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl opacity-20 blur-xl"></div>
              <img
                src={`${hasImg}?auto=compress&cs=tinysrgb&w=800`}
                alt="Real Estate Expert"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-estate-navy mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="w-8 h-8 text-amber-600 mb-3" />
                  <div className="font-display text-3xl font-bold text-estate-navy mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
