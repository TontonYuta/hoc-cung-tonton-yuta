import { Course, GradeLevel } from '../types';

// Link mặc định
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

export const MATH_G11_COURSE: Course = {
  id: 'math-g11-2025',
  title: 'PRO 11 - Nền tảng Toán 11 & Luyện thi ĐH sớm',
  grade: GradeLevel.G11,
  thumbnail: 'https://picsum.photos/seed/math11/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 6100,
  rating: 4.8,
  description: 'Chinh phục các chuyên đề khó nhất của Toán 11: Lượng giác, Dãy số, Giới hạn, Đạo hàm và Hình học không gian.',
  chapters: [
    {
      id: 'g11-c1',
      title: 'Chương 1: Hàm số lượng giác & PTLG',
      lessons: [
        { 
            id: 'g11-c1-l1', title: 'Bài 1: Góc lượng giác & Công thức lượng giác', description: 'Ôn tập công thức cộng, nhân đôi, biến đổi tích thành tổng.', youtubeId: '', duration: '70:00', 
            attachments: [
                { id: 'att-g11-1-1', name: 'Bảng công thức Lượng giác đầy đủ', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { id: 'g11-c1-l2', title: 'Bài 2: Hàm số lượng giác', description: 'Tập xác định, chu kỳ và đồ thị.', youtubeId: '', duration: '60:00', attachments: [] },
        { 
            id: 'g11-c1-l3', title: 'Bài 3: Phương trình lượng giác cơ bản', description: 'Sin, Cos, Tan, Cot và phương trình thường gặp.', youtubeId: '', duration: '75:00', 
            attachments: [
                 { id: 'att-g11-3-1', name: '50 Câu PTLG tự luyện', type: 'doc', url: DRIVE_LINK, size: 'DOCX' }
            ]
        }
      ]
    },
    {
      id: 'g11-c2',
      title: 'Chương 2: Dãy số - Cấp số cộng - Cấp số nhân',
      lessons: [
        { id: 'g11-c2-l1', title: 'Bài 1: Dãy số', description: 'Cách cho dãy số, dãy số tăng giảm, bị chặn.', youtubeId: '', duration: '50:00', attachments: [] },
        { 
            id: 'g11-c2-l2', title: 'Bài 2: Cấp số cộng', description: 'Công thức số hạng tổng quát và tổng n số hạng đầu.', youtubeId: '', duration: '55:00', 
            attachments: [
                { id: 'att-g11-5-1', name: 'Lý thuyết Cấp số cộng', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { id: 'g11-c2-l3', title: 'Bài 3: Cấp số nhân', description: 'Công thức và tính chất.', youtubeId: '', duration: '55:00', attachments: [] }
      ]
    },
    {
      id: 'g11-c3',
      title: 'Chương 3: Giới hạn & Hàm số liên tục',
      lessons: [
        { 
            id: 'g11-c3-l1', title: 'Bài 1: Giới hạn của dãy số', description: 'Các định lý giới hạn hữu hạn và vô cực.', youtubeId: '', duration: '65:00', 
            attachments: [
                { id: 'att-g11-7-1', name: 'Các dạng bài tập Giới hạn dãy số', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { id: 'g11-c3-l2', title: 'Bài 2: Giới hạn của hàm số', description: 'Giới hạn tại một điểm và tại vô cực.', youtubeId: '', duration: '70:00', attachments: [] },
        { id: 'g11-c3-l3', title: 'Bài 3: Hàm số liên tục', description: 'Xét tính liên tục tại điểm và trên khoảng.', youtubeId: '', duration: '60:00', attachments: [] }
      ]
    },
    {
      id: 'g11-c4',
      title: 'Chương 4: Quan hệ vuông góc trong không gian',
      lessons: [
        { 
            id: 'g11-c4-l1', title: 'Bài 1: Đường thẳng vuông góc với mặt phẳng', description: 'Định nghĩa, tính chất và cách chứng minh.', youtubeId: '', duration: '80:00', 
            attachments: [
                { id: 'att-g11-10-1', name: 'Hình học không gian: Quan hệ vuông góc', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { id: 'g11-c4-l2', title: 'Bài 2: Hai mặt phẳng vuông góc', description: 'Góc giữa hai mặt phẳng, hình lăng trụ đứng, hình hộp chữ nhật.', youtubeId: '', duration: '85:00', attachments: [] },
        { id: 'g11-c4-l3', title: 'Bài 3: Khoảng cách', description: 'Khoảng cách từ điểm đến mặt, khoảng cách giữa hai đường chéo nhau.', youtubeId: '', duration: '90:00', attachments: [] }
      ]
    }
  ],
  referenceMaterials: [
      { id: 'ref-g11-1', name: 'Bảng công thức Lượng giác đầy đủ', type: 'pdf', url: DRIVE_LINK, size: '1.0 MB' },
      { id: 'ref-g11-2', name: '100 Bài toán Hình học không gian 11 (Có hình vẽ)', type: 'pdf', url: DRIVE_LINK, size: '6.5 MB' },
      { id: 'ref-g11-3', name: 'Bài tập trắc nghiệm Giới hạn & Đạo hàm', type: 'doc', url: DRIVE_LINK, size: '2.8 MB' },
  ]
};