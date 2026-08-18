
import React, { useState } from 'react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#C5A059] rounded-full flex items-center justify-center shadow-lg z-[100] text-white hover:scale-105 transition-transform"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-72 md:w-80 bg-white shadow-2xl z-[100] rounded-lg overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="p-5 flex items-start space-x-4">
        <div className="flex-shrink-0 pt-1">
          <div className="w-10 h-10 rounded-full bg-pumphouse-bg border border-pumphouse-taupe flex items-center justify-center">
            <span className="font-serif text-[10px] leading-tight text-center">PH</span>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-[13px] text-gray-700 leading-snug">
            Hi there, have a question? Message us here and one of our representatives will get in touch.
          </p>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100"></div>
    </div>
  );
};

export default ChatWidget;
