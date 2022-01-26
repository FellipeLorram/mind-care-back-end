import { uuid } from 'uuidv4';

class Patient {
  public readonly id: string;

  public name: string;

  public address?: string;

  public birth_date?: Date;

  public gender?: string;

  public nationality?: string;

  public civil_status?: string;

  public CPF?: string;

  public RG?: string;

  public education?: string;

  public religion?: string;

  public occupation?: string;

  public observation?: string;

  public appointment_time?: string;

  public user_link: string;

  constructor(props: Omit<Patient, 'id' | 'user_link'>, userId: string, id?: string) {
    Object.assign(this, props);
    this.user_link = userId;
    if (!id) {
      this.id = uuid();
    }
  }
}

export { Patient };
