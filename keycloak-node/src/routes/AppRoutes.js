import express from 'express';
import * as appController from '../controllers/AppController.js'
import { validateTokenAndRole } from '../middleware/validationMiddleware.js'

const router = express.Router();

router.get('/get-data/:id', validateTokenAndRole('viewer'), appController.getDataById);
router.get('/get-data', validateTokenAndRole('viewer'), appController.getAllData);
router.post('/post-data', validateTokenAndRole('editor'), appController.postData);

export default router;