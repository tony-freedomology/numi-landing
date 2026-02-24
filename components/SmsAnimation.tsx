"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type Message = {
  id: number;
  type: "user" | "ai" | "typing";
  text?: string;
};

export default function SmsAnimation() {
  const [messages, setMessages] = useState<Message[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let timeoutIds: NodeJS.Timeout[] = [];

    const schedule = (ms: number, fn: () => void) => {
      timeoutIds.push(setTimeout(fn, ms));
    };

    schedule(500, () => setMessages([
      { id: 1, type: "user", text: "numi, i’m a little anxious today." }
    ]));

    schedule(2000, () => setMessages(prev => [...prev, { id: 2, type: "typing" }]));

    schedule(4000, () => setMessages(prev => [
      ...prev.filter(m => m.type !== "typing"),
      { id: 3, type: "ai", text: "hey sarah, you mentioned your mom's surgery is tomorrow. i've been thinking about you — how are you feeling about it?" }
    ]));

    schedule(6500, () => setMessages(prev => [...prev, { id: 4, type: "typing" }]));

    schedule(8500, () => setMessages(prev => [
      ...prev.filter(m => m.type !== "typing"),
      { id: 5, type: "ai", text: "remember that patience goal you set last week? how'd it go at work today when your coworker pushed back on your idea?" }
    ]));

    schedule(11000, () => setMessages(prev => [...prev, { id: 6, type: "typing" }]));

    schedule(13000, () => setMessages(prev => [
      ...prev.filter(m => m.type !== "typing"),
      { id: 7, type: "ai", text: "you said mornings are hardest for staying in the Word. here's one verse to sit with while you drink your coffee: [verse]" }
    ]));

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [isInView]);

  useEffect(() => {
    // Smoothly scroll only the internal container, not the whole page viewport
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages]);

  return (
    <div ref={containerRef} className="relative w-full max-w-sm mx-auto h-[620px] sm:h-[680px] lg:h-[700px] bg-slate-50 rounded-[2.5rem] shadow-xl border-[6px] border-white overflow-hidden p-4 flex flex-col font-sans">
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-200 rounded-b-2xl z-10" />

      <div
        ref={scrollContainerRef}
        className="flex-1 mt-8 mb-4 flex flex-col gap-3 overflow-y-auto pr-1 pb-2 scrollbar-hide"
      >
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3 }}
              className={`
                max-w-[85%] px-4 py-2.5 text-sm shadow-sm
                ${msg.type === "user" ? "self-end bg-brand-cyan text-white rounded-2xl rounded-tr-sm" :
                  msg.type === "ai" ? "self-start bg-white text-slate-800 rounded-2xl rounded-tl-sm border border-slate-100" :
                    "self-start bg-slate-200 text-slate-400 rounded-full flex gap-1 items-center py-3 px-4"}
              `}
            >
              {msg.type === "typing" ? (
                <>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </>
              ) : (
                msg.text
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-auto h-12 flex-shrink-0 rounded-full border border-slate-200 bg-white flex items-center px-4 justify-between">
        <span className="text-slate-400 text-xs">iMessage</span>
        <div className="w-7 h-7 bg-brand-cyan rounded-full flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-white transform rotate-90 translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
