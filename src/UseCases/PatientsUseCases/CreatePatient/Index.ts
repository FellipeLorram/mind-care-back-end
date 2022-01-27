import { MongoPatientRepository } from '../../../Repositories/Implementations/MongoPatientRepository';
import { CreatePatientController } from './CreatePatientController';
import { CreatePatientUseCase } from './CreatePatientUseCase';
import { PatientValidations } from '../PatientValidations/PatientValidations';

const patientValidations = new PatientValidations();
const patientRepository = new MongoPatientRepository();
const createPatientUseCase = new CreatePatientUseCase(patientRepository, patientValidations);

const createPatientController = new CreatePatientController(createPatientUseCase);

export { createPatientController };
