'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

/**
 * Wrapper that defers loading the chatbot bundle (framer-motion, markdown,
 * syntax-highlighter, etc.) until the browser is idle or the user shows
 * any signal of intent (scroll, pointer, touch, key). Keeps the bundle off
 * the critical path so it doesn't compete with LCP / TBT on initial load.
 */
const ChatbotImpl = dynamic(() => import('./chatbot/Chatbot'), { ssr: false });

export default function Chatbot() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;

    let cancelled = false;
    const trigger = () => {
      if (cancelled) return;
      cancelled = true;
      cleanup();
      setReady(true);
    };

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let idleHandle: number | null = null;
    let timeoutHandle: number | null = null;

    if (typeof w.requestIdleCallback === 'function') {
      idleHandle = w.requestIdleCallback(trigger, { timeout: 4000 });
    } else {
      timeoutHandle = window.setTimeout(trigger, 2500);
    }

    const events: (keyof WindowEventMap)[] = ['scroll', 'pointerdown', 'touchstart', 'keydown'];
    const onInteract = () => trigger();
    events.forEach((e) =>
      window.addEventListener(e, onInteract, { passive: true, once: true })
    );

    function cleanup() {
      if (idleHandle != null && typeof w.cancelIdleCallback === 'function') {
        w.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle != null) window.clearTimeout(timeoutHandle);
      events.forEach((e) => window.removeEventListener(e, onInteract));
    }

    return cleanup;
  }, [ready]);

  if (!ready) return null;
  return <ChatbotImpl />;
}
