import { Router, Request, Response } from 'express';

import { deletePatientController } from '@UseCases/PatientsUseCases/DeletePatient/Index';
import { editPatientController } from '@UseCases/PatientsUseCases/EditPatient/Index';
import { createPatientController } from '@UseCases/PatientsUseCases/CreatePatient/Index';
import { loginRequired } from '../Middlewares/LoginRequired';

const router = Router();

router.post('/new-patient', loginRequired, (req: Request, res: Response) => createPatientController.handle(req, res));
router.put('/edit-patient/:id', loginRequired, (req: Request, res: Response) => editPatientController.handle(req, res));
router.delete('/delete-patient/:id', loginRequired, (req: Request, res: Response) => deletePatientController.handle(req, res));
router.delete('/undo-delete-patient/:id', loginRequired, (req: Request, res: Response) => deletePatientController.handle(req, res));

export default router;
