import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;


    const whatsappMessage =
      `📩 *New Contact Form Submission*\n\n` +
      `👤 *Full Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `✉️ *Email:* ${email}\n` +
      `💬 *Message:*\n${message}\n\n` +
      `🏢 Sent via La Milano Properties Website`;

    const whatsappNumber = "971568234745";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section  ref={ref} className={`py-24 bg-estate-cream ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-estate-navy mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="bg-estate-navy rounded-3xl p-8 md:p-12 text-white h-full">
              <h3 className="font-display text-3xl font-bold mb-8">
                {t('contact.contactInfo')}
              </h3>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{t('contact.phone')}</h4>
                    <p className="text-estate-light">+971 56 823 4745</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{t('contact.email')}</h4>
                    <p className="text-estate-light">info@lamilanoproperties.ae</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{t('contact.office')}</h4>
                    <p className="text-estate-light">
                      Al Barsha 1<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div id="contact"
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-estate-navy text-white font-semibold py-4 rounded-xl hover:bg-amber-500 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 gold-shadow"
                >
                  <span>{t('contact.form.sendMessage')}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
