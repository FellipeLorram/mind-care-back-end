import mongoose from 'mongoose';

const ActivitiesSchemma = new mongoose.Schema({
  title: { type: String, required: false, default: '' },
  content: { type: String, required: true },
  objective: { type: String, required: false, default: '' },
  participation: { type: String, required: false, default: '' },
  createdWhere: { type: String, required: false, default: '' },
  createdAt: { type: Date, default: Date.now },
  appointment_ref: { type: String, required: false, default: '' },
  id: { type: String, required: true },
  patient_link: { type: String, required: true },
});

const ActivitiesModel = mongoose.model('Activities', ActivitiesSchemma);
export { ActivitiesModel };
