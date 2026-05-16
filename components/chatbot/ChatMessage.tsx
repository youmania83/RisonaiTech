import { memo, useState } from 'react';
import { Bot, AlertCircle, Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Message } from './types';

const CodeBlock = memo(({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || '');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!inline && match) {
    return (
      <div className="relative my-4 overflow-hidden rounded-lg border border-brand-border bg-[#1E1E1E]">
        <div className="flex items-center justify-between bg-[rgba(255,255,255,0.05)] px-4 py-1.5">
          <span className="text-xs font-medium text-brand-gray">{match[1]}</span>
          <button
            onClick={handleCopy}
            className="text-brand-gray hover:text-white transition-colors"
            aria-label="Copy code"
          >
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          </button>
        </div>
        <SyntaxHighlighter
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
    <code className={`${className} rounded bg-[rgba(255,255,255,0.1)] px-1.5 py-0.5 text-[0.85em]`} {...props}>
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
          <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full mt-0.5 ${isError ? 'bg-red-500/20' : 'bg-[#635BFF]/20'}`}>
            {isError ? <AlertCircle size={14} className="text-red-400" /> : <Bot size={14} className="text-[#635BFF]" />}
          </div>
        )}
        
        <div className="flex flex-col gap-1 w-full overflow-hidden">
          <div
            className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
              isUser
                ? 'bg-[#635BFF] text-white rounded-tr-none'
                : isError
                ? 'bg-red-500/10 text-red-200 border border-red-500/20 rounded-tl-none'
                : 'bg-[rgba(255,255,255,0.05)] text-gray-200 border border-brand-border rounded-tl-none'
            }`}
          >
            {isUser || isError ? (
              <p className="whitespace-pre-wrap">{message.content}</p>
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code: CodeBlock as any,
                  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                  ul: ({ children }) => <ul className="mb-2 list-disc pl-4 last:mb-0 space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="mb-2 list-decimal pl-4 last:mb-0 space-y-1">{children}</ol>,
                  li: ({ children }) => <li>{children}</li>,
                  h1: ({ children }) => <h1 className="mb-2 mt-4 text-lg font-bold">{children}</h1>,
                  h2: ({ children }) => <h2 className="mb-2 mt-3 text-base font-bold">{children}</h2>,
                  h3: ({ children }) => <h3 className="mb-2 mt-2 text-sm font-bold">{children}</h3>,
                  a: ({ children, href }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] underline hover:text-white transition-colors">{children}</a>,
                }}
              >
                {message.content}
              </ReactMarkdown>
            )}
          </div>
          <span className={`text-[10px] text-brand-gray/50 ${isUser ? 'text-right' : 'text-left'} px-1`}>
            {timeString}
          </span>
        </div>
      </div>
    </div>
  );
});

ChatMessage.displayName = 'ChatMessage';

export default ChatMessage;
