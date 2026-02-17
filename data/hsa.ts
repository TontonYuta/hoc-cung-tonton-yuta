import { Course, GradeLevel, Chapter } from '../types';

// Link mặc định
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

const HSA_CHAPTERS: Chapter[] = [
  {
    id: 'hsa-c1',
    title: 'Phần 1: Tư duy định lượng (Toán học)',
    lessons: [
      { 
          id: 'hsa-c1-l1', title: 'Bài 1: Bài toán Lãi suất & Tăng trưởng', description: 'Ứng dụng cấp số nhân và hàm mũ trong thực tế.', youtubeId: '', duration: '50:00', 
          attachments: [
              { id: 'att-hsa-1-1', name: 'Chuyên đề: Bài toán Lãi suất thực tế', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
          ]
      },
      { 
          id: 'hsa-c1-l2', title: 'Bài 2: Thống kê & Phân tích số liệu', description: 'Kỹ năng đọc biểu đồ và xử lý dữ liệu thống kê.', youtubeId: '', duration: '60:00', 
          attachments: [
              { id: 'att-hsa-2-1', name: 'Bài tập đọc biểu đồ & Số liệu', type: 'doc', url: DRIVE_LINK, size: 'DOCX' }
          ]
      }
    ]
  },
  {
    id: 'hsa-c2',
    title: 'Phần 2: Luyện đề HSA Thực chiến',
    lessons: [
      { 
          id: 'hsa-c2-l1', title: 'Phân tích đề minh họa HSA 2025', description: 'Chiến thuật làm bài thi đánh giá năng lực hiệu quả.', youtubeId: '', duration: '100:00', 
          attachments: [
              { id: 'att-hsa-3-1', name: 'Đề minh họa HSA 2025 (ĐHQG HN)', type: 'pdf', url: DRIVE_LINK, size: 'PDF' },
              { id: 'att-hsa-3-2', name: 'Đáp án chi tiết Đề minh họa', type: 'pdf', url: "https://drive.google.com/file/d/1glaIoV-t2Zi1H0oLjfymYIbxFNwiJxzc/view?usp=sharing", size: 'PDF' }
          ]
      }
    ]
  }
];

export const HSA_COURSE: Course = {
  id: 'hsa-2025',
  title: 'Luyện thi ĐGNL (HSA) - ĐHQG Hà Nội',
  grade: GradeLevel.G12,
  thumbnail: 'https://picsum.photos/seed/hsa/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 8900,
  rating: 4.8,
  description: 'Hệ thống hóa kiến thức và rèn luyện tư duy định lượng cho kỳ thi HSA. Tập trung vào kỹ năng giải quyết vấn đề.',
  chapters: HSA_CHAPTERS,
  referenceMaterials: [
      { id: 'ref-hsa-1', name: 'Đề thi tham khảo ĐGNL HSA 2025 (Full)', type: 'pdf', url: DRIVE_LINK, size: '5.5 MB' },
      { id: 'ref-hsa-2', name: 'Sổ tay công thức Toán định lượng', type: 'pdf', url: DRIVE_LINK, size: '1.2 MB' },
  ]
};