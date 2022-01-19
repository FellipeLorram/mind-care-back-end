import mongoose from 'mongoose';
import { PatientSchemma } from './UserPatientsSchemma';

const UserSchemma = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  patients: [PatientSchemma],
  id: { type: String, required: true}
});

const UserModel = mongoose.model('User', UserSchemma);
export { UserModel }
