import express from 'express';
import { submitcontactform } from '../controller/contact.controller.js';

const router = express.Router();
router.post('/contact', submitcontactform);
export default router;