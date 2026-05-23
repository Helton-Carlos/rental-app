const bcrypt = require('bcrypt');
const UserRepository = require('./UserRepository');

class AuthService {
  constructor() {
    this.repository = new UserRepository();
  }

  async register(email, password) {
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
}

module.exports = AuthService;
