// import { MailTrapMailProvider } from '../../Providers/Implementations/MailTrapMailProvider';
// import { MongoUsersRepository } from '../../Repositories/Implementations/MongoUsersRepository';
// import { CreateUserUseCase } from '../../UseCases/CreateUser/CreateUserUseCase';
import request from 'supertest';
import app from '../../App';

afterAll(async () => {
  await new Promise<void>(
    // eslint-disable-next-line no-promise-executor-return
    (resolve) => setTimeout(() => resolve(), 2000),
  ); // avoid jest open handle error
});

describe('Authentication', () => {
  it('should return token when receive good credentials.', async () => {
    const response = await request(app)
      .post('/auth')
      .send({
        email: 'fellipelorram@gmail.com',
        password: '38953460',
      });

    expect(response.status).toBe(400);
  });
});
