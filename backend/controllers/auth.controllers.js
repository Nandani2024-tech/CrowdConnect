import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import dotenv from 'dotenv';
dotenv.config();

import User from "../models/user.model.js";
import Attendee from "../models/attendee.model.js";
import Organiser from "../models/organiser.model.js";
import Speaker from "../models/speaker.model.js";


const JWT_SECRET = process.env.JWT_SECRET


// Registration function

export const register = async (req, res) =>{
    try{
        const {
            username ,
            email,
            password,
            bio, 
            role, 
            attendeeDetails, 
            organiserDetails, 
            speakerDetails,
        } =  req.body;

        const existingUser = await user.findOne({ $or: [{email}, {username}] });

        if (existingUser){
            return  res.status(400).json({error: "User already exists"});
        }

        //Hash password:
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = new User({
        username,
        email,
        password: hashedPassword,
        bio,
        role,
        });
        const savedUser = await user.save();

    // Create role-specific doc
    if (role === "attendee" && attendeeDetails) {
      const attendee = new Attendee({
        userId: savedUser._id,
        ...attendeeDetails,
      });
      await attendee.save();
    } else if (role === "organiser" && organiserDetails) {
      const organiser = new Organiser({
        userId: savedUser._id,
        ...organiserDetails,
      });
      await organiser.save();
    } else if (role === "speaker" && speakerDetails) {
      const speaker = new Speaker({
        userId: savedUser._id,
        ...speakerDetails,
      });
      await speaker.save();
    } else {
      return res.status(400).json({ error: "Role specific details are required" });
    }

    return res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};



// Login handler
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // Create JWT payload and sign token
    const payload = { userId: user._id, role: user.role };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });

    return res.status(200).json({
      message: "Login successful",
      token,
      role: user.role,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


