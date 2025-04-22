
import ResultModel from "../models/quizeResultModel.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, email, password });
    res.status(201).json({
      message: "Signup successful",
      token: generateToken(user._id),
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating user", error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      token: generateToken(user._id),
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

export const saveQuizResult = async (req, res) => {
  const { questionIds, fieldPoints, recommendedField } = req.body;
  console.log(req.user._id)

  // Ensure user is logged in
  if (!req.user || !req.user._id) {
    res.status(401);
    throw new Error("You must be logged in to save your quiz result.");
  }

  // Validate basic structure
  if (
    !Array.isArray(questionIds) ||
    typeof fieldPoints !== "object" ||
    typeof recommendedField !== "string"
  ) {
    res.status(400);
    throw new Error("Invalid or incomplete data submitted.");
  }

  const result = await ResultModel.create({
    userId: req.user._id,
    questionIds,
    fieldPoints,
    recommendedField,
  });

  res.status(201).json({
    success: true,
    data: result,
    message: "Quiz result saved successfully.",
  });
}

export const getQuizResult = async (req, res) => {
  try {
    const userId = req.user._id; // Get the user ID from the request
    const results = await ResultModel.find({ userId }).populate("questionIds");

    if (!results || results.length === 0) {
      return res.status(404).json({ message: "No quiz results found." });
    }

    res.status(200).json({
      success: true,
      data: results,
      message: "Quiz results retrieved successfully.",
    });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving quiz results", error: err.message });
  }
}