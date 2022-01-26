import jwt from 'jsonwebtoken';
import { ICredentials, ITokenProvider } from '@Providers/ITokenProvider';

export class JWTTokenProvider implements ITokenProvider {
  async generate(credentials: ICredentials): Promise<string> {
    const token = jwt.sign({ credentials }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return token;
  }
}
