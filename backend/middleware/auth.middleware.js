
import User from '../models/user.model.js';
import Attendee from '../models/attendee.model.js';
import Organiser from '../models/organiser.model.js';
import Speaker from '../models/speaker.model.js';
import jwt from 'jsonwebtoken';

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'your-secret-key', {
    expiresIn: '30d'
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res) => {
  try {
    const { username, email, password, bio, role } = req.body;

    // Validate required fields
    if (!username || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: username, email, password, and role'
      });
    }

    // Validate role
    const validRoles = ['attendee', 'organiser', 'speaker'];
    if (!validRoles.includes(role.toLowerCase())) {
      return res.status(400).json({
        success: false,
        message: 'Invalid role. Must be attendee, organiser, or speaker'
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: existingUser.email === email 
          ? 'Email already registered' 
          : 'Username already taken'
      });
    }

    // Create base user
    const user = await User.create({
      username,
      email,
      password,
      bio: bio || '',
      role: role.toLowerCase()
    });

    // Create role-specific profile
    let roleProfile;

    switch (role.toLowerCase()) {
      case 'attendee':
        const { attendeeDetails } = req.body;
        
        roleProfile = await Attendee.create({
          userId: user._id,
          isStudent: attendeeDetails?.isStudent || false,
          occupation: attendeeDetails?.occupation || '',
          company: attendeeDetails?.company || '',
          interests: attendeeDetails?.interests || []
        });
        break;

      case 'organiser':
        const { organiserDetails } = req.body;
        
        if (!organiserDetails?.organizationName || !organiserDetails?.contactNumber) {
          await User.findByIdAndDelete(user._id);
          return res.status(400).json({
            success: false,
            message: 'Organization name and contact number are required for organisers'
          });
        }

        roleProfile = await Organiser.create({
          userId: user._id,
          organizationName: organiserDetails.organizationName,
          contactNumber: organiserDetails.contactNumber,
          website: organiserDetails?.website || '',
          verified: organiserDetails?.verified || false
        });
        break;

      case 'speaker':
        const { speakerDetails } = req.body;
        
        if (!speakerDetails?.topics || speakerDetails.topics.length === 0) {
          await User.findByIdAndDelete(user._id);
          return res.status(400).json({
            success: false,
            message: 'At least one topic is required for speakers'
          });
        }

        roleProfile = await Speaker.create({
          userId: user._id,
          topics: speakerDetails.topics,
          bio: speakerDetails?.bio || bio || '',
          socialLinks: {
            linkedin: speakerDetails?.socialLinks?.linkedin || '',
            twitter: speakerDetails?.socialLinks?.twitter || '',
            website: speakerDetails?.socialLinks?.website || ''
          }
        });
        break;

      default:
        await User.findByIdAndDelete(user._id);
        return res.status(400).json({
          success: false,
          message: 'Invalid role specified'
        });
    }

    // Generate token
    const token = generateToken(user._id);

    // Prepare response
    const response = {
      success: true,
      message: 'Registration successful',
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          bio: user.bio,
          role: user.role,
          createdAt: user.createdAt
        },
        roleProfile,
        token
      }
    };

    res.status(201).json(response);

  } catch (error) {
    console.error('Registration error:', error);

    // Handle mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({
        success: false,
        message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error during registration',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    // Find user and include password
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check password
    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Get role-specific profile
    let roleProfile;
    switch (user.role) {
      case 'attendee':
        roleProfile = await Attendee.findOne({ userId: user._id });
        break;
      case 'organiser':
        roleProfile = await Organiser.findOne({ userId: user._id });
        break;
      case 'speaker':
        roleProfile = await Speaker.findOne({ userId: user._id });
        break;
    }

    // Generate token
    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          bio: user.bio,
          role: user.role,
          profileImage: user.profileImage
        },
        roleProfile,
        token
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Get role-specific profile
    let roleProfile;
    switch (user.role) {
      case 'attendee':
        roleProfile = await Attendee.findOne({ userId: user._id });
        break;
      case 'organiser':
        roleProfile = await Organiser.findOne({ userId: user._id });
        break;
      case 'speaker':
        roleProfile = await Speaker.findOne({ userId: user._id });
        break;
    }

    res.status(200).json({
      success: true,
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          bio: user.bio,
          role: user.role,
          profileImage: user.profileImage,
          createdAt: user.createdAt
        },
        roleProfile
      }
    });

  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching profile',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};


export const protect = async (req, res, next) => {
  try {
    let token;

    // Check if Authorization header is provided
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized, no token provided'
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

    // Find user by ID from token payload
    req.user = await User.findById(decoded.id).select('-password');

    if (!req.user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    next(); // Pass control to next middleware or route handler
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(401).json({
      success: false,
      message: 'Not authorized, token failed or invalid'
    });
  }
};