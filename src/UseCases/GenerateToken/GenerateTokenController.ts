import { Request, Response } from 'express';

export class GenerateTokenController {
  constructor(
    private generateTokenUseCase,
  // eslint-disable-next-line no-empty-function
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const token = await this.generateTokenUseCase.execute({ email, password });

      return res.status(201).json({ token, email, password });
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
