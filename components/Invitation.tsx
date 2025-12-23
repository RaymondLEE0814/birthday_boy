import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { MapPin, Phone, Calendar, Copy, Check } from 'lucide-react';
import Bunting from './Bunting';
import { EVENT_DETAILS } from '../constants';

const Invitation: React.FC = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fire confetti on load
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFD700', '#FF6B6B', '#4ECDC4']
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFD700', '#FF6B6B', '#4ECDC4']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(EVENT_DETAILS.location).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleCall = () => {
    window.location.href = `tel:${EVENT_DETAILS.contact}`;
  };

  const handleMap = () => {
    window.open(`https://m.map.naver.com/search2/search.naver?query=${encodeURIComponent(EVENT_DETAILS.mapQuery)}`, '_blank');
  };

  // Helper for colorful text
  const ColorfulText = ({ text }: { text: string }) => {
    const colors = ['text-[#FF6B6B]', 'text-[#4ECDC4]', 'text-[#FFD700]', 'text-[#A06CD5]', 'text-[#FF9F1C]'];
    return (
      <span className="inline-block">
        {text.split('').map((char, i) => (
          <span key={i} className={`${colors[i % colors.length]} drop-shadow-sm`}>{char}</span>
        ))}
      </span>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfbf7] pb-20 relative overflow-x-hidden">
      <Bunting />
      
      {/* Content Wrapper */}
      <div className="px-6 pt-24 pb-8 flex flex-col items-center text-center z-10">
        
        {/* Colorful HAPPY BIRTHDAY Title */}
        <div className="font-heading text-5xl mb-2 tracking-wide font-bold flex flex-col gap-1 leading-tight transform -rotate-2">
          <div><ColorfulText text="HAPPY" /></div>
          <div><ColorfulText text="BIRTHDAY" /></div>
        </div>

        {/* Subtitle / Greeting Title */}
        <h2 className="font-hand text-2xl text-gray-700 mt-6 mb-8 font-bold">
          {EVENT_DETAILS.greetingTitle}
        </h2>

        {/* Main Greeting Body */}
        <div className="max-w-xs mx-auto mb-8">
          <p className="font-hand text-xl text-gray-600 whitespace-pre-line leading-8">
            {EVENT_DETAILS.greetingBody}
          </p>
          <p className="font-hand text-xl text-[#FF6B6B] font-bold mt-6">
            {EVENT_DETAILS.closing}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs border-t-2 border-dashed border-gray-300 my-2"></div>

        {/* Info Section */}
        <div className="w-full max-w-sm mt-8 flex flex-col gap-8">
          
          {/* Date & Time */}
          <div className="flex flex-col items-center">
            <h3 className="font-heading text-2xl text-gray-800 mb-2">
              {EVENT_DETAILS.date} ({EVENT_DETAILS.day})
            </h3>
            <p className="font-heading text-3xl font-bold text-[#FF6B6B]">
              {EVENT_DETAILS.time}
            </p>
          </div>

          {/* Location Line */}
          <div className="w-24 h-1 bg-yellow-200 mx-auto rounded-full"></div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <p className="font-heading text-xl text-gray-800 break-keep px-4 leading-relaxed">
              {EVENT_DETAILS.location}
            </p>
            
            <div className="flex gap-3 mt-4">
              <button 
                onClick={handleCopyAddress}
                className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-bold text-gray-600 transition-colors shadow-sm"
              >
                {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                {copied ? "복사완료" : "주소복사"}
              </button>
              <button 
                onClick={handleMap}
                className="flex items-center gap-1.5 px-4 py-2 bg-[#2DB400] hover:bg-[#259600] text-white rounded-full text-sm font-bold transition-colors shadow-sm"
              >
                <MapPin size={16} />
                네이버지도
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center mt-2">
            <p className="font-hand text-xl text-gray-500 mb-2">
              문의: {EVENT_DETAILS.contact}
            </p>
             <button 
                onClick={handleCall}
                className="flex items-center gap-2 px-8 py-3 bg-[#FF6B6B] hover:bg-[#ff5252] text-white rounded-2xl text-lg font-bold shadow-lg transform transition active:scale-95"
              >
                <Phone size={20} fill="currentColor" />
                희찬이에게 전화하기
              </button>
          </div>

        </div>

      </div>

      {/* Footer */}
       <div className="absolute bottom-0 w-full text-center py-4 text-xs text-gray-400 font-light">
        © 2026 Heechan's Birthday Party
      </div>
    </div>
  );
};

export default Invitation;