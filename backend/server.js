import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import medicineRoutes from './routes/medicineRoutes.js';
import authRoutes from './routes/authRoutes.js';
import vitalRoutes from './routes/vitalRoutes.js';

const app = express();

app.use(cors()); 
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Hospital') 
  .then(() => console.log("Đã kết nối MongoDB thành công: Database Hospital"))
  .catch(err => console.error("Lỗi kết nối MongoDB:", err));

app.use('/api/medicines', medicineRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/vitals', vitalRoutes); 

const PORT = 5000;
app.listen(PORT, () => console.log(`Server đang chạy tại port ${PORT}`));