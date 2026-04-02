import User from "../models/User.js";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "7d"}
    );
};

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already registered"});
        }

        const user = await User.create({
            name,
            email,
            password,
            role,
        });
        const { password: pwd, ...userData } = user._doc;

        res.status(201).json({
            message: "User registered",
            token: generateToken(user),
            user: userData,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");

        if (!user || !(await user.comparePassword(password))){
            return res.status(401).json({ message: "Invalid credentials"});
        }
        
        const { password: pwd, ...userData } = user._doc;

        res.json({
            message: "Login successful",
            token: generateToken(user),
            user: userData,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}