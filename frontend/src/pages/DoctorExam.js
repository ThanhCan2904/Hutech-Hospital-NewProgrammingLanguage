import React from 'react';
import './hospital-theme.css';

const DoctorExam = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-2xl bg-sky-100 text-sky-600 font-bold text-xl">
          DR
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Khám bệnh & Kê đơn</h1>
          <p className="text-slate-500 text-sm">Triệu chứng, chẩn đoán và đơn thuốc</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
          Thông tin bệnh nhân
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Họ tên bệnh nhân <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
              placeholder="Ví dụ: Nguyễn Văn A"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Mã bệnh nhân / CCCD</label>
            <input
              type="text"
              className="w-full p-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
              placeholder="Tùy chọn"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
          Thông tin khám
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Triệu chứng</label>
            <textarea
              className="w-full p-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none resize-none transition-all h-24"
              placeholder="Ví dụ: Ho khan, sốt nhẹ về chiều..."
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Chẩn đoán</label>
            <textarea
              className="w-full p-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none resize-none transition-all h-24"
              placeholder="Ví dụ: Viêm họng cấp tính..."
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6 relative">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
          Tìm thuốc
        </h2>
        <div className="relative">
          <input
            type="text"
            className="w-full p-3.5 pl-4 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
            placeholder="Gõ tên thuốc..."
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5"
        >
          Xác nhận & Lưu đơn
        </button>
      </div>
    </div>
  );
};

export default DoctorExam;