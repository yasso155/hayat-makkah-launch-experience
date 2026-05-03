import { motion } from 'motion/react';
import { ASSETS } from '../constants';

interface EventBrandingProps {
  lang?: 'en' | 'ar';
}

export default function EventBranding({ lang = 'en' }: EventBrandingProps) {
  const isAr = lang === 'ar';

  const PILLARS = [
    {
      num: '01',
      title: isAr ? 'بوابة الدخول' : 'Entrance Arch',
      desc: isAr ? 'الانطباع الأول' : 'The first impression'
    },
    {
      num: '02',
      title: isAr ? 'لوحات إرشادية' : 'Wayfinding Signage',
      desc: isAr ? 'تدفق مكاني سلس' : 'Seamless spatial flow'
    },
    {
      num: '03',
      title: isAr ? 'تجهيزات الطاولات' : 'Table Setups',
      desc: isAr ? 'أناقة هندسية' : 'Geometric elegance'
    },
    {
      num: '04',
      title: isAr ? 'خلفية المسرح' : 'Stage Backdrop',
      desc: isAr ? 'أناقة إسلامية حديثة' : 'Modern Islamic elegance'
    }
  ];

  return (
    <section id="execution" className="relative py-32 bg-charcoal overflow-hidden border-y border-gold-elite/20">
      {/* Background Image (Subtle) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ASSETS.approach} 
          alt="Event Branding" 
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`mb-24 max-w-3xl ${isAr ? 'mr-auto text-right' : ''}`}>
          <div className={`flex items-center gap-4 mb-8 ${isAr ? 'flex-row-reverse' : ''}`}>
            <span className="w-12 h-px bg-gold-elite/40" />
            <span className="text-[11px] uppercase tracking-[4px] text-gold-elite font-bold">
              {isAr ? 'هوية وتصميم الفعالية' : 'Event Branding & Design'}
            </span>
          </div>
          
          <h2 className={`text-6xl md:text-8xl mb-8 leading-[0.9] text-sand-warm ${isAr ? 'font-sans' : 'font-serif'}`}>
            {isAr ? <>هوية <br /><span className="italic text-gold-elite">بصرية ومكانية</span></> : <>VISUAL & <br /><span className="italic text-gold-elite">SPATIAL IDENTITY</span></>}
          </h2>
          
          <p className="text-xl md:text-2xl text-sand-warm/60 font-light leading-relaxed mb-6">
            {isAr 
              ? 'نظام بصري موحد عبر الفعالية بأكملها، يدمج الفخامة الحديثة مع الألوان المستوحاة من مكة.' 
              : 'A unified visual system across the entire event, merging modern luxury with Makkah-inspired tones.'}
          </p>

          <div className="bg-charcoal-dark/50 border border-gold-elite/20 p-4 rounded-xl flex flex-col gap-2 max-w-lg mt-8">
            <div className="text-[9px] uppercase tracking-[2px] text-gold-elite">Experience Note</div>
            <div className="text-xs text-sand-warm/60 font-light leading-relaxed">
              {isAr 
                ? 'يتنقل الضيوف في عالم جمالي متماسك، ويتعرفون على الألوان المستوحاة من مكة والأناقة الهندسية في كل منعطف.' 
                : 'Guests navigate a cohesive aesthetic world, recognizing Makkah-inspired tones and geometric elegance at every turn.'}
            </div>
          </div>
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
