import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, ChevronRight, Map } from 'lucide-react';

export const HeroButtons: React.FC = () => {
  const navigate = useNavigate();

  const scrollToCourses = () => {
    const element = document.getElementById('courses-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewRoadmap = () => {
    navigate('/roadmap');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
       <button 
         onClick={scrollToCourses}
         className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center gap-2"
       >
          <GraduationCap className="w-5 h-5" />
          Bắt đầu học ngay
       </button>
       <button 
         onClick={handleViewRoadmap}
         className="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 group"
       >
          <Map className="w-5 h-5 text-blue-500" />
          Tạo lộ trình
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
       </button>
    </div>
  );
};