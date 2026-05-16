'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Message } from './types';
import dynamic from 'next/dynamic';

// Lazy load the heavy ChatWindow (and all its markdown/syntax-highlighter deps)
const ChatWindow = dynamic(() => import('./ChatWindow'), { ssr: false });

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
  const [hasOpened, setHasOpened] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
        setHasOpened(true);
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

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!hasOpened) setHasOpened(true);
  };

  if (!isMounted) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && hasOpened && (
          <ChatWindow
            messages={messages}
            isLoading={isLoading}
            input={input}
            setInput={setInput}
            setIsOpen={setIsOpen}
            handleSend={handleSend}
          />
        )}
      </AnimatePresence>

      <motion.button
        onMouseEnter={() => setHasOpened(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
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
