import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600">Hệ Thống Y Tế</h2>
          <p className="text-gray-400 italic">Vui lòng đăng nhập để tiếp tục</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Email tài khoản</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="doctor_nt1@gmail.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Mật khẩu</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="••••••"
              required
            />
          </div>

          <button
            type="button"
            className="w-full p-3 text-white rounded-lg font-bold transition-all bg-blue-600 hover:bg-blue-700 shadow-lg"
          >
            Đăng nhập ngay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;