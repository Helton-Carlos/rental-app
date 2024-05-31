class UserRepository {
  constructor() {
    this.users = []
  }

  findByEmail(email) {
    this.users.find((user) => {
      email === user.email
    });
  }

  save() {
    this.users.push(user);
  }
}

module.exports = UserRepository;