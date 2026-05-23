const pool = require('../database/connection');

class UserRepository {
  async findByEmail(email) {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    return result.rows[0] || null;
  }

  async save(user) {
    const result = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email, created_at',
      [user.email, user.password],
    );
    return result.rows[0];
  }
}

module.exports = UserRepository;
