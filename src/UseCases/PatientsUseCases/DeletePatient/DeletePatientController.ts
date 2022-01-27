import { Request, Response } from 'express';
import { DeletePatientUseCase } from './DeletePatientUseCase';

export class DeletePatientController {
  constructor(
    private deletePatientUseCase: DeletePatientUseCase,
    // eslint-disable-next-line no-empty-function
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      await this.deletePatientUseCase.execute(req.userId, req.params.id);

      return res.status(200).json({
        message: 'Patient was successfully deleted.',
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
