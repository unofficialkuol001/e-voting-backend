import express from 'express';
import {voteController, getVotesByElection } from '../controllers/vote.controller.js'

const router = express.Router();

router.post('/candidate', voteController);
router.get('/election/:electionId', getVotesByElection);

export default router;