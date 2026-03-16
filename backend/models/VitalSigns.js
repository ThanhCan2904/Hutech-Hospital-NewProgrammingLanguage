import mongoose from 'mongoose';

const VitalSignsSchema = new mongoose.Schema({
    patientName: { type: String, required: true }, // Tên bệnh nhân
    age: Number,
    weight: Number, // Cân nặng (kg)
    temperature: Number, // Nhiệt độ (°C)
    bloodPressure: String, // Huyết áp (mmHg) - ví dụ: "120/80"
    heartRate: Number, // Mạch (lần/phút)
    respiratoryRate: Number, // Nhịp thở (lần/phút)
    spO2: Number, // Nồng độ Oxy trong máu (%)
    note: String,
    createdAt: { type: Date, default: Date.now }
}, { 
    collection: 'VitalSigns' // Lưu vào bảng VitalSigns trong DB Doctor
});

const VitalSigns = mongoose.model('VitalSigns', VitalSignsSchema);
export default VitalSigns;