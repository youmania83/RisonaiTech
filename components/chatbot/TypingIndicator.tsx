import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

export default function TypingIndicator() {
  return (
    <div className="flex w-full justify-start">
      <div className="flex max-w-[85%] items-start gap-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF7A00]/20 mt-0.5">
          <Bot size={14} className="text-[#FF7A00]" />
        </div>
        <div className="flex items-center gap-1.5 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-brand-border px-4 py-3.5 rounded-tl-none">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-[#FF7A00]/70"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-[#FF7A00]/70"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-[#FF7A00]/70"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
}
