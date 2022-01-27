import { IPatientRepository } from '@Repositories/IPatientRepository';

export class DeletePatientUseCase {
  constructor(
    private patientRepository: IPatientRepository,
    // eslint-disable-next-line no-empty-function
  ) { }

  async execute(userId: string, patientId: string): Promise<void> {
    const patient = await this.patientRepository.findById(userId, patientId);

    if (!patient) throw new Error('Patient not find. Please consider changing the submitted id.');

    await this.patientRepository.move(patient);
    await this.patientRepository.delete(userId, patientId);
  }
}
