import { useState, useEffect } from 'react';
import PresentationLayer from './components/PresentationLayer';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  // Add RTL support to the body when language changes
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="relative min-h-screen selection:bg-gold-elite selection:text-charcoal-dark font-sans bg-charcoal overflow-hidden">
      <PresentationLayer 
        onClose={() => {}} // Standalone mode: closing is disabled
        lang={lang} 
        setLang={setLang} 
      />
    </div>
  );
}
