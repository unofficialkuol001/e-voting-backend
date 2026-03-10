import mongoose from 'mongoose'
import Admin from '../modules/admin.module.js'
import AdminLogin from '../modules/admin.module.js'
import bcrypt from 'bcrypt'


const adminController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const admin = await Admin.findOne({ email });
        if (admin) {
            return res.status(409).json({
                message: "already exist"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const saveAdmin = {
            name,   
            email,
            password: hashedPassword
        };
        await saveAdmin.save();
        res.status(201).json({
            message:'Admin registered successfully'
        })

    } catch (error) {
        console.log('failed to register admin', error);
        res.status(500).json({
            message:'server error'
        })
    }
}

const adminLoginController = async (req,res) => {
    try {
        const { email, password } = req.body;
        const loginAdmin = await AdminLogin.findOne({ email });
        if (!loginAdmin) {
            return res.status(404).json({
                message: "admin not found"
            })
        }
        const isPasswordValid = await bcrypt.compare(password, loginAdmin.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "invalid password"
            })
        }
        res.status(200).json({
            message: "admin logged in successfully"
        })
    } catch (error) {
        console.log('failed to login admin', error);
        res.status(500).json({
            message: "server error"
        })
    }
}

export { adminController, adminLoginController }

