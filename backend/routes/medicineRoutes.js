import express from 'express';
const router = express.Router();
import Medicine from '../models/Medicine.js'; 
import Prescription from '../models/Prescription.js'; // Import thêm model đơn thuốc để lưu dữ liệu

// 1. API TÌM KIẾM THUỐC (Dành cho ô tìm kiếm và gợi ý "pa")
router.get('/search', async (req, res) => {
    try {
        const query = req.query.name;
        
        if (!query || query.trim() === "") {
            return res.json([]);
        }

        // Xử lý an toàn chuỗi để tránh lỗi Regex khi người dùng gõ ký tự đặc biệt
        const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // Tìm kiếm trong collection 'Prescription' (danh mục thuốc gốc)
        const medicines = await Medicine.find({
            tenThuoc: { $regex: safeQuery, $options: 'i' }
        })
        .select('tenThuoc lieuLuong dang gia ghiChuMacDinh phatDoGoiY')
        .limit(10)
        .lean(); 
        
        console.log(`[Search] Từ khóa: "${query}" - Tìm thấy: ${medicines.length} thuốc`);
        res.status(200).json(medicines);
    } catch (err) {
        console.error("Lỗi logic tìm kiếm thuốc:", err);
        res.status(500).json({ message: "Lỗi hệ thống khi truy xuất kho thuốc" });
    }
});

// 2. API LƯU ĐƠN THUỐC (Dành cho nút XÁC NHẬN & XUẤT ĐƠN)
router.post('/save-prescription', async (req, res) => {
    try {
        // req.body chứa toàn bộ symptoms, diagnosis, medicines, totalOrderPrice từ Frontend gửi lên
        const newPrescription = new Prescription(req.body);
        
        const savedData = await newPrescription.save();
        
        console.log(`[Prescription] Đã lưu đơn thuốc mới ID: ${savedData._id}`);
        res.status(201).json({ 
            success: true, 
            message: "Lưu đơn thuốc vào hệ thống thành công!",
            data: savedData 
        });
    } catch (err) {
        console.error("Lỗi khi lưu đơn thuốc:", err);
        res.status(500).json({ 
            success: false, 
            message: "Lỗi hệ thống: Không thể lưu đơn thuốc." 
        });
    }
});

export default router;