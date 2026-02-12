
import React from 'react';

const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.842 2.842l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.842 2.842l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.842-2.842l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.842-2.842l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036a.75.75 0 00.564.564l1.036.258a.75.75 0 010 1.456l-1.036.258a.75.75 0 00-.564.564l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a.75.75 0 00-.564-.564l-1.036-.258a.75.75 0 010-1.456l1.036-.258a.75.75 0 00.564-.564l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.551l.57 2.005a.75.75 0 00.551.551l2.005.57a.75.75 0 010 1.424l-2.005.57a.75.75 0 00-.551.551l-.57 2.005a.75.75 0 01-1.424 0l-.57-2.005a.75.75 0 00-.551-.551l-2.005-.57a.75.75 0 010-1.424l2.005-.57a.75.75 0 00.551-.551l.57-2.005A.75.75 0 0116.5 15z"
      clipRule="evenodd"
    />
  </svg>
);

export const Header: React.FC = () => (
  <header className="w-full text-center py-6 border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
    <div className="flex items-center justify-center gap-2">
      <SparkleIcon className="w-8 h-8 text-purple-400" />
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        AI Image Generator
      </h1>
    </div>
    <p className="mt-2 text-md text-gray-400">Bring your creative ideas to life with the power of Gemini.</p>
  </header>
);
