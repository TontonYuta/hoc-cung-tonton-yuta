import { Course, GradeLevel } from '../types';

// Link mặc định
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

const CALCULUS2_CHAPTERS = [
  {
    id: 'gt2-c1',
    title: 'Chương 1: Phép tính vi phân hàm nhiều biến',
    lessons: [
      { id: 'gt2-c1-l1', title: 'Bài 1: Giới hạn & Sự liên tục', description: 'Các phương pháp xét giới hạn và sự liên tục của hàm nhiều biến.', youtubeId: '', duration: '80:00', attachments: [] },
      { id: 'gt2-c1-l2', title: 'Bài 2: Đạo hàm riêng & Vi phân', description: 'Tính đạo hàm riêng và ứng dụng của vi phân toàn phần.', youtubeId: '', duration: '95:00', attachments: [] },
      { id: 'gt2-c1-l3', title: 'Bài 3: Đạo hàm theo hướng & Gradient', description: 'Ý nghĩa hình học của vector Gradient và đạo hàm theo hướng.', youtubeId: '', duration: '85:00', attachments: [] },
      { id: 'gt2-c1-l4', title: 'Bài 4: Cực trị hàm nhiều biến', description: 'Cực trị tự do và cực trị có điều kiện (Phương pháp nhân tử Lagrange).', youtubeId: '', duration: '110:00', attachments: [] }
    ]
  },
  {
    id: 'gt2-c2',
    title: 'Chương 2: Tích phân bội',
    lessons: [
      { id: 'gt2-c2-l1', title: 'Bài 1: Tích phân kép', description: 'Định nghĩa và cách tính tích phân kép trong tọa độ Đề-các.', youtubeId: '', duration: '100:00', attachments: [] },
      { id: 'gt2-c2-l2', title: 'Bài 2: Đổi biến trong tích phân kép', description: 'Ứng dụng tọa độ cực và định lý đổi biến tổng quát.', youtubeId: '', duration: '95:00', attachments: [] },
      { id: 'gt2-c2-l3', title: 'Bài 3: Tích phân bội ba', description: 'Tính tích phân trong tọa độ trụ và tọa độ cầu.', youtubeId: '', duration: '120:00', attachments: [] },
      { id: 'gt2-c2-l4', title: 'Bài 4: Ứng dụng tích phân bội', description: 'Tính diện tích mặt, thể tích vật thể và các ứng dụng cơ học.', youtubeId: '', duration: '90:00', attachments: [] }
    ]
  },
  {
    id: 'gt2-c3',
    title: 'Chương 3: Giải tích Vector',
    lessons: [
      { id: 'gt2-c3-l1', title: 'Bài 1: Tích phân đường', description: 'Tích phân đường loại 1, loại 2 và công thức Green.', youtubeId: '', duration: '115:00', attachments: [] },
      { id: 'gt2-c3-l2', title: 'Bài 2: Tích phân mặt', description: 'Tích phân mặt loại 1, loại 2 và thông lượng vector.', youtubeId: '', duration: '110:00', attachments: [] },
      { id: 'gt2-c3-l3', title: 'Bài 3: Định lý Stokes & Gauss', description: 'Các định lý cơ bản của giải tích vector và mối liên hệ giữa các loại tích phân.', youtubeId: '', duration: '130:00', attachments: [] }
    ]
  }
];

export const CALCULUS2_COURSE: Course = {
  id: 'uni-calculus2',
  title: 'Giải Tích 2 - Hàm nhiều biến & Giải tích Vector',
  grade: GradeLevel.University,
  thumbnail: 'https://picsum.photos/seed/calculus2/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 3200,
  rating: 4.8,
  description: 'Khóa học chuyên sâu về giải tích hàm nhiều biến, tích phân bội và lý thuyết trường vector.',
  chapters: CALCULUS2_CHAPTERS,
  referenceMaterials: []
};