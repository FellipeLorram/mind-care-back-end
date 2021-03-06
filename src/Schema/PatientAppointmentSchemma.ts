import mongoose from 'mongoose';

const AppointmentSchemma = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  appointment_duration: { type: String, required: false, default: '' },
  id: { type: String, required: true },
  patient_link: { type: String, required: true },
});

const AppoitmentsModel = mongoose.model('Appoitments', AppointmentSchemma);
export { AppoitmentsModel };
