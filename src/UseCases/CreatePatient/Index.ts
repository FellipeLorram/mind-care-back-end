import { MongoPatientRepository } from '../../Repositories/Implementations/MongoPatientRepository';
import { CreatePatientController } from './CreatePatientController';
import { CreatePatientUseCase } from './CreatePatientUseCase';
import { CreatePatientValidations } from './CreatePatientValidations';

const patientValidations = new CreatePatientValidations();
const patientRepository = new MongoPatientRepository();
const createPatientUseCase = new CreatePatientUseCase(patientRepository, patientValidations);

const createPatientController = new CreatePatientController(createPatientUseCase);

export { createPatientController };
