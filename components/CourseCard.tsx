import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, ArrowRight, PlayCircle } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link 
      to={`/course/${course.id}`}
      className="group relative block h-full"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-100 transition-all duration-300 h-full flex flex-col shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
          
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-green-600 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm border border-green-100 uppercase tracking-wide">
            Miễn phí
          </div>
          <div className="absolute bottom-3 left-3 bg-slate-900/60 backdrop-blur-md border border-white/20 text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1.5">
              <Users className="w-3 h-3 text-blue-300" />
              {course.studentsCount.toLocaleString()}
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-3">
             <div className="flex items-center gap-1 text-blue-600 text-xs font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                <Star className="w-3 h-3 fill-current" />
                <span>{course.rating}</span>
             </div>
             <span className="text-xs text-slate-500 bg-slate-100 border border-slate-200 rounded px-2 py-0.5 font-medium">Lớp {course.grade}</span>
          </div>
          
          <h3 className="font-bold text-slate-800 text-lg mb-2 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>
          
          <p className="text-sm text-slate-500 mb-5 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">GV</span>
              {course.teacher}
          </p>

          <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse ring-4 ring-green-100"></div>
                 <span className="text-slate-500 text-xs font-medium">Đang mở đăng ký</span>
              </div>
              <div className="flex items-center text-blue-600 text-sm font-semibold gap-1 group-hover:gap-2 transition-all bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg">
                  Chi tiết <ArrowRight className="w-4 h-4" />
              </div>
          </div>
        </div>
      </div>
    </Link>
  );
};