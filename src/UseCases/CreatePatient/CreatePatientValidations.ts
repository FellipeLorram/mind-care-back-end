import { Patient } from '@Entities/Patient';

class CreatePatientValidations {
  private readonly availableGenders: string[];

  constructor() {
    this.availableGenders = ['Male', 'male', 'Female', 'female', 'other', 'Other', 'Masculino', 'Feminino', 'masculino', 'feminino'];
  }

  execute(patient: Patient): void {
    if (!this.availableGenders.includes(patient.gender)) {
      throw new Error(`Inavlid gender. Property gender should be one of the following: ${this.availableGenders.map((gender) => ` ${gender}`)}`);
    }
    if (patient.gender !== '') { if (patient.CPF && patient.CPF.length !== 11) throw new Error(`CPF needs to have only 11 characters, but receive ${patient.CPF.length}.`); }
    if (patient.RG && patient.RG.length !== 8) throw new Error(`RG needs to have only 11 characters, but receive ${patient.RG.length}.`);
  }
}

export { CreatePatientValidations };
