import { Course, GradeLevel } from '../types';

// Link mặc định
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

export const MATH_G7_COURSE: Course = {
  id: 'math-g7-2025',
  title: 'PRO 7 - Toán 7 Nâng cao & Cơ bản (Cánh Diều)',
  grade: GradeLevel.G7,
  thumbnail: 'https://picsum.photos/seed/math7/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 1500,
  rating: 4.8,
  description: 'Nắm vững kiến thức Số hữu tỉ, Hình học trực quan và các bài toán Thống kê. Hệ thống bài tập từ cơ bản đến nâng cao.',
  chapters: [
    {
      id: 'g7-c1',
      title: 'Chương 1: Số hữu tỉ',
      lessons: [
        { 
            id: 'g7-c1-l1', title: 'Bài 1: Tập hợp Q các số hữu tỉ', description: 'Định nghĩa, biểu diễn trên trục số và so sánh.', youtubeId: '', duration: '45:00', 
            attachments: [
                { id: 'att-g7-1-1', name: 'Lý thuyết: Số hữu tỉ là gì?', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { 
            id: 'g7-c1-l2', title: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ', description: 'Quy tắc tính toán và bài toán tìm x.', youtubeId: '', duration: '55:00', 
            attachments: [
                { id: 'att-g7-2-1', name: 'BTVN: 4 Phép tính số hữu tỉ', type: 'doc', url: DRIVE_LINK, size: 'DOCX' }
            ]
        },
        { id: 'g7-c1-l3', title: 'Bài 3: Lũy thừa của số hữu tỉ', description: 'Công thức lũy thừa và bài toán ứng dụng.', youtubeId: '', duration: '50:00', attachments: [] }
      ]
    },
    {
      id: 'g7-c2',
      title: 'Chương 2: Góc và Đường thẳng song song',
      lessons: [
        { 
            id: 'g7-c2-l1', title: 'Bài 1: Góc ở vị trí đặc biệt', description: 'Góc kề bù, góc đối đỉnh.', youtubeId: '', duration: '40:00', 
            attachments: [
                { id: 'att-g7-4-1', name: 'Hình vẽ: Các loại góc đặc biệt', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { id: 'g7-c2-l2', title: 'Bài 2: Tia phân giác', description: 'Định nghĩa và cách vẽ tia phân giác.', youtubeId: '', duration: '45:00', attachments: [] },
        { id: 'g7-c2-l3', title: 'Bài 3: Hai đường thẳng song song', description: 'Dấu hiệu nhận biết và tính chất.', youtubeId: '', duration: '50:00', attachments: [] }
      ]
    },
    {
      id: 'g7-c3',
      title: 'Chương 3: Thống kê & Xác suất',
      lessons: [
        { id: 'g7-c3-l1', title: 'Bài 1: Thu thập và phân loại dữ liệu', description: 'Các loại dữ liệu và cách thu thập.', youtubeId: '', duration: '40:00', attachments: [] },
        { id: 'g7-c3-l2', title: 'Bài 2: Biểu đồ đoạn thẳng & Hình quạt tròn', description: 'Cách đọc và vẽ biểu đồ.', youtubeId: '', duration: '55:00', attachments: [] }
      ]
    },
    {
      id: 'g7-c4',
      title: 'Chương 4: Biểu thức đại số',
      lessons: [
        { id: 'g7-c4-l1', title: 'Bài 1: Biểu thức số và biểu thức đại số', description: 'Khái niệm và giá trị của biểu thức.', youtubeId: '', duration: '45:00', attachments: [] },
        { id: 'g7-c4-l2', title: 'Bài 2: Đa thức một biến', description: 'Sắp xếp, cộng trừ đa thức một biến.', youtubeId: '', duration: '60:00', attachments: [] }
      ]
    }
  ],
  referenceMaterials: [
      { id: 'ref-g7-1', name: '20 Đề thi giữa kì Toán 7 (Có đáp án)', type: 'doc', url: DRIVE_LINK, size: '2.5 MB' },
      { id: 'ref-g7-2', name: 'Chuyên đề Hình học 7 - Góc & Đường thẳng', type: 'pdf', url: DRIVE_LINK, size: '4.1 MB' },
  ]
};