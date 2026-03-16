import React from "react";

const PatientBooking = () => {
  const departments = ["Nội tiết", "Da liễu", "Mắt", "Tim mạch", "Ngoại khoa", "Nhi đồng"];
  const timeSlots = [
    { label: "07:00 - 08:00", value: "07:00-08:00" },
    { label: "09:00 - 10:00", value: "09:00-10:00" },
    { label: "13:00 - 15:00", value: "13:00-15:00" },
    { label: "16:00 - 18:00", value: "16:00-18:00" },
  ];
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Đặt lịch khám</h1>
        <p className="text-slate-500 text-sm mt-1">Chọn ngày, khoa, bác sĩ và khung giờ phù hợp</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <form className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
               Ngày khám
            </label>
            <input
              type="date"
              min={today}
              className="w-full p-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
               Chuyên khoa
            </label>
            <select
              className="w-full p-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none bg-white cursor-pointer"
              required
            >
              <option value="">Chọn khoa</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
               Bác sĩ
            </label>
            <select
              className="w-full p-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none bg-white"
              required
            >
              <option value="">Chọn bác sĩ</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
               Khung giờ
            </label>
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.value}
                  type="button"
                  className="p-3 rounded-xl border-2 text-sm font-medium transition-all border-slate-100 text-slate-600 hover:border-sky-200 hover:bg-slate-50"
                >
                  {slot.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="w-full py-3.5 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 transition-colors mt-6"
          >
            Xác nhận đặt lịch
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientBooking;