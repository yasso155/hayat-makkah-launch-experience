import { motion } from 'motion/react';
import { SECTIONS } from '../constants';
import { Share2, Maximize2, Layers } from 'lucide-react';

interface EventGridProps {
  lang?: 'en' | 'ar';
}

export default function EventGrid({ lang = 'en' }: EventGridProps) {
  const isAr = lang === 'ar';

  return (
    <section id="spatial" className="py-32 bg-ivory-warm/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 ${isAr ? 'flex-row-reverse text-right' : ''}`}>
          <div className="max-w-2xl">
            <h2 className={`text-5xl md:text-6xl mb-6 ${isAr ? 'font-sans' : ''}`}>
              {isAr ? <>إتقان <br /><span className="text-gold-elite italic">الرحلة المكانية</span></> : <>Mastering the <br /><span className="italic text-gold-elite">Spatial Journey</span></>}
            </h2>
            <p className="text-ivory-warm/50 font-light text-lg">
              {isAr 
                ? 'تم تصميم كل نقطة اتصال في فعالية تدشين "حياة مكة" في فندق جدة هيلتون من أجل إشراك الحواس، ومزج الحرفية التركية مع التراث السعودي.' 
                : 'Every touchpoint of the "Hayat Makkah" launch at Jeddah Hilton is architected for elite sensory engagement, blending Turkish craftsmanship with Saudi heritage.'}
            </p>
          </div>
          <div className={`flex items-center gap-4 ${isAr ? 'flex-row-reverse' : ''}`}>
            <button className="p-4 rounded-full border border-white/10 hover:border-gold-elite transition-all text-white/50 hover:text-gold-elite">
              <Maximize2 size={24} />
            </button>
            <p className={`text-[10px] uppercase tracking-widest opacity-40 w-24 ${isAr ? 'text-right' : ''}`}>
              {isAr ? 'خرائط مكانية تفاعلية ثلاثية الأبعاد' : 'Interactive 3D Spatial Maps'}
            </p>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isAr ? 'flex-row-reverse' : ''}`}>
          {SECTIONS.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-[2rem] overflow-hidden border border-white/5 bg-charcoal-dark"
            >
              <img 
                src={section.image || `https://picsum.photos/seed/${section.id}/800/1000`} 
                alt={isAr ? section.titleAr : section.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent" />
              
              <div className={`absolute bottom-0 left-0 w-full p-8 ${isAr ? 'text-right' : ''}`}>
                <div className={`flex items-center gap-3 mb-4 ${isAr ? 'flex-row-reverse' : ''}`}>
                  <div className="pill border-gold-elite/40 text-gold-elite">
                    {isAr ? section.categoryAr : section.category}
                  </div>
                </div>
                <h3 className={`text-3xl mb-4 group-hover:translate-x-2 transition-transform text-sand-warm group-hover:text-gold-elite ${isAr ? 'font-sans' : ''}`}>
                  {isAr ? section.titleAr : section.title}
                </h3>
                <p className="text-sm text-sand-warm/60 font-light leading-relaxed mb-6">
                  {isAr ? section.descriptionAr : section.description}
                </p>
                <button className={`flex items-center gap-2 text-xs uppercase tracking-[2px] font-bold text-gold-elite/60 group-hover:text-gold-elite transition-colors ${isAr ? 'flex-row-reverse' : ''}`}>
                  <Layers size={14} />
                  {isAr ? 'المواصفات المكانية' : 'Spatial Specification'}
                </button>
              </div>

              <div className={`absolute top-6 ${isAr ? 'left-6' : 'right-6'}`}>
                <div className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  <Share2 size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
