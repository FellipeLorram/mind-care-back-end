import { createUserController } from '@UseCases/CreateUser/Index';
import { Router, Request, Response } from 'express';

const router = Router();

router.post('/new-user', (req: Request, res: Response) => {
  return createUserController.handle(req, res);
});

export default router;
