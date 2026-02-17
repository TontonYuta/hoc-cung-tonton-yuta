import { Course, GradeLevel } from '../types';

// Link mặc định
const DRIVE_LINK = 'https://drive.google.com/file/d/1ZvY0jrVFFGgSC3vOS1LNCBlWx0sb4vY0/view?usp=sharing';

export const MATH_G9_COURSE: Course = {
  id: 'math-g9-2025',
  title: 'PRO 9 - Luyện thi vào 10 (Mục tiêu 8+)',
  grade: GradeLevel.G9,
  thumbnail: 'https://picsum.photos/seed/math9/800/600',
  teacher: 'Trần Huy Hoàng',
  studentsCount: 8500,
  rating: 4.9,
  description: 'Tổng ôn kiến thức Toán 9 và luyện đề thi vào 10 chuyên sâu. Chuyên đề Hàm số, Phương trình, Bất đẳng thức và Hình đường tròn.',
  chapters: [
    {
      id: 'g9-c1',
      title: 'Chương 1: Căn bậc hai & Căn bậc ba',
      lessons: [
        { 
            id: 'g9-c1-l1', title: 'Bài 1: Căn bậc hai', description: 'Điều kiện xác định và hằng đẳng thức căn.', youtubeId: '', duration: '55:00', 
            attachments: [
                { id: 'att-g9-1-1', name: 'Lý thuyết Căn thức bậc 2', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { 
            id: 'g9-c1-l2', title: 'Bài 2: Biến đổi đơn giản biểu thức chứa căn', description: 'Đưa thừa số ra ngoài/vào trong dấu căn, trục căn thức.', youtubeId: '', duration: '65:00', 
            attachments: [
                { id: 'att-g9-2-1', name: 'Các dạng bài tập Trục căn thức', type: 'doc', url: DRIVE_LINK, size: 'DOCX' }
            ]
        },
        { 
            id: 'g9-c1-l3', title: 'Bài 3: Rút gọn biểu thức chứa căn (Vận dụng)', description: 'Dạng bài thi vào 10 thường gặp.', youtubeId: '', duration: '80:00', 
            attachments: [
                 { id: 'att-g9-3-1', name: 'Tổng hợp 20 bài Rút gọn thi vào 10', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        }
      ]
    },
    {
      id: 'g9-c2',
      title: 'Chương 2: Hàm số bậc nhất',
      lessons: [
        { id: 'g9-c2-l1', title: 'Bài 1: Đồ thị hàm số y = ax + b', description: 'Cách vẽ đồ thị và tính chất đồng biến/nghịch biến.', youtubeId: '', duration: '50:00', attachments: [] },
        { id: 'g9-c2-l2', title: 'Bài 2: Đường thẳng song song & cắt nhau', description: 'Điều kiện về hệ số a, b.', youtubeId: '', duration: '45:00', attachments: [] }
      ]
    },
    {
      id: 'g9-c3',
      title: 'Chương 3: Hệ phương trình & Hàm số y = ax²',
      lessons: [
        { 
            id: 'g9-c3-l1', title: 'Bài 1: Giải hệ phương trình', description: 'Phương pháp thế và cộng đại số.', youtubeId: '', duration: '60:00', 
            attachments: [
                { id: 'att-g9-6-1', name: 'Phương pháp giải Hệ phương trình', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { 
            id: 'g9-c3-l2', title: 'Bài 2: Phương trình bậc hai & Vi-ét', description: 'Công thức nghiệm và ứng dụng định lý Vi-ét.', youtubeId: '', duration: '75:00', 
            attachments: [
                 { id: 'att-g9-7-1', name: 'Chuyên đề VS: Định lý Vi-ét & Ứng dụng', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { id: 'g9-c3-l3', title: 'Bài 3: Giải bài toán bằng cách lập PT/HPT', description: 'Các dạng toán chuyển động, năng suất, làm chung làm riêng.', youtubeId: '', duration: '80:00', attachments: [] }
      ]
    },
    {
      id: 'g9-c4',
      title: 'Chương 4: Đường tròn & Hình trụ - Nón - Cầu',
      lessons: [
        { 
            id: 'g9-c4-l1', title: 'Bài 1: Hệ thức lượng trong tam giác vuông', description: 'Ôn tập 5 hệ thức cơ bản.', youtubeId: '', duration: '50:00', 
            attachments: [
                { id: 'att-g9-9-1', name: '5 Hệ thức lượng tam giác vuông', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        },
        { id: 'g9-c4-l2', title: 'Bài 2: Liên hệ giữa dây và khoảng cách đến tâm', description: 'Tính chất đối xứng của đường tròn.', youtubeId: '', duration: '55:00', attachments: [] },
        { id: 'g9-c4-l3', title: 'Bài 3: Góc với đường tròn', description: 'Góc ở tâm, góc nội tiếp, góc tạo bởi tia tiếp tuyến và dây cung.', youtubeId: '', duration: '70:00', attachments: [] },
        { 
            id: 'g9-c4-l4', title: 'Bài 4: Tứ giác nội tiếp', description: 'Dấu hiệu nhận biết và bài tập chứng minh kinh điển.', youtubeId: '', duration: '90:00', 
            attachments: [
                { id: 'att-g9-12-1', name: 'Tuyển tập bài hình Tứ giác nội tiếp', type: 'pdf', url: DRIVE_LINK, size: 'PDF' }
            ]
        }
      ]
    }
  ],
  referenceMaterials: [
      { id: 'ref-g9-1', name: 'Tuyển tập 20 Đề thi vào 10 (Hà Nội, TP.HCM) năm 2024', type: 'pdf', url: DRIVE_LINK, size: '12 MB' },
      { id: 'ref-g9-2', name: 'Chuyên đề Bất đẳng thức & Cực trị (Nâng cao)', type: 'pdf', url: DRIVE_LINK, size: '3.2 MB' },
      { id: 'ref-g9-3', name: 'Bộ đề thi thử môn Toán 9 (Có ma trận)', type: 'doc', url: DRIVE_LINK, size: '4.5 MB' },
  ]
};