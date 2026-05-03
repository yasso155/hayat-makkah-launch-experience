import { motion } from 'motion/react';
import { Monitor, Cpu, Radio, Zap } from 'lucide-react';

interface TechGalleryProps {
  lang?: 'en' | 'ar';
}

const TECH_ITEMS = (lang: 'en' | 'ar') => {
  const isAr = lang === 'ar';
  return [
    {
      title: isAr ? 'بوابة OLED الشفافة' : 'Transparent OLED Portal',
      feature: isAr ? 'دقة 8K' : '8K Clarity',
      execution: isAr ? 'تزامن مباشر' : 'Live Sync',
      description: isAr 
        ? 'بوابة شفافة بطول 5 أمتار تعرض المخططات المعمارية. يتم التحكم في محتواها مباشرة من غرفة التحكم الرئيسية.' 
        : 'A 5-meter transparent gateway showcasing architectural plans in floating 3D. Content is actively managed and triggered by our live show callers.',
      icon: Monitor
    },
    {
      title: isAr ? 'منحوتة حركية مغناطيسية' : 'Magnetic Kinetic Sculpture',
      feature: isAr ? 'انعدام الجاذبية' : 'Zero Gravity',
      execution: isAr ? 'معايرة دقيقة' : 'Precision-Calibrated',
      description: isAr 
        ? 'نموذج فيزيائي يطفو في الفضاء بحركة عضوية دقيقة. يخضع لمراقبة تقنية مستمرة لضمان التوازن المثالي.' 
        : 'The physical model levitates in space with subtle organic motion. It is continuously monitored by our technical crew to ensure perfect stabilization.',
      icon: Radio
    },
    {
      title: isAr ? 'مناظر صوتية توليدية' : 'Generative Soundscapes',
      feature: isAr ? 'صوت ثلاثي الأبعاد مكاني' : '3D Spatial Audio',
      execution: isAr ? 'مراقبة حية' : 'Live-Monitored',
      description: isAr 
        ? 'موسيقى تصويرية تمزج بين الآلات التركية والإيقاعات السعودية، تتم معايرتها حياً لتتناسب مع ديناميكية الفعالية.' 
        : 'An AI-composed soundtrack blending Turkish instruments with Saudi rhythms, actively mixed on-site to match the crowd dynamic.',
      icon: Cpu
    }
  ];
};

export default function TechGallery({ lang = 'en' }: TechGalleryProps) {
  const isAr = lang === 'ar';
  const items = TECH_ITEMS(lang);

  return (
    <section id="tech" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-16 ${isAr ? 'flex flex-col items-end text-right' : ''}`}>
          <div className={`flex items-center gap-4 mb-6 ${isAr ? 'flex-row-reverse' : ''}`}>
            <span className="w-8 h-px bg-gold-elite/40" />
            <span className="text-[11px] uppercase tracking-[4px] text-gold-elite font-bold">
              {isAr ? 'السرد الرقمي' : 'Digital Storytelling'}
            </span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl mb-6 ${isAr ? 'font-sans' : 'font-display'}`}>
            {isAr ? <>سرد بصري <span className="italic text-gold-elite">متزامن</span></> : <>SYNCHRONIZED VISUAL <span className="italic text-gold-elite">NARRATIVE</span></>}
          </h2>
          <p className="text-sand-warm/60 font-light text-lg max-w-lg mb-8">
            {isAr 
              ? '20 شاشة رقمية موزعة عبر المدخل والممرات والطريق إلى القاعة.' 
              : '20 digital screens across the Entrance, Corridors, and Hall approach.'}
          </p>

          <div className="bg-charcoal-dark/50 border border-gold-elite/20 p-4 rounded-xl flex flex-col gap-2 max-w-md">
            <div className="text-[9px] uppercase tracking-[2px] text-gold-elite">Experience Note</div>
            <div className="text-xs text-sand-warm/60 font-light leading-relaxed">
              {isAr 
                ? 'ينغمس الضيوف في قصة محيطية بـ 360 درجة، يسيرون جسدياً عبر إضاءة متغيرة ومناظر رقمية ديناميكية.' 
                : 'Guests are immersed in a 360-degree story, physically walking through shifting light and dynamic digital landscapes.'}
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden ${isAr ? 'flex-row-reverse' : ''}`}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group p-12 bg-charcoal-dark hover:bg-gold-elite/[0.02] transition-colors ${isAr ? 'text-right' : ''}`}
            >
              <div className={`mb-10 text-gold-elite group-hover:scale-110 transition-transform ${isAr ? 'origin-right' : 'origin-left'}`}>
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              
              <div className={`flex flex-wrap gap-2 mb-4 ${isAr ? 'flex-row-reverse' : ''}`}>
                <div className={`text-[9px] uppercase tracking-widest text-emerald-deep font-bold flex items-center gap-1.5 ${isAr ? 'flex-row-reverse' : ''}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-deep" />
                  {item.feature}
                </div>
                <div className={`text-[9px] uppercase tracking-widest text-gold-elite font-bold flex items-center gap-1.5 ${isAr ? 'flex-row-reverse' : ''}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-elite" />
                  {item.execution}
                </div>
              </div>
              
              <h3 className={`text-2xl mb-6 ${isAr ? 'font-sans' : ''}`}>{item.title}</h3>
              
              <p className="text-ivory-warm/40 font-light leading-relaxed group-hover:text-ivory-warm/60 transition-colors">
                {item.description}
              </p>

              <div className={`mt-12 h-px w-0 group-hover:w-full bg-gradient-to-r from-gold-elite to-transparent transition-all duration-700 ${isAr ? 'rotate-180' : ''}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
