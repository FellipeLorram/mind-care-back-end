import { JWTTokenProvider } from '../../Providers/Implementations/JWTTokenProvider';
import { MongoUsersRepository } from "../../Repositories/Implementations/MongoUsersRepository";
import { GenerateTokenController } from "./GenerateTokenController";
import { GenerateTokenUseCase } from "./GenerateTokenUseCase";

const mongoUsersRepository = new MongoUsersRepository();
const tokenProvider = new JWTTokenProvider();

const generateToken = new GenerateTokenUseCase(
  mongoUsersRepository,
  tokenProvider
);

const generateTokenController = new GenerateTokenController(generateToken);

export { generateTokenController }
