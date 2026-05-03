import { motion } from 'motion/react';
import { TRAJECTORY } from '../constants';

interface TrajectoryFlowProps {
  lang?: 'en' | 'ar';
}

export default function TrajectoryFlow({ lang = 'en' }: TrajectoryFlowProps) {
  const isAr = lang === 'ar';

  return (
    <section className="py-32 bg-charcoal relative overflow-hidden">
      <div className={`max-w-7xl mx-auto px-6 ${isAr ? 'text-right' : 'text-left'}`}>
        <div className={`mb-20 ${isAr ? 'flex flex-col items-start' : ''}`}>
          <div className={`flex items-center gap-4 mb-6 ${isAr ? 'flex-row-reverse' : ''}`}>
            <span className="w-8 h-px bg-gold-elite/40" />
            <span className="text-[11px] uppercase tracking-[4px] text-gold-elite font-bold">
              {isAr ? 'رحلة تدفق الضيوف' : 'Guest Flow Journey'}
            </span>
          </div>

          <h2 className={`text-5xl md:text-7xl mb-6 ${isAr ? 'font-sans' : ''}`}>
            {isAr ? <>رحلة <span className="text-gold-elite italic">مكانية موجهة</span></> : <>A GUIDED SPATIAL <span className="text-gold-elite italic">JOURNEY</span></>}
          </h2>
          <p className="text-sand-warm/60 font-light text-lg max-w-lg mb-8">
            {isAr ? 'تسلسل سلس للتجارب من الوصول إلى التواصل.' : 'A seamless progression of experiences from arrival to networking.'}
          </p>

          <div className="bg-charcoal-dark/50 border border-gold-elite/20 p-4 rounded-xl flex flex-col gap-2 max-w-md">
            <div className="text-[9px] uppercase tracking-[2px] text-gold-elite">Experience Note</div>
            <div className="text-xs text-sand-warm/60 font-light leading-relaxed">
              {isAr 
                ? 'يختبر الضيوف حركة جسدية خالية من الاحتكاك، ويتم توجيههم ببديهية عبر كل مرحلة دون تردد.' 
                : 'Guests experience a frictionless physical movement, intuitively guided through each phase without hesitation.'}
            </div>
          </div>
        </div>

        <div className="relative pt-20">
          {/* Path Line */}
          <div className="absolute top-[108px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-elite/30 to-transparent hidden md:block" />
          
          <div className={`grid grid-cols-1 md:grid-cols-6 gap-16 relative z-10 ${isAr ? 'flex-row-reverse' : ''}`}>
            {TRAJECTORY.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-charcoal border border-gold-elite/20 flex items-center justify-center mb-8 group-hover:border-gold-elite transition-all duration-500 relative">
                  <span className="text-sm font-bold text-gold-elite">{index + 1}</span>
                </div>
                
                <h3 className={`text-2xl font-serif mb-2 text-sand-warm group-hover:text-gold-elite transition-colors ${isAr ? 'font-sans' : ''}`}>
                  {isAr ? point.titleAr : point.title}
                </h3>

                <p className="text-[10px] uppercase tracking-widest text-gold-elite/60 mb-6 group-hover:text-gold-elite transition-colors">
                  {isAr ? point.subtitleAr : point.subtitle}
                </p>
                
                <div className="w-8 h-px bg-gold-elite/20 group-hover:w-12 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
