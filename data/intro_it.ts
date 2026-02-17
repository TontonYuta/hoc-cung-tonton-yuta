import { Course, GradeLevel } from '../types';

// Link mặc định
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

const IT_CHAPTERS = [
  {
    id: 'it-c1',
    title: 'Chương 1: Đại cương về máy tính',
    lessons: [
      { id: 'it-c1-l1', title: 'Bài 1: Hệ đếm & Biểu diễn thông tin', description: 'Các hệ đếm cơ bản (Nhị phân, Thập lục phân) và mã hóa thông tin.', youtubeId: '', duration: '70:00', attachments: [] },
      { id: 'it-c1-l2', title: 'Bài 2: Cấu trúc máy tính', description: 'Kiến trúc máy tính Von Neumann và các thành phần phần cứng.', youtubeId: '', duration: '60:00', attachments: [] },
      { id: 'it-c1-l3', title: 'Bài 3: Thuật toán & Lưu đồ', description: 'Tư duy thuật toán và biểu diễn thuật toán bằng lưu đồ (Flowchart).', youtubeId: '', duration: '80:00', attachments: [] }
    ]
  },
  {
    id: 'it-c2',
    title: 'Chương 2: Lập trình C cơ bản',
    lessons: [
      { id: 'it-c2-l1', title: 'Bài 1: Cấu trúc chương trình C', description: 'Cú pháp cơ bản, thư viện chuẩn và các kiểu dữ liệu.', youtubeId: '', duration: '90:00', attachments: [] },
      { id: 'it-c2-l2', title: 'Bài 2: Cấu trúc rẽ nhánh', description: 'Sử dụng câu lệnh if-else và switch-case.', youtubeId: '', duration: '85:00', attachments: [] },
      { id: 'it-c2-l3', title: 'Bài 3: Cấu trúc vòng lặp', description: 'Sử dụng vòng lặp for, while, do-while trong lập trình.', youtubeId: '', duration: '100:00', attachments: [] }
    ]
  },
  {
    id: 'it-c3',
    title: 'Chương 3: Kỹ thuật lập trình nâng cao',
    lessons: [
      { id: 'it-c3-l1', title: 'Bài 1: Hàm (Function)', description: 'Khái niệm về hàm, tham trị và tham chiếu.', youtubeId: '', duration: '95:00', attachments: [] },
      { id: 'it-c3-l2', title: 'Bài 2: Mảng (Array)', description: 'Mảng một chiều, mảng hai chiều và các thuật toán liên quan.', youtubeId: '', duration: '110:00', attachments: [] },
      { id: 'it-c3-l3', title: 'Bài 3: Con trỏ (Pointer)', description: 'Quản lý bộ nhớ, cấp phát động và thao tác với con trỏ.', youtubeId: '', duration: '130:00', attachments: [] },
      { id: 'it-c3-l4', title: 'Bài 4: Kiểu cấu trúc & Tệp tin', description: 'Struct và các thao tác đọc ghi tệp tin.', youtubeId: '', duration: '100:00', attachments: [] }
    ]
  }
];

export const INTRO_IT_COURSE: Course = {
  id: 'uni-intro-it',
  title: 'Tin học đại cương & Lập trình C',
  grade: GradeLevel.University,
  thumbnail: 'https://picsum.photos/seed/coding/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 9800,
  rating: 4.7,
  description: 'Khóa học nhập môn lập trình dành cho sinh viên. Trang bị tư duy thuật toán và kỹ năng lập trình ngôn ngữ C căn bản.',
  chapters: IT_CHAPTERS,
  referenceMaterials: []
};