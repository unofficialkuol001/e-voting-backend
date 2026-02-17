import express from 'express'
import { config } from 'dotenv'
import connectDB from './src/configs/database.js'
import loginRouter from '../e-voting-backend/src/routes/student.route.js'

const app = express()

config()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const PORT = process.env.PORT || 3000

const startServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`server running on port http://localhost:${PORT}`)
            connectDB()
        })
    } catch (error) {
        console.log('server failed to run')
    }
}

app.use('/student', loginRouter);

startServer()

