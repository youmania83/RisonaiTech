import { useRef, useCallback, useEffect } from 'react';
import { X, Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import { Message } from './types';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import WelcomeChips from './WelcomeChips';

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
  input: string;
  setInput: (v: string) => void;
  setIsOpen: (v: boolean) => void;
  handleSend: (customInput?: string) => void;
  inputPlaceholder?: string;
}

export default function ChatWindow({
  messages,
  isLoading,
  input,
  setInput,
  setIsOpen,
  handleSend,
  inputPlaceholder,
}: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="fixed bottom-24 right-5 z-50 flex h-[80vh] max-h-[600px] w-[calc(100vw-40px)] sm:w-[380px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:right-5 sm:bottom-24"
    >
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/20">
            <Bot size={18} className="text-[#FF7A00]" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">AI Assistant</h3>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="text-xs text-slate-500">Online</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          aria-label="Close chat"
        >
          <X size={18} />
        </button>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth"
      >
        {messages.map((m, index) => (
          <div key={m.id}>
            <ChatMessage message={m} />
            {index === 0 && messages.length === 1 && (
              <WelcomeChips onSelect={(text) => handleSend(text)} />
            )}
          </div>
        ))}
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} className="h-1" />
      </div>

      <ChatInput
        input={input}
        setInput={setInput}
        onSubmit={() => handleSend()}
        isLoading={isLoading}
        placeholder={inputPlaceholder}
      />
    </motion.div>
  );
}
