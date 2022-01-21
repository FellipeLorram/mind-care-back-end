import { MailTrapMailProvider } from '../../Providers/Implementations/MailTrapMailProvider';
import { MongoUsersRepository } from '../../Repositories/Implementations/MongoUsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const mailTrapMailProvider = new MailTrapMailProvider();
const mongoUsersRepository = new MongoUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  mongoUsersRepository,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController }
