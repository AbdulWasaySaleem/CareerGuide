// models/Career.js
import mongoose from 'mongoose';

const CareerSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  icon: { type: String, required: true },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  prerequisites: { type: [String], required: true }, // Array of strings for prerequisites
  skillsToLearn: { type: [String], required: true }, // Array of strings for skills to learn
  potentialCareerPaths: { type: [String], required: true }, // Array of strings for potential career paths
}, { timestamps: true });

const Career = mongoose.model('Career', CareerSchema);
export default Career;