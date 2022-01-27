import { MongoPatientRepository } from '@Repositories/Implementations/MongoPatientRepository';
import { PatientValidations } from '../PatientValidations/PatientValidations';
import { EditPatientController } from './EditPatientController';
import { EditPatientUseCase } from './EditPatientUseCase';

const patientValidations = new PatientValidations();
const patientRepository = new MongoPatientRepository();
const editPatientUseCase = new EditPatientUseCase(patientRepository, patientValidations);
const editPatientController = new EditPatientController(editPatientUseCase);

export { editPatientController };
