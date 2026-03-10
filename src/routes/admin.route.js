import { adminController, adminLoginController } from "../controllers/admin.controller.js";

import express from 'express'

const router = express.Router()

router.post('/register', adminController)
router.post('/login', adminLoginController)

export default router