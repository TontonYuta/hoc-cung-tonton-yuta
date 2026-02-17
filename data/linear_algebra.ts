import { Course, GradeLevel } from '../types';

// Link mặc định
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

const LA_CHAPTERS = [
  {
    id: 'la-c1',
    title: 'Chương 1: Ma trận & Định thức',
    lessons: [
      { id: 'la-c1-l1', title: 'Bài 1: Đại cương về Ma trận', description: 'Các phép toán cộng, nhân ma trận và ma trận chuyển vị.', youtubeId: '', duration: '80:00', attachments: [] },
      { id: 'la-c1-l2', title: 'Bài 2: Định thức (Determinant)', description: 'Quy tắc Sarrus, khai triển Laplace và các tính chất cơ bản.', youtubeId: '', duration: '90:00', attachments: [] },
      { id: 'la-c1-l3', title: 'Bài 3: Ma trận nghịch đảo', description: 'Tìm ma trận nghịch đảo bằng phương pháp Gauss-Jordan và phần phụ đại số.', youtubeId: '', duration: '85:00', attachments: [] },
      { id: 'la-c1-l4', title: 'Bài 4: Hạng của ma trận', description: 'Các phép biến đổi sơ cấp và phương pháp tìm hạng của ma trận.', youtubeId: '', duration: '95:00', attachments: [] }
    ]
  },
  {
    id: 'la-c2',
    title: 'Chương 2: Hệ phương trình tuyến tính',
    lessons: [
      { id: 'la-c2-l1', title: 'Bài 1: Quy tắc Cramer', description: 'Giải và biện luận hệ phương trình bằng định thức.', youtubeId: '', duration: '70:00', attachments: [] },
      { id: 'la-c2-l2', title: 'Bài 2: Phương pháp khử Gauss', description: 'Giải hệ phương trình tuyến tính tổng quát.', youtubeId: '', duration: '110:00', attachments: [] },
      { id: 'la-c2-l3', title: 'Bài 3: Hệ phương trình thuần nhất', description: 'Cấu trúc nghiệm của hệ phương trình tuyến tính thuần nhất.', youtubeId: '', duration: '80:00', attachments: [] }
    ]
  },
  {
    id: 'la-c3',
    title: 'Chương 3: Không gian Vector',
    lessons: [
      { id: 'la-c3-l1', title: 'Bài 1: Không gian vector', description: 'Định nghĩa, tính chất, tổ hợp tuyến tính và hệ sinh.', youtubeId: '', duration: '100:00', attachments: [] },
      { id: 'la-c3-l2', title: 'Bài 2: Cơ sở và Số chiều', description: 'Cơ sở của không gian vector và tọa độ của vector.', youtubeId: '', duration: '110:00', attachments: [] },
      { id: 'la-c3-l3', title: 'Bài 3: Không gian Euclide', description: 'Tích vô hướng, chuẩn của vector và quá trình trực giao hóa Gram-Schmidt.', youtubeId: '', duration: '105:00', attachments: [] }
    ]
  },
  {
    id: 'la-c4',
    title: 'Chương 4: Ánh xạ tuyến tính & Chéo hóa',
    lessons: [
      { id: 'la-c4-l1', title: 'Bài 1: Trị riêng & Vectơ riêng', description: 'Phương trình đặc trưng, tìm trị riêng và vectơ riêng.', youtubeId: '', duration: '95:00', attachments: [] },
      { id: 'la-c4-l2', title: 'Bài 2: Chéo hóa ma trận', description: 'Điều kiện và quy trình chéo hóa ma trận.', youtubeId: '', duration: '100:00', attachments: [] },
      { id: 'la-c4-l3', title: 'Bài 3: Dạng toàn phương', description: 'Đưa dạng toàn phương về dạng chính tắc.', youtubeId: '', duration: '90:00', attachments: [] }
    ]
  }
];

export const LINEAR_ALGEBRA_COURSE: Course = {
  id: 'uni-linear-algebra',
  title: 'Đại Số Tuyến Tính',
  grade: GradeLevel.University,
  thumbnail: 'https://picsum.photos/seed/algebra/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 4200,
  rating: 4.9,
  description: 'Môn học cơ sở quan trọng cho các ngành Khoa học dữ liệu và Công nghệ thông tin. Nội dung bao gồm Ma trận, Định thức và Không gian vector.',
  chapters: LA_CHAPTERS,
  referenceMaterials: []
};