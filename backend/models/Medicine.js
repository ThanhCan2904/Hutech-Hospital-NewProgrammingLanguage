import mongoose from 'mongoose';

const MedicineSchema = new mongoose.Schema({
    tenThuoc: { type: String, required: true },
    lieuLuong: String,
    dang: String,
    gia: { type: Number, default: 0 },
    ghiChuMacDinh: String,
    phatDoGoiY: {
        sang: { type: Number, default: 0 },
        trua: { type: Number, default: 0 },
        chieu: { type: Number, default: 0 },
        toi: { type: Number, default: 0 }
    }
}, {  
    collection: 'Prescription' 
});

const Medicine = mongoose.model('Medicine', MedicineSchema);
export default Medicine;