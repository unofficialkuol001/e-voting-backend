import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },
    regNo: {
        type: String,
        required: true,
        unique: true
    },
    tuitionCleared: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
);

const Student =
    mongoose.models.Student ||
    mongoose.model("Student", studentSchema);

export default Student;