const { v4: uuid4 } = require('uuid');

class User {
  constructor(id, name, email) {
    this.id = uuid4()
    this.name = name
    this.email = email
  }
}

module.exports = User;