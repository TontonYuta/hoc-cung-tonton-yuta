import { Course, GradeLevel, Chapter } from '../types';

// Link mặc định
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

const TSA_CHAPTERS: Chapter[] = [
  {
    id: 'tsa-c1',
    title: 'Phần 1: Tư duy Toán học',
    lessons: [
      { 
          id: 'tsa-c1-l1', title: 'Bài 1: Logic mệnh đề', description: 'Các dạng toán suy luận logic.', youtubeId: '', duration: '55:00', 
          attachments: [
              { id: 'att-tsa-1-1', name: 'Tài liệu: Tư duy Logic mệnh đề', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
          ]
      },
      { id: 'tsa-c1-l2', title: 'Bài 2: Tối ưu thực tế', description: 'Quy hoạch tuyến tính và ứng dụng đạo hàm.', youtubeId: '', duration: '70:00', attachments: [] }
    ]
  },
  {
    id: 'tsa-c2',
    title: 'Phần 2: Tư duy Khoa học',
    lessons: [
      { 
          id: 'tsa-c2-l1', title: 'Chiến thuật Đọc hiểu khoa học', description: 'Kỹ năng trích xuất thông tin nhanh.', youtubeId: '', duration: '45:00', 
          attachments: [
              { id: 'att-tsa-3-1', name: 'Các bài đọc hiểu Khoa học mẫu', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
          ]
      }
    ]
  }
];

export const TSA_COURSE: Course = {
  id: 'tsa-2025',
  title: 'Luyện thi ĐGTD (TSA) - Bách Khoa',
  grade: GradeLevel.G12,
  thumbnail: 'https://picsum.photos/seed/tsa/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 7500,
  rating: 4.9,
  description: 'Chinh phục kỳ thi Đánh giá tư duy TSA. Logic, Toán học và Đọc hiểu khoa học.',
  chapters: TSA_CHAPTERS,
  referenceMaterials: [
      { id: 'ref-tsa-1', name: 'Đề cương Tư duy Toán học TSA', type: 'pdf', url: DRIVE_LINK, size: '2.0 MB' },
      { id: 'ref-tsa-2', name: 'Tuyển tập câu hỏi Logic & Đọc hiểu khoa học', type: 'doc', url: DRIVE_LINK, size: '3.5 MB' },
  ]
};