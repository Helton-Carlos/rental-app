import bcrypt from 'bcrypt';
import UserRepository from './UserRepository.js';

class AuthService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  async register(email: string, password: string) {
    const userExists = await this.repository.findByEmail(email);

    if (userExists) {
      throw new Error('E-mail já cadastrado.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.repository.save({
      email,
      password: hashedPassword,
    });

    return user;
  }

  async login(email: string, password: string) {
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new Error('E-mail ou senha incorretos.');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('E-mail ou senha incorretos.');
    }

    return user;
  }
}

export default AuthService;
