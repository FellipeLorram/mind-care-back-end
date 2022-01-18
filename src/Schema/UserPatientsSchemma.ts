import mongoose from "mongoose";

const PatientSchemma = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  birthDate: { type: Date, required: false },
  gender: { type: String, required: true },
  nationality: { type: String, required: false },
  civil_status: { type: String, required: false },
  CPF: { type: String, required: false },
  RG: { type: String, required: false },
})

export { PatientSchemma }
