// ============================================================================
// TRUNG TÂM ĐIỀU KHIỂN BÀI GIẢNG (DÀNH CHO NGƯỜI QUẢN TRỊ)
// ============================================================================
// Hướng dẫn:
// 1. Tìm "ID Bài học" bạn muốn sửa (Ví dụ: g6-c1-l1).
// 2. Điền ID Video Youtube (Ví dụ: dQw4w9WgXcQ).
// 3. Điền Link Google Drive tài liệu.
// 4. Lưu file lại, web sẽ tự động cập nhật.
// ============================================================================

export const LESSON_UPDATES: Record<string, { youtube: string; drive: string }> = {
  
  // --- VÍ DỤ MẪU (Bạn có thể sửa hoặc xóa) ---
  'g6-c1-l1': {
    youtube: 'jfKfPfyJRdk', // ID video Youtube (Nằm sau v= trên link youtube)
    drive: 'https://drive.google.com/file/d/LINK_TAI_LIEU_BAI_1',
  },

  'g6-c1-l2': {
    youtube: '', // Để trống nếu chưa có video
    drive: 'https://drive.google.com/file/d/LINK_TAI_LIEU_BAI_2',
  },

  // --- THÊM CÁC BÀI HỌC MỚI CỦA BẠN DƯỚI ĐÂY ---
  // Cú pháp:
  // 'ID_BÀI_HỌC': { youtube: '...', drive: '...' },

  // Ví dụ cho lớp 12 (PRO X)
  'c1-l1': { youtube: 'VIDEO_ID_MOI', drive: 'LINK_DRIVE_MOI' },
  
  // Ví dụ cho lớp 9
  'g9-c1-l1': { youtube: '', drive: '' },

};

// ============================================================================
// DANH SÁCH MÃ (ID) CÁC KHÓA HỌC ĐỂ BẠN TRA CỨU NHANH
// ============================================================================
/*
  LỚP 6: g6-c1-l1, g6-c1-l2, ... (Bài 1, 2 Chương 1)
  LỚP 7: g7-c1-l1, ...
  LỚP 8: g8-c1-l1, ...
  LỚP 9: g9-c1-l1, ...
  LỚP 10: g10-c1-l1, ...
  LỚP 11: g11-c1-l1, ...
  LỚP 12 PRO X: c1-l1, c1-l2, ...
  LỚP 12 PRO Y: y-c1-l1, y-c1-l2, ...
  LỚP 12 PRO Z: z-c1-l1, z-c1-l2, ...
*/
