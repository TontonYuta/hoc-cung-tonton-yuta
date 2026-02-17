import React from 'react';
import { GLOBAL_REFERENCES, MOCK_COURSES, GRADES } from '../constants';
import { FileText, Download, ExternalLink, Book, FolderOpen, ChevronRight } from 'lucide-react';
import { Attachment } from '../types';

export const ReferencePage: React.FC = () => {
  
  // Helper to render a single reference item
  const renderReferenceItem = (ref: Attachment) => (
    <a 
        key={ref.id}
        href={ref.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
    >
        <div className={`p-3 rounded-xl shadow-sm shrink-0 ${ref.type === 'pdf' ? 'bg-red-50 text-red-500' : ref.type === 'doc' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'}`}>
            {ref.type === 'pdf' ? <FileText className="w-6 h-6" /> : <ExternalLink className="w-6 h-6" />}
        </div>
        <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-slate-800 text-sm md:text-base truncate group-hover:text-blue-600 transition-colors">{ref.name}</h3>
            <div className="flex items-center gap-2 mt-1.5">
                <span className="text-[10px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded uppercase">{ref.type}</span>
                {ref.size && <span className="text-xs text-slate-400">• {ref.size}</span>}
            </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
            <Download className="w-4 h-4 text-slate-400 group-hover:text-white" />
        </div>
    </a>
  );

  return (
    <div className="min-h-screen pb-20 bg-slate-50">
      <div className="relative py-12 px-4 text-center bg-white border-b border-slate-200 mb-8">
          <div className="inline-block p-3 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <Book className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Kho tài liệu</h1>
          <p className="text-slate-500 max-w-lg mx-auto">Tổng hợp công thức, đề thi và tài liệu bổ trợ theo từng lớp học.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* SECTION: TÀI LIỆU CHUNG */}
          <div>
             <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white p-2 rounded-lg shadow-md shadow-blue-500/20">
                    <FolderOpen className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-800">Tài liệu Đại cương & Tổng hợp</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {GLOBAL_REFERENCES.map(ref => renderReferenceItem(ref))}
             </div>
          </div>

          {/* SECTION: THEO LỚP */}
          {GRADES.filter(g => g.id !== 'all').map((grade) => {
              // Get courses for this grade that have reference materials
              const coursesInGrade = MOCK_COURSES.filter(
                  c => c.grade === grade.id && c.referenceMaterials && c.referenceMaterials.length > 0
              );

              if (coursesInGrade.length === 0) return null;

              return (
                  <div key={grade.id} className="animate-fade-in-up">
                      <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-2">
                            <span className="text-2xl font-bold text-slate-300">#</span>
                            <h2 className="text-xl font-bold text-slate-800">{grade.label}</h2>
                      </div>
                      
                      <div className="space-y-6">
                        {coursesInGrade.map(course => (
                            <div key={course.id} className="bg-slate-100/50 rounded-2xl p-6 border border-slate-200/60">
                                <h3 className="text-md font-bold text-blue-700 mb-4 flex items-center gap-2">
                                    <ChevronRight className="w-4 h-4" />
                                    {course.title}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {course.referenceMaterials?.map(ref => renderReferenceItem(ref))}
                                </div>
                            </div>
                        ))}
                      </div>
                  </div>
              );
          })}
          
          <div className="text-center pt-8 text-slate-400 text-sm">
             <p>Các tài liệu đang được thầy Trần Huy Hoàng cập nhật liên tục...</p>
          </div>
      </div>
    </div>
  );
};