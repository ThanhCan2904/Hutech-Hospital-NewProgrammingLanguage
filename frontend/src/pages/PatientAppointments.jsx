import React, { useState } from "react";
import { Link } from "react-router-dom";

const MOCK_APPOINTMENTS = [];

const PatientAppointments = () => {
  const [appointments] = useState(MOCK_APPOINTMENTS);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Lịch hẹn của tôi</h1>
        <p className="text-slate-500 text-sm mt-1">Xem và quản lý các lịch khám đã đặt</p>
      </div>

      {appointments.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 font-bold text-slate-400">
            CAL
          </div>
          <h2 className="font-semibold text-slate-700 mb-2">Chưa có lịch hẹn nào</h2>
          <p className="text-slate-500 text-sm mb-6">
            Bạn có thể đặt lịch khám qua mục <strong>Đặt lịch hẹn</strong> trên sidebar.
          </p>
          <Link
            to="/patient/booking"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white rounded-xl font-medium text-sm hover:bg-sky-700 transition-colors"
          >
            Đặt lịch ngay
          </Link>
        </div>
      ) : (
        <ul className="space-y-4">
          {appointments.map((apt, idx) => (
            <li
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-wrap items-center gap-4"
            >
              <div className="flex items-center gap-2 text-slate-600">
                <span>{apt.date}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span>{apt.timeSlot}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span>{apt.department}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span>BS. {apt.doctor}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PatientAppointments;