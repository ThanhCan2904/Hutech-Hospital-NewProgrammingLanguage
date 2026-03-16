import React from 'react';

const NurseVitals = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Tiếp nhận chỉ số sinh tồn</h1>
          <p className="text-slate-500 text-sm mt-1">Danh sách bệnh nhân và chỉ số đo gần nhất</p>
        </div>
        <button
          type="button"
          className="px-5 py-3 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 shadow-lg shadow-sky-500/25 transition-all"
        >
          Thêm
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-12 text-center text-slate-500">
          Chưa có bản ghi nào. Nhấn <strong>Thêm</strong> để nhập chỉ số sinh tồn cho bệnh nhân.
        </div>
      </div>
    </div>
  );
};

export default NurseVitals;