import { User } from '../../Entities/User';
import { IUsersRepository } from '../IUserRepository';
import { UserModel } from '../../Schema/UserSchema';

export class MongoUsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const user = await UserModel.findOne({ email });

    return user;
  }

  async save(user: User): Promise<void> {
    await UserModel.create(user);
  }
}
