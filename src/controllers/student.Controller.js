import mongoose from "mongoose"
import Student from "../../modules/student.module.js"

const studentLoginController = async (req, res) => {
    try {
        const { name, RegNo, tuitionCleared } = req.body
        const student = await Student.findOne({ RegNo });
        if (!student) return res.status(400).json({ message: 'Student not found' });

        if (!student.tuitionCleared) {
            return res.status(400).json({ message: 'Tuition not cleared' });
        }

        res.status(200).json({
            message: 'login successful'
        })
        
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
}

export default studentLoginController