import React, { useState } from 'react';
import { lessons } from './data/lessons';
import LessonView from './components/LessonView';
import { Menu, X, Book, GraduationCap } from 'lucide-react';

const App: React.FC = () => {
  const [currentLessonId, setCurrentLessonId] = useState(21);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentLesson = lessons.find(l => l.id === currentLessonId) || lessons[0];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar Navigation */}
      <aside 
        className={`
          fixed lg:static top-0 left-0 z-50 h-full w-72 bg-white border-r border-slate-200 shadow-xl lg:shadow-none
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex items-center gap-3 p-6 border-b border-slate-100 h-20">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <GraduationCap className="text-white" size={24} />
          </div>
          <span className="font-bold text-xl text-slate-800 tracking-tight">EnglishApp</span>
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100%-5rem)]">
          <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 mt-2">
            Course Content
          </p>
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => {
                setCurrentLessonId(lesson.id);
                closeSidebar();
              }}
              className={`
                w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl transition-all
                ${currentLessonId === lesson.id 
                  ? 'bg-indigo-50 text-indigo-700 border border-indigo-100 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }
              `}
            >
              <span className={`
                flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold
                ${currentLessonId === lesson.id ? 'bg-indigo-200 text-indigo-700' : 'bg-slate-100 text-slate-500'}
              `}>
                {lesson.id}
              </span>
              <span className="font-medium truncate">{lesson.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden w-full relative">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 bg-white border-b border-slate-200 flex items-center px-4 justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
               <GraduationCap className="text-white" size={20} />
            </div>
            <span className="font-bold text-lg text-slate-800">EnglishApp</span>
          </div>
          <button 
            onClick={toggleSidebar} 
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 scroll-smooth">
          <LessonView lesson={currentLesson} />
          
          <div className="mt-20 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
            <p>Interactive English Learning • Lessons 21-25</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
