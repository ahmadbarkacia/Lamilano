import { ChevronLeft, ChevronRight, MapPin, Bed, Bath, Square } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

export default function Properties() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, isRTL } = useLanguage();

  const propertiesEn = [
    {
      image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Palm Jumeirah Villa',
      location: 'Palm Jumeirah, Dubai',
      price: 'AED 18,500,000',
      beds: 6,
      baths: 7,
      sqft: '8,500',
    },
    {
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Burj Khalifa Penthouse',
      location: 'Downtown Dubai',
      price: 'AED 45,000,000',
      beds: 5,
      baths: 6,
      sqft: '12,000',
    },
    {
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Dubai Marina Apartment',
      location: 'Dubai Marina',
      price: 'AED 6,800,000',
      beds: 4,
      baths: 4,
      sqft: '3,200',
    },
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Emirates Hills Mansion',
      location: 'Emirates Hills, Dubai',
      price: 'AED 35,000,000',
      beds: 8,
      baths: 9,
      sqft: '15,000',
    },
    {
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Jumeirah Beach Residence',
      location: 'JBR, Dubai',
      price: 'AED 9,500,000',
      beds: 5,
      baths: 5,
      sqft: '4,800',
    },
  ];

  const propertiesAr = [
    {
      image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'فيلا بالم جميرا',
      location: 'بالم جميرا، دبي',
      price: 'AED 18,500,000',
      beds: 6,
      baths: 7,
      sqft: '8,500',
    },
    {
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'بنتهاوس برج خليفة',
      location: 'وسط مدينة دبي',
      price: 'AED 45,000,000',
      beds: 5,
      baths: 6,
      sqft: '12,000',
    },
    {
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'شقة دبي مارينا',
      location: 'دبي مارينا',
      price: 'AED 6,800,000',
      beds: 4,
      baths: 4,
      sqft: '3,200',
    },
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'قصر الإمارات هيلز',
      location: 'إمارات هيلز، دبي',
      price: 'AED 35,000,000',
      beds: 8,
      baths: 9,
      sqft: '15,000',
    },
    {
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'جومييرا بيتش ريزيدنس',
      location: 'JBR، دبي',
      price: 'AED 9,500,000',
      beds: 5,
      baths: 5,
      sqft: '4,800',
    },
  ];
  const properties = isRTL ? propertiesAr : propertiesEn;
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const visibleProperties = [
    properties[currentIndex],
    properties[(currentIndex + 1) % properties.length],
    properties[(currentIndex + 2) % properties.length],
  ];

  return (
    <section id="properties" ref={ref} className={`py-24 bg-estate-navy ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {t('properties.title')}
          </h2>
          <p className="text-xl text-estate-light max-w-3xl mx-auto">
            {t('properties.subtitle')}
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {visibleProperties.map((property, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {property.price}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-estate-navy mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="flex items-center text-gray-700">
                      <Bed className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.beds} {t('properties.features.beds')}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Bath className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.baths} {t('properties.features.baths')}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Square className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.sqft} {t('properties.features.sqft')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-400 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-400 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {properties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-amber-400 w-8' : 'bg-white/40'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
