import { Course, GradeLevel, Attachment } from './types';
import { PRO_X_COURSE } from './data/prox';
import { PRO_Y_COURSE } from './data/proy';
import { PRO_Z_COURSE } from './data/proz';
import { HSA_COURSE } from './data/hsa';
import { TSA_COURSE } from './data/tsa';
import { CALCULUS1_COURSE } from './data/calculus1';
import { CALCULUS2_COURSE } from './data/calculus2';
import { CALCULUS3_COURSE } from './data/calculus3';
import { LINEAR_ALGEBRA_COURSE } from './data/linear_algebra';
import { INTRO_IT_COURSE } from './data/intro_it';
import { MATH_G6_COURSE } from './data/grade6';
import { MATH_G7_COURSE } from './data/grade7';
import { MATH_G8_COURSE } from './data/grade8';
import { MATH_G9_COURSE } from './data/grade9';
import { MATH_G10_COURSE } from './data/grade10';
import { MATH_G11_COURSE } from './data/grade11';

export const GRADES = [
  { id: 'all', label: 'Tất cả' },
  { id: GradeLevel.G6, label: 'Lớp 6' },
  { id: GradeLevel.G7, label: 'Lớp 7' },
  { id: GradeLevel.G8, label: 'Lớp 8' },
  { id: GradeLevel.G9, label: 'Lớp 9' },
  { id: GradeLevel.G10, label: 'Lớp 10' },
  { id: GradeLevel.G11, label: 'Lớp 11' },
  { id: GradeLevel.G12, label: 'Lớp 12' },
  { id: GradeLevel.University, label: 'Đại Học' },
];

// --- DANH SÁCH KHÓA HỌC ---
// Bạn chỉnh sửa nội dung bài học trực tiếp trong các file tại thư mục /data
export const MOCK_COURSES: Course[] = [
  // Lớp 12 & Luyện thi
  PRO_X_COURSE,
  PRO_Y_COURSE,
  PRO_Z_COURSE,
  HSA_COURSE,
  TSA_COURSE,
  
  // Lớp dưới
  MATH_G11_COURSE,
  MATH_G10_COURSE,
  MATH_G9_COURSE,
  MATH_G8_COURSE,
  MATH_G7_COURSE,
  MATH_G6_COURSE,
  
  // Đại học
  CALCULUS1_COURSE,
  CALCULUS2_COURSE,
  CALCULUS3_COURSE,
  LINEAR_ALGEBRA_COURSE,
  INTRO_IT_COURSE,
];

// --- TÀI LIỆU THAM KHẢO CHUNG ---
export const GLOBAL_REFERENCES: Attachment[] = [
    { id: 'g-ref-1', name: 'Bảng nguyên hàm đầy đủ', type: 'pdf', url: '#', size: '2 MB' },
    { id: 'g-ref-2', name: 'Công thức Logarit và Mũ', type: 'pdf', url: '#', size: '1.5 MB' },
    { id: 'g-ref-3', name: 'Kỹ thuật Casio giải nhanh', type: 'pdf', url: '#', size: '5 MB' },
    { id: 'g-ref-uni-1', name: 'Giáo trình Giải tích 1 - BK', type: 'pdf', url: '#', size: '12 MB' },
    { id: 'g-ref-uni-2', name: 'Đề thi cuối kỳ Đại số tuyến tính (có đáp án)', type: 'pdf', url: '#', size: '8 MB' },
    { id: 'g-ref-uni-3', name: 'Ngân hàng câu hỏi trắc nghiệm Tin đại cương', type: 'doc', url: '#', size: '3 MB' },
];