export interface EventSection {
  id: string;
  title: string;
  description: string;
  category: 'spatial' | 'cultural' | 'tech' | 'mobility';
  image?: string;
}

export interface TrajectoryPoint {
  id: string;
  title: string;
  subtitle: string;
}

export const ASSETS = {
  logo: '/assets/logo.png',
  cover: '/assets/cover.png',
  hero: '/assets/Who We Are.png',
  overview: '/assets/Experience Overview.png',
  corridor: '/assets/Firefly_gpt-image_luxury event entrance tunnel with LED walls, futuristic corridor, glowing light strip 386796.png',
  networking: '/assets/networking lounge.png',
  stage: '/assets/stage.png',
  flow: '/assets/Mobility Flow.png',
  host: '/assets/The Personal Host.png',
  uniform: '/assets/Firefly_gpt-image_close-up of luxury staff uniform, embroidered cultural pattern, elegant fabric textur 386796.png',
  smart: '/assets/Smart QR System.png',
  concierge: '/assets/Hotline Concierge.png',
  welcome: '/assets/Arrival Details (2).png',
  car: '/assets/Firefly_gpt-image_luxury car GMC with subtle emerald and logo gold branding, , premium transport design 386796.png',
  tablet: '/assets/Firefly_gpt-image_luxury car interior, tablet screen showing personalized welcome message with guest na 386796.png',
  signage: '/assets/Firefly_gpt-image_event pickup signage stand, emerald green with gold text, minimal typography, placed  386796.png',
  package: '/assets/Firefly_gpt-image_luxury hotel welcome package, emerald leather folder with gold embossed logo, premium 386796.png',
  gift: '/assets/Firefly_gpt-image_luxury gift set with branded cards, keychains, packaging, emerald and gold identity,  386796.png',
  amenities: '/assets/Micro Luxury.png',
  night: '/assets/Firefly_gpt-image_luxury night event scene, cultural wall with arabic typography, warm lighting, calm a 386796.png',
  reveal: '/assets/Firefly_gpt-image_futuristic building emerging from light, holographic architecture reveal, glowing par 386796.png',
  airport: '/assets/Airport Arrival.png',
  closing: '/assets/Closing.png',
  approach: '/assets/Our Approach.png',
  gest_flow: '/assets/The Trajectory.png'
};

export const SECTIONS: (EventSection & { titleAr: string; descriptionAr: string })[] = [
  {
    id: 'mobility-1',
    title: 'Seamless Mobility',
    titleAr: 'تنقل سلس',
    description: 'The Cultural Concierge in your pocket. 24/7 unified smart integration across all touchpoints, from touchdown to departure.',
    descriptionAr: 'الكونسيرج الثقافي في جيبك. تكامل ذكي موحد على مدار الساعة طوال أيام الأسبوع عبر جميع نقاط الاتصال، من الوصول وحتى المغادرة.',
    category: 'mobility',
    image: ASSETS.flow
  },
  {
    id: 'walk-1',
    title: 'Walk the Vision',
    titleAr: 'مسار الرؤية',
    description: '20 synchronized digital screens wrapping the approach in an immersive corridor of Saudi-Turkish architectural dialogue.',
    descriptionAr: '20 شاشة رقمية متزامنة تغلف المدخل في ممر غامر من الحوار المعماري السعودي التركي.',
    category: 'spatial',
    image: ASSETS.corridor
  },
  {
    id: 'wow-1',
    title: 'The Wow Moment',
    titleAr: 'لحظة الإبهار',
    description: 'A cinematic sculptural reveal using kinetic light and holographic projection that defines the future of luxury living.',
    descriptionAr: 'كشف منحوت سينمائي باستخدام الضوء الحركي والاسقاط الهولوغرافي الذي يحدد مستقبل المعيشة الفاخرة.',
    category: 'tech',
    image: ASSETS.stage
  }
];

export const TRAJECTORY: (TrajectoryPoint & { titleAr: string; subtitleAr: string })[] = [
  { id: 'arrival', title: 'Arrival', titleAr: 'الوصول', subtitle: 'Airport Meet & Greet', subtitleAr: 'الاستقبال في المطار' },
  { id: 'transfer', title: 'Elite Transfer', titleAr: 'النقل النخبوي', subtitle: 'Branded VIP Mobility', subtitleAr: 'تنقل كبار الشخصيات المتميز' },
  { id: 'host', title: 'Personal Host', titleAr: 'المضيف الشخصي', subtitle: 'Guest Experience Companion', subtitleAr: 'رفيق تجربة الضيف' },
  { id: 'walk', title: 'Immersive Walk', titleAr: 'ممر التجربة', subtitle: 'Visual Storytelling', subtitleAr: 'سرد قصصي مرئي' },
  { id: 'discovery', title: 'Discovery', titleAr: 'الاستكشاف', subtitle: 'Main Hall & Heritage', subtitleAr: 'القاعة الرئيسية والتراث' },
  { id: 'reveal', title: 'The Reveal', titleAr: 'الكشف', subtitle: 'Ceremony', subtitleAr: 'المراسم' },
  { id: 'connect', title: 'Connect', titleAr: 'التواصل', subtitle: 'Dinner & Networking', subtitleAr: 'العشاء والتواصل' },
  { id: 'exit', title: 'Exit', titleAr: 'المغادرة', subtitle: 'Cultural Passport', subtitleAr: 'الجواز الثقافي' }
];

export const HOSPITALITY_NODES = [
  {
    id: 'airport',
    title: 'Airport Reception',
    titleAr: 'استقبال المطار',
    description: 'A "Cultural Welcome" desk featuring signature emerald/gold branding, delivering chilled premium water and fine Turkish delight.',
    descriptionAr: 'مكتب "الترحيب الثقافي" الذي يتميز بهوية الزمرد والذهب، ويقدم المياه الفاخرة المبردة والحلقوم التركي الفاخر.',
    features: ['Meet & Greet Desk', 'Selam Welcome Card', 'Cultural Pin Protocol'],
    featuresAr: ['مكتب الاستقبال', 'بطاقة ترحيب "سلام"', 'بروتوكول دبوس الثقافة']
  },
  {
    id: 'mobility',
    title: 'VIP Transfer',
    titleAr: 'نقل كبار الشخصيات',
    description: 'Subtle branded luxury fleet equipped with tablets for real-time schedule tracking and multi-language audio greetings.',
    descriptionAr: 'أسطول فاخر يحمل علامة تجارية رقيقة مجهز بأجهزة لوحية لتتبع الجدول الزمني في الوقت الفعلي والتحيات الصوتية متعددة اللغات.',
    features: ['In-car Concierge Tablet', 'Signature Scent Layer', 'Arabic/Turkish Audio'],
    featuresAr: ['جهاز لوحي للكونسيرج داخل السيارة', 'طبقة الرائحة المميزة', 'صوتيات عربية/تركية']
  },
  {
    id: 'companion',
    title: 'Guest Companion',
    titleAr: 'رفيق الضيف',
    description: 'Dedicated proactive hosts providing immediate assistance and navigating the "trajectory" with personalized attention.',
    descriptionAr: 'مضيفون مخصصون مبادرون يقدمون المساعدة الفورية ويتنقلون في "المسار" باهتمام شخصي.',
    features: ['Proactive Assistance', 'Full Digital Guest Profile', 'Direct WhatsApp Line'],
    featuresAr: ['المساعدة المبادرة', 'ملف رقمي كامل للضيف', 'خط مباشر للواتساب']
  }
];

export const ALCHEMY = [
  { title: 'Emotional Connection', titleAr: 'الاتصال العاطفي', desc: 'Immersive storytelling over passive viewing.', descAr: 'سرد قصصي غامر بدلاً من المشاهدة السلبية.' },
  { title: 'Premium Positioning', titleAr: 'مكانة متميزة', desc: 'Uncompromising architectural & hospitality standards.', descAr: 'معايير معمارية وضيافة لا تهاون فيها.' },
  { title: 'Shareable Moments', titleAr: 'لحظات قابلة للمشاركة', desc: 'Visually stunning, hyper-curated touchpoints.', descAr: 'نقاط اتصال مبهرة بصرياً ومنسقة بعناية فائقة.' },
  { title: 'Sales-Driven Architecture', titleAr: 'عمارة موجهة للمبيعات', desc: 'A physical environment optimized for VIP investor conversion.', descAr: 'بيئة فيزيائية محسنة لتحويل مستثمري النخبة.' }
];

export const PRESENTATION_SLIDES = [
  {
    id: 1,
    type: 'cover',
    title: 'Seamless Cultural Hospitality',
    titleAr: 'ضيافة ثقافية سلسة',
    subtitle: 'EMLAK KONUT | VIP GUEST EXPERIENCE',
    subtitleAr: 'إملاك كونوت | تجربة ضيوف كبار الشخصيات',
    image: ASSETS.cover,
    bg: 'bg-emerald-deep'
  },
  {
    id: 2,
    type: 'content',
    title: 'The Production Force',
    titleAr: 'قوة الإنتاج',
    subtitle: 'We don’t just design. We execute.',
    subtitleAr: 'نحن لا نصمم فقط. نحن ننفذ.',
    description: 'A production company dedicated to flawless VIP delivery.',
    descriptionAr: 'شركة إنتاج مخصصة لتنفيذ أرقى تجارب كبار الشخصيات.',
    image: ASSETS.hero
  },
  {
    id: 3,
    type: 'content',
    title: 'Our Approach',
    titleAr: 'نهجنا',
    subtitle: 'Operational Excellence',
    subtitleAr: 'التميز التشغيلي',
    description: 'Precision at every touchpoint of the journey.',
    descriptionAr: 'الدقة في كل نقطة اتصال خلال الرحلة.',
    image: ASSETS.approach
  },
  {
    id: 4,
    type: 'content',
    title: 'The Trajectory',
    titleAr: 'المسار الاستراتيجي',
    subtitle: 'Unified Ecosystem',
    subtitleAr: 'منظومة موحدة',
    description: 'A seamless journey from touchdown to departure.',
    descriptionAr: 'رحلة سلسة من لحظة الهبوط وحتى المغادرة.',
    image: ASSETS.gest_flow
  },
  {
    id: 5,
    type: 'content',
    title: 'Airport Arrival',
    titleAr: 'الوصول للمطار',
    subtitle: 'The First Selam',
    subtitleAr: 'الترحيب الأول',
    description: 'A "Selam" welcome ritual at the VIP Executive Wing. Small portable stands with emerald patterns and signature staff pins.',
    descriptionAr: 'طقوس ترحيب "السلام" في جناح كبار الشخصيات. منصات متنقلة بنقوش زمردية ودبابيس هوية الموظفين.',
    image: ASSETS.airport
  },
  {
    id: 6,
    type: 'content',
    title: 'Arrival Rituals',
    titleAr: 'طقوس الوصول',
    subtitle: 'Sensory Hospitality',
    subtitleAr: 'ضيافة حسية',
    description: 'Cold towels, Taif rose scent, and premium Turkish Delight served with quiet, measured grace.',
    descriptionAr: 'مناشف باردة، عطر ورد الطائف، وحلقوم تركي فاخر يقدم بهدوء ورقي.',
    image: ASSETS.welcome
  },
  {
    id: 7,
    type: 'content',
    title: 'VIP Transfer',
    titleAr: 'نقل كبار الشخصيات',
    subtitle: 'Silent Presence',
    subtitleAr: 'حضور صامت',
    description: 'Subtle vehicle branding with cultural patterns. A sanctuary on wheels featuring integrated Wi-Fi and signature scents.',
    descriptionAr: 'هوية مركبات راقية بنقوش ثقافية. ملاذ متنقل يضم واي فاي وعطوراً حصرية.',
    image: ASSETS.car
  },
  {
    id: 8,
    type: 'content',
    title: 'The Tablet Concierge',
    titleAr: 'كونسيرج الجهاز اللوحي',
    subtitle: 'In-Car Intelligence',
    subtitleAr: 'ذكاء داخل السيارة',
    description: 'Integrated tablets providing real-time itineraries and Ar/En/Tr audio welcome messages.',
    descriptionAr: 'أجهزة لوحية متكاملة توفر جداول العمل ورسائل ترحيب صوتية بالعربية والإنجليزية والتركية.',
    image: ASSETS.tablet
  },
  {
    id: 10,
    type: 'content',
    title: 'Personal Host',
    titleAr: 'المضيف الشخصي',
    subtitle: 'The Human Bridge',
    subtitleAr: 'الجسر البشري',
    description: 'Proactive "Guest Experience Hosts" equipped with smart tablets and trained in diplomatic protocol.',
    descriptionAr: 'مضيفو تجربة الضيوف المبادئون، مجهزون بأجهزة لوحية ذكية ومدربون على البروتوكول الدبلوماسي.',
    image: ASSETS.host
  },
  {
    id: 11,
    type: 'content',
    title: 'Mobility Flow',
    titleAr: 'مسار التنقل',
    subtitle: 'Zero Friction',
    subtitleAr: 'انسيابية مطلقة',
    description: 'Segmented pickup points and unified signage. Dynamic QR codes for precise car and timing allocation.',
    descriptionAr: 'نقاط التقاء مقسمة ولوحات إرشادية موحدة. رموز QR ديناميكية لتحديد السيارات والمواعيد بدقة.',
    image: ASSETS.flow
  },
  {
    id: 12,
    type: 'content',
    title: 'The Smart Layer',
    titleAr: 'الطبقة الذكية',
    subtitle: 'Unified Command',
    subtitleAr: 'قيادة موحدة',
    description: 'One QR ecosystem linking the Guest, the Hotline, the Host, and the Transport fleet.',
    descriptionAr: 'منظومة QR واحدة تربط الضيف والخط الساخن والمضيف وأسطول النقل.',
    image: ASSETS.smart
  },
  {
    id: 13,
    type: 'content',
    title: 'Cultural Concierge',
    titleAr: 'الكونسيرج الثقافي',
    subtitle: 'Hotline 24/7',
    subtitleAr: 'الخط الساخن على مدار الساعة',
    description: 'Expert Ar/Tr support responding in < 3 rings. Handling itineraries, emergencies, and local insights.',
    descriptionAr: 'دعم خبير بالعربية والتركية يستجيب في أقل من 3 رنات. معالجة المسارات والطوارئ والمعلومات المحلية.',
    image: ASSETS.concierge
  },
  {
    id: 14,
    type: 'content',
    title: 'Integration System',
    titleAr: 'نظام التكامل',
    subtitle: 'Connected Logistics',
    subtitleAr: 'لوجستيات متصلة',
    description: 'Visual identity parity across all touchpoints: from WhatsApp messages to physical car cards.',
    descriptionAr: 'تماثل الهوية البصرية عبر جميع نقاط الاتصال: من رسائل الواتساب إلى بطاقات السيارات المادية.',
    image: ASSETS.gift
  },
  {
    id: 15,
    type: 'content',
    title: 'Micro Luxury',
    titleAr: 'الفخامة الدقيقة',
    subtitle: 'The Detail Gap',
    subtitleAr: 'فجوة التفاصيل',
    description: 'Scheduled WhatsApp sequences: Pre-arrival welcome, live support, and post-departure gratitude.',
    descriptionAr: 'سلسلة رسائل واتساب مجدولة: ترحيب ما قبل الوصول، دعم مباشر، وامتنان ما بعد المغادرة.',
    image: ASSETS.amenities
  },
  {
    id: 16,
    type: 'content',
    title: 'Execution Force',
    titleAr: 'قوة التنفيذ',
    subtitle: 'Absolute Control',
    subtitleAr: 'سيطرة مطلقة',
    description: 'A production infrastructure designed to make every interaction feel seamless and effortless.',
    descriptionAr: 'بنية تحتية للإنتاج مصممة لجعل كل تفاعل يبدو سلساً وبدون مجهود.',
    image: ASSETS.reveal
  },
  {
    id: 17,
    type: 'content',
    title: 'VIP Experience Recap',
    titleAr: 'ملخص تجربة النخبة',
    subtitle: 'Heritage & Hospitality',
    subtitleAr: 'التراث والضيافة',
    description: 'A legacy of two lands, flawlessly delivered for the future of Makkah.',
    descriptionAr: 'إرث من بلدين، يتم تقديمه ببراعة لمستقبل مكة.',
    image: ASSETS.night
  },
  {
    id: 18,
    type: 'closing',
    title: 'Let’s Execute',
    titleAr: 'لنبدأ التنفيذ',
    subtitle: 'HAYAT MAKKAH | SEAMLESS HOSPITALITY',
    subtitleAr: 'حياة مكة | ضيافة سلسة',
    image: ASSETS.closing,
    bg: 'bg-emerald-deep'
  }
];

export const TIMELINE = [
  {
    time: '18:00',
    title: 'Touchdown & Welcome',
    subtitle: 'VIP Terminal Reception',
    description: 'Initial entry into the Hayat Makkah ecosystem. Selective greeting and distribution of digital credentials.',
    location: 'Jeddah Executive Wing'
  },
  {
    time: '19:30',
    title: 'The Great Walk',
    subtitle: 'Digital Immersion',
    description: 'A 200m journey through the Saudi-Turkish digital corridor, revealing the architectural philosophy through kinetic projections.',
    location: 'Exhibition Hall Entrance'
  },
  {
    time: '20:30',
    title: 'The Grand Reveal',
    subtitle: 'Main Keynote',
    description: 'Official unveiling of the Master Plan by Emlak Konut & NHC leadership. A cinematic experience of the future Holy City living.',
    location: 'Hayat Theatre'
  },
  {
    time: '21:30',
    title: 'Elite Networking',
    subtitle: 'Gala Dinner',
    description: 'Fine dining curated by elite regional chefs, followed by exclusive investment portfolio discussions.',
    location: 'Starlight Pavilion'
  }
];
