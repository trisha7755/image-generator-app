
import React from 'react';

export const Footer: React.FC = () => (
  <footer className="w-full text-center py-4 border-t border-gray-700 bg-gray-900">
    <p className="text-sm text-gray-500">
      Powered by{' '}
      <a
        href="https://ai.google.dev/gemini-api"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-purple-400 hover:text-purple-300"
      >
        Google Gemini
      </a>
    </p>
  </footer>
);
