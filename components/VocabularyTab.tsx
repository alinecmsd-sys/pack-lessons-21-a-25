import React from 'react';
import { VocabCategory } from '../types';
import { speak } from '../utils/tts';
import { Volume2 } from 'lucide-react';

interface Props {
  data: VocabCategory[];
}

const VocabularyTab: React.FC<Props> = ({ data }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {data.map((category, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-100">
            <h3 className="font-semibold text-slate-700">{category.title}</h3>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {category.items.map((item, i) => (
              <button
                key={i}
                onClick={() => speak(item.en)}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-indigo-50 border border-transparent hover:border-indigo-100 transition-all group text-left"
              >
                <div>
                  <p className="font-medium text-slate-800">{item.en}</p>
                  <p className="text-sm text-slate-500">{item.pt}</p>
                </div>
                <div className="p-2 rounded-full bg-slate-100 group-hover:bg-indigo-200 text-slate-400 group-hover:text-indigo-600 transition-colors">
                  <Volume2 size={18} />
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VocabularyTab;
