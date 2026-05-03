import { motion } from 'motion/react';
import { HOSPITALITY_NODES } from '../constants';
import { UserCheck, Car, PhoneCall, QrCode, Smartphone } from 'lucide-react';

const ICONS = [UserCheck, Car, Smartphone];

interface HospitalitySystemProps {
  onOpenPresentation?: () => void;
  lang?: 'en' | 'ar';
}

export default function HospitalitySystem({ onOpenPresentation, lang = 'en' }: HospitalitySystemProps) {
  const isAr = lang === 'ar';

  return (
    <section id="hospitality" className="py-32 bg-charcoal relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] border-y border-gold-elite/5 islamic-grid-mask opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-[1fr_400px] gap-20 items-center mb-24 ${isAr ? 'flex-row-reverse' : ''}`}>
          <div className={isAr ? 'text-right' : 'text-left'}>
            <span className="text-[11px] uppercase tracking-[4px] text-gold-elite mb-6 block font-bold">
              {isAr ? 'الكونسيرج والضيافة' : 'Concierge & Hospitality'}
            </span>
            <h2 className={`text-5xl md:text-8xl mb-8 text-gold-elite uppercase leading-[0.9] ${isAr ? 'font-sans' : 'font-serif'}`}>
              {isAr ? <>دعم الضيوف<br /><span className="italic text-sand-warm">السلس</span></> : <>SEAMLESS <br /><span className="italic text-sand-warm">GUEST</span> <br />SUPPORT</>}
            </h2>
            <p className="text-lg md:text-xl text-sand-warm/60 font-light max-w-xl leading-relaxed mb-6">
              {isAr 
                ? 'إدارة خفية تدعم تجربة لا تشوبها شائبة. نحن ندير بنية تحتية متكاملة للضيافة.' 
                : 'Unseen management powering a flawless experience. We manage a full-service hospitality infrastructure.'}
            </p>
            
            <div className={`bg-charcoal-dark/50 border border-gold-elite/20 p-4 rounded-xl flex flex-col gap-2 max-w-xl mb-10 ${isAr ? 'items-end' : ''}`}>
              <div className="text-[9px] uppercase tracking-[2px] text-gold-elite">Experience Note</div>
              <div className={`text-xs text-sand-warm/60 font-light leading-relaxed ${isAr ? 'text-right' : ''}`}>
                {isAr 
                  ? 'يشعر الضيوف بحضور صامت ومستمر يتوقع احتياجاتهم قبل ظهورها، مما يضمن زيارة خالية من الجهد.' 
                  : 'Guests feel a silent, constant presence anticipating their needs before they arise, ensuring an effortless visit.'}
              </div>
            </div>
            {onOpenPresentation && (
               <button 
                onClick={onOpenPresentation}
                className={`group flex items-center gap-4 text-gold-elite text-[10px] font-bold uppercase tracking-[0.4em] hover:opacity-70 transition-all ${isAr ? 'flex-row-reverse' : ''}`}
               >
                 <div className="w-12 h-px bg-gold-elite/30 group-hover:w-20 transition-all" />
                 <span>{isAr ? 'تصدير ملف النظام (PDF)' : 'Export System Profile (PDF)'}</span>
               </button>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className={`glass-morphism p-8 rounded-3xl border-gold-elite/30 relative overflow-hidden group ${isAr ? 'text-right' : ''}`}>
               <div className={`absolute top-0 opacity-10 p-6 ${isAr ? 'left-0' : 'right-0'}`}>
                 <QrCode size={60} />
               </div>
               <span className="text-[10px] uppercase tracking-[3px] text-gold-elite mb-2 block">{isAr ? 'وصول سريع' : 'Quick Access'}</span>
               <h4 className="text-2xl mb-4 text-sand-warm">{isAr ? 'التكامل الذكي' : 'Smart Integration'}</h4>
               <p className="text-xs text-sand-warm/50 leading-relaxed font-light">
                 {isAr 
                  ? 'نظام QR موحد يربط مفاتيح الغرف، الكونسيرج، الانتقالات، وتفاصيل البرنامج.' 
                  : 'Unified QR system connecting Room Keys, Concierge, Transfers, and Program details.'}
               </p>
            </div>
            
            <div className={`flex items-center gap-4 bg-emerald-deep/10 border border-emerald-deep/20 p-6 rounded-3xl ${isAr ? 'flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 rounded-full bg-emerald-deep flex items-center justify-center text-gold-elite">
                <PhoneCall size={20} />
              </div>
              <div className={isAr ? 'text-right' : ''}>
                <span className="text-[10px] uppercase tracking-[3px] text-emerald-deep font-bold block">{isAr ? 'بروتوكول الخط الساخن' : 'Hotline Protocol'}</span>
                <span className="text-sm font-medium">{isAr ? 'الكونسيرج الثقافي < 3 رنات' : 'Cultural Concierge < 3 Rings'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isAr ? 'flex-row-reverse' : ''}`}>
          {HOSPITALITY_NODES.map((node, index) => {
            const Icon = ICONS[index];
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 border border-white/5 p-10 rounded-[3rem] hover:border-gold-elite/30 transition-all group ${isAr ? 'text-right' : ''}`}
              >
                <div className={`flex justify-between items-start mb-10 ${isAr ? 'flex-row-reverse' : ''}`}>
                  <div className="w-14 h-14 rounded-2xl bg-gold-elite/10 flex items-center justify-center text-gold-elite group-hover:bg-gold-elite group-hover:text-charcoal transition-all">
                    <Icon size={28} />
                  </div>
                  <div className={`px-3 py-1 rounded-full border border-gold-elite/30 text-[9px] uppercase tracking-widest text-gold-elite/70 ${isAr ? 'font-sans' : ''}`}>
                    {isAr ? 'إدارة ميدانية' : 'On-Ground Management'}
                  </div>
                </div>
                
                <h3 className={`text-3xl mb-6 font-serif ${isAr ? 'font-sans' : ''}`}>{isAr ? node.titleAr : node.title}</h3>
                <p className="text-sm text-sand-warm/40 font-light leading-relaxed mb-8">
                  {isAr ? node.descriptionAr : node.description}
                </p>

                <ul className="space-y-4">
                  {(isAr ? node.featuresAr : node.features).map((feature, fidx) => (
                    <li key={fidx} className={`flex items-center gap-3 text-[10px] uppercase tracking-[2px] font-bold text-bronze-accent ${isAr ? 'flex-row-reverse' : ''}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-elite" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-40">
           <div className="text-[10px] uppercase tracking-[3px] py-4 border-y border-gold-elite/20 text-center">{isAr ? 'إحاطة وتجهيز ما قبل الوصول' : 'Pre-Arrival Briefing & Setup'}</div>
           <div className="text-[10px] uppercase tracking-[3px] py-4 border-y border-gold-elite/20 text-center">{isAr ? 'تتبع ميداني في الوقت الفعلي' : 'Live On-Ground Tracking'}</div>
           <div className="text-[10px] uppercase tracking-[3px] py-4 border-y border-gold-elite/20 text-center">{isAr ? 'متابعات ما بعد المغادرة' : 'Post-Departure Follow-Ups'}</div>
        </div>
      </div>
    </section>
  );
}
