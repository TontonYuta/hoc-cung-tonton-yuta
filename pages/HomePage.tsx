import React, { useState, useRef, useEffect } from 'react';
import { CourseCard } from '../components/CourseCard';
import { HeroButtons } from '../components/HeroButtons';
import { MOCK_COURSES, GRADES } from '../constants';
import { Sparkles, Filter, ChevronDown, Check } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lọc khóa học
  const filteredCourses = selectedGrade === 'all' 
    ? MOCK_COURSES 
    : MOCK_COURSES.filter(c => c.grade === selectedGrade);

  const currentGradeLabel = GRADES.find(g => g.id === selectedGrade)?.label;

  return (
    <div className="min-h-screen pb-20">
      {/* Modern Gradient Hero Section */}
      <div className="relative pt-16 pb-20 px-4 text-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-slate-50">
          
          {/* Decorative background patterns */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto mt-8">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-semibold mb-8 backdrop-blur-sm animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Hệ thống giáo dục trực tuyến chất lượng cao
             </div>
             
             <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Nền tảng học tập <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Tonton Yuta</span>
             </h1>
             
             <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                 Chuyên luyện thi Toán từ <strong>Lớp 6 đến Lớp 12</strong> và các môn Đại cương Đại học. <br/>
                 Phương pháp giảng dạy hiện đại, lộ trình bài bản.
             </p>

             <HeroButtons />
          </div>
      </div>

      {/* Course List */}
      <div id="courses-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-blue-600 fill-current" />
                    Các khóa học nổi bật
                </h2>
                <p className="text-slate-500 text-sm mt-1">Chọn lớp học để xem các khóa học phù hợp với bạn.</p>
            </div>
            
            {/* Filter Dropdown */}
            <div className="relative min-w-[200px] z-30" ref={dropdownRef}>
                <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 transition-all text-slate-700 font-medium"
                >
                    <span className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-blue-500" />
                        {currentGradeLabel}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-full md:w-64 bg-white rounded-xl border border-slate-100 shadow-xl p-1.5 max-h-[300px] overflow-y-auto scrollbar-hide animate-in fade-in zoom-in-95 duration-200">
                        {GRADES.map((grade) => (
                            <button
                                key={grade.id}
                                onClick={() => {
                                    setSelectedGrade(grade.id);
                                    setIsDropdownOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm rounded-lg transition-colors ${
                                    selectedGrade === grade.id
                                    ? 'bg-blue-50 text-blue-700 font-semibold'
                                    : 'text-slate-600 hover:bg-slate-50'
                                }`}
                            >
                                {grade.label}
                                {selectedGrade === grade.id && <Check className="w-4 h-4" />}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
        
        {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
        ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 border-dashed">
                <div className="inline-flex p-4 rounded-full bg-slate-50 mb-4">
                    <Filter className="w-8 h-8 text-slate-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-700">Chưa có khóa học nào</h3>
                <p className="text-slate-500 text-sm">Hiện tại chưa có khóa học cho danh mục này.</p>
            </div>
        )}
      </div>
    </div>
  );
};