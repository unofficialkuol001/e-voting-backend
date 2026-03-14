import mongoose from "mongoose"
import Election from "../modules/election.module.js"

const electionController = async (req, res) => {
    try {
        const { title, startDate, endDate } = req.body;
        const existingElection = await Election.findOne({ title });
        if (existingElection) {
            return res.status(409).json({
                message: "election with this title already exists"
            })
        }
        const newElection = new Election({
            title,
            startDate,
            endDate
        });
        await newElection.save();
        res.status(201).json({
            message: "election created successfully"
        })
    } catch (error) {
        console.log('failed to create election', error);
        res.status(500).json({
            message: "server error"
        })
    }
}

export default electionController