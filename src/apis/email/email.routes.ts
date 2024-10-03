import express from 'express';
import { sendEmail } from './email.controller';

const emailRouter = express.Router();

emailRouter.post('/', sendEmail);

export default emailRouter;