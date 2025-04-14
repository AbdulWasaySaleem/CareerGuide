 // Ensure the import path matches your file structure
import Career from '../models/careerModel.js'; 

export const createCareer = async (req, res) => {
  try {
    const { 
      title, 
      icon, 
      shortDescription, 
      longDescription, 
      prerequisites, 
      skillsToLearn, 
      potentialCareerPaths 
    } = req.body;

    const career = new Career({
      title,
      icon,
      shortDescription,
      longDescription,
      prerequisites, // New field
      skillsToLearn, // New field
      potentialCareerPaths // New field
    });

    const saved = await career.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getCareers = async (req, res) => {
  try {
    const careers = await Career.find().select('title icon shortDescription');
    res.status(200).json({ success: true, data: careers });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};



export const getOneCareers = async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);
    if (!career) {
      return res.status(404).json({ success: false, message: 'Career not found' });
    }
    res.status(200).json({ success: true, career });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}