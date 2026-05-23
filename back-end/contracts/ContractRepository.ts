import pool from '../database/connection.js';

export interface Contract {
  id: string;
  user_id: string;
  title: string;
  category: string;
  status: string;
  data: Record<string, unknown>;
  created_at: Date;
  updated_at: Date;
}

interface CreateContractDTO {
  user_id: string;
  title: string;
  category: string;
  data: Record<string, unknown>;
}

interface UpdateContractDTO {
  title?: string;
  status?: string;
  data?: Record<string, unknown>;
}

class ContractRepository {
  async findByUserId(userId: string): Promise<Contract[]> {
    const result = await pool.query<Contract>(
      'SELECT * FROM contracts WHERE user_id = $1 ORDER BY created_at DESC',
      [userId],
    );
    return result.rows;
  }

  async findById(id: string): Promise<Contract | null> {
    const result = await pool.query<Contract>(
      'SELECT * FROM contracts WHERE id = $1',
      [id],
    );
    return result.rows[0] || null;
  }

  async findByStatus(userId: string, status: string): Promise<Contract[]> {
    const result = await pool.query<Contract>(
      'SELECT * FROM contracts WHERE user_id = $1 AND status = $2 ORDER BY created_at DESC',
      [userId, status],
    );
    return result.rows;
  }

  async save(contract: CreateContractDTO): Promise<Contract> {
    const result = await pool.query<Contract>(
      `INSERT INTO contracts (user_id, title, category, data) 
       VALUES ($1, $2, $3, $4) 
       RETURNING *`,
      [
        contract.user_id,
        contract.title,
        contract.category,
        JSON.stringify(contract.data),
      ],
    );
    return result.rows[0];
  }

  async update(id: string, data: UpdateContractDTO): Promise<Contract> {
    const fields: string[] = [];
    const values: unknown[] = [];
    let index = 1;

    if (data.title) {
      fields.push(`title = $${index++}`);
      values.push(data.title);
    }
    if (data.status) {
      fields.push(`status = $${index++}`);
      values.push(data.status);
    }
    if (data.data) {
      fields.push(`data = $${index++}`);
      values.push(JSON.stringify(data.data));
    }

    fields.push(`updated_at = NOW()`);
    values.push(id);

    const result = await pool.query<Contract>(
      `UPDATE contracts SET ${fields.join(', ')} WHERE id = $${index} RETURNING *`,
      values,
    );
    return result.rows[0];
  }

  async delete(id: string): Promise<void> {
    await pool.query('DELETE FROM contracts WHERE id = $1', [id]);
  }

  async countByUser(
    userId: string,
  ): Promise<{ total: number; active: number; pending: number }> {
    const result = await pool.query(
      `SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE status = 'active') as active,
        COUNT(*) FILTER (WHERE status = 'pending') as pending
       FROM contracts WHERE user_id = $1`,
      [userId],
    );
    return {
      total: parseInt(result.rows[0].total),
      active: parseInt(result.rows[0].active),
      pending: parseInt(result.rows[0].pending),
    };
  }
}

export default ContractRepository;
