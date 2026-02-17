import { Course, GradeLevel, Chapter } from '../types';

// Link mặc định
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

const CALCULUS1_CHAPTERS: Chapter[] = [
  {
    id: 'gt1-c1',
    title: 'Chương 1: Giới hạn & Sự liên tục',
    lessons: [
      { 
          id: 'gt1-c1-l1', title: 'Bài 1: Giới hạn của dãy số', description: 'Tổng quan về giới hạn dãy số. Các phương pháp khử dạng vô định, định lý kẹp và định lý Stolz.', youtubeId: '', duration: '95:00', 
          attachments: [
              { id: 'att-gt1-1-1', name: 'Slide bài giảng: Giới hạn dãy số', type: 'ppt', url: DRIVE_LINK, size: 'PPT' },
              { id: 'att-gt1-1-2', name: 'Bài tập lớn: Giới hạn', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
          ]
      },
      { id: 'gt1-c1-l2', title: 'Bài 2: Các giới hạn đáng nhớ', description: 'Giới hạn hàm lượng giác và hàm mũ logarit.', youtubeId: '', duration: '85:00', attachments: [] },
      { id: 'gt1-c1-l3', title: 'Bài 3: Vô cùng bé & Vô cùng lớn', description: 'Phương pháp thay thế VCB tương đương khi tìm giới hạn.', youtubeId: '', duration: '95:00', attachments: [] },
      { id: 'gt1-c1-l4', title: 'Bài 4: Hàm số liên tục', description: 'Phân loại điểm gián đoạn và các định lý về hàm liên tục.', youtubeId: '', duration: '80:00', attachments: [] }
    ]
  },
  {
    id: 'gt1-c2',
    title: 'Chương 2: Đạo hàm & Vi phân',
    lessons: [
      { 
          id: 'gt1-c2-l1', title: 'Bài 1: Đạo hàm & Vi phân cấp cao', description: 'Công thức Leibniz tính đạo hàm cấp n và ứng dụng vi phân.', youtubeId: '', duration: '100:00', 
          attachments: [
              { id: 'att-gt1-5-1', name: 'Bảng đạo hàm cấp cao', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
          ]
      },
      { id: 'gt1-c2-l2', title: "Bài 2: Các định lý cơ bản về đạo hàm", description: 'Định lý Rolle, Lagrange, Cauchy và ứng dụng.', youtubeId: '', duration: '110:00', attachments: [] },
      { id: 'gt1-c2-l3', title: "Bài 3: Quy tắc L'Hopital", description: 'Khử dạng vô định bằng quy tắc L\'Hopital.', youtubeId: '', duration: '90:00', attachments: [] },
      { id: 'gt1-c2-l4', title: 'Bài 4: Khai triển Taylor - Maclaurin', description: 'Xấp xỉ hàm số bằng đa thức Taylor.', youtubeId: '', duration: '120:00', attachments: [] },
      { id: 'gt1-c2-l5', title: 'Bài 5: Khảo sát hàm số', description: 'Ứng dụng đạo hàm tìm cực trị, điểm uốn và xét tính lồi lõm.', youtubeId: '', duration: '90:00', attachments: [] }
    ]
  },
  {
    id: 'gt1-c3',
    title: 'Chương 3: Tích phân & Ứng dụng',
    lessons: [
      { 
          id: 'gt1-c3-l1', title: 'Bài 1: Các phương pháp tính tích phân', description: 'Đổi biến số, tích phân từng phần và tích phân hàm hữu tỷ.', youtubeId: '', duration: '110:00', 
          attachments: [
              { id: 'att-gt1-10-1', name: 'Bài tập: Tích phân hàm hữu tỷ', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
          ]
      },
      { id: 'gt1-c3-l2', title: 'Bài 2: Tích phân suy rộng', description: 'Tích phân suy rộng loại 1, loại 2 và các tiêu chuẩn hội tụ.', youtubeId: '', duration: '100:00', attachments: [] },
      { id: 'gt1-c3-l3', title: 'Bài 3: Ứng dụng hình học', description: 'Tính diện tích, độ dài đường cong, thể tích và diện tích mặt tròn xoay.', youtubeId: '', duration: '105:00', attachments: [] }
    ]
  }
];

export const CALCULUS1_COURSE: Course = {
  id: 'uni-calculus1',
  title: 'Giải Tích 1 - Đại cương',
  grade: GradeLevel.University,
  thumbnail: 'https://picsum.photos/seed/calculus/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 5400,
  rating: 4.8,
  description: 'Môn học nền tảng quan trọng cho khối ngành Kỹ thuật. Khóa học cung cấp kiến thức hệ thống về Giới hạn, Đạo hàm và Tích phân hàm một biến.',
  chapters: CALCULUS1_CHAPTERS,
  referenceMaterials: []
};