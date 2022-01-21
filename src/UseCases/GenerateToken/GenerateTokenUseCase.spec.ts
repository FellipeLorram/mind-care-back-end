// import { MailTrapMailProvider } from '../../Providers/Implementations/MailTrapMailProvider';
// import { MongoUsersRepository } from '../../Repositories/Implementations/MongoUsersRepository';
// import { CreateUserUseCase } from '../../UseCases/CreateUser/CreateUserUseCase';
import request from 'supertest';
import app from '../../App';

describe('CreateUserUseCase', () => {
  it('should return bad request when user already exists', async () => {

    // const mailTrapMailProvider = new MailTrapMailProvider();
    // const mongoUsersRepository = new MongoUsersRepository();

    // const createUserUseCase = new CreateUserUseCase(
    //   mongoUsersRepository,
    //   mailTrapMailProvider
    // );

    const response = await request(app)
    .post('/auth')
    .send({
      email: 'fellipelorram@gmail.com',
      password: '38953460',
    });

    expect(response.status).toBe(400);

  })
})
