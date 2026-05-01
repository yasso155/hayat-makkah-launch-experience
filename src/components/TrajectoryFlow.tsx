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
          <h2 className={`text-5xl md:text-7xl mb-6 ${isAr ? 'font-sans' : ''}`}>
            {isAr ? <>المسار <span className="text-gold-elite italic">الاستراتيجي</span></> : <>THE <span className="text-gold-elite italic">TRAJECTORY</span></>}
          </h2>
          <p className="text-sand-warm/40 font-light tracking-[2px] uppercase text-xs">
            {isAr ? 'رسم تدفق كرم الضيافة السلس لكبار المستثمرين.' : 'Mapping the seamless flow of high-net-worth hospitality.'}
          </p>
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
                
                <h3 className={`text-2xl font-serif mb-4 text-sand-warm group-hover:text-gold-elite transition-colors ${isAr ? 'font-sans' : ''}`}>
                  {isAr ? point.titleAr : point.title}
                </h3>
                
                <div className="w-8 h-px bg-gold-elite/20 group-hover:w-12 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
