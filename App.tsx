import React from 'react';
import Invitation from './components/Invitation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-100 paper-texture">
      <div className="w-full max-w-md bg-white min-h-screen shadow-xl overflow-hidden relative">
        <Invitation />
      </div>
    </div>
  );
};

export default App;