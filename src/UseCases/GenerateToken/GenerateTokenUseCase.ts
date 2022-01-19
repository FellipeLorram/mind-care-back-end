import { ITokenProvider } from "@Providers/ITokenProvider";
import { IUsersRepository } from "@Repositories/IUserRepository";
import { IGenerateTokenRequestDTO } from "./GenerateTokenDTO";

export class GenerateTokenUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private tokenProvider: ITokenProvider,

  ) { }
  async execute(data: IGenerateTokenRequestDTO): Promise<string> {
    const { email, password } = data

    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new Error('Non-existent user.');

    if (user.password !== password) throw new Error('Invalid credentials.')

    const { id } = user

    const token = this.tokenProvider.generate({ email, password, id })

    return token;
  }
};
