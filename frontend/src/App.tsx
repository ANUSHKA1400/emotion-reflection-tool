// frontend/src/App.tsx
import React from 'react';
import './index.css'; // This is needed for global styles including Tailwind
import EmotionForm from './components/EmotionForm'; // Correct path to your new component

const App: React.FC = () => {
  return (
    // Changed background gradient to Warm & Approachable (Soft Peach to Light Gold)
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center p-4 font-inter">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Emotion Reflection Tool
        </h1>
        <EmotionForm /> {/* Render the EmotionForm component here */}
      </div>
    </div>
  );
};

export default App;