
import React from 'react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const MagicWandIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.38 2.103a.75.75 0 01.44-.722l8.75-2.5a.75.75 0 01.983.983l-2.5 8.75a.75.75 0 01-.722.44h-.002a.753.753 0 01-.198-.032L9.5 7.828l-2.072 2.072a.75.75 0 01-1.06 0L2.103 5.636a.75.75 0 010-1.06l4.273-4.273zm-.92 6.44l2.12-2.121a.75.75 0 011.061 0l2.12 2.12a.75.75 0 010 1.061l-2.12 2.12a.75.75 0 01-1.06 0l-2.121-2.12a.75.75 0 010-1.06z" />
    <path d="M11.625 13.332a.75.75 0 01.75.75v3.168l1.3-1.3a.75.75 0 111.06 1.06l-2.5 2.5a.75.75 0 01-1.06 0l-2.5-2.5a.75.75 0 111.06-1.06l1.3 1.3v-3.168a.75.75 0 01.75-.75z" />
  </svg>
);

export const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="w-full relative">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="e.g., A majestic lion wearing a crown, photorealistic"
        className="w-full h-28 p-4 pr-36 rounded-lg bg-gray-800 border-2 border-gray-700 focus:border-purple-500 focus:ring-purple-500 focus:outline-none transition-colors duration-200 resize-none"
        disabled={isLoading}
      />
      <button
        onClick={onSubmit}
        disabled={isLoading || !prompt.trim()}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500"
      >
        <MagicWandIcon className="w-5 h-5" />
        <span>{isLoading ? 'Generating...' : 'Generate'}</span>
      </button>
    </div>
  );
};
