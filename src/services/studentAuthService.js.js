import mongoose from "mongoose"
import Student from "../../modules/student.module.js"
import bcrypt from 'bcrypt'

// const studentSignService = async (name, regNo, tuitionCleared) => {
//     try {
        
//     } catch (error) {
        
//     }
// }

const studentLoginService = async (name, regNo, tuitionCleared) => {
    try {
        const userInfo = await Student.findOne({ name })
        if (!userInfo) {
            throw new Error('User not Found')
        }
        return {
            id: userInfo._id,
            name: userInfo.name
        }
    } catch (error) {
        console.log('server error')
    }
}

export default studentLoginService;