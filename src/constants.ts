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
  cover: '/assets/cover image.png',
  hero: '/assets/vesual identity.png',
  overview: '/assets/Firefly_gpt-image_immersive tunnel with light strips, glowing patterns, guests walking through, atmosph 386796.png',
  corridor: '/assets/immersive corridor with projection mapping on walls and floor, showing futuristic.png',
  networking: '/assets/networking lounge.png',
  stage: '/assets/stage.png',
  flow: '/assets/Mobility Flow.png',
  host: '/assets/The Personal Host.png',
  uniform: '/assets/Firefly_gpt-image_close-up of luxury staff uniform, embroidered cultural pattern, elegant fabric textur 386796.png',
  smart: '/assets/Execution Command.png',
  concierge: '/assets/Hotline Concierge.png',
  welcome: '/assets/Arrival Details (2).png',
  car: '/assets/Firefly_gpt-image_luxury car GMC with subtle emerald and logo gold branding, , premium transport design 386796.png',
  tablet: '/assets/Firefly_gpt-image_luxury car interior, tablet screen showing personalized welcome message with guest na 386796.png',
  signage: '/assets/entrance arch.png',
  package: '/assets/Firefly_gpt-image_luxury hotel welcome package, emerald leather folder with gold embossed logo, premium 386796.png',
  gift: '/assets/Firefly_gpt-image_luxury gift set with branded cards, keychains, packaging, emerald and gold identity,  386796.png',
  amenities: '/assets/Micro Luxury.png',
  night: '/assets/saudi orchestra.jpeg',
  reveal: '/assets/Firefly_gpt-image_futuristic building emerging from light, holographic architecture reveal, glowing par 386796.png',
  airport: '/assets/Airport Arrival.png',
  closing: '/assets/Closing.png',
  approach: '/assets/Firefly_gpt-image_futuristic building emerging from light, holographic architecture reveal, glowing par 386796.png',
  gest_flow: '/assets/Guided Spatial Journey.png',
  collage1: '/assets/collage 1.jpeg',
  collage2: '/assets/collage 2.jpeg'
};

export const SECTIONS: (EventSection & { titleAr: string; descriptionAr: string })[] = [
  {
    id: 'mobility-1',
    title: 'The Entrance Gate',
    titleAr: 'بوابة الدخول',
    description: 'The first impression architecture. A monumental gateway establishing the visual identity and setting the tone for the journey ahead.',
    descriptionAr: 'هندسة الانطباع الأول. بوابة ضخمة ترسخ الهوية البصرية وتحدد مسار الرحلة القادمة.',
    category: 'spatial',
    image: ASSETS.flow
  },
  {
    id: 'walk-1',
    title: 'The Immersive Tunnel',
    titleAr: 'النفق الغامر',
    description: 'The transitional walk. A physically built environment enveloped in 20 synchronized digital screens, shifting the guest from the outside world into our narrative.',
    descriptionAr: 'المسار الانتقالي. بيئة مبنية فعلياً ومغلفة بـ 20 شاشة رقمية متزامنة، تنقل الضيف من العالم الخارجي إلى سردنا الخاص.',
    category: 'spatial',
    image: ASSETS.corridor
  },
  {
    id: 'wow-1',
    title: 'The Main Stage',
    titleAr: 'المسرح الرئيسي',
    description: 'The central moment of focus. A structurally imposing backdrop designed for the cinematic reveal, integrating lighting and holographic installations.',
    descriptionAr: 'لحظة التركيز المركزية. خلفية مهيبة بنيوياً مصممة للكشف السينمائي، تدمج الإضاءة والتركيبات الهولوغرافية.',
    category: 'tech',
    image: ASSETS.stage
  }
];

export const TRAJECTORY: (TrajectoryPoint & { titleAr: string; subtitleAr: string })[] = [
  { id: 'arrival', title: 'Arrival', titleAr: 'الوصول', subtitle: 'First Impression', subtitleAr: 'الانطباع الأول' },
  { id: 'transfer', title: 'Reception', titleAr: 'الاستقبال', subtitle: 'Cultural Welcome', subtitleAr: 'ترحيب ثقافي' },
  { id: 'walk', title: 'Immersive Walk', titleAr: 'ممر التجربة', subtitle: 'Transitional Journey', subtitleAr: 'رحلة انتقالية' },
  { id: 'discovery', title: 'Main Hall', titleAr: 'القاعة الرئيسية', subtitle: 'Designed Environment', subtitleAr: 'بيئة مصممة' },
  { id: 'reveal', title: 'Ceremony', titleAr: 'المراسم', subtitle: 'The Core Narrative', subtitleAr: 'السرد الأساسي' },
  { id: 'connect', title: 'Dinner', titleAr: 'العشاء', subtitle: 'Elevated Hospitality', subtitleAr: 'ضيافة راقية' },
  { id: 'exit', title: 'Networking', titleAr: 'التواصل', subtitle: 'Seamless Engagement', subtitleAr: 'تفاعل سلس' }
];

export const HOSPITALITY_NODES = [
  {
    id: 'airport',
    title: 'Airport Reception',
    titleAr: 'استقبال المطار',
    description: 'A controlled "Cultural Welcome" operation delivering chilled premium water and fine Turkish delight, managed by our ground handlers.',
    descriptionAr: 'عملية "ترحيب ثقافي" مُدارة لتقديم المياه الفاخرة المبردة والحلقوم التركي الفاخر، يديرها فريق الخدمات الأرضية لدينا.',
    features: ['Active Flight Tracking', 'Selam Welcome Protocol', 'Operations Desk'],
    featuresAr: ['تتبع الرحلات الحي', 'بروتوكول ترحيب "سلام"', 'مكتب العمليات']
  },
  {
    id: 'mobility',
    title: 'VIP Transfer',
    titleAr: 'نقل كبار الشخصيات',
    description: 'A fully coordinated luxury fleet monitored in real-time, equipped with tablets for live schedule updates.',
    descriptionAr: 'أسطول فاخر منسق بالكامل ومراقب في الوقت الفعلي، مجهز بأجهزة لوحية لتحديثات الجدول الزمني المباشرة.',
    features: ['Fleet Coordination System', 'Live GPS Tracking', 'Secure Route Management'],
    featuresAr: ['نظام تنسيق الأسطول', 'تتبع GPS مباشر', 'إدارة الطرق الآمنة']
  },
  {
    id: 'companion',
    title: 'Guest Companion',
    titleAr: 'رفيق الضيف',
    description: 'Dedicated hosts executing pre-planned itineraries, navigating the flow with direct access to command central.',
    descriptionAr: 'مضيفون مخصصون ينفذون مسارات مخططة مسبقاً، ويديرون تدفق الضيوف مع وصول مباشر إلى مركز القيادة.',
    features: ['Live Command Link', 'Full Digital Guest Profile', 'Direct Protocol Support'],
    featuresAr: ['اتصال مباشر بمركز القيادة', 'ملف رقمي كامل للضيف', 'دعم البروتوكول المباشر']
  }
];

export const ALCHEMY = [
  { title: 'Emotional Connection', titleAr: 'الاتصال العاطفي', desc: 'Delivered through scripted touchpoints and precision timing.', descAr: 'يتم تقديمه من خلال نقاط اتصال مدروسة وتوقيت دقيق.' },
  { title: 'Premium Positioning', titleAr: 'مكانة متميزة', desc: 'Maintained through zero-compromise operational standards.', descAr: 'يتم الحفاظ عليها من خلال معايير تشغيلية لا تهاون فيها.' },
  { title: 'Shareable Moments', titleAr: 'لحظات قابلة للمشاركة', desc: 'Engineered by our on-ground creative & logistics team.', descAr: 'تم تصميمها بواسطة فريقنا الإبداعي واللوجستي الميداني.' },
  { title: 'Sales-Driven Architecture', titleAr: 'عمارة موجهة للمبيعات', desc: 'Backed by real-time flow management and guest intelligence.', descAr: 'مدعومة بإدارة التدفق في الوقت الفعلي وذكاء الضيوف.' }
];

export const PRESENTATION_SLIDES = [
  {
    id: 1,
    type: 'cover',
    title: 'EMLAK EVENT Proposal',
    titleAr: 'مقترح فعالية إملاك',
    subtitle: 'VISION & CONCEPT',
    subtitleAr: 'الرؤية والمفهوم',
    image: ASSETS.cover,
    bg: 'bg-emerald-deep'
  },
  {
    id: 2,
    type: 'content',
    title: 'Visual Identity',
    titleAr: 'الهوية البصرية',
    subtitle: 'VISION | A unified visual system',
    subtitleAr: 'الرؤية | نظام بصري موحد',
    description: 'Modern luxury meets Islamic geometric elegance and Makkah-inspired tones.\n\nEXPERIENCE NOTE: Guests navigate a cohesive aesthetic world, recognizing intentional design at every turn.',
    descriptionAr: 'الفخامة الحديثة تلتقي بالأناقة الهندسية الإسلامية والألوان المستوحاة من مكة.\n\nتفاصيل التجربة: يتنقل الضيوف في عالم جمالي متماسك، ليلاحظوا دقة التصميم وعنايته في كل زاوية.',
    image: ASSETS.hero
  },
  {
    id: 3,
    type: 'content',
    title: 'A Guided Spatial Journey',
    titleAr: 'رحلة مكانية موجهة',
    subtitle: 'JOURNEY | Seamless progression',
    subtitleAr: 'الرحلة | تسلسل حركي سلس',
    description: 'Arrival → Reception → Immersive Walk → Main Hall → Ceremony → Dinner → Networking.\n\nEXPERIENCE NOTE: Guests experience a frictionless physical movement, intuitively guided through each phase.',
    descriptionAr: 'الوصول ← الاستقبال ← الممشى الغامر ← القاعة الرئيسية ← المراسم ← العشاء ← التواصل.\n\nتفاصيل التجربة: يختبر الضيوف تنقلاً انسيابياً، حيث يتم توجيههم ببديهية وسلاسة عبر كل مرحلة.',
    image: ASSETS.gest_flow
  },
  {
    id: 4,
    type: 'content',
    title: 'Synchronized Narrative',
    titleAr: 'سرد بصري متزامن',
    subtitle: 'JOURNEY | 20 digital screens',
    subtitleAr: 'الرحلة | 20 شاشة رقمية',
    description: 'Content bridging the Project, Lifestyle, and Saudi–Turkish partnership across the corridors.\n\nEXPERIENCE NOTE: Guests are immersed in a 360-degree story, physically walking through dynamic digital landscapes.',
    descriptionAr: 'محتوى يربط بين المشروع، أسلوب الحياة، والشراكة السعودية التركية عبر الممرات.\n\nتفاصيل التجربة: تجربة بصرية محيطية 360 درجة، يسير الضيوف خلالها عبر عوالم رقمية متغيرة.',
    image: ASSETS.corridor
  },
  {
    id: 5,
    type: 'content',
    title: 'The Entrance Gate',
    titleAr: 'البوابة الرئيسية',
    subtitle: 'ENVIRONMENT | First impression',
    subtitleAr: 'البيئة | الانطباع الأول',
    description: 'A monumental architectural gateway establishing the visual and emotional tone of the event.\n\nEXPERIENCE NOTE: Guests physically interact with a grand installation that feels imposing and deeply welcoming.',
    descriptionAr: 'بوابة معمارية ضخمة تُرسي الطابع البصري والعاطفي للفعالية منذ اللحظة الأولى.\n\nتفاصيل التجربة: تركيب معماري ضخم يجمع بين المهابة وحفاوة الاستقبال، ليتفاعل معه الضيوف واقعياً.',
    image: ASSETS.signage
  },
  {
    id: 6,
    type: 'content',
    title: 'Grand Heritage Entrance',
    titleAr: 'مدخل التراث الكبير',
    subtitle: 'ENVIRONMENT | Monumental Welcome',
    subtitleAr: 'البيئة | ترحيب مهيب',
    description: 'A cinematic focal point showcasing the fusion of Saudi and Turkish architectural heritage.\n\nEXPERIENCE NOTE: Guests are greeted by a monumental relief wall and statues, establishing a sense of historical significance.',
    descriptionAr: 'نقطة تركيز سينمائية تستعرض اندماج التراث المعماري السعودي والتركي.\n\nتفاصيل التجربة: يستقبل الضيوف جدار نقش ضخم وتماثيل، مما يرسخ شعوراً بالأهمية التاريخية.',
    image: ASSETS.collage2
  },
  {
    id: 7,
    type: 'content',
    title: 'The Immersive Tunnel',
    titleAr: 'المسار الغامر',
    subtitle: 'ENVIRONMENT | Transitional walk',
    subtitleAr: 'البيئة | المسار الانتقالي',
    description: 'A built physical environment utilizing light and structure to transition the guest mindset.\n\nEXPERIENCE NOTE: Guests feel the physical transition from the outside world into the curated narrative space.',
    descriptionAr: 'بيئة معمارية توظف الإضاءة والهياكل لتهيئة الضيوف ذهنياً.\n\nتفاصيل التجربة: يشعر الضيف بالانفصال التام عن العالم الخارجي والدخول في قلب السرد المكان للحدث.',
    image: ASSETS.overview
  },
  {
    id: 8,
    type: 'content',
    title: 'The Main Stage',
    titleAr: 'المسرح الرئيسي',
    subtitle: 'ENVIRONMENT | Central moment',
    subtitleAr: 'البيئة | ذروة الحدث',
    description: 'A structurally imposing backdrop designed specifically for the cinematic Master Plan reveal.\n\nEXPERIENCE NOTE: Guests sit before a massive, physically built stage that commands attention and respect.',
    descriptionAr: 'مسرح بتصميم مهيب بُني خصيصاً للحظة الكشف السينمائي عن المخطط الرئيسي.\n\nتفاصيل التجربة: يتواجد الضيوف أمام هيكل معماري ضخم يفرض حضوره ويخطف الأنظار.',
    image: ASSETS.stage
  },
  {
    id: 9,
    type: 'content',
    title: 'Cultural Expression',
    titleAr: 'التناغم الثقافي',
    subtitle: 'EXPERIENCE | Symbolic unity',
    subtitleAr: 'التجربة | لحظة وحدة رمزية',
    description: 'The Saudi National Orchestra and Turkish Tribute blending deeply emotional and controlled performances.\n\nEXPERIENCE NOTE: Guests witness a powerful live vocal tribute that resonates emotionally and physically through the space.',
    descriptionAr: 'أداء مشترك بين الأوركسترا الوطنية السعودية والتركية يدمج بين العمق العاطفي والتحكم الفني الدقيق.\n\nتفاصيل التجربة: عرض صوتي حي يملأ الأرجاء، ليخلق لحظة وجدانية ملموسة وذكريات لا تُنسى.',
    image: ASSETS.night
  },
  {
    id: 10,
    type: 'hospitality',
    title: 'The Hospitality Experience',
    titleAr: 'تجربة الضيافة',
    subtitle: 'EXPERIENCE | Curated Touchpoints',
    subtitleAr: 'التجربة | نقاط اتصال منسقة',
    description: 'A detailed overview of the guest journey, from arrival to personalized in-room experiences.',
    descriptionAr: 'نظرة عامة مفصلة على رحلة الضيف، من الوصول وحتى التجارب الشخصية داخل الغرفة.',
    image: ASSETS.collage1,
    sections: [
      { id: 'welcome', title: 'Welcome Kit', titleAr: 'حقيبة الترحيب', icon: 'Gift' },
      { id: 'digital', title: 'Digital Guide', titleAr: 'الدليل الرقمي', icon: 'Smartphone' },
      { id: 'transport', title: 'Transportation', titleAr: 'المواصلات', icon: 'Bus' },
      { id: 'amenities', title: 'Premium Amenities', titleAr: 'المرافق الفاخرة', icon: 'Coffee' }
    ]
  },
  {
    id: 11,
    type: 'content',
    title: 'Seamless Hospitality',
    titleAr: 'ضيافة استثنائية',
    subtitle: 'EXPERIENCE | VIP Guest Support',
    subtitleAr: 'التجربة | عناية فائقة بالنخبة',
    description: 'Unseen management powering a flawless journey through table setups and spatial navigation.\n\nEXPERIENCE NOTE: Guests feel a silent, constant presence anticipating their needs, ensuring an effortless visit.',
    descriptionAr: 'إدارة خفية تضمن تجربة مثالية بدءاً من تجهيزات الطاولات وحتى انسيابية الحركة داخل المكان.\n\nتفاصيل التجربة: يلمس الضيوف عناية فائقة وحضوراً خفياً يستبق احتياجاتهم لضمان راحة مطلقة.',
    image: ASSETS.host
  },
  {
    id: 12,
    type: 'content',
    title: 'Physical Production',
    titleAr: 'التنفيذ المعماري',
    subtitle: 'PRODUCTION | Designed & Built',
    subtitleAr: 'التنفيذ | دقة التصميم والبناء',
    description: 'Every installation is technically designed for flawless real-world execution and structural integrity.\n\nEXPERIENCE NOTE: Guests perceive the high production value through the seamless integration of physical build and finish.',
    descriptionAr: 'كل مجسم مصمم هندسياً ليضمن تنفيذاً واقعياً خالياً من العيوب ومتانة هيكلية تامة.\n\nتفاصيل التجربة: يدرك الضيف مستوى الإنتاج العالي من خلال جودة البناء المادي والتشطيبات الفاخرة.',
    image: ASSETS.approach
  },
  {
    id: 13,
    type: 'content',
    title: 'Execution Command',
    titleAr: 'منظومة التحكم',
    subtitle: 'PRODUCTION | Real-Time Control',
    subtitleAr: 'التنفيذ | إدارة لحظية',
    description: 'A unified command system coordinating the spatial environments, digital content, and live show callers.\n\nEXPERIENCE NOTE: Guests experience zero technical friction; the physical environment responds flawlessly to the event.',
    descriptionAr: 'غرفة تحكم مركزية تنسق بذكاء بين البيئة المكانية، المحتوى الرقمي، وفرق العرض المباشر.\n\nتفاصيل التجربة: تجربة تقنية متكاملة وخالية من الانقطاعات، حيث تتفاعل البيئة بتناغم تام مع مجريات الحدث.',
    image: ASSETS.smart
  },
  {
    id: 14,
    type: 'content',
    title: 'Networking Environment',
    titleAr: 'ملتقى النخبة',
    subtitle: 'CLOSING | The Final Impression',
    subtitleAr: 'الختام | الانطباع الأخير',
    description: 'A curated conclusion to the spatial journey with elegant setups encouraging elite investment conversations.\n\nEXPERIENCE NOTE: Guests transition into a relaxed yet premium physical setting, surrounded by modern luxury.',
    descriptionAr: 'ختام فاخر للرحلة المكانية، مصمم بعناية لتوفير مساحة مثالية لنقاشات الاستثمار وفرص الأعمال.\n\nتفاصيل التجربة: ينتقل الضيوف إلى بيئة راقية ومريحة، محاطين بتفاصيل الفخامة الحديثة.',
    image: ASSETS.networking
  },
  {
    id: 15,
    type: 'content',
    title: 'A World-Class Benchmark',
    titleAr: 'معيار عالمي للتميز',
    subtitle: 'CLOSING | Executed with Precision',
    subtitleAr: 'الختام | تنفيذ فائق الدقة',
    description: 'The entire experience system leaves a lasting mark of design excellence and operational control.\n\nEXPERIENCE NOTE: Guests depart with a clear understanding of the project\'s magnitude and the physical execution capabilities.',
    descriptionAr: 'تترك التجربة بأكملها انطباعاً دائماً بالتميز المعماري والاحترافية التشغيلية التي لا تضاهى.\n\nتفاصيل التجربة: يغادر الضيف بصورة واضحة عن ضخامة المشروع والقدرة الفائقة على تنفيذه على أرض الواقع.',
    image: ASSETS.closing
  }
];

export const TIMELINE = [
  {
    time: '18:00',
    title: 'Arrival & Reception',
    subtitle: 'The First Impression',
    description: 'Guests transition into the reception space, immediately enveloped in a unified visual identity and Makkah-inspired tones.',
    location: 'Gate & Welcoming Lounge'
  },
  {
    time: '19:30',
    title: 'The Immersive Walk',
    subtitle: 'Digital Storytelling',
    description: 'A physical transition through a built tunnel environment where 20 synchronized digital screens establish the core narrative.',
    location: 'Digital Corridor'
  },
  {
    time: '20:30',
    title: 'Cultural Experience',
    subtitle: 'Saudi National Orchestra & Turkish Tribute',
    description: 'Guests witness a powerful live vocal tribute echoing through the architectural space, concluding in a symbolic unity moment.',
    location: 'Main Stage'
  },
  {
    time: '21:30',
    title: 'Dinner & Networking',
    subtitle: 'Elevated Hospitality',
    description: 'A curated conclusion to the spatial journey. Custom table setups reflect the event’s geometric elegance in a premium setting.',
    location: 'Networking Environment'
  }
];
