import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string | string[];
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>('en');
    const [translations, setTranslations] = useState<Record<string, unknown>>({});

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);

        // Update document direction and language
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    };

    // Load translations
    useEffect(() => {
        const loadTranslations = async () => {
            try {
                const translationModule = await import(`../translations/${language}.json`);
                setTranslations(translationModule.default);
            } catch (error) {
                console.error('Failed to load translations:', error);
            }
        };

        loadTranslations();
    }, [language]);

    // Initialize language from localStorage
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
            setLanguage(savedLanguage);
        } else {
            setLanguage('en');
        }
    }, []);

    const t = (key: string): string | string[] => {
        const keys = key.split('.');
        let value: unknown = translations;

        for (const k of keys) {
            if (value && typeof value === 'object' && value !== null && k in value) {
                value = (value as Record<string, unknown>)[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return typeof value === 'string' || Array.isArray(value) ? value : key;
    };

    const isRTL = language === 'ar';

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
