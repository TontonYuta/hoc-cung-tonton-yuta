import { Course, GradeLevel, Chapter } from '../types';

// Link mặc định (Thay thế bằng link drive thật của bạn khi có)
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

const PRO_Y_CHAPTERS: Chapter[] = [
  {
    id: 'y-c1',
    title: 'Chương 1: Giải tích - Các dạng bài vận dụng',
    lessons: [
      { 
          id: 'y-c1-l1', title: 'Buổi 1: Kỹ thuật xét tính đơn điệu', description: 'Phương pháp xử lý bài toán đơn điệu chứa tham số m.', youtubeId: '', duration: '60:00', 
          attachments: [
              { id: 'att-y-1-1', name: 'BTVN: Đơn điệu hàm chứa tham số m', type: 'pdf', url: DRIVE_LINK, size: 'PDF' },
              { id: 'att-y-1-2', name: 'Giải chi tiết BTVN Buổi 1', type: 'doc', url: DRIVE_LINK, size: 'DOCX' }
          ]
      },
      { 
          id: 'y-c1-l2', title: "Buổi 2: Cực trị hàm số & Đồ thị f'(x)", description: 'Phân tích cực trị thông qua đồ thị đạo hàm và bảng biến thiên.', youtubeId: '', duration: '60:00', 
          attachments: [
              { id: 'att-y-2-1', name: 'Phiếu bài tập: Cực trị & Đồ thị đạo hàm', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
          ]
      },
      { id: 'y-c1-l3', title: 'Buổi 3: Giá trị lớn nhất - Giá trị nhỏ nhất', description: 'Các bài toán tối ưu hóa và tìm min-max trên đoạn [a;b].', youtubeId: '', duration: '55:00', attachments: [] },
      { id: 'y-c1-l4', title: 'Buổi 4: Tiệm cận & Đọc đồ thị', description: 'Xác định tiệm cận và khai thác thông tin từ bảng biến thiên.', youtubeId: '', duration: '50:00', attachments: [] },
      { 
          id: 'y-c1-l5', title: 'Buổi 5: Tương giao đồ thị hàm số', description: 'Biện luận số nghiệm phương trình và bài toán tương giao chứa tham số.', youtubeId: '', duration: '65:00', 
          attachments: [
              { id: 'att-y-5-1', name: 'Chuyên đề Tương giao đồ thị', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
          ]
      }
    ]
  },
  {
    id: 'y-c2',
    title: 'Chương 2: Hình học Oxyz - Vận dụng',
    lessons: [
      { id: 'y-c2-l1', title: 'Buổi 6: Các bài toán về Tọa độ & Tích có hướng', description: 'Ứng dụng tích có hướng và tích vô hướng trong giải toán.', youtubeId: '', duration: '55:00', attachments: [] },
      { 
          id: 'y-c2-l2', title: 'Buổi 7: Phương trình mặt phẳng', description: 'Các dạng bài tập viết phương trình mặt phẳng thường gặp.', youtubeId: '', duration: '60:00', 
          attachments: [
              { id: 'att-y-7-1', name: 'Các dạng viết PT Mặt phẳng', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
          ]
      },
      { id: 'y-c2-l3', title: 'Buổi 8: Phương trình đường thẳng & Vị trí tương đối', description: 'Viết phương trình đường thẳng và xét vị trí tương đối giữa các đối tượng.', youtubeId: '', duration: '60:00', attachments: [] },
      { id: 'y-c2-l4', title: 'Buổi 9: Mặt cầu & Bài toán tương giao', description: 'Vị trí tương đối của mặt phẳng, đường thẳng với mặt cầu.', youtubeId: '', duration: '55:00', attachments: [] }
    ]
  },
  {
    id: 'y-c3',
    title: 'Chương 3: Nguyên hàm, Tích phân & Thống kê',
    lessons: [
      { 
          id: 'y-c3-l1', title: 'Buổi 10: Kỹ thuật tính Nguyên hàm', description: 'Phương pháp đổi biến số và nguyên hàm từng phần.', youtubeId: '', duration: '65:00', 
          attachments: [
              { id: 'att-y-10-1', name: 'Bài tập Nguyên hàm (Đổi biến & Từng phần)', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
          ]
      },
      { id: 'y-c3-l2', title: 'Buổi 11: Tích phân từng phần (Sơ đồ đường chéo)', description: 'Ứng dụng sơ đồ đường chéo để tính nhanh tích phân từng phần.', youtubeId: '', duration: '60:00', attachments: [] },
      { id: 'y-c3-l3', title: 'Buổi 12: Ứng dụng tích phân', description: 'Tính diện tích hình phẳng và thể tích vật thể tròn xoay.', youtubeId: '', duration: '55:00', attachments: [] },
      { id: 'y-c3-l4', title: 'Buổi 13: Xử lý số liệu ghép nhóm', description: 'Tính toán các số đặc trưng của mẫu số liệu ghép nhóm.', youtubeId: '', duration: '70:00', attachments: [] }
    ]
  }
];

export const PRO_Y_COURSE: Course = {
  id: 'proy-2025',
  title: 'PRO Y 2025 - Luyện thi Vận dụng (Mục tiêu 7-8)',
  grade: GradeLevel.G12,
  thumbnail: 'https://picsum.photos/seed/proy/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 15400,
  rating: 4.9,
  description: 'Tập trung rèn luyện kỹ năng giải các dạng bài tập vận dụng. Giúp học sinh nắm chắc điểm số an toàn.',
  chapters: PRO_Y_CHAPTERS,
  referenceMaterials: [
      { id: 'ref-proy-1', name: 'Phân dạng bài tập Hàm số vận dụng (Có lời giải)', type: 'pdf', url: DRIVE_LINK, size: '5.6 MB' },
      { id: 'ref-proy-2', name: 'Tuyển tập 8+ Hình học Oxyz 2024', type: 'pdf', url: DRIVE_LINK, size: '4.2 MB' },
  ]
};