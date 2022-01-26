import { Patient } from '@Entities/Patient';
import { IPatientRepository } from '@Repositories/IPatientRepository';
import { ICreatePatientRequestDTO } from './CreatePatientDTO';
import { CreatePatientValidations } from './CreatePatientValidations';

class CreatePatientUseCase {
  constructor(
    private patientRepository: IPatientRepository,
    private patientValidations: CreatePatientValidations,
    // eslint-disable-next-line no-empty-function
  ) { }

  async execute(data: ICreatePatientRequestDTO, userId: string): Promise<Patient> {
    if (!userId) throw new Error('Missing user id.');

    const patient = new Patient(data, userId);

    this.patientValidations.execute(patient);

    await this.patientRepository.save(patient);

    return patient;
  }
}

export { CreatePatientUseCase };
