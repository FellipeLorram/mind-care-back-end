import { generateTokenController } from '@UseCases/GenerateToken/Index';
import { Router, Request, Response } from 'express';

const router = Router();

router.post('/auth', (req: Request, res: Response) => {
  return generateTokenController.handle(req, res);
});

export default router;
