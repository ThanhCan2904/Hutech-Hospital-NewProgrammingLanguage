import React from "react";

const PatientHome = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Xin chào, <span className="text-sky-600">Bệnh nhân</span>
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Chọn một trong các mục bên trái để đặt lịch hoặc xem lịch hẹn của bạn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all group cursor-pointer">
          <div className="p-3 rounded-xl bg-sky-100 text-sky-600 font-bold">
            BK
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-slate-800">Đặt lịch hẹn</h2>
            <p className="text-sm text-slate-500">Đặt lịch khám với bác sĩ</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all group cursor-pointer">
          <div className="p-3 rounded-xl bg-sky-100 text-sky-600 font-bold">
            AP
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-slate-800">Xem lịch hẹn</h2>
            <p className="text-sm text-slate-500">Lịch khám đã đặt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHome;