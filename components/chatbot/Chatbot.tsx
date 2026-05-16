'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { MessageCircle, X, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Message } from './types';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import WelcomeChips from './WelcomeChips';

const LOCAL_STORAGE_KEY = 'risonai_chat_state';
const OPEN_STATE_KEY = 'risonai_chat_open';

const INITIAL_MESSAGE: Message = {
  id: 'init',
  role: 'assistant',
  content: 'Hi! I am the RisonAI Tech assistant. How can I help you scale your business today?',
  createdAt: Date.now(),
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Persistence
  useEffect(() => {
    setIsMounted(true);
    try {
      const savedMessages = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      } else {
        setMessages([INITIAL_MESSAGE]);
      }
      const savedOpenState = localStorage.getItem(OPEN_STATE_KEY);
      if (savedOpenState === 'true') {
        setIsOpen(true);
      }
    } catch (e) {
      console.error('Error loading chat state', e);
      setMessages([INITIAL_MESSAGE]);
    }
  }, []);

  useEffect(() => {
    if (!isMounted || messages.length === 0) return;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
  }, [messages, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem(OPEN_STATE_KEY, isOpen ? 'true' : 'false');
  }, [isOpen, isMounted]);

  // Auto Scroll
  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, scrollToBottom]);

  const handleSend = async (customInput?: string) => {
    const textToSend = customInput ?? input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = { 
      id: Date.now().toString(), 
      role: 'user', 
      content: textToSend.trim(),
      createdAt: Date.now(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Filter out the initial greeting and errors for the API
      const apiMessages = [...messages, userMessage]
        .filter(m => m.id !== 'init' && m.role !== 'error')
        .map(m => ({ role: m.role, content: m.content }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }
      if (!response.body) throw new Error('No body returned from API');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      const assistantId = (Date.now() + 1).toString();
      setMessages((prev) => [...prev, { id: assistantId, role: 'assistant', content: '', createdAt: Date.now() }]);

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
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: 'error',
        content: 'Something went wrong. Please try again in a moment.',
        createdAt: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isMounted) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-24 right-5 z-50 flex h-[80vh] max-h-[600px] w-[calc(100vw-40px)] sm:w-[380px] flex-col overflow-hidden rounded-2xl border border-brand-border bg-[#090C18] shadow-[0_0_50px_rgba(99,91,255,0.15)] sm:right-5 sm:bottom-24"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-brand-border bg-[rgba(255,255,255,0.03)] px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#635BFF]/20 border border-[#635BFF]/30">
                  <Bot size={18} className="text-[#635BFF]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <p className="text-xs text-brand-gray">Online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-brand-gray hover:bg-[rgba(255,255,255,0.1)] hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
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

            {/* Input Area */}
            <ChatInput 
              input={input} 
              setInput={setInput} 
              onSubmit={() => handleSend()} 
              isLoading={isLoading} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#635BFF] text-white shadow-[0_0_24px_rgba(99,91,255,0.4)] transition-colors hover:bg-[#7C74FF]"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <span className="sr-only">Toggle chat widget</span>
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? 'close' : 'open'}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.15 }}
          >
            {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </>
  );
}
