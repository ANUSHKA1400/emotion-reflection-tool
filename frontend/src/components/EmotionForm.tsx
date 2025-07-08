// frontend/src/components/EmotionForm.tsx
import React, { useState } from 'react';

interface EmotionResult {
  emotion: string;
  confidence: number;
}

const EmotionForm: React.FC = () => {
  const [textInput, setTextInput] = useState<string>('');
  const [emotionResult, setEmotionResult] = useState<EmotionResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(event.target.value);
    setEmotionResult(null);
    setError(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!textInput.trim()) {
      setError("Please enter some text to analyze.");
      return;
    }

    setIsLoading(true);
    setEmotionResult(null);
    setError(null);

    try {
      // This URL (http://localhost:5000) must match where your Flask backend will be running
      const response = await fetch('http://localhost:8000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: textInput }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to get emotion analysis.');
      }

      const data: EmotionResult = await response.json();
      setEmotionResult(data);
    } catch (err: any) {
      console.error("Error fetching emotion analysis:", err);
      setError(`Error: ${err.message || 'Something went wrong. Please try again.'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <> {/* Using a React Fragment because EmotionForm is wrapped by App.tsx */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="reflection-text" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your reflection:
          </label>
          <textarea
            id="reflection-text"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 resize-y min-h-[100px]"
            rows={5}
            placeholder="e.g., I feel nervous about my first job interview."
            value={textInput}
            onChange={handleInputChange}
            disabled={isLoading}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading || !textInput.trim()}
        >
          {isLoading ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            'Analyze Emotion'
          )}
        </button>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-md" role="alert">
          <p className="font-semibold">Error:</p>
          <p>{error}</p>
        </div>
      )}

      {emotionResult && (
        <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-green-800 mb-3">Analysis Result:</h2>
          <div className="flex items-center justify-between text-lg text-gray-800">
            <span className="font-semibold">Emotion:</span>
            <span className="text-green-700">{emotionResult.emotion}</span>
          </div>
          <div className="flex items-center justify-between text-lg text-gray-800 mt-2">
            <span className="font-semibold">Confidence:</span>
            <span className="text-green-700">{(emotionResult.confidence * 100).toFixed(2)}%</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EmotionForm;