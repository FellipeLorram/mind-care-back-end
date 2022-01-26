import { Patient } from '@Entities/Patient';
import { IPatientRepository } from '@Repositories/IPatientRepository';
import { PatientModel } from '../../Schema/UserPatientsSchemma';

export class MongoPatientRepository implements IPatientRepository {
  async findById(userId: string, id: string): Promise<Patient> {
    const patient = await PatientModel.findOne({ id, user_link: userId });
    return patient;
  }

  async save(patient: Patient): Promise<Patient> {
    const newPatient = await PatientModel.create(patient);
    return newPatient;
  }
}
