import { Router, Request, Response } from 'express';

import { createPatientController } from '@UseCases/CreatePatient/Index';
import { loginRequired } from '../Middlewares/LoginRequired';

const router = Router();

router.post('/new-patient', loginRequired, (req: Request, res: Response) => createPatientController.handle(req, res));

export default router;
