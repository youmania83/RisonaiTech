import { useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (val: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  placeholder?: string;
}

export default function ChatInput({ input, setInput, onSubmit, isLoading, placeholder }: ChatInputProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="border-t border-brand-border bg-[rgba(255,255,255,0.02)] p-3 backdrop-blur-md"
    >
      <div className="relative flex items-end rounded-2xl border border-brand-border bg-[rgba(255,255,255,0.05)] transition-colors focus-within:border-[#635BFF] focus-within:ring-1 focus-within:ring-[#635BFF]">
        <TextareaAutosize
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder ?? "Message Rison AI..."}
          aria-label={placeholder ?? "Message Rison AI"}
          minRows={1}
          maxRows={5}
          className="w-full resize-none bg-transparent py-3 pl-4 pr-12 text-sm text-slate-800 placeholder-brand-gray focus:outline-none"
          disabled={isLoading}
        />
        <div className="absolute bottom-1.5 right-2 flex h-8 w-8 shrink-0 items-center justify-center">
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#635BFF] text-white transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            aria-label="Send message"
          >
            <Send size={14} />
          </button>
        </div>
      </div>
      <div className="mt-2.5 flex flex-col items-center gap-1 text-center">
        <span className="text-[10px] text-brand-gray/50 font-medium tracking-wide">
          Powered by Rison AI Tech
        </span>
        <span className="text-[9px] text-brand-gray/40">
          By messaging, you agree to our <a href="/privacy" className="underline hover:text-brand-gray/70 transition-colors" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. AI can make mistakes.
        </span>
      </div>
    </form>
  );
}
