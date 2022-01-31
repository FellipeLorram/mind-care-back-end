import { IPatientRepository } from '@Repositories/IPatientRepository';

class UndeletePatientUseCase {
  constructor(
    private patientRepository: IPatientRepository,
  // eslint-disable-next-line no-empty-function
  ) {}

  async execute(userId: string, patientId: string): Promise<void> {
    await this.patientRepository.
  }
}
