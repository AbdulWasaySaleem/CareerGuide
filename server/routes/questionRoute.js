import express from 'express';
import { addNewAssessmentQuestion, getAllQuestions } from '../controllers/questionController.js';
import { isAdmin } from '../middlewares/adminMiddleware.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/allQuestions', getAllQuestions)
router.post('/addNewQuestions', isAdmin ,addNewAssessmentQuestion);



export default router;