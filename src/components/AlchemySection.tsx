import { motion } from 'motion/react';
import { ALCHEMY } from '../constants';
import { Sparkles, Target, Layers, TrendingUp } from 'lucide-react';

const ICONS = [Sparkles, Target, Layers, TrendingUp];

interface AlchemySectionProps {
  lang?: 'en' | 'ar';
}

export default function AlchemySection({ lang = 'en' }: AlchemySectionProps) {
  const isAr = lang === 'ar';

  return (
    <section className="py-32 border-y border-gold-elite/10 bg-ivory-warm/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-24 ${isAr ? 'text-right' : ''}`}>
          <h2 className={`text-5xl md:text-8xl mb-6 uppercase tracking-tighter ${isAr ? 'font-sans' : 'font-serif'}`}>
            {isAr ? <>كيمياء <br /><span className="italic text-gold-elite">التجربة</span></> : <>THE ALCHEMY OF <br /><span className="italic text-gold-elite">EXPERIENCE</span></>}
          </h2>
          <p className="text-bronze-accent uppercase tracking-[4px] text-xs">
            {isAr ? 'لماذا يقود هذا النظام إلى عوائد استثمارية لا مثيل لها.' : 'Why this ecosystem drives unrivaled ROI.'}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold-elite/10 border border-gold-elite/10 ${isAr ? 'flex-row-reverse' : ''}`}>
          {ALCHEMY.map((item, index) => {
            const Icon = ICONS[index];
            const typedItem = item as { title: string; titleAr: string; desc: string; descAr: string };
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-charcoal p-12 group hover:bg-gold-elite/[0.02] transition-colors ${isAr ? 'text-right' : ''}`}
              >
                <div className={`mb-12 text-gold-elite group-hover:scale-110 transition-transform ${isAr ? 'origin-right' : 'origin-left'}`}>
                  <Icon size={40} strokeWidth={1} />
                </div>
                <h3 className={`text-2xl mb-4 font-serif text-sand-warm ${isAr ? 'font-sans' : ''}`}>
                  {isAr ? typedItem.titleAr : typedItem.title}
                </h3>
                <p className="text-sm font-light text-sand-warm/40 leading-relaxed">
                  {isAr ? typedItem.descAr : typedItem.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
