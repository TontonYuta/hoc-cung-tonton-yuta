import { Course, GradeLevel } from '../types';

// Link mặc định
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

const CALCULUS3_CHAPTERS = [
  {
    id: 'gt3-c1',
    title: 'Chương 1: Chuỗi số',
    lessons: [
      { id: 'gt3-c1-l1', title: 'Bài 1: Chuỗi số dương', description: 'Các tiêu chuẩn hội tụ: So sánh, D\'Alembert, Cauchy, Tích phân.', youtubeId: '', duration: '100:00', attachments: [] },
      { id: 'gt3-c1-l2', title: 'Bài 2: Chuỗi có dấu bất kỳ', description: 'Chuỗi đan dấu, tiêu chuẩn Leibniz và hội tụ tuyệt đối.', youtubeId: '', duration: '90:00', attachments: [] }
    ]
  },
  {
    id: 'gt3-c2',
    title: 'Chương 2: Chuỗi hàm',
    lessons: [
      { id: 'gt3-c2-l1', title: 'Bài 1: Chuỗi lũy thừa', description: 'Tìm miền hội tụ và bán kính hội tụ của chuỗi lũy thừa.', youtubeId: '', duration: '95:00', attachments: [] },
      { id: 'gt3-c2-l2', title: 'Bài 2: Khai triển Taylor & Maclaurin', description: 'Khai triển hàm số thành chuỗi lũy thừa và ứng dụng.', youtubeId: '', duration: '110:00', attachments: [] },
      { id: 'gt3-c2-l3', title: 'Bài 3: Chuỗi Fourier', description: 'Khai triển hàm tuần hoàn thành chuỗi lượng giác.', youtubeId: '', duration: '120:00', attachments: [] }
    ]
  },
  {
    id: 'gt3-c3',
    title: 'Chương 3: Phương trình vi phân',
    lessons: [
      { id: 'gt3-c3-l1', title: 'Bài 1: Phương trình vi phân cấp 1', description: 'Phương trình tách biến, đẳng cấp, tuyến tính và Bernoulli.', youtubeId: '', duration: '105:00', attachments: [] },
      { id: 'gt3-c3-l2', title: 'Bài 2: Phương trình vi phân toàn phần', description: 'Phương pháp thừa số tích phân.', youtubeId: '', duration: '95:00', attachments: [] },
      { id: 'gt3-c3-l3', title: 'Bài 3: Phương trình vi phân cấp 2 giảm cấp được', description: 'Các dạng phương trình khuyết.', youtubeId: '', duration: '80:00', attachments: [] },
      { id: 'gt3-c3-l4', title: 'Bài 4: Phương trình vi phân tuyến tính hệ số hằng', description: 'Giải phương trình thuần nhất và không thuần nhất.', youtubeId: '', duration: '130:00', attachments: [] }
    ]
  }
];

export const CALCULUS3_COURSE: Course = {
  id: 'uni-calculus3',
  title: 'Giải Tích 3 - Chuỗi & Phương trình vi phân',
  grade: GradeLevel.University,
  thumbnail: 'https://picsum.photos/seed/calculus3/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 2800,
  rating: 4.9,
  description: 'Học phần cuối của chuỗi Giải tích. Nội dung chuyên sâu về Chuỗi vô hạn và Phương trình vi phân thường.',
  chapters: CALCULUS3_CHAPTERS,
  referenceMaterials: []
};