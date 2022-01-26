import { uuid } from 'uuidv4';

class Patient {
  public readonly id: string;

  public name: string;

  public email: string;

  public address: string;

  public birth_date: Date;

  public gender: string;

  public nationality: string;

  public civil_status: string;

  public CPF: string;

  public RG: string;

  public education: string;

  public religion: string;

  public occupation: string;

  public observation: string;

  public appointment_time: string;

  constructor(props: Omit<Patient, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}

export { Patient };
