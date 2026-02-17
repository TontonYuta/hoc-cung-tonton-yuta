import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Library } from 'lucide-react';

export const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
      return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Light Glass Effect Container */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm supports-[backdrop-filter]:bg-white/60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
                  T
                </div>
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-lg text-slate-800 leading-none tracking-tight group-hover:text-blue-600 transition-colors">Tonton Yuta</span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest mt-0.5">Luyện thi Toán THPT</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-1 sm:space-x-2 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
             <Link 
                to="/" 
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-200' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Khóa học</span>
              </Link>
             <Link 
                to="/references" 
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive('/references') 
                    ? 'bg-white text-purple-600 shadow-sm ring-1 ring-slate-200' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <Library className="w-4 h-4" />
                <span className="hidden sm:inline">Kho tài liệu</span>
              </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};