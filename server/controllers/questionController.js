import Question from '../models/questionsModel.js';

export const addNewAssessmentQuestion = async (req, res) => {
  const { questionText, options, category, difficulty, questionType } = req.body;

  try {
    // Validation for required fields
    if (!questionText || !options || !category || !difficulty || !questionType) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new question instance
    const newQuestion = new Question({
      questionText,
      options,
      category,
      difficulty,
      questionType,
    });

    // Save the new question to the database
    await newQuestion.save();

    // Respond with the created question
    res.status(201).json({ message: 'Question created successfully', question: newQuestion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding question', error: error.message });
  }
}



//  /api/questions?difficulty=easy
// /api/questions?difficulty=medium&limit=5
// http://localhost:5000/api/questions/allQuestions?difficulty=medium&limit=5&page=1

export const getAllQuestions = async (req, res) => {
  try {
    const { difficulty = 'easy', limit = 10, page = 1 } = req.query;

    const limitNumber = Math.min(Math.max(parseInt(limit), 1), 20);
    const pageNumber = Math.max(parseInt(page), 1);
    const skip = (pageNumber - 1) * limitNumber;

    // Get total count first
    const totalCount = await Question.countDocuments({ difficulty });

    // Aggregate with $match + $sample + $skip + $limit
    const questions = await Question.aggregate([
      { $match: { difficulty } },
      { $sample: { size: totalCount } }, // shuffle randomly
      { $skip: skip },
      { $limit: limitNumber },
    ]);

    const hasMore = skip + questions.length < totalCount;

    res.status(200).json({
      data: questions,
      currentPage: pageNumber,
      perPage: limitNumber,
      total: totalCount,
      hasMore,
      message: `Random ${difficulty} questions page ${pageNumber}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error fetching questions',
      error: error.message,
    });
  }
};
