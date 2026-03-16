import React from "react";

const PatientProfile = () => {
  const email = localStorage.getItem("userEmail") || "";
  const name = localStorage.getItem("userName") || "Bệnh nhân";

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Thông tin cá nhân</h1>
        <p className="text-slate-500 text-sm mt-1">Xem thông tin tài khoản của bạn</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 text-center border-b border-slate-100">
          <div className="w-20 h-20 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
            {name.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-xl font-semibold text-slate-800">{name}</h2>
          <p className="text-slate-500 text-sm mt-1">Bệnh nhân</p>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
            <div className="p-2 rounded-lg bg-white border border-slate-200 font-bold text-slate-500">
              NM
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-medium">Họ tên</p>
              <p className="font-medium text-slate-800">{name}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
            <div className="p-2 rounded-lg bg-white border border-slate-200 font-bold text-slate-500">
              EM
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-medium">Email đăng nhập</p>
              <p className="font-medium text-slate-800">{email || "—"}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
            <div className="p-2 rounded-lg bg-white border border-slate-200 font-bold text-slate-500">
              RL
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-medium">Vai trò</p>
              <p className="font-medium text-slate-800">Bệnh nhân</p>
            </div>
          </div>
        </div>

        <p className="px-6 pb-6 text-xs text-slate-400">
          Cập nhật thông tin chi tiết (địa chỉ, CCCD, ngày sinh…)
        </p>
      </div>
    </div>
  );
};

export default PatientProfile;