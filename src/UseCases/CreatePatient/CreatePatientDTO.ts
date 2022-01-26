export interface ICreatePatientRequestDTO {
  name: string;
  adress?: string;
  birth_date?: Date;
  gender?: string;
  nationality?: string;
  civil_status?: string;
  CPF?: string;
  RG?: string;
  education?: string;
  religion?: string;
  occupation?: string;
  observation?: string;
  appointment_time?: string;
  user_link?: string;
}
