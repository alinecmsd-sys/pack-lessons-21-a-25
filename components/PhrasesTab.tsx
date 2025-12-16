import React from 'react';
import { PhraseItem } from '../types';
import { speak } from '../utils/tts';
import { PlayCircle } from 'lucide-react';

interface Props {
  data: PhraseItem[];
}

const PhrasesTab: React.FC<Props> = ({ data }) => {
  return (
    <div className="space-y-4 animate-fade-in">
      {data.map((phrase, idx) => (
        <div 
          key={idx} 
          onClick={() => speak(phrase.en)}
          className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-md hover:border-indigo-100 transition-all group flex items-start gap-4"
        >
          <div className="mt-1 text-indigo-500 group-hover:scale-110 transition-transform">
             <PlayCircle size={24} />
          </div>
          <div className="flex-1">
            <p className="text-lg font-medium text-slate-800 mb-1">{phrase.en}</p>
            <p className="text-slate-500">{phrase.pt}</p>
            {phrase.note && (
               <p className="mt-2 text-sm text-amber-600 bg-amber-50 inline-block px-2 py-1 rounded border border-amber-100">
                 💡 {phrase.note}
               </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhrasesTab;
