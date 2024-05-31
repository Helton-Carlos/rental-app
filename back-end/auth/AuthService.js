const User = require('./User')

class AuthService {
  constructor(repository) {
    this.repository = repository
  }

  register(name, email, password) {
    const userExits = this.repository.findBy
  }

  save() {
    this.users.push(user);
  }
}

module.exports = AuthService;