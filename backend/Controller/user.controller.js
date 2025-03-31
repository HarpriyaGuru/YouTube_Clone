import User from "../Model/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';

const cookieOption = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',  // Ensure cookies are secure in production
    sameSite: 'lax',
};

export const Signup = async (req, res) => {
    try {
        const { channelName, userName, email, passWord, About, profilePic } = req.body;

        // Check if the required fields are missing
        if (!passWord || !channelName || !userName || !email) {
            return res.status(400).json({ error: "Please provide all required fields (channelName, userName, email, passWord)." });
        }

        // Check if userName already exists
        const isExist = await User.findOne({ userName });
        if (isExist) {
            return res.status(400).json({ error: "Username already exists, please try another." });
        }

        // Password validation (ensure it's not empty or too short)
        if (passWord.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long." });
        }

        // Hash the password
        const hashedPassword = await bcryptjs.hash(passWord, 10);

        // Create new user
        const user = new User({
            channelName,
            userName,
            email,
            passWord: hashedPassword,
            About,
            profilePic
        });

        // Save user to database
        await user.save();

        return res.status(201).json({
            message: "User registered successfully",
            success: true,
            data: user
        });

    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


export const Signin = async (req, res) => {
    try {
        const { userName, passWord } = req.body;

        // Find user by userName
        const user = await User.findOne({ userName });
        if (!user) {
            return res.status(400).json({ error: 'Invalid Credentials' });
        }

        // Compare password with stored hashed password
        const isPasswordValid = await bcryptjs.compare(passWord, user.passWord);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid Credentials' });
        }

        // Create a JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        // Set token in cookie
        res.cookie('token', token, cookieOption);

        return res.json({ message: 'Logged in successfully', success: true });
    } catch (error) {
        console.error("Signin Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const LogOut = async (req, res) => {
    try {
        // Clear the token cookie
        res.clearCookie('token', cookieOption);
        return res.json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error("Logout Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
