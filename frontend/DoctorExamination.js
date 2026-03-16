import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorExamination = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedMed, setSelectedMed] = useState(null);
    const [dosage, setDosage] = useState({ sang: 0, trua: 0, chieu: 0, toi: 0 });
    const [days, setDays] = useState(1);
    const [symptoms, setSymptoms] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchTerm.length > 1) { // Chỉ tìm khi gõ từ 2 ký tự trở lên
                fetchMedicines(searchTerm);
            } else {
                setSuggestions([]);
            }
        }, 300); 

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    const fetchMedicines = async (name) => {
        try {
            const res = await axios.get(`http://localhost:5000/api/medicines/search?name=${encodeURIComponent(name)}`);
            setSuggestions(res.data);
        } catch (error) {
        }
    };

    const handleSelectMedicine = (med) => {
        setSelectedMed(med);
        setSearchTerm(med.tenThuoc);
        setSuggestions([]);
        setDosage({
            sang: med.phatDoGoiY?.sang || 0,
            trua: med.phatDoGoiY?.trua || 0,
            chieu: med.phatDoGoiY?.chieu || 0,
            toi: med.phatDoGoiY?.toi || 0
        });
    };

    const handleAddMedicine = () => {
        if (!selectedMed) return;
        
        const dailyTotal = dosage.sang + dosage.trua + dosage.chieu + dosage.toi;
        const totalQuantity = dailyTotal * days;
        
        const newMedicine = {
            tenThuoc: selectedMed.tenThuoc,
            sang: dosage.sang,
            trua: dosage.trua,
            chieu: dosage.chieu,
            toi: dosage.toi,
            days: days,
            totalPrice: totalQuantity * (selectedMed.gia || 0)
        };

        setMedicines([...medicines, newMedicine]);
        setSelectedMed(null);
        setSearchTerm('');
        setDosage({ sang: 0, trua: 0, chieu: 0, toi: 0 });
        setDays(1);
    };

    const removeMedicine = (index) => {
        const updatedMedicines = [...medicines];
        updatedMedicines.splice(index, 1);
        setMedicines(updatedMedicines);
    };

    const savePrescription = async () => {
        const prescriptionData = {
            patientId: "BN001",
            symptoms: symptoms,
            diagnosis: diagnosis,
            medicines: medicines,
            totalOrderPrice: medicines.reduce((sum, item) => sum + item.totalPrice, 0)
        };
    
        try {
            const response = await axios.post('http://localhost:5000/api/medicines/save-prescription', prescriptionData);
            console.log(response.data.message);
        } catch (error) {
            console.error("Lỗi khi lưu đơn:", error);
        }
    };

    return (
        <div className="relative">
            <div className="mb-4">
                <label className="block font-medium">Triệu chứng:</label>
                <input 
                    type="text" 
                    className="w-full border p-2 rounded mb-2"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    placeholder="Nhập triệu chứng..."
                />
                <label className="block font-medium">Chẩn đoán:</label>
                <input 
                    type="text" 
                    className="w-full border p-2 rounded"
                    value={diagnosis}
                    onChange={(e) => setDiagnosis(e.target.value)}
                    placeholder="Nhập chẩn đoán..."
                />
            </div>

            <label className="block font-medium">Tìm thuốc:</label>
            <input 
                type="text"
                className="w-full border p-2 rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Nhập tên thuốc..."
            />

            {/* Danh sách gợi ý hiện ra như Autocomplete */}
            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border shadow-md max-h-40 overflow-y-auto">
                    {suggestions.map((med) => (
                        <li 
                            key={med._id}
                            className="p-2 hover:bg-blue-100 cursor-pointer border-b"
                            onClick={() => handleSelectMedicine(med)}
                        >
                            <span className="font-bold">{med.tenThuoc}</span> - {med.lieuLuong} ({med.dang})
                        </li>
                    ))}
                </ul>
            )}

            {/* Hiển thị thông tin thuốc sau khi chọn */}
            {selectedMed && (
                <div className="mt-4 bg-gray-50 p-3 rounded border">
                    <div className="text-blue-700 font-bold italic mb-2">
                        Gợi ý: {selectedMed.ghiChuMacDinh}
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                        {['sang', 'trua', 'chieu', 'toi'].map(buoi => (
                        <div key={buoi}>
                            <label className="text-xs uppercase">{buoi}</label>
                            <input 
                                type="number"
                                className="w-full border p-1"
                                value={dosage[buoi]}
                                onChange={(e) => setDosage({...dosage, [buoi]: parseInt(e.target.value) || 0})}
                            />
                        </div>
                        ))}
                        <div>
                            <label className="text-xs uppercase">Số ngày</label>
                            <input
                                type="number"
                                className="w-full border p-1"
                                value={days}
                                onChange={(e) => setDays(parseInt(e.target.value) || 1)}
                            />
                        </div>
                    </div>
                    <button 
                        onClick={handleAddMedicine}
                        className="mt-3 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                    >
                        + Thêm thuốc
                    </button>
                </div>
            )}

            {medicines.length > 0 && (
                <div className="mt-6">
                    <h3 className="font-bold text-lg mb-2">Đơn thuốc đã kê</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Tên thuốc</th>
                                <th>Sáng</th><th>Trưa</th><th>Chiều</th><th>Tối</th>
                                <th>Ngày</th>
                                <th>Thành tiền</th>
                                <th>Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicines.map((med, idx) => (
                                <tr key={idx}>
                                    <td>{med.tenThuoc}</td>
                                    <td>{med.sang}</td><td>{med.trua}</td><td>{med.chieu}</td><td>{med.toi}</td>
                                    <td>{med.days}</td>
                                    <td>{med.totalPrice.toLocaleString()}</td>
                                    <td><button onClick={() => removeMedicine(idx)} className="text-red-500">X</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="mt-6 text-right">
                <button 
                    onClick={savePrescription}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 font-bold"
                >
                    Lưu đơn thuốc
                </button>
            </div>
        </div>
    );
};

export default DoctorExamination;