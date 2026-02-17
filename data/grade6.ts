import { Course, GradeLevel } from '../types';

// Link mặc định
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

export const MATH_G6_COURSE: Course = {
  id: 'math-g6-2025',
  title: 'PRO 6 - Toán 6 Chương trình mới (Kết nối tri thức)',
  grade: GradeLevel.G6,
  thumbnail: 'https://picsum.photos/seed/math6/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 1250,
  rating: 4.8,
  description: 'Khóa học bám sát chương trình SGK mới. Giúp học sinh chuyển tiếp từ Tiểu học lên THCS nhẹ nhàng, nắm chắc Số học và Hình trực quan.',
  chapters: [
    {
      id: 'g6-c1',
      title: 'Chương 1: Tập hợp các số tự nhiên',
      lessons: [
        { 
            id: 'g6-c1-l1', title: 'Bài 1: Tập hợp & Phần tử', description: 'Khái niệm tập hợp và các cách diễn đạt.', youtubeId: '', duration: '45:00', 
            attachments: [
                { id: 'att-g6-1-1', name: 'Lý thuyết: Cách ghi tập hợp', type: 'pdf', url: DRIVE_LINK, size: 'PDF' },
                { id: 'att-g6-1-2', name: 'Bài tập: Phần tử thuộc tập hợp', type: 'doc', url: DRIVE_LINK, size: 'DOCX' }
            ] 
        },
        { 
            id: 'g6-c1-l2', title: 'Bài 2: Các phép tính trên tập số tự nhiên', description: 'Cộng, trừ, nhân, chia và thứ tự thực hiện phép tính.', youtubeId: '', duration: '50:00', 
            attachments: [
                 { id: 'att-g6-2-1', name: 'Phiếu bài tập: Phép cộng & Nhân', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { 
            id: 'g6-c1-l3', title: 'Bài 3: Lũy thừa với số mũ tự nhiên', description: 'Định nghĩa và nhân chia hai lũy thừa cùng cơ số.', youtubeId: '', duration: '55:00', 
            attachments: [
                { id: 'att-g6-3-1', name: 'Chuyên đề: Lũy thừa', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { 
            id: 'g6-c1-l4', title: 'Bài 4: Dấu hiệu chia hết', description: 'Dấu hiệu chia hết cho 2, 3, 5, 9 và tính chất chia hết của một tổng.', youtubeId: '', duration: '45:00', 
            attachments: [
                { id: 'att-g6-4-1', name: 'Mẹo nhớ dấu hiệu chia hết', type: 'link', url: DRIVE_LINK }
            ]
        }
      ]
    },
    {
      id: 'g6-c2',
      title: 'Chương 2: Số nguyên',
      lessons: [
        { 
            id: 'g6-c2-l1', title: 'Bài 1: Làm quen với số nguyên âm', description: 'Số nguyên âm trong thực tế và trục số.', youtubeId: '', duration: '40:00', 
            attachments: [
                { id: 'att-g6-5-1', name: 'Trục số và Số nguyên âm', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { 
            id: 'g6-c2-l2', title: 'Bài 2: Phép cộng và trừ số nguyên', description: 'Quy tắc cộng trừ và quy tắc dấu ngoặc.', youtubeId: '', duration: '60:00', 
            attachments: [
                { id: 'att-g6-6-1', name: 'Quy tắc dấu ngoặc (Bảng màu)', type: 'pdf', url: DRIVE_LINK, size: 'PDF' },
                { id: 'att-g6-6-2', name: '50 Bài tập cộng trừ số nguyên', type: 'doc', url: DRIVE_LINK, size: 'DOCX' }
            ]
        },
        { 
            id: 'g6-c2-l3', title: 'Bài 3: Phép nhân số nguyên', description: 'Tính chất phép nhân và quan hệ chia hết trong Z.', youtubeId: '', duration: '55:00', 
            attachments: []
        }
      ]
    },
    {
      id: 'g6-c3',
      title: 'Chương 3: Hình học trực quan',
      lessons: [
        { 
            id: 'g6-c3-l1', title: 'Bài 1: Các hình phẳng cơ bản', description: 'Tam giác đều, hình vuông, lục giác đều.', youtubeId: '', duration: '45:00', 
            attachments: [
                { id: 'att-g6-7-1', name: 'Hình ảnh thực tế các hình phẳng', type: 'ppt', url: DRIVE_LINK, size: 'PPT' }
            ]
        },
        { id: 'g6-c3-l2', title: 'Bài 2: Chu vi và Diện tích', description: 'Công thức tính chu vi, diện tích hình chữ nhật, hình thoi, hình bình hành.', youtubeId: '', duration: '60:00', attachments: [] }
      ]
    },
    {
      id: 'g6-c4',
      title: 'Chương 4: Phân số',
      lessons: [
        { id: 'g6-c4-l1', title: 'Bài 1: Mở rộng khái niệm phân số', description: 'Phân số với tử mẫu là số nguyên.', youtubeId: '', duration: '50:00', attachments: [] },
        { id: 'g6-c4-l2', title: 'Bài 2: Các phép tính phân số', description: 'Cộng, trừ, nhân, chia và hỗn số.', youtubeId: '', duration: '65:00', attachments: [] }
      ]
    }
  ],
  referenceMaterials: [
      { id: 'ref-g6-1', name: 'Đề cương ôn tập Toán 6 - Học kì 1', type: 'doc', url: DRIVE_LINK, size: '2 MB' },
      { id: 'ref-g6-2', name: 'Tuyển tập bài tập Số học & Hình học', type: 'pdf', url: DRIVE_LINK, size: '3.5 MB' },
      { id: 'ref-g6-3', name: 'Sách giáo khoa Toán 6 (KNTT) - Bản mềm', type: 'pdf', url: DRIVE_LINK, size: '15 MB' }
  ]
};