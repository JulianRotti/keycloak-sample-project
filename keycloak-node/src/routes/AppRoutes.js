import express from 'express';
import * as appController from '../controllers/AppController.js'
import { protectWithRole } from '../middleware/authMiddleware.js'

const router = express.Router();

router.get('/get-data/:id', protectWithRole('viewer'), appController.getDataById);
router.get('/get-data', protectWithRole('viewer'),appController.getAllData);
router.post('/post-data', protectWithRole('editor'),appController.postData);

export default router;