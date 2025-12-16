import React, { useState } from 'react';
import { LessonData } from '../types';
import VocabularyTab from './VocabularyTab';
import PhrasesTab from './PhrasesTab';
import ExercisesTab from './ExercisesTab';
import { BookOpen, MessageCircle, PenTool } from 'lucide-react';

interface Props {
  lesson: LessonData;
}

type TabType = 'vocabulary' | 'phrases' | 'exercises';

const LessonView: React.FC<Props> = ({ lesson }) => {
  const [activeTab, setActiveTab] = useState<TabType>('vocabulary');

  // Reset tab when lesson changes
  React.useEffect(() => {
    setActiveTab('vocabulary');
  }, [lesson.id]);

  const tabs = [
    { id: 'vocabulary', label: 'Vocabulary', icon: BookOpen },
    { id: 'phrases', label: 'Phrases', icon: MessageCircle },
    { id: 'exercises', label: 'Exercises', icon: PenTool },
  ] as const;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-wider mb-1">
          Lesson {lesson.id}
        </h2>
        <h1 className="text-3xl font-bold text-slate-900">{lesson.title}</h1>
      </div>

      {/* Tabs Navigation */}
      <div className="flex p-1 space-x-1 bg-slate-200/50 rounded-xl mb-8 w-fit">
        {tabs.map((tab) => {
           const Icon = tab.icon;
           const isActive = activeTab === tab.id;
           return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg transition-all
                ${isActive 
                  ? 'bg-white text-indigo-700 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                }
              `}
            >
              <Icon size={18} />
              {tab.label}
            </button>
           );
        })}
      </div>

      {/* Content Area */}
      <div className="min-h-[400px]">
        {activeTab === 'vocabulary' && <VocabularyTab data={lesson.vocabulary} />}
        {activeTab === 'phrases' && <PhrasesTab data={lesson.phrases} />}
        {activeTab === 'exercises' && <ExercisesTab data={lesson.exercises} />}
      </div>
    </div>
  );
};

export default LessonView;
