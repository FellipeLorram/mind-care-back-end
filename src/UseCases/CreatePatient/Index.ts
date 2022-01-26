import { MongoPatientRepository } from '../../Repositories/Implementations/MongoPatientRepository';
import { CreatePatientController } from './CreatePatientController';
import { CreatePatientUseCase } from './CreatePatientUseCase';

const patientRepository = new MongoPatientRepository();
const createPatientUseCase = new CreatePatientUseCase(patientRepository);

const createPatientController = new CreatePatientController(createPatientUseCase);

export { createPatientController };
