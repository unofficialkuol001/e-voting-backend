import mongoose from "mongoose"
import Vote from "../modules/vote.module.js"
import Student from "../modules/student.module.js"

const voteController = async (req, res) => {
    try {
        const { studentId, candidate, electionId } = req.body;

        const existingVote = await Vote.findOne({ studentId, electionId });
        if (existingVote) {
            return res.status(409).json({
                message: "you have already voted in this election"
            })
        }
        const isTuitionPaid = await Student.findById(studentId).select('tuitionCleared');
        if (!isTuitionPaid || !isTuitionPaid.tuitionCleared) {
            return res.status(403).json({
                message: "you are not eligible to vote, tuition not paid"
            })
        }
        const newVote = new Vote({
            studentId,
            candidate,
            electionId  
        });
        await newVote.save();
        res.status(201).json({
            message: "vote cast successfully"
        })
    } catch (error) {
        console.log('failed to cast vote', error);
        res.status(500).json({  
            message: "server error"
        })
    }
}

export default voteController