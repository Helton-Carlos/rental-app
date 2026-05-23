import pool from '../database/connection.js';

interface User {
  id: string;
  email: string;
  password: string;
  created_at: Date;
}

interface CreateUserDTO {
  email: string;
  password: string;
}

class UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const result = await pool.query<User>(
      'SELECT * FROM users WHERE email = $1',
      [email],
    );
    return result.rows[0] || null;
  }

  async save(user: CreateUserDTO): Promise<User> {
    const result = await pool.query<User>(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email, created_at',
      [user.email, user.password],
    );
    return result.rows[0];
  }
}

export default UserRepository;
