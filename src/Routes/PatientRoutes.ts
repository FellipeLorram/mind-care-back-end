import { Router, Request, Response } from 'express';

import { createUserController } from '@UseCases/CreateUser/Index';
import { loginRequired } from 'src/Middlewares/LoginRequired';

const router = Router();

router.post('/new-patient', loginRequired, (req: Request, res: Response) => res.send('teste'));

export default router;
