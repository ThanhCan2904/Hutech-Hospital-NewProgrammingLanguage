const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const User = require('./models/User');

const app = express();

// ================= MIDDLEWARE =================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================= VIEW ENGINE =================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ================= CONNECT DATABASE =================
connectDB();

// ================= ROUTES =================

// Trang chủ
app.get('/', (req, res) => {
    res.send('Hospital API is running...');
});

// Trang đăng nhập (GET)
app.get('/login', (req, res) => {
    res.render('login');
});

// Xử lý đăng nhập (POST)
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({
            username: username,
            password: password
        });

        if (!user) {
            return res.send("Sai tài khoản hoặc mật khẩu");
        }

        // Nếu đăng nhập thành công
        res.send(`Đăng nhập thành công. Xin chào ${user.username}`);
    } catch (error) {
        console.error(error);
        res.send("Lỗi server");
    }
});

// ================= START SERVER =================
app.listen(5000, () => {
    console.log('Server running on port 5000');
});