import { Router, Request, Response } from 'express';

import { createUserController } from '../UseCases/CreateUser/Index';

const router = Router();

router.post('/new-user', (req: Request, res: Response) => createUserController.handle(req, res));

export default router;
