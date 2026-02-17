import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Target, BarChart, ChevronRight, RefreshCw, GraduationCap } from 'lucide-react';

// Định nghĩa các cấp độ đầu vào
type Level = 
  | 'grade6' | 'grade7' | 'grade8' | 'grade9' 
  | 'grade10' | 'grade11' 
  | 'lost_g12' | 'avg_g12' | 'good_g12' | 'university';

// Định nghĩa các mục tiêu
type Goal = 
  | 'basic_secondary' | 'adv_secondary' // Mục tiêu THCS (6-9)
  | 'basic_highschool' | 'adv_highschool' // Mục tiêu THPT (10-11)
  | 'pass_g12' | 'uni_7' | 'uni_8' | 'uni_9' // Mục tiêu lớp 12
  | 'uni_pass' | 'uni_gpa'; // Mục tiêu đại học

interface RoadmapPhase {
  title: string;
  description: string;
  courseId: string;
  duration: string;
  color: string;
}

export const RoadmapPage: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [currentLevel, setCurrentLevel] = useState<Level | null>(null);
  const [targetGoal, setTargetGoal] = useState<Goal | null>(null);

  // Dữ liệu lựa chọn Cấp độ (Bước 1)
  const levels = [
    { id: 'grade6', label: 'Học sinh Lớp 6', desc: 'Mới chuyển cấp, cần làm quen phương pháp học THCS.', icon: '6️⃣' },
    { id: 'grade7', label: 'Học sinh Lớp 7', desc: 'Củng cố nền tảng số học và hình học trực quan.', icon: '7️⃣' },
    { id: 'grade8', label: 'Học sinh Lớp 8', desc: 'Giai đoạn bản lề quan trọng với Hình học và Đại số.', icon: '8️⃣' },
    { id: 'grade9', label: 'Học sinh Lớp 9', desc: 'Chuẩn bị cho kỳ thi tuyển sinh vào lớp 10.', icon: '9️⃣' },
    { id: 'grade10', label: 'Học sinh Lớp 10', desc: 'Bắt đầu chương trình THPT mới. Tư duy Toán tập hợp.', icon: '🔟' },
    { id: 'grade11', label: 'Học sinh Lớp 11', desc: 'Chuyên đề khó nhất THPT: Hình không gian & Giới hạn.', icon: '1️⃣1️⃣' },
    { id: 'lost_g12', label: 'Lớp 12 - Mất gốc', desc: 'Hổng kiến thức nền tảng, gặp khó khăn khi tiếp cận bài mới.', icon: '🌱' },
    { id: 'avg_g12', label: 'Lớp 12 - Trung bình', desc: 'Nắm được cơ bản nhưng chưa vận dụng tốt vào bài tập khó.', icon: '🌿' },
    { id: 'good_g12', label: 'Lớp 12 - Khá/Giỏi', desc: 'Nền tảng tốt, tư duy nhanh, mục tiêu trường Top.', icon: '🌳' },
    { id: 'university', label: 'Sinh viên Đại Học', desc: 'Sinh viên năm nhất, năm hai các trường kỹ thuật.', icon: '🎓' },
  ];

  // Dữ liệu lựa chọn Mục tiêu (Bước 2) - Phụ thuộc vào Cấp độ
  const getGoals = () => {
    // Nhóm THCS (6, 7, 8, 9)
    if (['grade6', 'grade7', 'grade8', 'grade9'].includes(currentLevel as string)) {
        return [
            { id: 'basic_secondary', label: 'Nắm chắc kiến thức SGK', desc: 'Đạt điểm 8+ trên lớp, hiểu rõ bản chất.' },
            { id: 'adv_secondary', label: 'Học sinh giỏi / Thi chuyên', desc: 'Đạt điểm 9-10, chinh phục bài toán nâng cao.' },
        ];
    }
    // Nhóm THPT (10, 11)
    if (['grade10', 'grade11'].includes(currentLevel as string)) {
        return [
            { id: 'basic_highschool', label: 'Học tốt chương trình SGK', desc: 'Duy trì GPA 8.0+, nắm chắc nền tảng.' },
            { id: 'adv_highschool', label: 'Xuất sắc / Thi HSG', desc: 'Mục tiêu 9.0+, luyện thi HSG, chuẩn bị sớm cho ĐH.' },
        ];
    }
    // Nhóm Đại học
    if (currentLevel === 'university') {
      return [
        { id: 'uni_pass', label: 'Qua môn (Đạt)', desc: 'Mục tiêu hoàn thành môn học, tránh học lại.' },
        { id: 'uni_gpa', label: 'Học bổng / GPA cao (A/A+)', desc: 'Mục tiêu điểm tổng kết cao để săn học bổng.' },
      ];
    }
    // Mặc định cho Lớp 12 (Ôn thi)
    return [
      { id: 'pass_g12', label: 'Đỗ tốt nghiệp THPT', desc: 'Mục tiêu nắm chắc kiến thức cơ bản để vượt qua kỳ thi.' },
      { id: 'uni_7', label: 'Xét tuyển Đại học (7+)', desc: 'Mục tiêu điểm khá để xét tuyển vào các trường top giữa.' },
      { id: 'uni_8', label: 'Xét tuyển Đại học Top (8+)', desc: 'Mục tiêu điểm giỏi, cạnh tranh vào các trường hàng đầu.' },
      { id: 'uni_9', label: 'Thủ khoa / Xuất sắc (9+)', desc: 'Mục tiêu điểm xuất sắc, chinh phục các trường Y Dược, Bách Khoa.' },
    ];
  };

  const goals = getGoals();

  // Logic tạo lộ trình
  const generateRoadmap = (): RoadmapPhase[] => {
    const roadmap: RoadmapPhase[] = [];

    // --- CASE: LỚP 6 ---
    if (currentLevel === 'grade6') {
       roadmap.push({
          title: 'Học kì 1: Số tự nhiên & Hình học trực quan',
          description: 'Làm quen với tập hợp, luỹ thừa và các hình cơ bản (Tam giác đều, Lục giác đều).',
          courseId: 'math-g6-2025',
          duration: '4 tháng đầu',
          color: 'bg-green-100 text-green-700 border-green-200',
       });
       roadmap.push({
          title: 'Học kì 2: Phân số & Số thập phân',
          description: 'Trọng tâm kiến thức HK2. Các phép tính phân số và xác suất thực nghiệm.',
          courseId: 'math-g6-2025',
          duration: '4 tháng tiếp',
          color: 'bg-blue-100 text-blue-700 border-blue-200',
       });
    }

    // --- CASE: LỚP 7 ---
    else if (currentLevel === 'grade7') {
        roadmap.push({
           title: 'Học kì 1: Số hữu tỉ & Hình học phẳng',
           description: 'Các phép toán trên tập Q. Góc đối đỉnh, tia phân giác và hai đường thẳng song song.',
           courseId: 'math-g7-2025',
           duration: 'HK1',
           color: 'bg-indigo-100 text-indigo-700 border-indigo-200',
        });
        roadmap.push({
           title: 'Học kì 2: Tỉ lệ thức & Biểu thức đại số',
           description: 'Làm quen với thống kê, biểu thức đại số và tam giác bằng nhau.',
           courseId: 'math-g7-2025',
           duration: 'HK2',
           color: 'bg-purple-100 text-purple-700 border-purple-200',
        });
     }

    // --- CASE: LỚP 8 ---
    else if (currentLevel === 'grade8') {
        roadmap.push({
           title: 'Học kì 1: Đa thức & Tứ giác',
           description: '7 hằng đẳng thức đáng nhớ. Phân tích đa thức thành nhân tử. Hình bình hành, Hình chữ nhật.',
           courseId: 'math-g8-2025',
           duration: 'HK1',
           color: 'bg-rose-100 text-rose-700 border-rose-200',
        });
        roadmap.push({
           title: 'Học kì 2: Phân thức & Tam giác đồng dạng',
           description: 'Định lý Talet và tam giác đồng dạng. Phương trình bậc nhất một ẩn.',
           courseId: 'math-g8-2025',
           duration: 'HK2',
           color: 'bg-orange-100 text-orange-700 border-orange-200',
        });
     }

    // --- CASE: LỚP 9 ---
    else if (currentLevel === 'grade9') {
        roadmap.push({
           title: 'Giai đoạn 1: Nền tảng Căn thức & Hệ thức lượng',
           description: 'Làm chủ bài toán rút gọn căn thức và hệ thức lượng trong tam giác vuông.',
           courseId: 'math-g9-2025',
           duration: '3 tháng',
           color: 'bg-teal-100 text-teal-700 border-teal-200',
        });
        roadmap.push({
           title: 'Giai đoạn 2: Hàm số & Góc với đường tròn',
           description: 'Hàm số y=ax^2, Giải bài toán bằng cách lập phương trình. Hình học đường tròn.',
           courseId: 'math-g9-2025',
           duration: '3 tháng',
           color: 'bg-blue-100 text-blue-700 border-blue-200',
        });
        if (targetGoal === 'adv_secondary') {
            roadmap.push({
                title: 'Giai đoạn 3: Luyện đề chuyên sâu vào 10',
                description: 'Tổng ôn và luyện các dạng bài khó trong đề thi vào 10 (Bất đẳng thức, Hình nâng cao).',
                courseId: 'math-g9-2025',
                duration: '2 tháng cuối',
                color: 'bg-red-100 text-red-700 border-red-200',
             });
        }
     }

    // --- CASE: LỚP 10 ---
    else if (currentLevel === 'grade10') {
        roadmap.push({
           title: 'Học kì 1: Mệnh đề, Tập hợp & Vectơ',
           description: 'Tư duy logic toán học mới. Các phép toán vectơ và hệ thức lượng trong tam giác.',
           courseId: 'math-g10-2025',
           duration: 'HK1',
           color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
        });
        roadmap.push({
           title: 'Học kì 2: Hàm số bậc hai & Phương pháp toạ độ',
           description: 'Bất phương trình bậc 2, Thống kê và Phương pháp toạ độ trong mặt phẳng (Oxy).',
           courseId: 'math-g10-2025',
           duration: 'HK2',
           color: 'bg-cyan-100 text-cyan-700 border-cyan-200',
        });
     }

    // --- CASE: LỚP 11 ---
    else if (currentLevel === 'grade11') {
        roadmap.push({
           title: 'Học kì 1: Lượng giác & Dãy số',
           description: 'Giải phương trình lượng giác. Cấp số cộng, cấp số nhân và Giới hạn (Lim).',
           courseId: 'math-g11-2025',
           duration: 'HK1',
           color: 'bg-violet-100 text-violet-700 border-violet-200',
        });
        roadmap.push({
           title: 'Học kì 2: Đạo hàm & Hình không gian',
           description: 'Quan hệ vuông góc trong không gian. Tính đạo hàm và xét tính biến thiên.',
           courseId: 'math-g11-2025',
           duration: 'HK2',
           color: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200',
        });
     }

    // --- CASE: ĐẠI HỌC ---
    else if (currentLevel === 'university') {
        roadmap.push({
            title: 'Học phần 1: Đại cương - Giải tích 1',
            description: 'Môn học nền tảng quan trọng. Tập trung vào Giới hạn, Đạo hàm và Tích phân.',
            courseId: 'uni-calculus1',
            duration: '3 tháng đầu',
            color: 'bg-blue-100 text-blue-700 border-blue-200',
        });
        roadmap.push({
            title: 'Học phần bổ trợ: Tin học đại cương',
            description: 'Làm quen với tư duy lập trình và ngôn ngữ C/C++. Môn học bắt buộc của khối kỹ thuật.',
            courseId: 'uni-intro-it',
            duration: 'Song song',
            color: 'bg-cyan-100 text-cyan-700 border-cyan-200',
        });
        roadmap.push({
            title: 'Học phần 2: Cơ sở ngành - Đại số tuyến tính',
            description: 'Nghiên cứu về Ma trận, Định thức và Không gian vector. Nền tảng cho các môn chuyên ngành.',
            courseId: 'uni-linear-algebra',
            duration: '2 tháng tiếp',
            color: 'bg-indigo-100 text-indigo-700 border-indigo-200',
        });
        if (targetGoal === 'uni_gpa') {
             roadmap.push({
                title: 'Học phần Nâng cao: Giải tích 2 & 3',
                description: 'Giải tích hàm nhiều biến, Chuỗi và Phương trình vi phân. Cần thiết để đạt điểm A.',
                courseId: 'uni-calculus2',
                duration: 'Kỳ 2 & 3',
                color: 'bg-rose-100 text-rose-700 border-rose-200',
            });
        }
    }

    // --- CASE: LỚP 12 (DEFAULT) ---
    else {
        // Phase 1: Nền tảng
        if (currentLevel === 'lost_g12' || currentLevel === 'avg_g12') {
            roadmap.push({
                title: 'Giai đoạn 1: Tổng ôn kiến thức nền tảng (PRO X)',
                description: 'Hệ thống lại toàn bộ kiến thức cơ bản lớp 12 theo sách giáo khoa.',
                courseId: 'prox-2025',
                duration: '3 - 4 tháng',
                color: 'bg-blue-100 text-blue-700 border-blue-200',
            });
        } else {
            roadmap.push({
                title: 'Giai đoạn 1: Hệ thống hoá nâng cao (PRO X)',
                description: 'Rà soát các lỗ hổng kiến thức và học các kỹ thuật giải nhanh cơ bản.',
                courseId: 'prox-2025',
                duration: '1 - 2 tháng',
                color: 'bg-blue-100 text-blue-700 border-blue-200',
            });
        }

        // Phase 2: Vận dụng
        if (targetGoal !== 'pass_g12') {
            roadmap.push({
                title: 'Giai đoạn 2: Luyện kỹ năng Vận dụng (PRO Y)',
                description: 'Rèn luyện kỹ năng giải nhanh các dạng bài tập trắc nghiệm thường gặp.',
                courseId: 'proy-2025',
                duration: '2 - 3 tháng',
                color: 'bg-indigo-100 text-indigo-700 border-indigo-200',
            });
        }

        // Phase 3: Vận dụng cao & Thực chiến
        if (targetGoal === 'uni_8' || targetGoal === 'uni_9') {
            roadmap.push({
                title: 'Giai đoạn 3: Chinh phục Vận dụng cao (PRO Z)',
                description: 'Tập trung vào các chuyên đề nâng cao: Cực trị, Min-Max, bài toán tham số.',
                courseId: 'proz-2025',
                duration: '2 tháng',
                color: 'bg-purple-100 text-purple-700 border-purple-200',
            });
            roadmap.push({
                title: 'Giai đoạn cuối: Luyện đề thực chiến (HSA)',
                description: 'Luyện tập với các bộ đề thi thử chuẩn cấu trúc ĐGNL và Tốt nghiệp.',
                courseId: 'hsa-2025',
                duration: '2 tháng cuối',
                color: 'bg-amber-100 text-amber-700 border-amber-200',
            });
        } else {
             roadmap.push({
                title: 'Giai đoạn cuối: Tổng ôn & Luyện đề cơ bản',
                description: 'Luyện tập các đề thi bám sát cấu trúc tốt nghiệp để chắc chắn điểm số mục tiêu.',
                courseId: 'prox-2025',
                duration: '1 - 2 tháng cuối',
                color: 'bg-amber-100 text-amber-700 border-amber-200',
              });
        }
    }

    return roadmap;
  };

  const handleReset = () => {
      setStep(1);
      setCurrentLevel(null);
      setTargetGoal(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <div className="bg-white border-b border-slate-200 py-12 px-4 text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-50 border border-blue-100 mb-4">
          <Target className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Xây dựng lộ trình học tập</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Lựa chọn lộ trình phù hợp với năng lực và mục tiêu của bạn để đạt kết quả tốt nhất.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* STEP 1: Current Level */}
        {step === 1 && (
          <div className="animate-fade-in-up">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              Bạn đang là đối tượng nào?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {levels.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setCurrentLevel(lvl.id as Level)}
                  className={`p-6 rounded-2xl border-2 text-left transition-all hover:shadow-lg flex items-start gap-4 ${
                    currentLevel === lvl.id 
                    ? 'border-blue-500 bg-blue-50/50 ring-2 ring-blue-200' 
                    : 'border-slate-200 bg-white hover:border-blue-300'
                  }`}
                >
                  <span className="text-3xl">{lvl.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-800 text-base mb-1">{lvl.label}</h3>
                    <p className="text-xs text-slate-500">{lvl.desc}</p>
                  </div>
                  {currentLevel === lvl.id && <CheckCircle2 className="w-5 h-5 text-blue-500 ml-auto shrink-0" />}
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <button
                disabled={!currentLevel}
                onClick={() => setStep(2)}
                className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all"
              >
                Tiếp tục <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Goal */}
        {step === 2 && (
          <div className="animate-fade-in-up">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              Mục tiêu của bạn là gì?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {goals.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setTargetGoal(g.id as Goal)}
                  className={`p-6 rounded-2xl border-2 text-left transition-all hover:shadow-lg ${
                    targetGoal === g.id 
                    ? 'border-blue-500 bg-blue-50/50 ring-2 ring-blue-200' 
                    : 'border-slate-200 bg-white hover:border-blue-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-800 text-lg">{g.label}</h3>
                    {targetGoal === g.id && <CheckCircle2 className="w-6 h-6 text-blue-500" />}
                  </div>
                  <p className="text-sm text-slate-500">{g.desc}</p>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-between">
               <button
                onClick={() => setStep(1)}
                className="px-6 py-3 text-slate-600 font-semibold hover:text-slate-800 transition-colors"
              >
                Quay lại
              </button>
              <button
                disabled={!targetGoal}
                onClick={() => setStep(3)}
                className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all shadow-lg shadow-blue-500/30"
              >
                Xem lộ trình <BarChart className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Result */}
        {step === 3 && (
          <div className="animate-fade-in-up">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Lộ trình học tập cá nhân hóa</h2>
                    <div className="inline-flex gap-3 text-sm font-medium">
                        <span className="px-3 py-1 bg-slate-100 rounded-full text-slate-600">Đối tượng: {levels.find(l => l.id === currentLevel)?.label}</span>
                        <span className="text-slate-300">➜</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Mục tiêu: {goals.find(g => g.id === targetGoal)?.label}</span>
                    </div>
                </div>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                    {generateRoadmap().map((phase, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            
                            {/* Icon Marker */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <span className="font-bold text-sm">{index + 1}</span>
                            </div>
                            
                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-100 shadow-md bg-white hover:shadow-lg transition-shadow">
                                <div className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase mb-2 border ${phase.color.replace('text', 'border').replace('bg', 'bg-opacity-20')}`}>
                                    {phase.duration}
                                </div>
                                <h3 className="font-bold text-lg text-slate-800 mb-2">{phase.title}</h3>
                                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{phase.description}</p>
                                <Link 
                                    to={`/course/${phase.courseId}`}
                                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 hover:underline decoration-2 underline-offset-2"
                                >
                                    Chi tiết khóa học <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 text-center">
                    <p className="text-slate-600 mb-6">Hãy bắt đầu ngay hôm nay để đạt kết quả tốt nhất!</p>
                    <div className="flex justify-center gap-4">
                        <button 
                            onClick={handleReset}
                            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-600 font-semibold hover:bg-slate-50 flex items-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" /> Chọn lại
                        </button>
                        <Link 
                            to="/"
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all flex items-center gap-2"
                        >
                            <GraduationCap className="w-5 h-5" />
                            Đăng ký học
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};