import { motion } from 'framer-motion';

const suggestions = [
  "Automate my business",
  "Build AI workflow",
  "Create AI agent",
  "Reduce manual work"
];

export default function WelcomeChips({ onSelect }: { onSelect: (text: string) => void }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {suggestions.map((text, i) => (
        <motion.button
          key={text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          onClick={() => onSelect(text)}
          className="rounded-full border border-brand-border bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-xs font-medium text-brand-gray transition-colors hover:bg-[rgba(255,255,255,0.08)] hover:text-white"
        >
          {text}
        </motion.button>
      ))}
    </div>
  );
}
