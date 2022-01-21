import validator from 'validator';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserValidations {
  execute(data: ICreateUserRequestDTO): void {
    const { email, name, password } = data;

    if (!validator.isEmail(email)) throw new Error('Invalid email.');

    if (password.length < 8 || password.length > 55) throw new Error('Invalid password. Password have to be at least 8 characters and less than 55 characters');

    if (name.length < 8 || name.length > 55) throw new Error('Invalid name. name have to be at least 8 characters and less than 55 characters');

  }
}
