
import React from 'react';
import { Spinner } from './Spinner';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  prompt: string;
}

const ImageIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);


export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading, prompt }) => {
  return (
    <div className="w-full max-w-lg aspect-square bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-700 overflow-hidden transition-all duration-300">
      {isLoading && (
        <div className="text-center">
          <Spinner />
          <p className="mt-4 text-gray-400">Conjuring your masterpiece...</p>
        </div>
      )}
      {!isLoading && imageUrl && (
        <img
          src={imageUrl}
          alt={prompt || 'Generated AI image'}
          className="w-full h-full object-contain"
        />
      )}
      {!isLoading && !imageUrl && (
        <div className="text-center text-gray-500">
            <ImageIcon className="w-20 h-20 mx-auto" />
            <p className="mt-2">Your generated image will appear here</p>
        </div>
      )}
    </div>
  );
};
