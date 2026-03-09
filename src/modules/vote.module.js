import mongoose from 'mongoose'
import Student from '../modules/student.module.js'
import Candidate from '../modules/candidate.module.js'
import Election from '../modules/election.module.js'


const voteSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        },
        candidate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Candidate"
        },
        electionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Election"
        },
        votedAt: new Date()
    },
    {
        timestamps: true
    }
)

const Vote = mongoose.model("Vote", voteSchema);

export default Vote;