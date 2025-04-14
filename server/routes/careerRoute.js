// routes/careerRoutes.js
import express from 'express';
import { createCareer, getCareers, getOneCareers } from '../controllers/careerController.js';
import { isAdmin } from '../middlewares/adminMiddleware.js';

const router = express.Router();

router.post('/createCareer',isAdmin,createCareer);   // POST /api/careers
router.get('/getAllCareer', getCareers);      // GET  /api/careers
router.get("/getCareer/:id", getOneCareers); // GET  /api/careers/:id

export default router;
