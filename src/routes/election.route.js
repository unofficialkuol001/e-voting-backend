import express from 'express'
import electionController from '../controllers/election.controller.js'

const router = express.Router()

router.post('/create', electionController)

export default router