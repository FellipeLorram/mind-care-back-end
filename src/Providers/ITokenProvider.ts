export interface ICredentials {
  email: string;
  password: string;
  id: string;
}

export interface ITokenProvider {
  generate(credentials: ICredentials): Promise<string>;
}
