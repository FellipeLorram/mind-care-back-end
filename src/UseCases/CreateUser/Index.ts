import { MailTrapMailProvider } from '../../Providers/Implementations/MailTrapMailProvider';
import { MongoUsersRepository } from '../../Repositories/Implementations/MongoUsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserValidations } from './CreateUserValidations';

const mailTrapMailProvider = new MailTrapMailProvider();
const mongoUsersRepository = new MongoUsersRepository();
const userValidations = new CreateUserValidations();

const createUserUseCase = new CreateUserUseCase(
  mongoUsersRepository,
  mailTrapMailProvider,
  userValidations,
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
