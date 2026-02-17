import mongoose from "mongoose"

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        regNo: {
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

 export default studentSchema