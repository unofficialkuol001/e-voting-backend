import express from 'express';
import voteController from '../controllers/vote.controller.js'

const router = express.Router();

router.post('/', voteController);

export default router;