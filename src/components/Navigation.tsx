import { motion } from 'motion/react';
import { Menu, X, Landmark, Crown, ShieldCheck, FileText, Languages } from 'lucide-react';
import { useState } from 'react';
import { ASSETS } from '../constants';

interface NavigationProps {
  onOpenPresentation?: () => void;
  lang?: 'en' | 'ar';
  setLang?: (lang: 'en' | 'ar') => void;
}

export default function Navigation({ onOpenPresentation, lang = 'en', setLang }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = lang === 'en' ? [
    { name: 'The Vision', href: '#vision' },
    { name: 'Spatial Design', href: '#spatial' },
    { name: 'VIP Concierge', href: '#concierge' },
    { name: 'Tech Showcase', href: '#tech' },
    { name: 'Timeline', href: '#timeline' },
  ] : [
    { name: 'الرؤية', href: '#vision' },
    { name: 'التصميم المكاني', href: '#spatial' },
    { name: 'كونسيرج كبار الشخصيات', href: '#concierge' },
    { name: 'معرض التقنية', href: '#tech' },
    { name: 'الجدول الزمني', href: '#timeline' },
  ];

  const toggleLang = () => {
    if (setLang) setLang(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className={`max-w-7xl mx-auto flex items-center justify-between glass-morphism rounded-full px-8 py-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`flex items-center gap-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={ASSETS.logo} alt="EK Logo" className="w-full h-full object-contain" />
          </div>
          <div className={`flex flex-col ${lang === 'ar' ? 'items-end' : ''}`}>
            <span className="font-sans text-xs font-light uppercase tracking-[4px] leading-tight">{lang === 'en' ? 'EMLAK KONUT' : 'إملاك كونوت'}</span>
            <span className="text-[9px] uppercase tracking-[1px] opacity-60">{lang === 'en' ? 'International Portfolio' : 'المحفظة الدولية'}</span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center gap-8 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`text-[11px] uppercase tracking-[2.5px] font-medium hover:text-gold-elite transition-colors duration-300 opacity-80 hover:opacity-100 ${lang === 'ar' ? 'font-sans' : ''}`}
            >
              {item.name}
            </motion.a>
          ))}
          
          <button 
            onClick={toggleLang}
            className={`flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] uppercase tracking-[2px] font-bold text-white hover:bg-white/10 transition-all ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
          >
            <Languages size={14} className="text-gold-elite" />
            <span>{lang === 'en' ? 'AR' : 'EN'}</span>
          </button>

          {onOpenPresentation && (
            <motion.button
              onClick={onOpenPresentation}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              title={lang === 'en' ? "Export Seamless Hospitality System Profile" : "تصدير ملف نظام الضيافة الموحد"}
              className={`group flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] uppercase tracking-[2px] font-bold text-gold-elite hover:bg-gold-elite hover:text-charcoal transition-all ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
            >
              <FileText size={14} className="group-hover:scale-110 transition-transform" />
              <span>{lang === 'en' ? 'System Profile' : 'ملف النظام'}</span>
            </motion.button>
          )}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`flex items-center gap-2 bg-gold-elite text-charcoal px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[2px] transition-all`}
          >
            {lang === 'en' ? 'VIP ACCESS' : 'دخول كبار الشخصيات'}
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`md:hidden absolute top-24 left-6 right-6 glass-morphism p-8 rounded-3xl flex flex-col gap-6 ${lang === 'ar' ? 'items-end text-right' : ''}`}
        >
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-lg font-display" onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
          
          <button 
            onClick={toggleLang}
            className={`flex items-center gap-2 text-gold-elite font-bold uppercase tracking-widest text-sm ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
          >
            <Languages size={18} />
            {lang === 'en' ? 'Arabic' : 'English'}
          </button>

          {onOpenPresentation && (
            <button 
              onClick={() => {
                setIsOpen(false);
                onOpenPresentation();
              }}
              className={`flex items-center gap-2 text-gold-elite font-bold uppercase tracking-widest text-sm ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
            >
              <FileText size={18} />
              {lang === 'en' ? 'Export System Profile' : 'تصدير ملف النظام'}
            </button>
          )}
          <button className="w-full bg-gold-elite text-charcoal-dark py-4 rounded-xl font-bold">
            {lang === 'en' ? 'REQUEST VIP ACCESS' : 'طلب دخول كبار الشخصيات'}
          </button>
        </motion.div>
      )}
    </nav>
  );
}
