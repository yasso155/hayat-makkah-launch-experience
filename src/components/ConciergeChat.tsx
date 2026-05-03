import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, User, Bot, Sparkle, LogIn } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { auth, db, signIn, handleFirestoreError, OperationType } from '../lib/firebase';
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

const ai = new GoogleGenAI({ apiKey: (import.meta.env.VITE_GEMINI_API_KEY as string) || '' });

interface ConciergeChatProps {
  lang?: 'en' | 'ar';
}

export default function ConciergeChat({ lang = 'en' }: ConciergeChatProps) {
  const isAr = lang === 'ar';
  
  const welcomeMsg = isAr 
    ? 'أهلاً بكم في بوابة حياة مكة للنخبة. أنا مساعدكم الثقافي. كيف يمكنني مساعدتكم في رحلتكم اليوم؟' 
    : 'Welcome to the Hayat Makkah elite portal. I am your Cultural Concierge. How may I assist you with your journey today?';

  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: welcomeMsg }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(auth.currentUser);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const path = `chats/${user.uid}/messages`;
    const q = query(collection(db, path), orderBy('timestamp', 'asc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          role: data.role as 'user' | 'assistant',
          content: data.content as string
        };
      });
      if (msgs.length > 0) {
        setMessages([
          { role: 'assistant', content: isAr ? 'أهلاً بعودتكم. تم استعادة سجل محادثاتكم. كيف يمكنني الاستمرار في مساعدتكم؟' : 'Welcome back. Your history has been restored. How may I continue to assist you?' },
          ...msgs
        ]);
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
    });

    return () => unsubscribe();
  }, [user, isAr]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const saveMessage = async (role: 'user' | 'assistant', content: string) => {
    if (!user) return;
    const path = `chats/${user.uid}/messages`;
    try {
      await addDoc(collection(db, path), {
        role,
        content,
        timestamp: serverTimestamp()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput('');
    
    if (!user) {
      setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    } else {
      await saveMessage('user', userMsg);
    }
    
    setIsLoading(true);

    try {
      const prompt = `
        You are an "Elite Cultural Concierge" for the "EMLAK KONUT - HAYAT MAKKAH" launch event.
        The project theme is "LIVING THE FUTURE TODAY".
        Your tone is ultra-luxurious, cinematic, and welcoming. 
        You speak in a blend of refined English and elegant Arabic/Turkish greetings (Ahlan wa Sahlan, Hos Geldiniz).
        IMPORTANT: Respond primarily in ${isAr ? 'Arabic' : 'English'}, but always include a touch of the other language where appropriate for a "Cultural Fusion" feel.
        
        Key Info:
        - The guest experience is a "Trajectory" starting from the airport till the distribution of the "Cultural Passport" artifact.
        - Experience System: This is not logistics, it is a unified hospitality ecosystem.
        - Airport: "Selam" welcome cards, chilled water, Turkish delight, Meet/Greet Desk.
        - VIP Transfer: Branded fleet, car tablets with guest welcome, multi-language audio (Arabic/Turkish/English).
        - Personal Host: "Guest Experience Hosts" assigned to VIPs, proactive service, digital companionship.
        - 24/7 Hotline: "Cultural Concierge" available via QR/WhatsApp, < 3 rings response protocol.
        - Strategic Partnership: Emlak Konut (Turkish) & NHC (Saudi).
        - Cultural Elements: Shared heritage, Kahve/Tarih/Selam experience nodes.
        
        Answer guest query: "${userMsg}"
      `;
      
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: prompt,
      });
      
      const responseText = response.text || (isAr ? "أعتذر، انقطع اتصالي للحظة. أهلاً وسهلاً، ما زلت في خدمتكم." : "I apologize, my connection to the cloud is momentarily disrupted. Ahlan wa Sahlan, I remain at your service.");
      
      if (!user) {
        setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
      } else {
        await saveMessage('assistant', responseText);
      }
    } catch (error) {
      console.error(error);
      const errorMsg = isAr ? "أعتذر، انقطع اتصالي للحظة. أهلاً وسهلاً، ما زلت في خدمتكم." : "I apologize, my connection to the cloud is momentarily disrupted. Ahlan wa Sahlan, I remain at your service.";
      if (!user) {
        setMessages(prev => [...prev, { role: 'assistant', content: errorMsg }]);
      } else {
        await saveMessage('assistant', errorMsg);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      await signIn();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="concierge" className="py-32 bg-emerald-deep/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-[1fr_450px] gap-16 items-center ${isAr ? 'flex-row-reverse' : ''}`}>
          <div className={isAr ? 'text-right' : ''}>
            <div className={`inline-flex items-center gap-3 text-gold-elite mb-6 ${isAr ? 'flex-row-reverse' : ''}`}>
              <Sparkle size={18} />
              <span className="text-xs uppercase tracking-[0.3em] font-bold">{isAr ? 'ذكاء الضيوف في الوقت الفعلي' : 'Real-Time Guest Intelligence'}</span>
            </div>
            <h2 className={`text-5xl md:text-6xl mb-8 ${isAr ? 'font-sans' : ''}`}>{isAr ? <>الكونسيرج <br /><span className="italic text-emerald-deep">الثقافي</span></> : <>The Cultural <br /><span className="italic text-emerald-deep">Concierge</span></>}</h2>
            <p className="text-ivory-warm/60 font-light text-xl leading-relaxed mb-10">
              {isAr 
                ? 'مدعوم بفريق عمليات مباشر. يتم تتبع كل استفسار، وتتم مراقبة كل استجابة لضمان دقة التنفيذ.' 
                : 'Backed by a live operations team. Every inquiry is tracked, every response is monitored, ensuring precision execution.'}
            </p>
            
            <div className={`flex items-center gap-8 border-t border-white/10 pt-10 ${isAr ? 'flex-row-reverse' : ''}`}>
              <div className="text-center">
                <div className="text-4xl font-display text-gold-elite">50</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">{isAr ? 'بروتوكول مُدار' : 'Managed Protocols'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display text-gold-elite">24</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">{isAr ? 'أنماط تحكم نشطة' : 'Active Control Modes'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display text-gold-elite">0</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">{isAr ? 'أعطال صفرية' : 'Zero Failures'}</div>
              </div>
            </div>
          </div>

          <div className="glass-morphism rounded-[3rem] h-[600px] flex flex-col overflow-hidden shadow-2xl relative">
            {/* Chat Header */}
            <div className={`bg-white/5 p-6 border-bottom border-white/10 flex items-center justify-between ${isAr ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-emerald-deep flex items-center justify-center">
                  <Bot size={20} className="text-gold-elite" />
                </div>
                <div className={isAr ? 'text-right' : ''}>
                  <div className="text-sm font-bold tracking-widest">{isAr ? 'الكونسيرج الثقافي' : 'CULTURAL CONCIERGE'}</div>
                  <div className={`flex items-center gap-1.5 ${isAr ? 'flex-row-reverse' : ''}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-deep animate-pulse" />
                    <span className="text-[10px] opacity-40 uppercase tracking-widest">{isAr ? 'نشط الآن' : 'Active Presence'}</span>
                  </div>
                </div>
              </div>
              
              {!user && (
                <button 
                  onClick={handleLogin}
                  className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-elite hover:opacity-70 transition-opacity ${isAr ? 'flex-row-reverse' : ''}`}
                >
                  <LogIn size={14} />
                  {isAr ? 'تأمين السجل' : 'Secure History'}
                </button>
              )}
              {user && (
                <div className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-deep ${isAr ? 'flex-row-reverse' : ''}`}>
                  <span className="w-1 h-1 rounded-full bg-emerald-deep" />
                  {isAr ? 'متزامن' : 'Synced'}
                </div>
              )}
            </div>

            {/* Chat Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col bg-charcoal-dark/40 scroll-smooth"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                    ? (isAr ? 'mr-auto bg-gold-elite text-charcoal-dark font-medium' : 'ml-auto bg-gold-elite text-charcoal-dark font-medium')
                    : (isAr ? 'ml-auto bg-white/10 text-ivory-warm border border-white/5 italic font-light' : 'mr-auto bg-white/10 text-ivory-warm border border-white/5 italic font-light')
                  } ${isAr ? 'text-right' : ''}`}
                >
                  {msg.content}
                </motion.div>
              ))}
              {isLoading && (
                <div className={`${isAr ? 'ml-auto' : 'mr-auto'} bg-white/10 p-4 rounded-2xl flex gap-1`}>
                  <span className="w-1.5 h-1.5 bg-gold-elite rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-gold-elite rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-gold-elite rounded-full animate-bounce" />
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={isAr ? 'استفسر عن التجربة...' : 'Inquire about the experience...'}
                  className={`w-full bg-white/5 border border-white/10 rounded-full py-4 text-sm focus:outline-none focus:border-gold-elite transition-colors placeholder:text-white/20 ${isAr ? 'pr-6 pl-14 text-right' : 'pl-6 pr-14'}`}
                />
                <button 
                  onClick={handleSend}
                  className={`absolute top-2 w-10 h-10 rounded-full bg-gold-elite text-charcoal-dark flex items-center justify-center hover:scale-105 active:scale-95 transition-all ${isAr ? 'left-2' : 'right-2'}`}
                >
                  <Send size={16} className={isAr ? 'rotate-180' : ''} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
