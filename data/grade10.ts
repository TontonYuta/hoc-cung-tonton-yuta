import { Course, GradeLevel } from '../types';

// Link mặc định
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

export const MATH_G10_COURSE: Course = {
  id: 'math-g10-2025',
  title: 'PRO 10 - Xuất phát sớm Toán 10 (Chương trình mới)',
  grade: GradeLevel.G10,
  thumbnail: 'https://picsum.photos/seed/math10/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 5600,
  rating: 4.7,
  description: 'Nền tảng Đại số và Hình học 10. Vectơ, Hàm số bậc 2, Bất phương trình và Thống kê xác suất.',
  chapters: [
    {
      id: 'g10-c1',
      title: 'Chương 1: Mệnh đề & Tập hợp',
      lessons: [
        { 
            id: 'g10-c1-l1', title: 'Bài 1: Mệnh đề toán học', description: 'Tư duy logic, mệnh đề kéo theo, đảo, tương đương.', youtubeId: '', duration: '60:00', 
            attachments: [
                { id: 'att-g10-1-1', name: 'Lý thuyết Logic & Mệnh đề', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { 
            id: 'g10-c1-l2', title: 'Bài 2: Tập hợp và các phép toán', description: 'Giao, hợp, hiệu của hai tập hợp.', youtubeId: '', duration: '55:00', 
            attachments: [
                 { id: 'att-g10-2-1', name: 'Bài tập: Xác định tập hợp', type: 'doc', url: DRIVE_LINK, size: 'DOCX' }
            ]
        }
      ]
    },
    {
      id: 'g10-c2',
      title: 'Chương 2: Bất phương trình & Hệ BPT bậc nhất',
      lessons: [
        { 
            id: 'g10-c2-l1', title: 'Bài 1: Bất phương trình bậc nhất hai ẩn', description: 'Biểu diễn miền nghiệm trên mặt phẳng tọa độ.', youtubeId: '', duration: '65:00', 
            attachments: [
                { id: 'att-g10-3-1', name: 'Hướng dẫn biểu diễn miền nghiệm', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { id: 'g10-c2-l2', title: 'Bài 2: Ứng dụng hệ BPT vào bài toán kinh tế', description: 'Bài toán tối ưu (tìm lãi suất cao nhất, chi phí thấp nhất).', youtubeId: '', duration: '70:00', attachments: [] }
      ]
    },
    {
      id: 'g10-c3',
      title: 'Chương 3: Vectơ & Hệ thức lượng',
      lessons: [
        { id: 'g10-c3-l1', title: 'Bài 1: Các định nghĩa về Vectơ', description: 'Phương, hướng, độ dài và hai vectơ bằng nhau.', youtubeId: '', duration: '50:00', attachments: [] },
        { 
            id: 'g10-c3-l2', title: 'Bài 2: Tổng và hiệu của hai vectơ', description: 'Quy tắc 3 điểm, quy tắc hình bình hành.', youtubeId: '', duration: '60:00', 
            attachments: [
                { id: 'att-g10-6-1', name: 'Bài tập cộng trừ Vectơ', type: 'doc', url: DRIVE_LINK, size: 'DOCX' }
            ]
        },
        { id: 'g10-c3-l3', title: 'Bài 3: Tích vô hướng & Ứng dụng', description: 'Công thức tính tích vô hướng và góc giữa hai vectơ.', youtubeId: '', duration: '65:00', attachments: [] },
        { id: 'g10-c3-l4', title: 'Bài 4: Hệ thức lượng trong tam giác', description: 'Định lý Cosin, Định lý Sin và công thức tính diện tích.', youtubeId: '', duration: '75:00', attachments: [] }
      ]
    },
    {
      id: 'g10-c4',
      title: 'Chương 4: Phương pháp tọa độ trong mặt phẳng',
      lessons: [
        { 
            id: 'g10-c4-l1', title: 'Bài 1: Phương trình đường thẳng', description: 'Vectơ pháp tuyến, chỉ phương. Viết PT tham số và tổng quát.', youtubeId: '', duration: '80:00', 
            attachments: [
                 { id: 'att-g10-9-1', name: 'Các dạng PT đường thẳng Oxy', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { id: 'g10-c4-l2', title: 'Bài 2: Phương trình đường tròn', description: 'Xác định tâm, bán kính và viết phương trình đường tròn.', youtubeId: '', duration: '70:00', attachments: [] }
      ]
    }
  ],
  referenceMaterials: [
      { id: 'ref-g10-1', name: 'Tổng hợp công thức Vectơ & Tọa độ Oxy', type: 'pdf', url: DRIVE_LINK, size: '1.8 MB' },
      { id: 'ref-g10-2', name: 'Đề cương ôn tập Toán 10 - HK1 (3 bộ sách mới)', type: 'doc', url: DRIVE_LINK, size: '3.0 MB' },
  ]
};