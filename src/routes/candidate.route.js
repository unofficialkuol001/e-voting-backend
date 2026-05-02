import express from 'express'
import {candidateController, getCandidates, deleteCandidate} from '../controllers/candidate.controller.js'

const router = express.Router()

router.post('/add', candidateController)
router.get('/get', getCandidates)
router.delete('/deleteCandidate',deleteCandidate )


export default router