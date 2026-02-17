import express from 'express'
import { config } from 'dotenv'
import connectDB from './src/configs/database.js'

const app = express()

config()
app.use(express.urlencoded({ extended: true }))

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

startServer()

