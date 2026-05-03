import { motion } from 'motion/react';
import { ASSETS } from '../constants';

interface ExecutionControlProps {
  lang?: 'en' | 'ar';
}

export default function ExecutionControl({ lang = 'en' }: ExecutionControlProps) {
  const isAr = lang === 'ar';

  const PILLARS = [
    {
      num: '01',
      title: isAr ? 'إشراف تشغيلي كامل' : 'Full Operational Oversight',
      desc: isAr ? 'كل مرحلة مخططة مسبقاً ومُدارة مباشرة' : 'Every phase pre-mapped and live-managed'
    },
    {
      num: '02',
      title: isAr ? 'أنظمة متكاملة' : 'Integrated Systems',
      desc: isAr ? 'قيادة موحدة تربط كل نقطة اتصال' : 'One command connects every touchpoint'
    },
    {
      num: '03',
      title: isAr ? 'تنسيق في الوقت الفعلي' : 'Real-Time Coordination',
      desc: isAr ? 'تعديلات ديناميكية عبر جميع الفرق' : 'Dynamic adjustments across all teams'
    },
    {
      num: '04',
      title: isAr ? 'فريق إنتاج خبير' : 'Experienced Production Team',
      desc: isAr ? 'محترفون مدربون لتنفيذ المهام عالية الأهمية' : 'Professionals trained for high-stakes delivery'
    }
  ];

  return (
    <section id="execution" className="relative py-32 bg-charcoal overflow-hidden border-y border-gold-elite/20">
      {/* Background Image (Subtle) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ASSETS.approach} 
          alt="Execution Control" 
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`mb-24 max-w-3xl ${isAr ? 'mr-auto text-right' : ''}`}>
          <div className={`flex items-center gap-4 mb-8 ${isAr ? 'flex-row-reverse' : ''}`}>
            <span className="w-12 h-px bg-gold-elite/40" />
            <span className="text-[11px] uppercase tracking-[4px] text-gold-elite font-bold">
              {isAr ? 'البنية التحتية للإنتاج' : 'Production Infrastructure'}
            </span>
          </div>
          
          <h2 className={`text-6xl md:text-8xl mb-8 leading-[0.9] text-sand-warm ${isAr ? 'font-sans' : 'font-serif'}`}>
            {isAr ? <>التنفيذ <br /><span className="italic text-gold-elite">&amp; التحكم</span></> : <>EXECUTION <br /><span className="italic text-gold-elite">&amp; CONTROL</span></>}
          </h2>
          
          <p className="text-xl md:text-2xl text-sand-warm/60 font-light leading-relaxed">
            {isAr 
              ? 'نحن لا نصمم التجارب فحسب... بل نتحكم في كيفية تنفيذها وتسليمها.' 
              : 'We don\'t just design experiences... we control how they are executed and delivered.'}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 ${isAr ? 'flex-row-reverse text-right' : ''}`}>
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`text-gold-elite/20 font-serif text-5xl mb-6 group-hover:text-gold-elite transition-colors duration-500`}>
                {pillar.num}
              </div>
              <div className="w-full h-px bg-gold-elite/10 mb-6 group-hover:bg-gold-elite/40 transition-colors duration-500" />
              <h3 className={`text-xl mb-3 text-sand-warm ${isAr ? 'font-sans' : ''}`}>
                {pillar.title}
              </h3>
              <p className="text-sm font-light text-ivory-warm/40 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
