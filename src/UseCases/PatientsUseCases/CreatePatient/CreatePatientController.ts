import { Request, Response } from 'express';
import { CreatePatientUseCase } from './CreatePatientUseCase';

export class CreatePatientController {
  constructor(
    private createPatientUseCase: CreatePatientUseCase,
    // eslint-disable-next-line no-empty-function
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const patient = await this.createPatientUseCase.execute(req.body, req.userId);

      return res.status(200).json({ patient });
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
