import React from 'react';
import { EVENT_DETAILS } from '../constants';

const PhotoFrame: React.FC = () => {
  return (
    <div className="relative mx-auto w-64 md:w-72 mt-8 mb-6 transform rotate-2 hover:rotate-0 transition-transform duration-500 ease-in-out cursor-pointer group">
      <div className="bg-white p-3 pb-12 shadow-xl border border-gray-100 rounded-sm relative z-10">
        {/* Changed aspect ratio from 3/4 to 9/16 (or 3/5) to better fit the vertical phone photo */}
        <div className="relative aspect-[9/16] overflow-hidden bg-gray-100 rounded-sm">
           <img 
            src={EVENT_DETAILS.imageUrl} 
            alt="Birthday Boy" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
      {/* Tape effect */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-yellow-100 opacity-60 rotate-2 z-20 shadow-sm"></div>
    </div>
  );
};

export default PhotoFrame;