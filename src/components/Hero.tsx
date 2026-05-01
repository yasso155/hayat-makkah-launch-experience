import { motion } from 'motion/react';
import { ASSETS } from '../constants';

interface HeroProps {
  lang?: 'en' | 'ar';
}

export default function Hero({ lang = 'en' }: HeroProps) {
  const isAr = lang === 'ar';

  return (
    <section id="vision" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ASSETS.hero} 
          alt="Hayat Makkah" 
          className="w-full h-full object-cover opacity-40 grayscale-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
      </div>

      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-3/5 h-full opacity-15 bg-pattern pointer-events-none z-1" />
      
      <div className={`max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_380px] gap-20 relative z-10 w-full ${isAr ? 'flex-row-reverse' : ''}`}>
        <div className={isAr ? 'text-right' : 'text-left'}>
          <motion.div
            initial={{ opacity: 0, x: isAr ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex items-center gap-3 text-gold-elite text-[11px] uppercase tracking-[3px] mb-12 opacity-80 ${isAr ? 'flex-row-reverse justify-start' : ''}`}
          >
            <span className="w-12 h-px bg-gold-elite/40" />
            {isAr ? 'شراكة استراتيجية ثنائية' : 'Bilateral Strategic Partnership'}
          </motion.div>

          <motion.h1 
            className={`text-7xl md:text-[160px] leading-[0.8] mb-8 text-gold-elite ${isAr ? 'font-sans' : 'font-serif'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {isAr ? <>نعيش<br />المستقبل اليوم</> : <>LIVING THE<br />FUTURE TODAY</>}
          </motion.h1>

          <motion.p
            className={`text-3xl md:text-5xl font-serif italic text-sand-warm/60 mb-12 ${isAr ? 'font-sans' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {isAr ? 'مفهوم تجربة حياة مكة' : 'Hayat Makkah Experience Concept'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`flex items-center gap-10 border-t border-gold-elite/10 pt-16 ${isAr ? 'flex-row-reverse' : ''}`}
          >
            <div className={`max-w-[300px] ${isAr ? 'text-right' : ''}`}>
               <p className="text-sm font-light text-sand-warm/40 leading-relaxed">
                {isAr ? 'ترسيخ مكانة إملاك كونوت كجسر بين الحرفية التركية التاريخية ومستقبل العقارات الفاخرة السعودية.' : 'Positioning Emlak Konut as the bridge between historic Turkish craftsmanship and the future of Saudi luxury real estate.'}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Sidebar Style Card */}
        <motion.div
          initial={{ opacity: 0, x: isAr ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`glass-morphism p-12 flex flex-col justify-between hidden md:flex ${isAr ? 'text-right' : ''}`}
        >
          <div className="space-y-10">
            <div>
              <span className="text-[11px] uppercase tracking-[2.5px] text-gold-elite/60 mb-2 block">{isAr ? 'المكان' : 'Venue'}</span>
              <span className="text-xl font-light">{isAr ? 'فندق هيلتون جدة، القاعة الكبرى' : 'Jeddah Hilton, Grand Ballroom'}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[2.5px] text-gold-elite/60 mb-2 block">{isAr ? 'عدد الضيوف' : 'Guest Count'}</span>
              <span className="text-xl font-light">{isAr ? '500 ضيف من كبار الشخصيات ونخبة المستثمرين' : '500 VVIP & Elite Investors'}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[2.5px] text-gold-elite/60 mb-2 block">{isAr ? 'التاريخ' : 'Date'}</span>
              <span className="text-xl font-light">{isAr ? '14 نوفمبر 2026' : '14th November 2026'}</span>
            </div>
          </div>

          <div className="border-t border-gold-elite/20 pt-8 mt-12">
            <span className="text-[11px] uppercase tracking-[2.5px] text-gold-elite mb-6 block">{isAr ? 'مسار التجربة' : 'Experience Flow'}</span>
            <ul className={`space-y-4 text-xs tracking-widest text-sand-warm/60 ${isAr ? 'font-sans' : ''}`}>
              <li className={`flex items-center gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
                <span className="w-1 h-1 bg-gold-elite rounded-full" />
                {isAr ? 'كشف التحليق الحركي' : 'Kinetic Levitation Reveal'}
              </li>
              <li className={`flex items-center gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
                <span className="w-1 h-1 bg-gold-elite rounded-full" />
                {isAr ? 'عرض الإسقاط ثلاثي الأبعاد' : '3D Projection Mapping'}
              </li>
              <li className={`flex items-center gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
                <span className="w-1 h-1 bg-gold-elite rounded-full" />
                {isAr ? 'نماذج هولوغرافية' : 'Holographic Models'}
              </li>
              <li className={`flex items-center gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
                <span className="w-1 h-1 bg-emerald-deep/50 rounded-full" />
                {isAr ? 'خدمة الكونسيرج الثقافي' : 'Cultural Concierge Service'}
              </li>
            </ul>
          </div>

          <button className="w-full bg-gold-elite text-charcoal py-4 rounded-xl font-bold text-[10px] uppercase tracking-[3px] mt-10 hover:bg-white transition-all">
            {isAr ? 'بوابة كبار الشخصيات الآمنة' : 'Secure VIP Portal'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
