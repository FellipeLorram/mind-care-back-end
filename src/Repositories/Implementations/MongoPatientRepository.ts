import { Patient } from '@Entities/Patient';
import { IPatientRepository } from '@Repositories/IPatientRepository';
import { PatientModel, PatientModelTrash } from '../../Schema/UserPatientsSchemma';

interface PatientWithUndescoredId extends Patient {
  _doc: object;
}

export class MongoPatientRepository implements IPatientRepository {
  async findById(userId: string, id: string): Promise<Patient> {
    const patient = await PatientModel.findOne({ id, user_link: userId });
    return patient;
  }

  async save(patient: Patient): Promise<Patient> {
    const newPatient = await PatientModel.create(patient);
    return newPatient;
  }

  async edit(userId: string, patientId: string, patient: Patient): Promise<Patient> {
    const editedPatient = await PatientModel
      .findOneAndUpdate({ id: patientId, user_link: userId }, patient);

    return editedPatient;
  }

  async delete(userId: string, patientId): Promise<void> {
    await PatientModel.findOneAndDelete({ id: patientId, user_link: userId });
  }

  async move(patient: PatientWithUndescoredId): Promise<void> {
    // eslint-disable-next-line no-underscore-dangle
    await PatientModelTrash.create(patient._doc);
  }
}
