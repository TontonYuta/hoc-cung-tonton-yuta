import { Course, GradeLevel, Chapter } from '../types';

// Link mặc định
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

const PRO_X_CHAPTERS: Chapter[] = [
  {
    id: 'c1-khao-sat-ham-so',
    title: 'Chương 1: Ứng dụng đạo hàm để khảo sát hàm số',
    lessons: [
      {
        id: 'c1-l1',
        title: 'Bài 1: Tính đơn điệu và cực trị của hàm số',
        description: 'Phương pháp xét tính đơn điệu và tìm cực trị dựa vào bảng biến thiên.',
        youtubeId: 'e0PkXP7hIMk', 
        duration: '60:00',
        attachments: [
            { id: 'att-c1-l1-1', name: 'Tài liệu bài giảng (PDF)', type: 'pdf', url: DRIVE_LINK, size: 'PDF' },
            { id: 'att-c1-l1-2', name: 'Bài tập tự luyện', type: 'doc', url: DRIVE_LINK, size: 'DOCX' }
        ],
      },
      {
        id: 'c1-l2',
        title: 'Bài 2: Giá trị lớn nhất - Giá trị nhỏ nhất',
        description: 'Các phương pháp tìm GTLN, GTNN trên đoạn và trên khoảng.',
        youtubeId: 'f19f2a24c',
        duration: '45:00',
        attachments: [
            { id: 'att-c1-l2-1', name: 'Lý thuyết Min-Max', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
        ],
      },
      {
        id: 'c1-l3',
        title: 'Bài 3: Đường tiệm cận của đồ thị hàm số',
        description: 'Phương pháp xác định tiệm cận đứng và tiệm cận ngang.',
        youtubeId: 'L_jWHffIx5E',
        duration: '40:00',
        attachments: [],
      },
      {
        id: 'c1-l4',
        title: 'Bài 4: Khảo sát và vẽ đồ thị hàm số',
        description: 'Quy trình khảo sát các dạng hàm số thường gặp.',
        youtubeId: 'jfKfPfyJRdk',
        duration: '75:00',
        attachments: [],
      }
    ]
  },
  {
    id: 'c2-vecto-khong-gian',
    title: 'Chương 2: Phương pháp tọa độ trong không gian (Oxyz)',
    lessons: [
      {
        id: 'c2-l1',
        title: 'Bài 1: Vectơ và các phép toán vectơ',
        description: 'Định nghĩa, tính chất và các phép toán cộng, trừ, nhân vô hướng.',
        youtubeId: 'f15g1a14c',
        duration: '50:00',
        attachments: [],
      },
      {
        id: 'c2-l2',
        title: 'Bài 2: Hệ trục tọa độ Oxyz',
        description: 'Xác định tọa độ điểm và vectơ trong không gian.',
        youtubeId: '0-7V174f9d0',
        duration: '45:00',
        attachments: [],
      },
      {
        id: 'c2-l3',
        title: 'Bài 3: Tích có hướng và ứng dụng',
        description: 'Ứng dụng tích có hướng để tính diện tích, thể tích và chứng minh đồng phẳng.',
        youtubeId: 'L_jWHffIx5E',
        duration: '55:00',
        attachments: [],
      }
    ]
  },
  {
    id: 'c3-thong-ke',
    title: 'Chương 3: Thống kê',
    lessons: [
      {
        id: 'c3-l1',
        title: 'Bài 1: Các số đặc trưng đo xu thế trung tâm',
        description: 'Số trung bình, trung vị, tứ phân vị và mốt của mẫu số liệu ghép nhóm.',
        youtubeId: 'f19f2a24c',
        duration: '40:00',
        attachments: [],
      },
      {
        id: 'c3-l2',
        title: 'Bài 2: Các số đặc trưng đo độ phân tán',
        description: 'Khoảng biến thiên, khoảng tứ phân vị, phương sai và độ lệch chuẩn.',
        youtubeId: 'jfKfPfyJRdk',
        duration: '45:00',
        attachments: [],
      }
    ]
  },
  {
    id: 'c4-nguyen-ham-tich-phan',
    title: 'Chương 4: Nguyên hàm và Tích phân',
    lessons: [
      {
        id: 'c4-l1',
        title: 'Bài 1: Nguyên hàm',
        description: 'Định nghĩa, tính chất và bảng nguyên hàm các hàm số sơ cấp.',
        youtubeId: 'L_jWHffIx5E',
        duration: '60:00',
        attachments: [],
      },
      {
        id: 'c4-l2',
        title: 'Bài 2: Các phương pháp tính tích phân',
        description: 'Phương pháp đổi biến số và phương pháp tích phân từng phần.',
        youtubeId: '0-7V174f9d0',
        duration: '70:00',
        attachments: [],
      },
      {
        id: 'c4-l3',
        title: 'Bài 3: Ứng dụng của tích phân',
        description: 'Tính diện tích hình phẳng và thể tích vật thể tròn xoay.',
        youtubeId: 'f19f2a24c',
        duration: '55:00',
        attachments: [],
      }
    ]
  },
  {
    id: 'c5-mat-phang-mat-cau',
    title: 'Chương 5: Phương trình Mặt phẳng, Đường thẳng & Mặt cầu',
    lessons: [
      {
        id: 'c5-l1',
        title: 'Bài 1: Phương trình mặt phẳng',
        description: 'Vectơ pháp tuyến và cách viết phương trình tổng quát của mặt phẳng.',
        youtubeId: 'jfKfPfyJRdk',
        duration: '50:00',
        attachments: [],
      },
      {
        id: 'c5-l2',
        title: 'Bài 2: Phương trình đường thẳng',
        description: 'Vectơ chỉ phương, phương trình tham số và phương trình chính tắc.',
        youtubeId: 'f15g1a14c',
        duration: '55:00',
        attachments: [],
      },
      {
        id: 'c5-l3',
        title: 'Bài 3: Phương trình mặt cầu',
        description: 'Xác định tâm, bán kính và viết phương trình mặt cầu.',
        youtubeId: '0-7V174f9d0',
        duration: '45:00',
        attachments: [],
      }
    ]
  },
  {
    id: 'c6-xac-suat',
    title: 'Chương 6: Xác suất',
    lessons: [
      {
        id: 'c6-l1',
        title: 'Bài 1: Xác suất có điều kiện',
        description: 'Công thức nhân xác suất và định nghĩa xác suất có điều kiện.',
        youtubeId: 'L_jWHffIx5E',
        duration: '50:00',
        attachments: [],
      },
      {
        id: 'c6-l2',
        title: 'Bài 2: Công thức xác suất toàn phần và Bayes',
        description: 'Áp dụng công thức Bayes để giải quyết các bài toán thực tế.',
        youtubeId: 'f19f2a24c',
        duration: '60:00',
        attachments: [],
      }
    ]
  }
];

export const PRO_X_COURSE: Course = {
  id: 'prox-2025',
  title: 'PRO X 2025 - Nền tảng Toán 12 (Mục tiêu 7+)',
  grade: GradeLevel.G12,
  thumbnail: 'https://picsum.photos/seed/prox/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 28500,
  rating: 5.0,
  description: 'Khóa học trang bị kiến thức nền tảng vững chắc theo chương trình Sách giáo khoa mới. Phù hợp cho học sinh muốn nắm chắc 7 điểm tốt nghiệp.',
  chapters: PRO_X_CHAPTERS,
  referenceMaterials: [{ id: 'ref-prox', name: 'Sách giáo khoa Toán 12 (PDF)', type: 'pdf', url: '#', size: '15 MB' }]
};