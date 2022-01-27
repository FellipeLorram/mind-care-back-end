import { Patient } from '@Entities/Patient';

export interface IPatientRepository {
  findById(userId: string, id: string): Promise<Patient>;
  save(patient: Patient): Promise<Patient>;
  edit(userId: string, patientId: string, patient: Patient): Promise<Patient>;
  delete(userId: string, patientId: string): Promise<void>;
  move(patient: Patient): Promise<void>;
}
