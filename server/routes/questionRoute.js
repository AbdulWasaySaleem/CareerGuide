import express from 'express';
import { addNewAssessmentQuestion, getAllQuestions } from '../controllers/questionController.js';

const router = express.Router();

router.get('/allQuestions', getAllQuestions)
router.post('/questions', addNewAssessmentQuestion);



export default router;