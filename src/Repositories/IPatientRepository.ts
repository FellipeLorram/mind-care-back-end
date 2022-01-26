import { Patient } from '@Entities/Patient';

export interface IPatientRepository {
  findById(userId: string, id: string): Promise<Patient>;
  save(patient: Patient): Promise<Patient>;
}
