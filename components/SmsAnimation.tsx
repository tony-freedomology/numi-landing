"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type Message = {
  id: number;
  type: "user" | "ai" | "typing";
  text?: string;
  who?: "user" | "ai";
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
      { id: 1, type: "user", text: "i'm kind of spiraling today. just anxious about everything." }
    ]));

    schedule(2000, () => setMessages(prev => [...prev, { id: 2, type: "typing", who: "ai" }]));

    schedule(4000, () => setMessages(prev => [
      ...prev.filter(m => m.type !== "typing"),
      { id: 3, type: "ai", text: "i'm sorry. that's a heavy place to be. what's the loudest thing in your head right now?" }
    ]));

    schedule(7000, () => setMessages(prev => [...prev, { id: 4, type: "typing", who: "user" }]));

    schedule(8500, () => setMessages(prev => [
      ...prev.filter(m => m.type !== "typing"),
      { id: 5, type: "user", text: "work stuff mostly. feeling like i'm not enough." }
    ]));

    schedule(9500, () => setMessages(prev => [...prev, { id: 6, type: "typing", who: "ai" }]));

    schedule(12500, () => setMessages(prev => [
      ...prev.filter(m => m.type !== "typing"),
      { id: 7, type: "ai", text: "that \"not enough\" voice is loud, but it's not the truest thing about you. can i ask — when's the last time you felt God's presence in the middle of something hard?" }
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
        className="flex-1 mt-8 mb-4 flex flex-col gap-3 overflow-y-auto overflow-x-hidden pr-1 pb-2 scrollbar-hide"
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
                max-w-[85%] px-4 py-2.5 text-[15px] shadow-sm leading-snug
                ${msg.type === "user" ? "self-end bg-[#007AFF] text-white rounded-[20px] rounded-br-[4px]" :
                  msg.type === "ai" ? "self-start bg-[#E9E9EB] text-black rounded-[20px] rounded-bl-[4px]" :
                    msg.who === "user" ? "self-end bg-[#E9E9EB] text-slate-400 rounded-full flex gap-1 items-center py-3 px-4" :
                      "self-start bg-[#E9E9EB] text-slate-400 rounded-full flex gap-1 items-center py-3 px-4"}
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
        <span className="text-slate-400 text-[15px]">iMessage</span>
        <div className="w-8 h-8 bg-[#007AFF] rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white transform rotate-90 translate-x-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
