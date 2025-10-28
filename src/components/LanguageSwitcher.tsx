import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
    const { language, setLanguage, isRTL } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ar' : 'en');
    };

    return (
        <button
            onClick={toggleLanguage}
            className="group relative flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold text-sm rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
        >
            <Globe className="w-4 h-4" />
            <span className="font-medium">
                {language === 'en' ? 'العربية' : 'English'}
            </span>
        </button>
    );
}
