import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, isRTL } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.clients.0.name'),
      role: t('testimonials.clients.0.role'),
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: t('testimonials.clients.0.text'),
      rating: 5,
    },
    {
      name: t('testimonials.clients.1.name'),
      role: t('testimonials.clients.1.role'),
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: t('testimonials.clients.1.text'),
      rating: 5,
    },
    {
      name: t('testimonials.clients.2.name'),
      role: t('testimonials.clients.2.role'),
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: t('testimonials.clients.2.text'),
      rating: 5,
    },
    {
      name: t('testimonials.clients.3.name'),
      role: t('testimonials.clients.3.role'),
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: t('testimonials.clients.3.text'),
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section ref={ref} className={`py-24 bg-estate-light ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-estate-navy mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="relative">
          <div
            className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur-lg opacity-30"></div>
                <img
                  src={current.image}
                  alt={current.name}
                  className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed">
                  "{current.text}"
                </p>

                <div>
                  <h4 className="font-display text-2xl font-bold text-estate-navy">
                    {current.name}
                  </h4>
                  <p className="text-amber-600 font-medium">{current.role}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-estate-navy text-white flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-amber-500 w-8' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-estate-navy text-white flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
