import { User } from '@Entities/User';
import { IMailProvider } from '@Providers/IMailProvider';
import { IUsersRepository } from '@Repositories/IUserRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) { }

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExist = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExist) throw new Error('User already exists.');

    const user = new User(data);

    await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: { email: data.email, name: data.name },
      from: { email: 'mindcare@mindcareco.com', name: 'MindCare co.'},
      subject: 'Confirm your e-mail',
      body: '<h1>9839839</h1>'
    });
  }
}
