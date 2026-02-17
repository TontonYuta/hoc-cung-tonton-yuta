import { Course, GradeLevel, Chapter } from '../types';

// Link mặc định
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

const PRO_Z_CHAPTERS: Chapter[] = [
  {
    id: 'z-c1',
    title: 'Chương 1: Giải tích nâng cao',
    lessons: [
      { 
          id: 'z-c1-l1', title: 'Buổi 1: Hàm hợp và Hàm ẩn', description: 'Phương pháp khảo sát và xét cực trị của hàm hợp.', youtubeId: '', duration: '90:00', 
          attachments: [
              { id: 'att-z-1-1', name: 'Chuyên đề VDC: Cực trị Hàm hợp', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
          ]
      },
      { 
          id: 'z-c1-l2', title: 'Buổi 2: Phương pháp ghép trục & Sơ đồ V', description: 'Kỹ thuật giải nhanh bài toán tương giao và cực trị hàm hợp.', youtubeId: '', duration: '85:00', 
          attachments: [
              { id: 'att-z-2-1', name: 'Tài liệu: Phương pháp Ghép trục (Thầy Hoàng)', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
          ]
      },
      { id: 'z-c1-l3', title: 'Buổi 3: Biện luận tham số m (Vận dụng cao)', description: 'Giải quyết các bài toán chứa tham số m phức tạp.', youtubeId: '', duration: '80:00', attachments: [] },
      { 
          id: 'z-c1-l4', title: 'Buổi 4: Tích phân hàm ẩn', description: 'Phương pháp giải phương trình hàm dưới dấu tích phân.', youtubeId: '', duration: '90:00', 
          attachments: [
              { id: 'att-z-4-1', name: '50 Bài toán Tích phân Hàm ẩn 9+', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
          ]
      },
      { id: 'z-c1-l5', title: 'Buổi 5: Ứng dụng tích phân nâng cao', description: 'Tính diện tích và thể tích các hình phức tạp.', youtubeId: '', duration: '75:00', attachments: [] }
    ]
  },
  {
    id: 'z-c2',
    title: 'Chương 2: Hình học Oxyz - Vận dụng cao',
    lessons: [
      { 
          id: 'z-c2-l1', title: 'Buổi 6: Cực trị hình học không gian', description: 'Bài toán tìm điểm thỏa mãn điều kiện độ dài Min - Max.', youtubeId: '', duration: '85:00', 
          attachments: [
              { id: 'att-z-6-1', name: 'Chuyên đề Min-Max Hình Oxyz', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
          ]
      },
      { id: 'z-c2-l2', title: 'Buổi 7: Phương pháp tọa độ hóa', description: 'Chuyển bài toán hình học không gian cổ điển sang phương pháp tọa độ.', youtubeId: '', duration: '80:00', attachments: [] },
      { id: 'z-c2-l3', title: 'Buổi 8: Vị trí tương đối nâng cao', description: 'Bài toán tiếp tuyến chung và quỹ tích điểm.', youtubeId: '', duration: '85:00', attachments: [] }
    ]
  },
  {
    id: 'z-c3',
    title: 'Chương 3: Xác suất & Thống kê chuyên sâu',
    lessons: [
      { id: 'z-c3-l1', title: 'Buổi 9: Xác suất nâng cao', description: 'Vận dụng công thức Bayes và xác suất toàn phần.', youtubeId: '', duration: '70:00', attachments: [] },
      { id: 'z-c3-l2', title: 'Buổi 10: Các bài toán Tổ hợp phức tạp', description: 'Phân tích và giải các bài toán đếm và xác suất khó.', youtubeId: '', duration: '75:00', attachments: [] }
    ]
  }
];

export const PRO_Z_COURSE: Course = {
  id: 'proz-2025',
  title: 'PRO Z 2025 - Vận dụng cao (Mục tiêu 9+)',
  grade: GradeLevel.G12,
  thumbnail: 'https://picsum.photos/seed/proz/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 6200,
  rating: 5.0,
  description: 'Khóa học chuyên sâu dành cho học sinh mục tiêu điểm 9, 10. Chinh phục các câu hỏi phân loại trong đề thi.',
  chapters: PRO_Z_CHAPTERS,
  referenceMaterials: [
      { id: 'ref-proz-1', name: 'Tuyển tập 50 bài Toán 9+ hay và khó 2025', type: 'pdf', url: DRIVE_LINK, size: '3.8 MB' },
      { id: 'ref-proz-2', name: 'Phương pháp Ghép trục & Sơ đồ V (Chuyên sâu)', type: 'pdf', url: DRIVE_LINK, size: '2.5 MB' },
  ]
};