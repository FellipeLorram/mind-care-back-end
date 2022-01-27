import { Request, Response } from 'express';
import { EditPatientUseCase } from './EditPatientUseCase';

class EditPatientController {
  constructor(
    private editPatientUseCase: EditPatientUseCase,
    // eslint-disable-next-line no-empty-function
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const patient = await this.editPatientUseCase.execute(req.body, req.userId, req.params.id);

      return res.status(200).json(patient);
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

export { EditPatientController };
