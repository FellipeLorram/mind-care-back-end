import { Router, Request, Response } from 'express';

import { generateTokenController } from '../UseCases/GenerateToken/Index';

const router = Router();

router.post('/auth', (req: Request, res: Response) => generateTokenController.handle(req, res));

export default router;
