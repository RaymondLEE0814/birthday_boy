import React from 'react';

const Bunting: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10 overflow-hidden h-24 pointer-events-none">
       {/* Left Bunting */}
      <svg className="absolute -top-2 -left-4 w-40 h-24 transform -rotate-12" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 20 Q100 60 200 20" stroke="#888" strokeWidth="2" fill="none"/>
        <path d="M20 28 L40 60 L60 25" fill="#FFD700" stroke="#FFD700" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M70 24 L90 55 L110 21" fill="#FF6B6B" stroke="#FF6B6B" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M120 20 L140 50 L160 18" fill="#4ECDC4" stroke="#4ECDC4" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
      
      {/* Right Bunting */}
      <svg className="absolute -top-2 -right-4 w-40 h-24 transform rotate-12" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M0 20 Q100 60 200 20" stroke="#888" strokeWidth="2" fill="none"/>
        <path d="M30 25 L50 55 L70 22" fill="#A06CD5" stroke="#A06CD5" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M80 21 L100 50 L120 19" fill="#FF9F1C" stroke="#FF9F1C" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M130 18 L150 45 L170 16" fill="#2EC4B6" stroke="#2EC4B6" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

export default Bunting;