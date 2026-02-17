import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_COURSES } from '../constants';
import { ChevronLeft, FileText, ExternalLink, PlayCircle, Menu, Youtube, Clock, AlertCircle } from 'lucide-react';

export const LessonPage: React.FC = () => {
  const { lessonId } = useParams();
  
  let currentLesson = null;
  let currentCourse = null;

  for (const course of MOCK_COURSES) {
    for (const chapter of course.chapters) {
      const found = chapter.lessons.find(l => l.id === lessonId);
      if (found) {
        currentLesson = found;
        currentCourse = course;
        break;
      }
    }
    if (currentLesson) break;
  }

  if (!currentLesson || !currentCourse) {
    return <div className="pt-20 text-center text-slate-500">Bài học không tồn tại</div>;
  }

  const handleOpenYoutube = () => {
    if (currentLesson?.youtubeId) {
        window.open(`https://www.youtube.com/watch?v=${currentLesson.youtubeId}`, '_blank');
    }
  };

  const thumbnailUrl = currentLesson.youtubeId 
    ? `https://img.youtube.com/vi/${currentLesson.youtubeId}/maxresdefault.jpg`
    : 'https://picsum.photos/1200/675';

  const hasVideo = !!currentLesson.youtubeId;
  const hasAttachments = currentLesson.attachments && currentLesson.attachments.length > 0;

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden bg-slate-50">
        {/* Top Navigation for Lesson */}
        <div className="h-16 flex items-center justify-between px-4 lg:px-8 border-b border-slate-200 bg-white shrink-0 z-20 shadow-sm">
             <div className="flex items-center gap-4">
                 <Link to={`/course/${currentCourse.id}`} className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1 group font-medium">
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="hidden sm:inline">Quay lại khoá học</span>
                 </Link>
                 <div className="h-6 w-px bg-slate-200 mx-2 hidden sm:block"></div>
                 <h1 className="text-slate-800 font-bold text-sm sm:text-lg line-clamp-1">{currentLesson.title}</h1>
             </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
             {/* Main Content Area */}
             <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar bg-slate-50">
                 
                 <div className="max-w-4xl mx-auto w-full p-4 md:p-8 space-y-6">
                    
                    {/* Video Card or Updating State */}
                    {hasVideo ? (
                        <div 
                            onClick={handleOpenYoutube}
                            className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg cursor-pointer group hover:shadow-xl transition-all"
                        >
                            <div className="relative aspect-video bg-slate-900">
                                <img 
                                    src={thumbnailUrl} 
                                    alt="Video Thumbnail" 
                                    className="w-full h-full object-contain opacity-80 group-hover:opacity-60 transition-opacity"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform mb-2 border border-white/30">
                                            <PlayCircle className="w-16 h-16 text-white" />
                                    </div>
                                    <span className="text-white font-medium bg-black/50 px-4 py-1 rounded-full backdrop-blur-md">
                                        Xem Video Bài Giảng
                                    </span>
                                </div>
                            </div>
                            <div className="p-4 flex items-center gap-3 border-t border-slate-100 bg-slate-50/50">
                                <Youtube className="w-6 h-6 text-red-600" />
                                <div>
                                    <h3 className="font-bold text-slate-800 text-sm">Video bài giảng trên YouTube</h3>
                                    <p className="text-xs text-slate-500">Thời lượng: {currentLesson.duration}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-slate-100 rounded-2xl aspect-video flex flex-col items-center justify-center border border-slate-200 text-slate-500 space-y-3">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <Clock className="w-8 h-8 text-slate-400" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-lg text-slate-700">Video đang được cập nhật</h3>
                                <p className="text-sm">Nội dung bài giảng này sẽ sớm được ra mắt.</p>
                            </div>
                        </div>
                    )}

                    {/* Description */}
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-blue-800 text-sm md:text-base leading-relaxed">
                        <span className="font-bold mr-2">Mô tả:</span>
                        {currentLesson.description}
                    </div>

                    {/* Resources List (Drive Links) */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                            <FileText className="w-6 h-6 text-blue-600" />
                            Tài liệu bài học
                        </h2>
                        
                        {hasAttachments ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {currentLesson.attachments.map((att) => (
                                    <a 
                                        key={att.id}
                                        href={att.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                                    >
                                        <div className={`p-3 rounded-lg mr-4 ${
                                            att.type === 'pdf' ? 'bg-red-50 text-red-500' : 
                                            att.type === 'doc' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'
                                        }`}>
                                            {att.type === 'pdf' ? <FileText className="w-6 h-6" /> : <ExternalLink className="w-6 h-6" />}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-slate-700 text-base group-hover:text-blue-600">{att.name}</p>
                                            <p className="text-xs text-slate-400 mt-0.5">Nhấn để mở tài liệu (Google Drive)</p>
                                        </div>
                                        <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-blue-500" />
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-500 italic">
                                <AlertCircle className="w-5 h-5" />
                                <span>Tài liệu cho bài học này đang được soạn thảo và cập nhật.</span>
                            </div>
                        )}
                    </div>

                 </div>
             </div>

             {/* Right Sidebar: Playlist (Simplified) */}
             <div className="w-80 bg-white border-l border-slate-200 hidden lg:flex flex-col z-10">
                 <div className="p-4 border-b border-slate-200 bg-slate-50">
                     <h3 className="font-bold text-slate-800 flex items-center gap-2">
                        <Menu className="w-4 h-4" /> Danh sách bài học
                     </h3>
                 </div>
                 <div className="flex-1 overflow-y-auto">
                     {currentCourse.chapters.map((chapter) => (
                         <div key={chapter.id}>
                             <div className="px-4 py-3 bg-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                                 {chapter.title}
                             </div>
                             <div>
                                 {chapter.lessons.map((lesson) => {
                                     const isActive = lesson.id === currentLesson?.id;
                                     return (
                                        <Link 
                                            key={lesson.id} 
                                            to={`/lesson/${lesson.id}`}
                                            className={`block px-4 py-3 border-b border-slate-50 transition-colors ${
                                                isActive 
                                                ? 'bg-blue-50 border-l-4 border-l-blue-600' 
                                                : 'hover:bg-slate-50 border-l-4 border-l-transparent'
                                            }`}
                                        >
                                            <div className="flex gap-3 items-start">
                                                <div className="mt-0.5">
                                                    {isActive ? (
                                                        <PlayCircle className="w-4 h-4 text-blue-600 fill-blue-100" />
                                                    ) : (
                                                        <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className={`text-sm font-medium line-clamp-2 ${isActive ? 'text-blue-700' : 'text-slate-600'}`}>
                                                        {lesson.title}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                     );
                                 })}
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
        </div>
    </div>
  );
};