import { motion } from 'motion/react';
import { TIMELINE } from '../constants';
import { Clock, MapPin } from 'lucide-react';

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-elite/5 blur-[150px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-px bg-gold-elite/40" />
            <span className="text-[11px] uppercase tracking-[4px] text-gold-elite font-bold">
              Cultural Experience
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl mb-6">
            CURATED CULTURAL <span className="text-gold-elite italic">EXPRESSION</span>
          </h2>
          <p className="text-sand-warm/60 font-light text-lg mb-8 max-w-2xl">
            Emotional, controlled, and deeply symbolic.
          </p>

          <div className="bg-charcoal-dark/50 border border-gold-elite/20 p-4 rounded-xl flex flex-col gap-2 max-w-xl mb-24">
            <div className="text-[9px] uppercase tracking-[2px] text-gold-elite">Experience Note</div>
            <div className="text-xs text-sand-warm/60 font-light leading-relaxed">
              Guests witness a powerful, controlled cultural expression that deepens the emotional connection within a highly curated architectural setting.
            </div>
          </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {TIMELINE.map((item, index) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 group"
            >
              <div className="flex flex-col items-center md:items-end">
                <span className="text-3xl font-mono text-gold-elite tracking-tighter">{item.time}</span>
                <span className="text-[10px] uppercase tracking-widest opacity-40 mt-1">PM GST</span>
              </div>

              <div className="glass-morphism p-10 rounded-[2.5rem] relative overflow-hidden group-hover:border-gold-elite/30 transition-all">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Clock size={80} />
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <h3 className="text-4xl">{item.title}</h3>
                  <div className="h-1 w-1 rounded-full bg-gold-elite" />
                  <span className="text-gold-elite italic font-display text-xl">{item.subtitle}</span>
                </div>

                <p className="text-ivory-warm/60 font-light text-lg leading-relaxed mb-6 max-w-2xl">
                  {item.description}
                </p>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-60">
                    <MapPin size={14} className="text-gold-elite" />
                    {item.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-60">
                    <span className="w-2 h-2 rounded-full bg-emerald-deep" />
                    Dress Code: Formal Elite
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
