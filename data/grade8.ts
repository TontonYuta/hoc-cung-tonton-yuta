import { Course, GradeLevel } from '../types';

// Link mặc định
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

export const MATH_G8_COURSE: Course = {
  id: 'math-g8-2025',
  title: 'PRO 8 - Toán 8 (Chân trời sáng tạo)',
  grade: GradeLevel.G8,
  thumbnail: 'https://picsum.photos/seed/math8/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 1800,
  rating: 4.9,
  description: 'Thành thạo Đa thức, Hằng đẳng thức đáng nhớ, Phân thức và Hình học phẳng (Tứ giác, Đồng dạng).',
  chapters: [
    {
      id: 'g8-c1',
      title: 'Chương 1: Đa thức',
      lessons: [
        { 
            id: 'g8-c1-l1', title: 'Bài 1: Đơn thức và Đa thức nhiều biến', description: 'Thu gọn và tính giá trị.', youtubeId: '', duration: '50:00', 
            attachments: [
                { id: 'att-g8-1-1', name: 'Bài tập: Thu gọn đa thức', type: 'doc', url: DRIVE_LINK, size: 'DOCX' }
            ]
        },
        { id: 'g8-c1-l2', title: 'Bài 2: Các phép toán với đa thức', description: 'Nhân đơn thức với đa thức, nhân đa thức với đa thức.', youtubeId: '', duration: '55:00', attachments: [] }
      ]
    },
    {
      id: 'g8-c2',
      title: 'Chương 2: Hằng đẳng thức đáng nhớ',
      lessons: [
        { 
            id: 'g8-c2-l1', title: 'Bài 1: Bình phương của tổng/hiệu', description: 'Khai triển và vận dụng.', youtubeId: '', duration: '60:00', 
            attachments: [
                { id: 'att-g8-3-1', name: 'Công thức 7 Hằng đẳng thức (Màu)', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { 
            id: 'g8-c2-l2', title: 'Bài 2: Hiệu hai bình phương & Lập phương', description: 'Các hằng đẳng thức bậc 3.', youtubeId: '', duration: '60:00', 
            attachments: [
                 { id: 'att-g8-4-1', name: 'Bài tập trắc nghiệm HĐT', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { id: 'g8-c2-l3', title: 'Bài 3: Phân tích đa thức thành nhân tử', description: 'Phương pháp đặt nhân tử chung, dùng hằng đẳng thức, nhóm hạng tử.', youtubeId: '', duration: '70:00', attachments: [] }
      ]
    },
    {
      id: 'g8-c3',
      title: 'Chương 3: Phân thức đại số',
      lessons: [
        { id: 'g8-c3-l1', title: 'Bài 1: Tính chất cơ bản của phân thức', description: 'Rút gọn phân thức đại số.', youtubeId: '', duration: '50:00', attachments: [] },
        { id: 'g8-c3-l2', title: 'Bài 2: Cộng trừ nhân chia phân thức', description: 'Quy tắc và bài tập tổng hợp.', youtubeId: '', duration: '65:00', attachments: [] }
      ]
    },
    {
      id: 'g8-c4',
      title: 'Chương 4: Tam giác đồng dạng',
      lessons: [
        { 
            id: 'g8-c4-l1', title: 'Bài 1: Định lý Thalès', description: 'Định lý thuận, đảo và hệ quả.', youtubeId: '', duration: '60:00', 
            attachments: [
                 { id: 'att-g8-7-1', name: 'Chuyên đề: Định lý Talet trong tam giác', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { id: 'g8-c4-l2', title: 'Bài 2: Các trường hợp đồng dạng', description: 'Cạnh-cạnh-cạnh, Cạnh-góc-cạnh, Góc-góc.', youtubeId: '', duration: '70:00', attachments: [] }
      ]
    }
  ],
  referenceMaterials: [
      { id: 'ref-g8-1', name: '7 Hằng đẳng thức đáng nhớ (Bản in màu)', type: 'pdf', url: DRIVE_LINK, size: '1.2 MB' },
      { id: 'ref-g8-2', name: '500 Bài tập Hình học 8 - Tứ giác & Đồng dạng', type: 'pdf', url: DRIVE_LINK, size: '8.5 MB' },
  ]
};