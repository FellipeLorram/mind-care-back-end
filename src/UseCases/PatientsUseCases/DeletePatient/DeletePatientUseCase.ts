import { Patient } from '@Entities/Patient';
import { IPatientRepository } from '@Repositories/IPatientRepository';

export class DeletePatientUseCase {
  constructor(
    private patientRepository: IPatientRepository,
    // eslint-disable-next-line no-empty-function
  ) { }

  async execute(userId: string, patientId: string): Promise<void> {
    const patient = await this.patientRepository.findById(userId, patientId);

    if (!patient) throw new Error('Patient not find. Please consider changing the submitted id.');

    const trashedPatient = new Patient(patient, userId);
    // console.log(trashedPatient);

    await this.patientRepository.move(trashedPatient);
    await this.patientRepository.delete(userId, patientId);
  }
}
