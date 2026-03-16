import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

// Import các trang
import DoctorExam from "./pages/DoctorExam";
import NurseVitals from "./pages/NurseVitals";
import Login from "./pages/Login";
import PatientBooking from "./pages/PatientBooking";
import Home from "./pages/Home";
import PatientHome from "./pages/PatientHome";
import PatientAppointments from "./pages/PatientAppointments";
import PatientProfile from "./pages/PatientProfile";

const App = () => {
  // Lấy role trực tiếp từ localStorage (doctor, nurse, hoặc patient)
  const role = localStorage.getItem("userRole")?.toLowerCase().trim();

  const logout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    window.location.href = "/";
  };

  // Hàm helper để xác định đường dẫn mặc định dựa trên Role
  const getDefaultRoute = (userRole) => {
    switch (userRole) {
      case "doctor": return "/doctor";
      case "nurse": return "/nurse";
      case "patient": return "/patient";
      default: return "/";
    }
  };

  return (
    <Router>
      {!role ? (
        /* TRƯỜNG HỢP CHƯA ĐĂNG NHẬP */
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        /* TRƯỜNG HỢP ĐÃ ĐĂNG NHẬP: Layout có Sidebar */
        <div className="flex min-h-screen bg-slate-100">
          
          {/* SIDEBAR - Doctor / Nurse: dùng sidebar chung */}
          {role !== "patient" && (
          <nav className="w-64 bg-slate-900 text-white p-6 flex flex-col gap-2 shadow-2xl">
            <div className="mb-10 text-center border-b border-slate-800 pb-6">
              <h1 className="text-2xl font-black text-blue-400">MED-SYSTEM</h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] mt-1">Phòng khám thông minh</p>
            </div>

            <div className="flex flex-col gap-2">
              {role === "nurse" && (
                <Link
                  to="/nurse"
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 font-bold transition-all hover:translate-x-1"
                >
                  🩺 Y TÁ TIẾP NHẬN
                </Link>
              )}

              {role === "doctor" && (
                <Link
                  to="/doctor"
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 font-bold transition-all hover:translate-x-1"
                >
                  👨‍⚕️ BÁC SĨ KHÁM BỆNH
                </Link>
              )}
            </div>

            <div className="mt-auto pt-6 border-t border-slate-800">
              <div className="px-4 mb-4">
                <p className="text-[10px] text-slate-500 uppercase font-black">Tài khoản</p>
                <p className="text-xs truncate text-slate-300">{localStorage.getItem("userEmail")}</p>
              </div>
              <button
                onClick={logout}
                className="w-full bg-red-500/10 text-red-500 p-4 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                🚪 Đăng xuất
              </button>
            </div>
          </nav>
          )}

          {/* SIDEBAR - Patient: trang chủ riêng, Đặt lịch, Xem lịch, Avatar */}
          {role === "patient" && (
          <nav className="w-64 bg-slate-900 text-white p-6 flex flex-col gap-2 shadow-2xl">
            <div className="mb-10 text-center border-b border-slate-800 pb-6">
              <h1 className="text-2xl font-black text-blue-400">MED-SYSTEM</h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] mt-1">Phòng khám thông minh</p>
            </div>

            <div className="flex flex-col gap-2">
              <Link
                to="/patient"
                className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 font-bold transition-all hover:translate-x-1"
              >
                🏠 Trang chủ
              </Link>
              <Link
                to="/patient/booking"
                className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 font-bold transition-all hover:translate-x-1"
              >
                📅 Đặt lịch hẹn
              </Link>
              <Link
                to="/patient/appointments"
                className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 font-bold transition-all hover:translate-x-1"
              >
                📋 Xem lịch hẹn
              </Link>
            </div>

            <div className="mt-auto pt-6 border-t border-slate-800 space-y-2">
              <Link
                to="/patient/profile"
                className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 font-bold transition-all w-full text-left"
              >
                <span className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center text-lg font-black text-white">
                  {(() => {
                    const n = localStorage.getItem("userName") || "B";
                    return n.charAt(0).toUpperCase();
                  })()}
                </span>
                <span className="text-sm">Thông tin cá nhân</span>
              </Link>
              <button
                onClick={logout}
                className="w-full bg-red-500/10 text-red-500 p-4 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                🚪 Đăng xuất
              </button>
            </div>
          </nav>
          )}

          {/* NỘI DUNG CHÍNH (CONTENT) */}
          <main className="flex-1 p-8 overflow-y-auto">
            <Routes>
              <Route
                path="/doctor"
                element={role === "doctor" ? <DoctorExam /> : <Navigate to={getDefaultRoute(role)} />}
              />

              <Route
                path="/nurse"
                element={role === "nurse" ? <NurseVitals /> : <Navigate to={getDefaultRoute(role)} />}
              />

              {/* Bệnh nhân: trang chủ, đặt lịch, xem lịch, thông tin cá nhân */}
              <Route
                path="/patient"
                element={role === "patient" ? <PatientHome /> : <Navigate to={getDefaultRoute(role)} />}
              />
              <Route
                path="/patient/booking"
                element={role === "patient" ? <PatientBooking /> : <Navigate to={getDefaultRoute(role)} />}
              />
              <Route
                path="/patient/appointments"
                element={role === "patient" ? <PatientAppointments /> : <Navigate to={getDefaultRoute(role)} />}
              />
              <Route
                path="/patient/profile"
                element={role === "patient" ? <PatientProfile /> : <Navigate to={getDefaultRoute(role)} />}
              />

              <Route path="/" element={<Navigate to={getDefaultRoute(role)} />} />
              <Route path="*" element={<Navigate to={getDefaultRoute(role)} />} />
            </Routes>
          </main>
        </div>
      )}
    </Router>
  );
};

export default App; 