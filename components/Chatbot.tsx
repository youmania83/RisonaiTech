'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ id: string; role: 'user' | 'assistant'; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { id: Date.now().toString(), role: 'user' as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.body) throw new Error('No body');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      const assistantId = (Date.now() + 1).toString();
      setMessages((prev) => [...prev, { id: assistantId, role: 'assistant', content: '' }]);

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantId ? { ...m, content: m.content + chunk } : m))
          );
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl border border-brand-border bg-[#090C18] shadow-[0_0_50px_rgba(99,91,255,0.28)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-brand-border bg-[rgba(255,255,255,0.03)] px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#635BFF]/20">
                  <Bot size={18} className="text-[#635BFF]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">AI Assistant</h3>
                  <p className="text-xs text-brand-gray">RisonAI Tech</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-brand-gray hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="flex h-full flex-col items-center justify-center text-center space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#635BFF]/10">
                    <MessageCircle size={24} className="text-[#635BFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">How can we help?</h4>
                    <p className="text-sm text-brand-gray mt-1">
                      Ask about our AI automation, CRM, or SaaS services.
                    </p>
                  </div>
                </div>
              )}
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex w-full ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex max-w-[80%] items-start gap-2">
                    {m.role !== 'user' && (
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#635BFF]/20 mt-1">
                        <Bot size={14} className="text-[#635BFF]" />
                      </div>
                    )}
                    <div
                      className={`rounded-2xl px-4 py-2 text-sm ${
                        m.role === 'user'
                          ? 'bg-[#635BFF] text-white rounded-tr-none'
                          : 'bg-[rgba(255,255,255,0.05)] text-gray-200 border border-brand-border rounded-tl-none'
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex max-w-[80%] items-center gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#635BFF]/20">
                      <Bot size={14} className="text-[#635BFF]" />
                    </div>
                    <div className="flex items-center gap-1 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-brand-border px-4 py-3 rounded-tl-none">
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-gray" style={{ animationDelay: '0ms' }} />
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-gray" style={{ animationDelay: '150ms' }} />
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-gray" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form
              onSubmit={onSubmit}
              className="border-t border-brand-border bg-[rgba(255,255,255,0.02)] p-3"
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full rounded-full border border-brand-border bg-[rgba(255,255,255,0.05)] py-2.5 pl-4 pr-12 text-sm text-white placeholder-brand-gray focus:border-[#635BFF] focus:outline-none focus:ring-1 focus:ring-[#635BFF]"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#635BFF] text-white transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#635BFF] text-white shadow-[0_0_24px_rgba(99,91,255,0.4)] transition-transform hover:scale-110 active:scale-95"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}
