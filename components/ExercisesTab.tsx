import React, { useState, useEffect } from 'react';
import { ExerciseItem } from '../types';
import { Check, X, RefreshCw } from 'lucide-react';

interface Props {
  data: ExerciseItem[];
}

const ExercisesTab: React.FC<Props> = ({ data }) => {
  // Use a map to store user inputs for each question index
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  // Use a map to store feedback status: 'idle' | 'correct' | 'incorrect'
  const [feedback, setFeedback] = useState<{ [key: number]: 'idle' | 'correct' | 'incorrect' }>({});

  // Reset state when data changes (new lesson)
  useEffect(() => {
    setAnswers({});
    setFeedback({});
  }, [data]);

  const normalizeText = (text: string) => {
    return text.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");
  };

  const handleCheck = (index: number) => {
    const userAnswer = normalizeText(answers[index] || '');
    const correctAnswer = normalizeText(data[index].answer);

    if (userAnswer === correctAnswer) {
      setFeedback(prev => ({ ...prev, [index]: 'correct' }));
    } else {
      setFeedback(prev => ({ ...prev, [index]: 'incorrect' }));
    }
  };

  const handleRetry = (index: number) => {
     setFeedback(prev => ({ ...prev, [index]: 'idle' }));
     setAnswers(prev => ({ ...prev, [index]: '' }));
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-6">
        <p className="text-blue-800 text-sm font-medium">
          📝 Translate the sentences below into English. Don't worry about punctuation like periods or question marks.
        </p>
      </div>

      {data.map((item, idx) => {
        const status = feedback[idx] || 'idle';
        
        return (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-500 font-medium text-sm mb-2 uppercase tracking-wide">Translate to English</p>
            <p className="text-xl text-slate-800 mb-4 font-semibold">{item.question}</p>
            
            <div className="relative">
              <input
                type="text"
                disabled={status === 'correct'}
                value={answers[idx] || ''}
                onChange={(e) => {
                    setAnswers(prev => ({ ...prev, [idx]: e.target.value }));
                    if (status !== 'idle') setFeedback(prev => ({ ...prev, [idx]: 'idle' }));
                }}
                placeholder="Type your answer here..."
                className={`w-full p-3 pr-12 rounded-lg border-2 outline-none transition-colors ${
                  status === 'correct' 
                    ? 'border-green-500 bg-green-50 text-green-900' 
                    : status === 'incorrect'
                    ? 'border-red-300 bg-red-50 text-red-900 focus:border-red-400'
                    : 'border-slate-200 focus:border-indigo-500'
                }`}
              />
              
              <div className="mt-3 flex items-center justify-between">
                {status === 'idle' && (
                    <button
                        onClick={() => handleCheck(idx)}
                        disabled={!answers[idx]}
                        className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                    >
                        Check Answer
                    </button>
                )}

                {status === 'correct' && (
                    <div className="flex items-center gap-2 text-green-700 font-bold animate-bounce-short">
                        <Check size={20} />
                        <span>Correct! Great job.</span>
                    </div>
                )}

                {status === 'incorrect' && (
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-red-600 font-medium">
                            <X size={18} />
                            Incorrect
                        </span>
                        <button 
                            onClick={() => handleRetry(idx)}
                            className="text-slate-500 hover:text-indigo-600 underline text-sm flex items-center gap-1"
                        >
                            <RefreshCw size={14} /> Try again
                        </button>
                    </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExercisesTab;
