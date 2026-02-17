import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_COURSES } from '../constants';
import { PlayCircle, Clock, BookOpen, FileText, ExternalLink, Zap, CheckCircle2 } from 'lucide-react';

export const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams();
  const course = MOCK_COURSES.find(c => c.id === courseId);

  if (!course) {
    return <div className="pt-32 text-center text-slate-500">Khoá học không tồn tại</div>;
  }

  const totalLessons = course.chapters.reduce((acc, chap) => acc + chap.lessons.length, 0);

  return (
    <div className="min-h-screen pb-20 bg-slate-50">
      {/* Course Header Banner */}
      <div className="relative pt-12 pb-24 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-start pt-8">
                 <div className="flex-1">
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-bold mb-4 uppercase tracking-widest">
                        <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100">Luyện thi THPT</span>
                        <span className="text-slate-300">•</span>
                        <span>{totalLessons} bài học</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">{course.title}</h1>
                    <p className="text-lg text-slate-600 mb-8 max-w-3xl leading-relaxed">{course.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm text-slate-700">
                            <Clock className="w-4 h-4 text-purple-500" />
                            <span>Cập nhật liên tục</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>Cam kết chất lượng</span>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Syllabus */}
            <div className="lg:col-span-2 space-y-6">
                {/* Chapters */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/50">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-blue-600 fill-current" />
                            Nội dung bài học
                        </h2>
                        <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">{course.chapters.length} chương</span>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {course.chapters.map((chapter) => (
                            <div key={chapter.id} className="p-0">
                                <div className="px-6 py-4 bg-slate-50/80 font-semibold text-blue-700 border-l-4 border-blue-500 flex items-center justify-between">
                                    <span>{chapter.title}</span>
                                    <span className="text-xs font-normal text-slate-400">{chapter.lessons.length} bài</span>
                                </div>
                                <div>
                                    {chapter.lessons.map((lesson) => (
                                        <div key={lesson.id} className="group px-6 py-4 flex items-center justify-between hover:bg-blue-50/50 transition-colors cursor-pointer border-l-4 border-transparent hover:border-blue-200">
                                            <div className="flex items-center gap-4">
                                                <div className="p-2 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                    <PlayCircle className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">
                                                        {lesson.title}
                                                    </h4>
                                                    <span className="text-xs text-slate-500">{lesson.duration} • Video chất lượng cao</span>
                                                </div>
                                            </div>
                                            <Link 
                                                to={`/lesson/${lesson.id}`} 
                                                className="px-4 py-2 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                                            >
                                                Học ngay
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: Info & Materials */}
            <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                    {/* Course Info Card */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg shadow-slate-200/50">
                        <h3 className="font-bold text-slate-800 mb-4 uppercase text-xs tracking-wider border-b border-slate-100 pb-2">Thông tin chung</h3>
                        <div className="space-y-4">
                             <div className="flex justify-between items-center text-sm p-3 rounded-xl bg-slate-50 border border-slate-100">
                                <span className="text-slate-500">Giáo viên</span>
                                <span className="font-bold text-slate-800">{course.teacher}</span>
                             </div>
                             <div className="flex justify-between items-center text-sm p-3 rounded-xl bg-slate-50 border border-slate-100">
                                <span className="text-slate-500">Tổng số bài</span>
                                <span className="font-bold text-slate-800">{totalLessons}</span>
                             </div>
                             <div className="flex justify-between items-center text-sm p-3 rounded-xl bg-green-50 border border-green-100">
                                <span className="text-green-700 font-medium">Học phí</span>
                                <span className="font-bold text-green-700">Miễn phí 100%</span>
                             </div>
                        </div>
                    </div>

                    {/* Reference Materials */}
                    {course.referenceMaterials && (
                        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg shadow-slate-200/50">
                            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-blue-500" />
                                Tài liệu bổ trợ
                            </h3>
                            <div className="space-y-3">
                                {course.referenceMaterials.map((ref) => (
                                    <a 
                                        key={ref.id} 
                                        href={ref.url} 
                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group"
                                    >
                                        <div className={`p-2 rounded-lg ${ref.type === 'pdf' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                                            {ref.type === 'pdf' ? <FileText className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                                        </div>
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-sm font-semibold text-slate-700 truncate group-hover:text-blue-600 transition-colors">{ref.name}</p>
                                            {ref.size && <p className="text-xs text-slate-400">{ref.size}</p>}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};