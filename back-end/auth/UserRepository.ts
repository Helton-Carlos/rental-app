import pool from '../database/connection.js';

interface User {
  id: string;
  email: string;
  password: string;
  role: string;
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

  async findById(id: string): Promise<User | null> {
    const result = await pool.query<User>(
      'SELECT id, email, role, created_at FROM users WHERE id = $1',
      [id],
    );
    return result.rows[0] || null;
  }

  async save(user: CreateUserDTO): Promise<User> {
    const result = await pool.query<User>(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email, role, created_at',
      [user.email, user.password],
    );
    return result.rows[0];
  }

  async updateRole(userId: string, role: string): Promise<User> {
    const result = await pool.query<User>(
      'UPDATE users SET role = $1, updated_at = NOW() WHERE id = $2 RETURNING id, email, role',
      [role, userId],
    );
    return result.rows[0];
  }

  async findAll(): Promise<User[]> {
    const result = await pool.query<User>(
      'SELECT id, email, role, created_at FROM users ORDER BY created_at DESC',
    );
    return result.rows;
  }
}

export default UserRepository;
