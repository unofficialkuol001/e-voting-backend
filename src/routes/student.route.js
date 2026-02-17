import express from 'express'
import studentLoginController from "../controllers/student.Controller.js"

const router = express.Router()

router.post('/login', studentLoginController)

export default router