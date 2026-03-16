import express from 'express';
const router = express.Router();
import User from '../models/User.js';

// ROUTE NẠP 35 DỮ LIỆU
router.post('/register-bulk', async (req, res) => {
    try {
        const data = req.body;
        
        // Kiểm tra nếu là mảng mới thực hiện nạp
        if (!Array.isArray(data)) {
            return res.status(400).json({ message: "Dữ liệu phải là một mảng []" });
        }

        // insertMany sẽ đẩy toàn bộ 35 đối tượng vào database cùng lúc
        const users = await User.insertMany(data);
        
        res.status(201).json({
            message: `Đã nạp thành công ${users.length} người dùng vào database!`,
            status: "success"
        });
    } catch (error) {
        res.status(500).json({ message: "Lỗi nạp dữ liệu", error: error.message });
    }
});

// ROUTE ĐĂNG NHẬP
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user && user.password === password) {
            res.json({
                message: "Đăng nhập thành công",
                user: { name: user.name, role: user.role, email: user.email }
            });
        } else {
            res.status(401).json({ message: "Sai tài khoản hoặc mật khẩu" });
        }
    } catch (error) {
        res.status(500).json({ message: "Lỗi server" });
    }
});

export default router;