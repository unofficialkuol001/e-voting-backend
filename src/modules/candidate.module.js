import mongoose from 'mongoose'
import Election from './election.module.js'

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
        }
    },
    {
        timestamps: true
    }
)

const Candidate = mongoose.model('Candidate', candidateSchema)

export default Candidate