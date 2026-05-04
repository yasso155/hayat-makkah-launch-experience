import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight, Printer, Languages, Play, Pause, Gift, Smartphone, Bus, Coffee } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { PRESENTATION_SLIDES } from '../constants';

type Language = 'en' | 'ar';

interface PresentationLayerProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

// Direction for cinematic slide transitions
type Direction = 'forward' | 'backward';

export default function PresentationLayer({ lang, setLang }: PresentationLayerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<Direction>('forward');
  const [printMode, setPrintMode] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSlides = PRESENTATION_SLIDES.length;

  const goToSlide = useCallback((index: number, dir: Direction) => {
    setDirection(dir);
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1, 'forward');
    }
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1, 'backward');
    }
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
      if (e.key === ' ') { e.preventDefault(); setIsAutoPlay(p => !p); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Auto-play
  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide(prev => {
          if (prev >= totalSlides - 1) {
            setIsAutoPlay(false);
            return prev;
          }
          setDirection('forward');
          return prev + 1;
        });
      }, 5000);
    }
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isAutoPlay, totalSlides]);

  // PDF Export — renders all slides then triggers print dialog
  const handleExportPDF = () => {
    setIsPrinting(true);
    setPrintMode(true);
    // Wait for the full print view to render, then print
    setTimeout(() => {
      window.print();
      // Restore normal view after print dialog closes
      setTimeout(() => {
        setPrintMode(false);
        setIsPrinting(false);
      }, 500);
    }, 600);
  };

  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en');
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  // ── PRINT MODE: render all slides for PDF export ──
  if (printMode) {
    return (
      <div style={{ background: '#0F0F0F' }} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {PRESENTATION_SLIDES.map((slide, idx) => (
          <PrintSlide key={idx} slide={slide} index={idx} lang={lang} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 z-[100] bg-charcoal font-sans overflow-hidden`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* ── PROGRESS BAR ── */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-gold-elite z-[60]"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* ── TOP CONTROL BAR ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-0 inset-x-0 z-50"
      >
        <div className="flex items-center justify-between px-10 pt-8 pb-16 bg-gradient-to-b from-charcoal/80 via-charcoal/30 to-transparent pointer-events-none">
          {/* Brand */}
          <div className="pointer-events-auto flex items-center gap-4">
            <div>
              <div className="text-gold-elite font-serif text-base font-bold tracking-wider leading-none">EMLAK EVENT Proposal</div>
              <div className="text-sand-warm/30 font-mono text-[8px] uppercase tracking-[0.5em] mt-1">
                {currentSlide + 1}/{totalSlides}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="pointer-events-auto flex items-center gap-3">
            {/* Auto Play */}
            <button
              onClick={() => setIsAutoPlay(p => !p)}
              title={isAutoPlay ? 'Pause' : 'Auto Play'}
              className={`w-9 h-9 flex items-center justify-center rounded-full border transition-all ${
                isAutoPlay
                  ? 'bg-gold-elite text-charcoal border-gold-elite'
                  : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
              }`}
            >
              {isAutoPlay ? <Pause size={12} /> : <Play size={12} />}
            </button>

            {/* Language */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gold-elite hover:text-charcoal transition-all"
            >
              <Languages size={13} />
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>

            {/* PDF Export */}
            <button
              onClick={handleExportPDF}
              disabled={isPrinting}
              className="flex items-center gap-2 bg-gold-elite text-charcoal px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-gold-elite/20 disabled:opacity-60"
            >
              <Printer size={13} />
              {isPrinting
                ? (lang === 'en' ? 'Preparing...' : 'جاري التجهيز...')
                : (lang === 'en' ? 'Export PDF' : 'تصدير PDF')
              }
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── MAIN SLIDE AREA ── */}
      <div className="w-full h-full relative">
        <AnimatePresence mode="wait" custom={direction}>
          <SlideContent
            key={`${currentSlide}-${lang}`}
            slide={PRESENTATION_SLIDES[currentSlide]}
            index={currentSlide}
            direction={direction}
            lang={lang}
          />
        </AnimatePresence>
      </div>

      {/* ── NAV ARROWS ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-16 inset-x-0 flex items-center justify-center gap-6 z-50"
      >
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-gold-elite hover:border-gold-elite hover:text-charcoal transition-all disabled:opacity-0"
        >
          {lang === 'ar' ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>

        {/* Dot Navigation */}
        <div className="flex items-center gap-2">
          {PRESENTATION_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx, idx > currentSlide ? 'forward' : 'backward')}
              className="transition-all duration-300 rounded-full"
              style={{
                width: idx === currentSlide ? '28px' : '6px',
                height: '6px',
                backgroundColor: idx === currentSlide ? '#C5A059' : 'rgba(197,160,89,0.25)',
              }}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-gold-elite hover:border-gold-elite hover:text-charcoal transition-all disabled:opacity-0"
        >
          {lang === 'ar' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </motion.div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// ANIMATED SLIDE CONTENT
// ──────────────────────────────────────────────────────────────────────────────
const slideVariants = {
  enter: (dir: Direction) => ({
    x: dir === 'forward' ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: Direction) => ({
    x: dir === 'forward' ? '-100%' : '100%',
    opacity: 0,
  }),
};

function SlideContent({
  slide,
  index,
  direction,
  lang = 'en',
}: {
  slide: any;
  index: number;
  direction: Direction;
  lang?: Language;
}) {
  const isAr = lang === 'ar';
  const isCover = slide.type === 'cover';
  const isClosing = slide.type === 'closing';

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.75, ease: [0.77, 0, 0.175, 1] }}
      className="absolute inset-0 w-full h-full"
    >
      <div className={`w-full h-full relative overflow-hidden bg-charcoal`}>

        {/* ── BACKGROUND IMAGE with Ken Burns ── */}
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1.03 }}
          transition={{ duration: 8, ease: 'linear' }}
          className="absolute inset-0 z-0"
        >
          {slide.image && (
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.85) contrast(1.05)' }}
            />
          )}
        </motion.div>

        {/* ── GRADIENT OVERLAYS ── */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-charcoal/80 via-charcoal/20 to-transparent" />

        {/* ── DECORATIVE GOLD LINE ── */}
        {!isCover && !isClosing && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-gold-elite/80 via-gold-elite/20 to-transparent z-[3] origin-left"
          />
        )}

        {/* ── TEXT CONTENT ── */}
        <div className={`relative z-10 w-full h-full flex flex-col ${
          isCover || isClosing
            ? 'items-center justify-center text-center px-16'
            : 'justify-end px-16 md:px-24 pb-28'
        }`}>

          {(isCover || isClosing) ? (
            // ── COVER / CLOSING LAYOUT ──
            <div className="flex flex-col items-center gap-8 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.9 }}
                className="w-24 h-[1px] bg-gold-elite mx-auto"
              />

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`font-serif text-sand-warm tracking-tight drop-shadow-2xl ${
                  isCover ? 'text-7xl md:text-[10vw]' : 'text-6xl md:text-8xl'
                } ${isAr ? 'leading-[1.15]' : 'leading-none'}`}
              >
                {isAr ? slide.titleAr : slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.9 }}
                className={`text-gold-elite uppercase tracking-[0.4em] text-sm md:text-xl font-light ${isAr ? 'leading-relaxed' : ''}`}
              >
                {isAr ? slide.subtitleAr : slide.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.8 }}
                className="w-16 h-[1px] bg-gold-elite/40 mx-auto"
              />

              {isCover && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="text-sand-warm/30 font-mono text-[9px] uppercase tracking-[0.6em]"
                >
                  {lang === 'en' ? 'USE ← → TO NAVIGATE' : 'استخدم أسهم لوحة المفاتيح للتنقل'}
                </motion.div>
              )}
            </div>
          ) : (
            // ── CONTENT SLIDE LAYOUT ──
            <div className={`max-w-5xl ${isAr ? 'mr-auto text-right' : ''}`}>

              {/* Phase label */}
              <motion.div
                initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className={`flex items-center gap-4 mb-6 ${isAr ? 'flex-row-reverse' : ''}`}
              >
                <span className="text-gold-elite font-mono text-xs font-bold uppercase tracking-[0.6em]">
                  {isAr
                    ? `${(index + 1).toString().padStart(2, '0')} — المرحلة`
                    : `PHASE ${(index + 1).toString().padStart(2, '0')}`}
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className={`h-[1px] w-16 bg-gold-elite/50 origin-left`}
                />
              </motion.div>

              {/* Title */}
              <div className="overflow-hidden pb-8 mb-2">
                <motion.h2
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className={`font-serif text-sand-warm tracking-tight text-[clamp(3rem,7vw,8rem)] drop-shadow-xl ${isAr ? 'leading-[1.15]' : 'leading-none'}`}
                >
                  {isAr ? slide.titleAr : slide.title}
                </motion.h2>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.8 }}
                className={`text-gold-elite uppercase tracking-[0.3em] text-lg md:text-2xl font-light mb-6 ${isAr ? 'leading-relaxed' : ''}`}
              >
                {isAr ? slide.subtitleAr : slide.subtitle}
              </motion.p>

              {/* Description */}
              {slide.description && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.8 }}
                  className={`text-sand-warm/90 text-lg md:text-2xl font-light leading-relaxed max-w-2xl ${isAr ? 'leading-loose' : ''} drop-shadow-md`}
                >
                  {isAr ? slide.descriptionAr : slide.description}
                </motion.p>
              )}

              {/* ── HOSPITALITY GRID ── */}
              {slide.type === 'hospitality' && slide.sections && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 w-full max-w-6xl"
                >
                  {slide.sections.map((section: any, sIdx: number) => {
                    const Icon = { Gift, Smartphone, Bus, Coffee }[section.icon as keyof typeof Icon] || Gift;
                    return (
                      <div
                        key={section.id}
                        className="glass-morphism p-8 rounded-2xl flex flex-col items-center text-center gap-4 group hover:bg-gold-elite/10 transition-all duration-500 border-gold-elite/10 hover:border-gold-elite/40"
                      >
                        <div className="w-16 h-16 rounded-full bg-gold-elite/10 flex items-center justify-center text-gold-elite group-hover:scale-110 transition-transform duration-500">
                          <Icon size={32} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-gold-elite font-serif text-xl mb-1">{isAr ? section.titleAr : section.title}</h3>
                          <div className="text-sand-warm/40 font-mono text-[10px] uppercase tracking-widest">{isAr ? section.title : section.titleAr}</div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          )}
        </div>

        {/* ── SLIDE NUMBER (decorative, bottom-right) ── */}
        {!isCover && !isClosing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className={`absolute bottom-8 ${isAr ? 'left-10' : 'right-10'} z-[2] text-sand-warm/[0.06] font-serif italic leading-none pointer-events-none`}
            style={{ fontSize: 'clamp(6rem, 18vw, 22rem)' }}
          >
            {(index + 1).toString().padStart(2, '0')}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// PRINT SLIDE (PDF-optimized, static)
// ──────────────────────────────────────────────────────────────────────────────
function PrintSlide({ slide, index, lang }: { slide: any; index: number; lang: Language }) {
  const isAr = lang === 'ar';
  const isCover = slide.type === 'cover';
  const isClosing = slide.type === 'closing';

  return (
    <div
      className="relative overflow-hidden bg-charcoal"
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        width: '297mm',
        height: '210mm',
        maxWidth: '100%',
        pageBreakAfter: 'always',
        breakAfter: 'page',
        display: 'flex',
        alignItems: isCover || isClosing ? 'center' : 'flex-end',
        justifyContent: isCover || isClosing ? 'center' : 'flex-start',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0F0F0F',
      }}
    >
      {/* Background image */}
      {slide.image && (
        <img
          src={slide.image}
          alt={slide.title}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.85) contrast(1.1)',
          }}
        />
      )}

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(15,15,15,0.97) 30%, rgba(15,15,15,0.2) 70%, transparent)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(15,15,15,0.6), transparent)',
      }} />

      {/* Gold bottom line */}
      {!isCover && !isClosing && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(to right, #C5A059cc, #C5A05933, transparent)',
        }} />
      )}

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        padding: isCover || isClosing ? '0' : '0 6rem 6rem',
        textAlign: isCover || isClosing ? 'center' : (isAr ? 'right' : 'left'),
        maxWidth: isCover || isClosing ? '100%' : '800px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCover || isClosing ? 'center' : (isAr ? 'flex-end' : 'flex-start'),
        gap: '1rem',
      }}>

        {/* Phase label for content slides */}
        {!isCover && !isClosing && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            flexDirection: isAr ? 'row-reverse' : 'row',
            marginBottom: '0.5rem',
          }}>
            <span style={{
              color: '#C5A059',
              fontFamily: 'monospace',
              fontSize: '0.65rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.5em',
            }}>
              {isAr ? `المرحلة ${(index + 1).toString().padStart(2, '0')}` : `PHASE ${(index + 1).toString().padStart(2, '0')}`}
            </span>
            <div style={{ height: '1px', width: '48px', backgroundColor: '#C5A05966' }} />
          </div>
        )}

        {/* Cover decorative line */}
        {(isCover || isClosing) && (
          <div style={{ width: '80px', height: '1px', backgroundColor: '#C5A059', marginBottom: '1rem' }} />
        )}

        {/* Title */}
        <h2 style={{
          fontFamily: '"Playfair Display", "Alexandria", Georgia, serif',
          color: '#EAE3D2',
          lineHeight: isAr ? 1.2 : 1,
          letterSpacing: '-0.02em',
          fontSize: isCover ? 'clamp(4rem, 10vw, 9rem)' : isClosing ? '5rem' : 'clamp(3rem, 7vw, 7rem)',
          fontWeight: 400,
          margin: 0,
          paddingBottom: isAr ? '1rem' : '0',
          textShadow: '0 4px 20px rgba(0,0,0,0.6)',
        }}>
          {isAr ? slide.titleAr : slide.title}
        </h2>

        <p style={{
          fontFamily: '"Inter", "Tajawal", sans-serif',
          color: '#C5A059',
          textTransform: 'uppercase',
          letterSpacing: '0.4em',
          fontSize: '0.85rem',
          fontWeight: 300,
          margin: '0.5rem 0',
        }}>
          {isAr ? slide.subtitleAr : slide.subtitle}
        </p>

        {slide.description && !isCover && !isClosing && (
          <p style={{
            fontFamily: '"Inter", "Tajawal", sans-serif',
            color: 'rgba(234,227,210,0.95)',
            fontSize: '1.1rem',
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: '650px',
            margin: 0,
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}>
            {isAr ? slide.descriptionAr : slide.description}
          </p>
        )}

        {/* Hospitality Grid for Print */}
        {slide.type === 'hospitality' && slide.sections && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            marginTop: '3rem',
            width: '100%',
          }}>
            {slide.sections.map((section: any) => (
              <div key={section.id} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(197,160,89,0.2)',
                borderRadius: '1rem',
                padding: '2rem 1rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '50%',
                  background: 'rgba(197,160,89,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C5A059',
                }}>
                  {/* Static icon placeholder for print */}
                  <div style={{ fontSize: '1.5rem' }}>✧</div>
                </div>
                <div>
                  <h3 style={{ color: '#C5A059', margin: '0 0 0.25rem 0', fontFamily: '"Playfair Display", serif', fontSize: '1.25rem' }}>
                    {isAr ? section.titleAr : section.title}
                  </h3>
                  <div style={{ color: 'rgba(234,227,210,0.4)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {isAr ? section.title : section.titleAr}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Decorative bottom line for cover */}
        {(isCover || isClosing) && (
          <div style={{ width: '48px', height: '1px', backgroundColor: 'rgba(197,160,89,0.4)', marginTop: '0.5rem' }} />
        )}
      </div>

      {/* Decorative slide number for content slides */}
      {!isCover && !isClosing && (
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          [isAr ? 'left' : 'right']: '2.5rem',
          color: 'rgba(234,227,210,0.05)',
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: '18vw',
          fontStyle: 'italic',
          lineHeight: 1,
          pointerEvents: 'none',
          zIndex: 2,
        }}>
          {(index + 1).toString().padStart(2, '0')}
        </div>
      )}
    </div>
  );
}
