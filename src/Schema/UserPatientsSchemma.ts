import mongoose from 'mongoose';

const PatientSchemma = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: false, default: '' },
  birth_date: { type: Date, required: false },
  gender: { type: String, required: true },
  nationality: { type: String, required: false, default: '' },
  civil_status: { type: String, required: false, default: '' },
  CPF: { type: String, required: false, default: '' },
  RG: { type: String, required: false, default: '' },
  education: { type: String, required: false, default: '' },
  religion: { type: String, required: false, default: '' },
  occupation: { type: String, required: false, default: '' },
  address: { type: String, required: false, default: '' },
  observation: { type: String, required: false, default: '' },
  appointment_time: { type: String, required: false, default: '' },
  id: { type: String, required: true },
  user_link: { type: String, required: true },
});

const PatientModelTrash = mongoose.model('PatientsTrash', PatientSchemma);
const PatientModel = mongoose.model('Patients', PatientSchemma);
export { PatientModel, PatientModelTrash };
