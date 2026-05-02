import mongoose from "mongoose"
import Vote from "../modules/vote.module.js"
import Candidate from "../modules/candidate.module.js"

const candidateController = async (req, res) => {
   
    try {
        const { name, electionId, position } = req.body;
        const existingCandidate = await Candidate.findOne({ name, electionId });
        if (existingCandidate) {
            return res.status(409).json({
                message: "candidate already exists for this election"
            })
        }   
        const newCandidate = new Candidate({
            name,
            electionId,
            position
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

const getCandidates = async (req, res) => {
    try {
        const selectedCandidates = await Candidate.find();
        res.status(200).json({
            candidates: selectedCandidates
        })
    } catch (error) {
        console.log('failed to get candidates', error);
        res.status(500).json({
            message: "server error"
        })
    }
}

const deleteCandidate = async (req, res) => {
    try {
        const { candidateId } = req.body;
        const toDeleteCandidate = await Candidate.findByIdAndUpdate(
            candidateId,
            {
                isDeleted: true,
                deletedAt: new Date()
            },
            {new:true}
        );
        if (!toDeleteCandidate) {
            res.status(404).json({
                message:"candidate not FOUND"
            })
        }
        res.json({
            message: "Candidate soft deleted",
            toDeleteCandidate
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Server error"
        })
    }
}

export  {   candidateController, getCandidates, deleteCandidate }