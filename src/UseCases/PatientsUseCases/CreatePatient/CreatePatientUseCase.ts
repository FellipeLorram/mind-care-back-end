import { Patient } from '@Entities/Patient';
import { IPatientRepository } from '@Repositories/IPatientRepository';
import { IPatientRequestDTO } from '../PatientDTO/PatientDTO';
import { PatientValidations } from '../PatientValidations/PatientValidations';

class CreatePatientUseCase {
  constructor(
    private patientRepository: IPatientRepository,
    private patientValidations: PatientValidations,
    // eslint-disable-next-line no-empty-function
  ) { }

  async execute(data: IPatientRequestDTO, userId: string): Promise<Patient> {
    if (!userId) throw new Error('Missing user id.');

    const patient = new Patient(data, userId);

    this.patientValidations.execute(patient);

    await this.patientRepository.save(patient);

    return patient;
  }
}

export { CreatePatientUseCase };
