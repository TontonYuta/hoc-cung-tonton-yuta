import React from 'react';
import { Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <span className="font-bold text-xl text-white">Tonton Yuta</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Nền tảng học tập Toán học & Lập trình trực tuyến. Đồng hành cùng học sinh, sinh viên trên con đường chinh phục tri thức.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/yuta.primer" target="_blank" className="hover:text-blue-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Thành tích học viên</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Đăng ký khóa học</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Hỗ trợ học viên</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hướng dẫn học tập</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Chính sách thanh toán</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Quên mật khẩu</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-500" />
                <span>Số 1 Đại Cồ Việt, Hà Nội (Gần Bách Khoa)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>0987 654 321</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>contact@tontonyuta.vn</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Tonton Yuta Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};