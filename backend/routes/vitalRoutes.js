import express from 'express';
import VitalSigns from '../models/VitalSigns.js';
import mongoose from 'mongoose';

const router = express.Router();

// [GET] Lấy danh sách chỉ số (danh sách bệnh nhân với chỉ số sinh tồn)
router.get('/history', async (req, res) => {
  try {
    const history = await VitalSigns.find().sort({ createdAt: -1 }).limit(100).lean();
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// [GET] Lấy một bản ghi theo id
router.get('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Id không hợp lệ' });
    }
    const doc = await VitalSigns.findById(req.params.id).lean();
    if (!doc) return res.status(404).json({ error: 'Không tìm thấy' });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// [POST] Lưu chỉ số sinh tồn (thêm mới)
router.post('/save', async (req, res) => {
  try {
    const newVitals = new VitalSigns(req.body);
    const saved = await newVitals.save();
    res.status(201).json({ success: true, message: 'Đã lưu chỉ số sinh tồn!', data: saved });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// [PUT] Cập nhật chỉ số theo id
router.put('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Id không hợp lệ' });
    }
    const updated = await VitalSigns.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    ).lean();
    if (!updated) return res.status(404).json({ error: 'Không tìm thấy' });
    res.json({ success: true, message: 'Đã cập nhật!', data: updated });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// [DELETE] Xóa bản ghi theo id
router.delete('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Id không hợp lệ' });
    }
    const deleted = await VitalSigns.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Không tìm thấy' });
    res.json({ success: true, message: 'Đã xóa!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
