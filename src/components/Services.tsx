import { Home, TrendingUp, DollarSign, MessageSquare } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t('services.items.luxurySales.title'),
      description: t('services.items.luxurySales.description'),
      features: t('services.items.luxurySales.features'),
    },
    {
      icon: TrendingUp,
      title: t('services.items.investment.title'),
      description: t('services.items.investment.description'),
      features: t('services.items.investment.features'),
    },
    {
      icon: DollarSign,
      title: t('services.items.propertyManagement.title'),
      description: t('services.items.propertyManagement.description'),
      features: t('services.items.propertyManagement.features'),
    },
    {
      icon: MessageSquare,
      title: t('services.items.consultation.title'),
      description: t('services.items.consultation.description'),
      features: t('services.items.consultation.features'),
    },
  ];

  return (
    <section ref={ref} className={`py-24 bg-estate-cream ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-estate-navy mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-estate-navy to-estate-navy/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-amber-400" />
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold text-estate-navy mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {Array.isArray(service.features) ? service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                )) : (
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                    {service.features}
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
