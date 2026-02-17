import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { LessonPage } from './pages/LessonPage';
import { ReferencePage } from './pages/ReferencePage';
import { RoadmapPage } from './pages/RoadmapPage';
import { Facebook } from 'lucide-react';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen relative bg-slate-50">
        <Header />
        
        <main className="flex-grow pt-20 pb-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/references" element={<ReferencePage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/course/:courseId" element={<CourseDetailPage />} />
            <Route path="/lesson/:lessonId" element={<LessonPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Floating Contact Button */}
        <a 
          href="https://www.facebook.com/yuta.primer"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white p-3 md:px-5 md:py-3 rounded-full shadow-[0_4px_20px_rgba(37,99,235,0.4)] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          title="Liên hệ Facebook Tontons Yuta"
        >
           <Facebook className="w-6 h-6" />
           <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium md:max-w-xs md:block">
              Chat với Tontons Yuta
           </span>
        </a>
      </div>
    </HashRouter>
  );
};

export default App;