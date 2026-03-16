import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50">
      <div className="max-w-xl w-full mx-4 bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-10">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-500 uppercase mb-2">
            MED-SYSTEM
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Hệ thống phòng khám thông minh
          </h1>
          <p className="text-slate-500 text-sm md:text-base">
            Quản lý khám bệnh, kê đơn và đặt lịch khám cho bác sĩ, điều dưỡng và bệnh nhân.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-sky-600 text-white font-semibold text-sm md:text-base shadow-lg shadow-sky-500/30 hover:bg-sky-700 transition-colors"
          >
            Đăng nhập
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl border border-slate-200 text-slate-600 font-semibold text-sm md:text-base hover:border-sky-200 hover:bg-slate-50 transition-colors"
          >
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;