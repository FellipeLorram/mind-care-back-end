import { MongoPatientRepository } from '@Repositories/Implementations/MongoPatientRepository';
import { DeletePatientController } from './DeletePatientController';
import { DeletePatientUseCase } from './DeletePatientUseCase';

const patientRepository = new MongoPatientRepository();
const deletePatientUseCase = new DeletePatientUseCase(patientRepository);
const deletePatientController = new DeletePatientController(deletePatientUseCase);

export { deletePatientController };
