import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the Answer Schema (each answer option with points)
const answerSchema = new Schema(
  {
    text: {
      type: String,
      required: true, // The text of the answer choice
    },
    field: {
      type: String,
      enum: [
        'Frontend', 
        'Backend', 
        'AI/ML', 
        'Design', 
        'Data Science', 
        'DevOps', 
        'Mobile Development',
        'Cloud Computing', 
        'Cybersecurity',     
        'Blockchain',     
        'Software Testing', 
        'Game Development',
        "Software Testing",
      ], // Fields this answer maps to
      required: true, // Field associated with this answer
    },
    points: {
      type: Number,
      required: true, // Points for this answer
    },
  },
  { _id: false }
);

// Define the Question Schema
const questionSchema = new Schema(
  {
    questionText: {
      type: String,
      required: true,
      trim: true,
    },
    options: [answerSchema],
    category: {
      type: String,
      enum: [
        'General', 
        'Frontend', 
        'Backend', 
        'AI/ML', 
        'Design', 
        'Data Science', 
        'DevOps', 
        'Mobile Development', 
        'Cloud Computing', 
        'Cybersecurity', 
        'Blockchain', 
        'Software Testing', 
        'Game Development',
      ], // Categories for the question
      required: true,
    },
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      required: true,
    },
    questionType: {
      type: String,
      enum: ['multipleChoice'],
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the Question Model
const Question = mongoose.model('Question', questionSchema);

export default Question;
