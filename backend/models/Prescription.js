import mongoose from 'mongoose';

const PrescriptionSchema = new mongoose.Schema({
    patientId: String,
    patientName: String,
    doctorId: String,
    symptoms: String,     
    diagnosis: String,   
    medicines: [         
        {
            tenThuoc: String,
            sang: Number,
            trua: Number,
            chieu: Number,
            toi: Number,
            days: Number,
            totalPrice: Number
        }
    ],
    totalOrderPrice: Number, 
    createdAt: { type: Date, default: Date.now }
});

const Prescription = mongoose.model('Prescription', PrescriptionSchema);
export default Prescription;