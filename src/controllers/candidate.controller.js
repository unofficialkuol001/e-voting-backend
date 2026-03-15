import mongoose from "mongoose"
import Vote from "../modules/vote.module.js"
import Candidate from "../modules/candidate.module.js"

const candidateController = async (req, res) => {
    try {
        const { name, electionId } = req.body;
        const existingCandidate = await Candidate.findOne({ name, electionId });
        if (existingCandidate) {
            return res.status(409).json({
                message: "candidate already exists for this election"
            })
        }   
        const newCandidate = new Candidate({
            name,
            electionId    
        });
        await newCandidate.save();
        res.status(201).json({
            message: "candidate created successfully"
        })
    } catch (error) {
        console.log('failed to create candidate', error);
        res.status(500).json({
            message: "server error"
        })
    }
}

export default candidateController