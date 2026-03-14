import express from 'express'
import candidateController from '../controllers/candidate.controller'

const router = express.Router()

router.post('/add', candidateController)

export default router