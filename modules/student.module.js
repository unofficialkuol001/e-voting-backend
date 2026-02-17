import mongoose from "mongoose"

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        RegNo: {
            type: String,
            required: true
        },
        tuitionCleared: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const Student = mongoose.model('Student', studentSchema)

export default Student