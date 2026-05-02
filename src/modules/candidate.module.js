import mongoose from 'mongoose'

const candidateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        electionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Election",
            required: true
        },
        position: {
            type: String,
            required: true
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const Candidate = mongoose.model('Candidate', candidateSchema)

export default Candidate