import { Patient } from '@Entities/Patient';
import { IPatientRepository } from '@Repositories/IPatientRepository';
import { IPatientRequestDTO } from '@UseCases/PatientsUseCases/PatientDTO/PatientDTO';
import { PatientValidations } from '../PatientValidations/PatientValidations';

class EditPatientUseCase {
  constructor(
    private patientRepository: IPatientRepository,
    private patientValidations: PatientValidations,
    // eslint-disable-next-line no-empty-function
  ) { }

  async execute(
    data: IPatientRequestDTO,
    userId: string,
    patientId: string,
  ): Promise<Patient> {
    const patient = new Patient(data, userId, patientId);

    this.patientValidations.execute(patient);

    const newPatient = await this.patientRepository.edit(userId, patientId, patient);

    return newPatient;
  }
}

export { EditPatientUseCase };
