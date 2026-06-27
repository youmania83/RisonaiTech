import { memo, useState, useRef, useEffect } from 'react';
import { Bot, AlertCircle, Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup'; // html
import { Message } from './types';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('markup', markup);
SyntaxHighlighter.registerLanguage('html', markup);

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const CodeBlock = memo(({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || '');
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!inline && match) {
    return (
      <div className="relative my-4 overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
        <div className="flex items-center justify-between bg-slate-950 px-4 py-1.5 border-b border-slate-800">
          <span className="text-xs font-medium text-slate-400">{match[1]}</span>
          <button
            onClick={handleCopy}
            className="text-slate-400 hover:text-slate-100 transition-colors"
            aria-label="Copy code"
          >
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          </button>
        </div>
        <SyntaxHighlighter
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          style={vscDarkPlus as any}
          language={match[1]}
          PreTag="div"
          customStyle={{ margin: 0, background: 'transparent', padding: '1rem', fontSize: '0.85rem' }}
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    );
  }
  return (
    <code className={`${className} rounded bg-slate-100 text-slate-850 px-1.5 py-0.5 text-[0.85em] border border-slate-200/50`} {...props}>
      {children}
    </code>
  );
});
CodeBlock.displayName = 'CodeBlock';

const ChatMessage = memo(({ message }: { message: Message }) => {
  const isUser = message.role === 'user';
  const isError = message.role === 'error';

  const timeString = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' }).format(new Date(message.createdAt));

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-[85%] items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {!isUser && (
          <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full mt-0.5 ${isError ? 'bg-red-100 border border-red-200' : 'bg-[#FF7A00]/10 border border-[#FF7A00]/20'}`}>
            {isError ? <AlertCircle size={14} className="text-red-500" /> : <Bot size={14} className="text-[#FF7A00]" />}
          </div>
        )}
        
        <div className="flex flex-col gap-1 w-full overflow-hidden">
          <div
            className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
              isUser
                ? 'bg-[#FF7A00] text-slate-50 rounded-tr-none'
                : isError
                ? 'bg-red-50 text-red-700 border border-red-200 rounded-tl-none'
                : 'bg-slate-50 text-slate-800 border border-slate-200/60 rounded-tl-none'
            }`}
          >
            {isUser || isError ? (
              <p className="whitespace-pre-wrap">{message.content}</p>
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  code: CodeBlock as any,
                  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                  ul: ({ children }) => <ul className="mb-2 list-disc pl-4 last:mb-0 space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="mb-2 list-decimal pl-4 last:mb-0 space-y-1">{children}</ol>,
                  li: ({ children }) => <li>{children}</li>,
                  h1: ({ children }) => <h1 className="mb-2 mt-4 text-lg font-bold text-slate-900">{children}</h1>,
                  h2: ({ children }) => <h2 className="mb-2 mt-3 text-base font-bold text-slate-900">{children}</h2>,
                  h3: ({ children }) => <h3 className="mb-2 mt-2 text-sm font-bold text-slate-900">{children}</h3>,
                  a: ({ children, href }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#4F46E5] underline hover:text-[#6366F1] transition-colors">{children}</a>,
                }}
              >
                {message.content}
              </ReactMarkdown>
            )}
          </div>
          <span className={`text-[10px] text-slate-400 ${isUser ? 'text-right' : 'text-left'} px-1`}>
            {timeString}
          </span>
        </div>
      </div>
    </div>
  );
});

ChatMessage.displayName = 'ChatMessage';

export default ChatMessage;
