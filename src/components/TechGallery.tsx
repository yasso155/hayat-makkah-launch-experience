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
      description: isAr 
        ? 'بوابة شفافة بطول 5 أمتار تعرض المخططات المعمارية لحياة مكة برسومات ثلاثية الأبعاد عائمة.' 
        : 'A 5-meter transparent gateway showcasing the Hayat Makkah architectural plans in floating 3D graphics.',
      icon: Monitor
    },
    {
      title: isAr ? 'منحوتة حركية مغناطيسية' : 'Magnetic Kinetic Sculpture',
      feature: isAr ? 'انعدام الجاذبية' : 'Zero Gravity',
      description: isAr 
        ? 'نموذج فيزيائي للمشروع يطفو في الفضاء، يستجيب لقرب الضيوف بحركة عضوية دقيقة.' 
        : 'The physical model of the project levitates in space, responding to guest proximity with subtle organic motion.',
      icon: Radio
    },
    {
      title: isAr ? 'مناظر صوتية توليدية' : 'Generative Soundscapes',
      feature: isAr ? 'صوت ثلاثي الأبعاد مكاني' : '3D Spatial Audio',
      description: isAr 
        ? 'موسيقى تصويرية مؤلفة بواسطة الذكاء الاصطناعي تمزج بين الآلات التقليدية التركية والإيقاعات السعودية الحديثة.' 
        : 'An AI-composed soundtrack blending Turkish traditional instruments with modern Saudi rhythms, spatialized to the visitor position.',
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
        <div className={`flex items-center gap-4 mb-20 ${isAr ? 'flex-row-reverse text-right' : ''}`}>
          <div className="w-12 h-12 rounded-xl bg-gold-elite/10 flex items-center justify-center border border-gold-elite/20">
            <Zap className="text-gold-elite" />
          </div>
          <div>
            <h2 className={`text-4xl md:text-5xl ${isAr ? 'font-sans' : 'font-display'}`}>
              {isAr ? <>معرض <span className="italic text-gold-elite">طليعي</span></> : <>Avant-Garde <span className="italic text-gold-elite">Showcase</span></>}
            </h2>
            <p className="text-xs uppercase tracking-[.4em] opacity-40 mt-2">
              {isAr ? 'دمج الإرث مع المستقبل' : 'Integrating Legacy with Tomorrow'}
            </p>
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
              
              <div className={`text-[10px] uppercase tracking-widest text-emerald-deep font-bold mb-4 flex items-center gap-2 ${isAr ? 'flex-row-reverse' : ''}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-deep" />
                {item.feature}
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
