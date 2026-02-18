import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t, isRTL } = useLanguage();
  return (
    <footer className={`bg-estate-navy text-white py-12 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-gradient">
              {t('hero.title')}
            </h3>
            <p className="text-estate-light mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="space-y-2 text-estate-light">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+971-56-823-4745</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@lamilanoproperties.ae</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-estate-light">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors duration-300">{t('about.title')}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors duration-300">{t('services.title')}</a>
              </li>
              <li>
                <a href="#properties" className="hover:text-amber-400 transition-colors duration-300">{t('properties.title')}</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-400 transition-colors duration-300">{t('testimonials.title')}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors duration-300">{t('contact.title')}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.followMe')}</h4>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61582407119140' },
                { Icon: Instagram, href: 'https://www.instagram.com/lamilano.properties/' },
                // { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/111779520/admin/dashboard/' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover:scale-110 animate-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-estate-light text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
